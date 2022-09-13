const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const { response } = require("express");
const jwt = require("jsonwebtoken");

//REGISTER

router.post("/register", async (req, res) => {
	const newUser = new User({
		username: req.body.username,
		email: req.body.username,
		password: CryptoJS.AES.encrypt(
			req.body.password,
			process.env.PASS_SEC
		).toString(),
	});

	//se guarda en DB

	try {
		const savedUser = await newUser.save();
		res.status(201).json(savedUser);
	} catch (err) {
		res.status(500).json(err);
	}
});

//LOGIN

router.post("/login", async (req, res) => {
	try {
		const user = await User.findOne({ username: req.body.username });
		!user && res.status(401).json("Wrong Credentials");

		const hashPassword = CryptoJS.AES.decrypt(
			user.password,
			process.env.PASS_SEC
		);

		const originalPassword = hashPassword.toString(CryptoJS.enc.Utf8);

		const accessToken = jwt.sign(
			{
				id: user._id,
				isAdmin: user.isAdmin,
			},
			process.env.JWT_KEY,
			{ expiresIn: "3d" }
		);

		originalPassword !== req.body.password &&
			response.status(401).json("Wrong Credentials");
		// ._doc se añade por que db guarda los docs en esa folder
		const { password, ...others } = user._doc;

		res.status(200).json({...others, accessToken});
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
