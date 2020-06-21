const Discord = require('discord.js')
const bot = new Discord.Client();
var cron = require('node-cron');

const token = 'Njk1MzIwNzAwODY0NDMwMjAx.Xu_Bzg.Acn559O7WiakzlCNtcKE6LLxkd4'
const prefix = '!?'
const idlag = '221569516117688320'

bot.on('ready', () => {
    console.log('Zaczynamy')
    bot.user.setStatus('invisible')
    bot.user.setActivity('oczekiwanie na papajową');
    es = 'nie';
    console.log(es);
});

bot.on('message', async (message) => {
    if(message.content === '!?ap')
    if(message.author.id === '221569516117688320')
        if(es === 'nie'){
            message.channel.send('**I got u my man**')
            cron.schedule('00 37 21 * * *', function(){
                message.channel.send('A po maturach chodziliśmy na kremówki')
                message.channel.send('<@&691018910979326085>')
                console.log('Zadanie wykonane');
            });
        };
});

bot.login(token);
