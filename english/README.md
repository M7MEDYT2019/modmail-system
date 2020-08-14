# ModMail BOT | Open-Source
I developed for you a project that I'm putting in open-source today. It has been made for you!

## What is a "ModMail"? ?
A system called "ModMail" is a system that will allow users of your server to ask for help via private messages with the bot. The messages they will send will be forwarded to the specified server and your answers will be sent to it.
It's a bit like a ticket bot, but not a private message. So there is no command to make or react to a message to open a request.

## How to set it up ?
It's easy to set it up, just change a few arguments in the `config.json` file in the `Storage` directory and install the modules required for the BOT to work.
Below are the modules to install and the arguments to change in the `config.json` file.

## Quels modules installer ?
With the `npm install` command, you will install the modules below:

- [discord.js](https://www.npmjs.com/package/discord.js "Module page")
- [dateformat](https://www.npmjs.com/package/dateformat "Module page")
- [path](https://www.npmjs.com/package/path "Module page")

## What should I change ?
Go to the `Storage` folder and open the `config.json` file.
You will see this code : 
```js
{
    "token":"place your token here",
    "owners": ["your ID here"]
    "serverID": "The ID of your server"
}
```
You will therefore need to enter your token, your ID and server ID. (of course, you can put several IDs in "owners")

## Useful links
If you have any problems, questions or if you are simply interested in my work, do not hesitate to join my [Discord](https://discord.gg/ZRPsQr5 "Vi | Personal").

[Discord](https://discord.gg/ZRPsQr5 "Vi | Personnal") | [My Presentation](https://vishield.xyz/vi "My bio") | [BOT](https://vishield.xyz "Vi'Shield")
