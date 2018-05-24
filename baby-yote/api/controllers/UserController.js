/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
	login: async (req, res) => {
		const user = await User.findOne({
			email: req.body.email,
			password: req.body.password
		});

		if (!user)
			return res.notFound();

		const token = jwt.sign({
			user: user.id,
			email: user.email
		}, sails.jwt.jwtSecret, {
			expiresIn: sails.jwt.jwtExpiresIn
		});

		return res.ok(token);
	},

	register: async (req, res) => {
		if (_.isUndefined(req.body.sex)) {
			return res.badRequest('Veuillez assumez votre genre');
		}

		if (_.isUndefined(req.body.name)) {
			return res.badRequest('Il est où ton nom ?');
		}

		if (_.isUndefined(req.body.firstname)) {
			return res.badRequest('Il est où ton prénom ?');
		}

		if (_.isUndefined(req.body.email)) {
			return res.badRequest('Il est où ton email ?');
		}

		if (_.isUndefined(req.body.password) && req.body.password.length < 10) {
			return res.badRequest('Il est où ton password ?');
		}

		const user = await User.create({
			email: req.body.email,
			password: req.body.password,
			name: req.body.name,
			firstname: req.body.firstname,
			sex: req.body.sex,
		}).fetch();

		const token = jwt.sign({
			user: user.id,
			email: user.email
		}, sails.jwt.jwtSecret, {
			expiresIn: sails.jwt.jwtExpiresIn
		});

		return res.ok(token);
	},
};

