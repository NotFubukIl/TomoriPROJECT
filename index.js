const question = require('readline-sync')
const fs = require('fs')
const fetch = require('node-fetch')
require('colors')


console.log(`
                                    ╔═════════════════════════════════╗
                                    ║--> 1: Lancer Tomori PROJECT     ║
                                    ╟─────────────────────────────────╢
                                    ║--> 2: Configuration             ║
                                    ╟─────────────────────────────────╢
                                    ║--> 3: Mise à Jour               ║
                                    ╟─────────────────────────────────╢
                                    ║--> 4: Risque d'Un SelfBot       ║
                                    ╟─────────────────────────────────╢
                                    ║--> 5: Serveur Discord           ║
                                    ╟─────────────────────────────────╢
                                    ║--> 6: Avoir Votre Token         ║
                                    ╚═════════════════════════════════╝


`.yellow)

const lancement = question.question(`Que Voulez Vous Faire ?: `.blue)

if (lancement == '1') {

    require('tomoriproject')

} else {
    if (lancement == '2') {

        const token = question.question(`Quel Est Ton Token ? (Si vous ne savez pas votre token je vous invite a faire node ./gettoken.js): `.yellow)
        const prefix = question.question(`Quel Prefix Souhaitez-Vous ?: `.yellow)

        fs.writeFile('./config.js', `
        /*
        _________                _____.__                            __  .__               
        \_   ___ \  ____   _____/ ____\__| ____  __ ______________ _/  |_|__| ____   ____  
        /    \  \/ /  _ \ /    \   __\|  |/ ___\|  |  \_  __ \__  \\   __\  |/  _ \ /    \ 
        \     \___(  <_> )   |  \  |  |  / /_/  >  |  /|  | \// __ \|  | |  (  <_> )   |  \
         \______  /\____/|___|  /__|  |__\___  /|____/ |__|  (____  /__| |__|\____/|___|  /
                \/            \/        /_____/                   \/                    \/
        */
    const token = "${token}" // Mets ton token entre les ""
    const prefix = "${prefix}"// Mets ton prefix entre les ""
    const image = "https://images-ext-2.discordapp.net/external/OsOEypzd9XltsfEpxdnsh0j_0cbYOZQr8Dz5wXto2_0/https/cdn.mee6.xyz/guild-images/842019518767562772/eee1e940827e9b58c79aa38bd6f325587470ba1573fa530889c724b780ba0ad5.gif"// Mets le lien de ton image entre les "" (.gif, .png, .jpg ...)
    const autoclaimer = "on" // on ou off (on : Activer, off : Désactiver)
    const color = "#00aaaa" // Mets ta couleur exemple : RANDOM/red/blue Ou des couleurs HTML exemple : #00aaaa
    const twitch = "" // Mettez votre lien twitch ici (Facultatif)
    const rpc = "on" // ON OU OFF POUR DESACTIVER LE RPC DE BASE DU PROJECT
    const consolecolor = "" // Mettez la couleurs que vous voulez (plus bas) Si aucune couleur n'est définit, la console sera verte
    const antipubbot = "on" // on ou off pour activer ou désactiver les pubs des bots
    const statut = ["", "", "", ""] // Statut qui change :0 (si vous faites la commandes ^^) si vous voulez en mettre plus vous faites ,"" , ""
    /*
    White,
    green,
    blue,
    rainbow,
    magenta,
    yellow
    */
    // RPC CUSTOM lien = https://discord.com/developers/applications
    const appid = "" // Mettez L'ID De Votre Applications Discord Pour Le RPC Custom
    const nomimage = "" // Mettez Le Nom De Votre Grande Image ICI
    const titrerpc = "" // Mettez Le Titre De Votre RPC (Joue a ...)
    const details = "" // Mettez Le 2e texte qui apparaitra sur le RPC
    const state = "" // Ici tu mets le 3e texte qui apparaitre sur ton RPC
    const textegrandeimage = "" // Ici tu mets le texte qui apparaitra sur ton RPC quand on mettras la souris sur la grande Image
    const textepetiteimage = "" // Ici tu mets le texte qui apparaitre sur ton RPC quand on mettras la souris sur la petite Image
    /*        
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
    */        
    module.exports = {
    token,
    prefix,
    image,
    autoclaimer,
    color,
    twitch,
    rpc,
    consolecolor,
    antipubbot,
    statut,
    appid,
    nomimage,
    details,
    titrerpc,
    state,
    textegrandeimage,
    textepetiteimage
    }
            `, err => {
            if (err) console.error(err)
        });
    } else {
        if (lancement == "3") {
            fetch('https://raw.githubusercontent.com/GayarraFrost/TomoriPROJECT/main/update.js')
                .then(res => res.text())
                .then(body =>
                    fs.writeFile('./node_modules/tomoriproject/index.js', body, err => {
                        if (err) console.log(err)
                    }));
            console.log(`Mise à Jour Faites !`.green)
        } else {
            if (lancement == '4') {
                console.clear()
                console.log(`L'automatisation des comptes d'utilisateurs normaux (généralement appelés "self-bots") en dehors de l'API bot/OAuth2 est interdite et peut entraîner le bannissement du compte si découvert.`.magenta)
            } else {
                if (lancement == '5') {
                    console.clear()
                    console.log('Le Servez Discord Officiel De TomoriPROJECT est: https://dsc.gg/tomori'.green)
                } else {
                    if (lancement == '6') {
                        const request = require("sync-request")

                        const email = question.question(`Veuillez Entrer Votre Email: `.yellow)
                        const password = question.question(`Veuillez Entrer Votre Mot De Passe: `.yellow)

                        console.clear()

                        let req = JSON.parse(request("POST", 'https://discord.com/api/v8/auth/login', {
                            json: {
                                "email": email,
                                "password": password
                            }
                        }).body)
                        if (req.code === 50035) {

                            console.clear();
                            console.log("Email Ou Mot De Passe Invalide".red)

                        } else {
                            if (req.captcha_key) {

                                console.clear()
                                console.log("Impossible De Vous Donnez Votre Token".red)

                            } else {

                                if (req.ticket) {
                                    console.clear()
                                    deuxfa0()

                                } else {

                                    console.clear()
                                    console.log(`Voici ton token: ${req.token}`.green)

                                }
                            }
                        }

                        function deuxfa0() {

                            const deuxfa = question.question(`Veuillez Entrer Le Code De Doubles Vérifications: `.cyan)

                            let res = JSON.parse(request("POST", 'https://discord.com/api/v8/auth/mfa/totp', {
                                json: {
                                    "code": deuxfa,
                                    "ticket": req.ticket
                                }
                            }).body)

                            if (res.message) {
                                console.clear()
                                console.log(`Le Code A2F est Invalide`.red)
                                deuxfa0()

                            } else {
                                console.clear();
                                console.log(`Voici ton token: ${res.token}`.green)
                            }
                        }
                    }
                }
            }
        }
    }
}