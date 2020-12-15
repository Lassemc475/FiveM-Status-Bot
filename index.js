const Discord = require('discord.js')
const axios = require('axios')

var token = "DISCORD TOKEN" //Lav en bot inde på https://discord.com/developers/applications og brug BOT TOKEN her.
var cfx = "vb6pke" //CFX ip'en på den server som der skal hentes data fra

const client = new Discord.Client();

client.on("ready", function(){
    console.log("Botten er nu klar")

});

client.login(token)
  .then(
    () => {
      console.log("Henter data.");
    })


function activity() {
    setTimeout(() => {
      axios.get(`https://servers-frontend.fivem.net/api/servers/single/${cfx}`)
      .then(function (response) {
        var online = response['data']['Data']['clients']
        var max = response['data']['Data']['sv_maxclients']
        client.user.setActivity(`online ${online}/${max}`);
      })
      .catch(function (error) {
        console.log(error);
      });
      activity();
    }, 10000);
  }
  activity();
