const bcrypt = require('bcrypt-nodejs');

module.exports = {
	attributes: {
		username: {
			type: 'string',
			required: true,
			unique: true
		},
		password: {
			type: 'string',
			required: true
		},
		email: {
			type: 'string',
			unique: true,
			required: true,
			isEmail: true,
			maxLength: 255,
		},
		name: {
			type: 'string',
			required: true,
		},
		firstname: {
			type: 'string',
			required: true,
		},
		birthDate: {
			type: 'number',
			isBefore: new Date(),
		},
		sex: {
			type: 'string',
			required: true,
			isIn: ['male', 'female', 'both', 'none', 'out of the binary system', 'what is gender ?'],
		},

		//  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
		//  ║╣ ║║║╠╩╗║╣  ║║╚═╗
		//  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝

		//  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
		//  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
		//  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
		team: {
			model: "team",
		},

		currentBabyFoot: {
			model: "babyfoot"
		},

		blueMatches: {
			collection: 'match',
			via: 'bluePlayers'
		},

		redMatches: {
			collection: 'match',
			via: 'redPlayers'
		},
	},
	customToJSON: function () {
		return _.omit(this, ['password'])
	},
	beforeCreate: function (user, cb) {
		bcrypt.genSalt(10, function (err, salt) {
			bcrypt.hash(user.password, salt, null, function (err, hash) {
				if (err) return cb(err);
				user.password = hash;
				return cb();
			});
		});
	}
};