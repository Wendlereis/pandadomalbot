exports.default = (client, target, context, message) => {
    switch (message) {
        case '!social':
          client.say(target, `https://discord.io/levxyca | https://github.com/levxyca | https://www.linkedin.com/in/leticiacaroline/ | https://www.instagram.com/levxyca/ | https://twitter.com/levxyca | https://t.me/newslevxyca`);
          break;
        case '!telegram':
          client.say(target, `https://t.me/newslevxyca`);
          break;
        case '!discord':
          client.say(target, `https://discord.io/levxyca`);
          break;
        case '!fofinho':
          client.say(target, `Entre no zap dos fofinhos https://chat.whatsapp.com/BDHFDIn3yZM7pZwLpiQron`);
          break;
        case '!github':
          client.say(target, `https://github.com/levxyca`);
          break;
    }
}