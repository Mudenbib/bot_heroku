const CommandoClient = require('./client');
const commando = require('./node_modules/discord.js-commando');
const path = require('path');
const fs = require('fs');
const client = new CommandoClient({
	commandPrefix: '!', // Préfixe des commandes (ex: ?help)
	owner: '874290974371762187', // ID de l'owner du bot, peut également être un tableau d'id pour plusieurs owners, ex: ['ID1', 'ID2']
        disableMentions: 'everyone' // Désactive, par sécurité, l'utilisation du everyone par le bot
});

client.registry
    .registerDefaultTypes()
	.registerGroups([
        ['divers', 'Divers'], // la première valeur correspond à la section 'group' de votre commande, la deuxième valeur sera utilisée pour l'affichage du nom du groupe, dans l'aide par exemple.
    ])
	.registerCommandsIn(path.join(__dirname, 'commands'))
;

client.once('ready', () => {
    console.log(`Je suis prêt !`);
});

client.on("guildMemberAdd", (member) => {
		console.log(member);
        const userid = member.id;
        var welcome_message = fs.readFileSync("welcome_message.txt", 'utf8');
        welcome_message = welcome_message.replace("${userid}", userid);
		const welcomechannel = client.channels.cache.get('864177844690747404');
        welcomechannel.send(welcome_message);
    });

client.on('error', console.error); // Afficher les erreurs
client.login(process.env.token);