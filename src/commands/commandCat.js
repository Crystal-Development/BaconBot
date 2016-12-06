const request = require('superagent');

exports.run = function (bot, msg) {
    msg.delete();
    msg.channel.sendMessage(':cat2: Have some cat pix:');
    request.get("http://www.random.cat/meow", (err, res) => {
        msg.channel.sendMessage(res.body.file);
    });
}

exports.info = {
    name: 'cat',
    usage: 'cat',
    description: 'Shows you cute cat pictures'
}