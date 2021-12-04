# FingerTips

An assistive technology bot for people who have trouble using their hands, or for those who don't have hands.

## How to run the bot

`npm run start`

This loads the commands onto Discord and starts the bot client running.

## Installation Instructions

1. Join our FingerTips [Discord](https://discord.gg/vCKF7Urty2), where we do testing.
2. Fork and clone this repo.
3. Create a test Discord bot [here](https://discord.com/developers/applications).
4. Ping one of the Discord admins to invite your bot in the server for testing.
5. Name it as FingerTips - **your username**
6. Read the official [Discord.js guide](https://discordjs.guide/#before-you-begin) and follow the steps until **Adding your bot to servers**.
7. Create an .env file and copy paste all contents of .env.example
8. Add your Discord server's guild ID, client bot token, and client bot ID into the .env file, for example: 

```python
# This is specific to the FingerTips discord server
DISCORD_GUILD_ID="906936820724555776"
DISCORD_TOKEN="Your bot's OAuth token"
DISCORD_CLIENT_ID="Your bot's Client Id"
```

(In the above example we added DISCORD_GUILD_ID as the GUILD_ID of our FingerTips Discord)

Note: This helpful article covers many of the steps above: https://www.writebots.com/discord-bot-token/

9. Run `npm install`
10. Run `node deploy-commands.js` if you have made any changes to the deploy-commands.js file.
11. Once you got the clientId and token for your bot you can run the bot using `node index.js`
12. Pro tip: Use `npm run start` as a shortcut to run `node deploy-commands.js && node index.js`

## Troubleshooting

```
FingerTips on  main [!] is 📦 v1.0.0 via ⬢ v14.17.0 
➜ npm run start                            

> fingertips@1.0.0 start 
> node deploy-commands.js && node index.js

internal/modules/cjs/loader.js:888
  throw err;
  ^

Error: Cannot find module 'timers/promises'
```

Make sure you are using Node 16 or greater.

```bash
nvm use 16
```

## Help Wanted 

To volunteer, join the FingerTips [Discord](https://discord.gg/vCKF7Urty2) and ask for help getting started as a new volunteer.




