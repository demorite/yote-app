module.exports = {
	createUser: (params) => {
		return User.create({
			email: params.email,
			password: params.password
		}).fetch();
	},

	exits: {
		invalid: {
			remoteType: 'badRequest',
			description: 'Email and/or password not valid',
		},

		EmailAlreadyInUse:{
			statusCode: 409,
			description: 'Email already in use',
		}
	},


	fn: async function (inputs, exits){
		attr = {};

		if(inputs.password){
			attr.password = await bcrypt.hash(inputs.password, 10);
			const user = await User.create(attr)
				.intercept('E_UNIQUE', () => "EmailAlreadyInUse")
				.intercept({name: 'UsageError'}, () => 'EmailAlreadyInUse')
				.fetch();
			return exits.success(user);
		}else{
			return exits.invalid('missing password')
		}

		return exits.success();
	}
}