

	const nbx = require('noblox.js');
	const Discord = require('discord.js');
	const client = new Discord.Client();
	
	async function payout(userId, amount) {
		await nbx.setCookie(process.env.cookie);
	
		nbx.groupPayout({ group:9216843 , member: [userId], amount: [amount], recurring: false});
	}
	
	client.on("ready", () => {
	
		console.log("Bot is ready");
	
	});
	
	client.on("message", (message) => {
	
		if (message.author.bot == true) {
			const messageData = JSON.parse(message.content);
			const userId = parseInt(messageData.userId);
			const amount = parseInt(messageData.amount);
	
			payout(userId, amount);
		};
	});
	
	client.login(process.env.token);
