/**
 * Match.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
	
	attributes: {
		
		//  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
		//  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
		//  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
		
		duration:  {type: 'number', isInteger: true},
		played:    {type: 'boolean', },
		inUse:     {type: 'boolean', },
		redScore:  {type: 'number', isInteger: true},
		blueScore: {type: 'number', isInteger: true},
		
		//  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
		//  ║╣ ║║║╠╩╗║╣  ║║╚═╗
		//  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝
		
		//  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
		//  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
		//  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
		bluePlayers: {
			collection: 'user',
			via:        'blueMatches',
		},
		
		redPlayers: {
			collection: 'user',
			via:        'redMatches',
		},
		
		babyfoot: {
			model: 'babyfoot'
		}
	},
	
};

