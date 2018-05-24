const passport = require('passport');

module.exports = {
	isLoggedIn: async function (req, res) {
		if (req.user) {
			return res.send({
				user: await User.findOne(req.user.id).populate('redMatches').populate('blueMatches').populate('team')
			});
		} else {
			return res.send({
				error: 'Not logged'
			})
		}
	},

	login: function (req, res) {
		passport.authenticate('local', function (err, user, info) {
			if ((err) || (!user)) {
				return res.send({
					message: info.message,
					user
				});
			}
			req.logIn(user, async function (err) {
				if (err) res.send(err);
				return res.send({
					message: info.message,
					user: await User.findOne(user.id).populate('redMatches').populate('blueMatches').populate('team')
				});
			});
		})(req, res);
	},

	logout: function (req, res) {
		req.logout();
		res.redirect('/');
	}
};