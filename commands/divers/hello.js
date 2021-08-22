const { Command } = require('discord.js-commando');

module.exports = class HelloCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'pingtonbot',
			memberName: 'pingtonbot',
			group: 'divers',
			aliases: [],
			description: 'Replies with a hello message.',
	                guildOnly: true,
	                throttling: {
	                        usages: 2,
	                        duration: 10,
	                },
		});
	}

	async run(msg) {
            msg.say(`Bonjour, je suis ${this.client.user.tag} (\`${this.client.user.id}\`)`);
	}
};