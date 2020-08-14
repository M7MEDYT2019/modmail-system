# ModMail BOT | Open-Source
J'ai développé pour vous un projet que je met en open-source dés aujourd'hui. Il a été conçu pour vous !

## Qu'est-ce qu'un "ModMail" ?
Un système dit "ModMail" est un système qui permettra aux utilisateurs de votre serveur de demander de l'aide via les messages privés avec le bot. Les messages qu'ils enverront seront transmits sur le serveur indiqué et vos réponses lui seront envoyés.
C'est un peu comme un bot de ticket, mais pas message privé. Il n'y a donc pas de commande à faire ou réagir à un message pour ouvrir une demande.

## Comment le mettre en place ?
Il est facile de le mettre en place, il vous suffit de changer quelques arguments dans le fichier `config.json` qui se trouve dans le dossier `Storage` et d'installer les modules requis pour le fonctionnement du BOT.
Vous trouverez ci-dessous les modules à installer ainsi que les arguments à changer dans le fichier `config.json`.

## Quels modules installer ?
Grâce à la commande `npm install`, vous installerez les modules ci-dessous :

- [discord.js](https://www.npmjs.com/package/discord.js "Page du module")
- [dateformat](https://www.npmjs.com/package/dateformat "Page du module")
- [path](https://www.npmjs.com/package/path "Page du module")

## Que dois-je changer ?
Rendez-vous dans le dossier `Storage` et ouvrez le fichier `config.json`.
Vous vous retrouverez devant ce code : 
```js
{
    "token":"placez votre token ici",
    "owners": ["votre id ici"]
    "serverID": "L'ID de votre serveur"
}
```
Vous devrez donc indiquer votre token, votre ID et l'ID de votre serveur. (bien sûr, vous pouvez mettre plusieurs ID dans "owners")

## Liens utiles
En cas de problèmes, de questions ou si tout simplement mon travail vous intéresse, n'hésitez pas à rejoindre mon [Discord](https://discord.gg/ZRPsQr5 "Vi | Personnal").

[Discord](https://discord.gg/ZRPsQr5 "Vi | Personnal") | [Ma Présentation](https://vishield.xyz/vi "Ma bio") | [BOT](https://vishield.xyz "Vi'Shield")
