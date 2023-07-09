// requerimientos
const Discord = require('discord.js');


// definir cliente
const Client = new Discord.Client({
    intents: 33027
});

// contenido
Client.on('ready' , async ( client ) => {
    console.log('Activo')
})

//conectar
Client.login('MTEyNzY1MTUwNjYxOTk2MTM4NA.Glr9oI.DYjMreRuxCzRUYwRB3UVmbDBrlCCfmlqQcT4VU')