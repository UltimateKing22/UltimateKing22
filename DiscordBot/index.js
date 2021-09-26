const Discord = require('discord.js')
const client = new Discord.Client();
const prefix = 'outfit ';

client.once('ready', () => {
    console.log('UltimateKings Bot is Ready to Roll!')
})
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    //Use Monkey Man's mart emote anywhere!
    if (command === 'mart') {
        message.channel.send('<:mart:881249349609336864>');
    }

    //Gives and image of the persons outfit if I have them registered
     else if (command === 'wporpeta') {
        message.channel.send("Here's wPorpeta's outfit!", { files: ["BotWoutfits/wPorpeta.png"] });
    }

    else if (command === 'monkeyman') {
        message.channel.send("Here's Monkey Man's outfit!", { files: ["BotWoutfits/MonkeyMan.png"] });
    }

    else if (command === 'ultimateking22') {
        message.channel.send("Here's UltimateKing22's outfit!", { files: ["BotWoutfits/UltimateKing22.png"] });
    }

    else if (command === 'korfelthewizard') {
        message.channel.send("Here's Korfel the Wizard's outfit!", { files: ["BotWoutfits/KorfeltheWizard.png"] });
    }

    else if (command === 'shadenxox6') {
        message.channel.send("Here's Shadenxox6's outfit!", { files: ["BotWoutfits/Shadenxox6.png"] });
    }

    else if (command === 'monkeyman') {
        message.channel.send("Here's Monkey Man's outfit!", { files: ["BotWoutfits/MonkeyMan.png"] });
    }

    else if (command === 'swingh') {
        message.channel.send("Here's Swingh's outfit!", { files: ["BotWoutfits/Swingh.png"] });
    }

    else if (command === 'palmtree') {
        message.channel.send("Here's Palm Tree's outfit!", { files: ["BotWoutfits/PalmTree.png"] });
    }

    else if (command === 'yuukin') {
        message.channel.send("Here's Yuukin's outfit!", { files: ["BotWoutfits/Yuukin.png"] });
    }

    else if (command === 'wapuu') {
        message.channel.send("Here's Wapuu's outfit!", { files: ["BotWoutfits/Wapuu.png"] });
    }

    else if (command === 'ritohero') {
        message.channel.send("Here's Rito Hero's outfit!", { files: ["BotWoutfits/RitoHero.png"] });
    }

    else if (command === 'komali') {
        message.channel.send("Here's Komali's outfit!", { files: ["BotWoutfits/Komali.png"] });
    }

    else if (command === 'draxev') {
        message.channel.send("Here's Draxev's outfit!", { files: ["BotWoutfits/Draxev.png"] });
    }

    else if (command === 'thebreadpirate') {
        message.channel.send("Here's The Bread Pirate's outfit!", { files: ["BotWoutfits/BreadPirate.png"] });
    }

    else if (command === 'sushi_2') {
        message.channel.send("Here's Sushi_2's outfit!", { files: ["BotWoutfits/Sushi_2.png"] });
    }

    else if (command === 'Fresh') {
        message.channel.send("Here's Fresh's outfit!", { files: ["BotWoutfits/Fresh.png"] });
    }



    //Shutdown command
    else if (command === 'shutdown') {
        client.destroy();
    }
})



client.login('ODYyNDczODE4NDc0ODA3MzE2.YOY3Vg.Row5ASa_ScP-Q3LnE2yyyl2Wfto')