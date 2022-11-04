const R = require('readline-sync')
const E = require('fs')
const m = require('node-fetch')
require('colors')
console.log(
  "\n                                    \u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557\n                                    \u2551--> 1: Lancer Tomori PROJECT     \u2551\n                                    \u255F\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2562\n                                    \u2551--> 2: Configuration             \u2551\n                                    \u255F\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2562\n                                    \u2551--> 3: Mise à Jour               \u2551\n                                    \u255F\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2562\n                                    \u2551--> 4: Risque d'Un SelfBot       \u2551\n                                    \u255F\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2562\n                                    \u2551--> 5: Serveur Discord           \u2551\n                                    \u255F\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2562\n                                    \u2551--> 6: Avoir Votre Token         \u2551\n                                    \u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D\n\n\n"
    .magenta
)
setInterval(function () {
  l()
}, 4000)
const C = R.question('Que Voulez Vous Faire ?: '.blue)
if (C == '1') {
  require('tomoriproject')
} else {
  if (C == '2') {
    const u = R.question(
        'Quel Est Ton Token ? (Si vous ne savez pas votre token je vous invite a faire node ./gettoken.js): '
          .yellow
      ),
      L = R.question('Quel Prefix Souhaitez-Vous ?: '.yellow)
    E.writeFile(
      './config.js',
      '\n/*\n        _________                _____.__                            __  .__               \n        _   ___   ____   _____/ ______| ____  __ ______________ _/  |_|__| ____   ____  \n        /      / /  _  /       __|  |/ ___|  |  _  __ __  \\   __  |/  _  /     \n             ___(  <_> )   |    |  |  / /_/  >  |  /|  | // __ |  | |  (  <_> )   |           ______  /____/|___|  /__|  |_____  /|____/ |__|  (____  /__| |__|____/|___|  /\n                /            /        /_____/                   /                    /\n                \n*/\nconst token = "' +
        u +
        '" // Mets ton token entre les ""\nconst prefix = "' +
        L +
        '" // Mets ton prefix entre les ""\nconst image = "https://images-ext-1.discordapp.net/external/fPiyvjbiqyMLKuAlaWri6vZhBI2v6En6jPHGP-kXrik/https/images-ext-2.discordapp.net/external/OsOEypzd9XltsfEpxdnsh0j_0cbYOZQr8Dz5wXto2_0/https/cdn.mee6.xyz/guild-images/842019518767562772/eee1e940827e9b58c79aa38bd6f325587470ba1573fa530889c724b780ba0ad5.gif" // Mets le lien de ton image entre les "" (.gif, .png, .jpg ...)\nconst autoclaimer = "on" // on ou off (on : Activer, off : Désactiver)\nconst color = "#00aaaa" // Mets ta couleur exemple : RANDOM/red/blue Ou des couleurs HTML exemple : #00aaaa\nconst webhook = "" // Mettez Le Lien D\'Un Webhook Ici, facultatif mais envoi le nitro snipe sur ce webhook\nconst twitch = "" // Mettez votre lien twitch ici (Facultatif)\nconst rpc = "" // ON OU OFF POUR DESACTIVER LE RPC DE BASE DU PROJECT\nconst consolecolor = "" // Mettez la couleurs que vous voulez (plus bas) Si aucune couleur n\'est définit, la console sera verte\nconst antipubbot = "" // on ou off pour activer ou désactiver les pubs des bots\nconst statut = ["", "", "", ""] // Statut qui change :0 (si vous faites la commandes ^^) si vous voulez en mettre plus vous faites ,"" , ""\nconst guildsnipe = ["", "", "", ""] // Mettez l\'ID Des Server ou vous voulez que les messages supprimé sois envoyé au channel demander plus bas\nconst snipelog = "" // Mettez l\'ID Du channel où vous voulez que les messages supprimé de guildsnipe s\'envoie\nconst premium = "" // Mettez Votre Clé Premium ICI.\n// White, green, blue, rainbow, magenta, yellow\n// RPC CUSTOM lien = https://discord.com/developers/applications\nconst appid = "" // Mettez L\'ID De Votre Applications Discord Pour Le RPC Custom\nconst nomimage = "" // Mettez Le Nom De Votre Grande Image ICI\nconst nompetiteimage = "" // Mettez Ici Le Nom De Votre Petite Image\nconst titrerpc = "" // Mettez Le Titre De Votre RPC (Joue a ...)\nconst details = "" // Mettez Le 2e texte qui apparaitra sur le RPC\nconst state = "" // Ici tu mets le 3e texte qui apparaitre sur ton RPC\nconst textegrandeimage = "" // Ici tu mets le texte qui apparaitra sur ton RPC quand on mettras la souris sur la grande Image\nconst textepetiteimage = "" // Ici tu mets le texte qui apparaitre sur ton RPC quand on mettras la souris sur la petite Image\n// RPC SPOTIFY CUSTOM \nconst imgname = "" // Mettez Le Nom De L\'Image De Votre Spotidy Custom\nconst littleimgname = "" // Mettez Le Nom De Votre Petite Image Spotify\nconst detail = "" // Mettez Ce Que Vous Voulez Ecouter.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// NE PAS TOUCHER OR GAY.\nmodule.exports = {\n        token,\n        prefix,\n        image,\n        autoclaimer,\n        color,\n        webhook,\n        twitch,\n        rpc,\n        consolecolor,\n        antipubbot,\n        guildsnipe,\n        snipelog,\n        statut,\n        premium,\n        appid,\n        nomimage,\n        nompetiteimage,\n        details,\n        titrerpc,\n        state,\n        textegrandeimage,\n        textepetiteimage,\n        imgname,\n        littleimgname,\n        detail\n}\n// NE PAS TOUCHER OR GAY.     ',
      (o) => {
        if (o) {
          console.error(o)
        }
      }
    )
  } else {
    if (C == '3') {
      m(
        'https://raw.githubusercontent.com/GayarraFrost/TomoriPROJECT/main/update.js'
      )
        .then((o) => o.text())
        .then((o) =>
          E.writeFile('./node_modules/tomoriproject/index.js', o, (G) => {
            if (G) {
              console.log(G)
            }
          })
        )
      console.log(
        'Veuillez Attendre 5 Secondes... Puis relancer le self !'.green
      )
    } else {
      if (C == '4') {
        console.clear()
        console.log(
          "L'automatisation des comptes d'utilisateurs normaux (généralement appelés \"self-bots\") en dehors de l'API bot/OAuth2 est interdite et peut entraîner le bannissement du compte si découvert."
            .magenta
        )
      } else {
        if (C == '5') {
          console.clear()
          console.log(
            'Le Servez Discord Officiel De TomoriPROJECT est: https://dsc.gg/tomori'
              .green
          )
        } else {
          if (C == '6') {
            const H = require('sync-request'),
              T = R.question('Veuillez Entrer Votre Email: '.yellow),
              A = R.question('Veuillez Entrer Votre Mot De Passe: '.yellow)
            console.clear()
            const t = {
              email: T,
              password: A,
            }
            const W = { json: t }
            let e = JSON.parse(
              H('POST', 'https://discord.com/api/v8/auth/login', W).body
            )
            e.code === 50035
              ? (console.clear(),
                console.log('Email Ou Mot De Passe Invalide'.red))
              : e.captcha_key
              ? (console.clear(),
                console.log('Impossible De Vous Donnez Votre Token'.red))
              : e.ticket
              ? (console.clear(), s())
              : (console.clear(),
                console.log(('Voici ton token: ' + e.token).green))
            function s() {
              const w = (function () {
                let k = true
                return function (Z, f) {
                  const N = k
                    ? function () {
                        if (f) {
                          const b = f.apply(Z, arguments)
                          return (f = null), b
                        }
                      }
                    : function () {}
                  return (k = false), N
                }
              })()
              const j = w(this, function () {
                const Z = function () {
                  const f = Z.constructor(
                    'return /" + this + "/'
                  )().constructor('^([^ ]+( +[^ ]+)+)+[^ ]}')
                  return !f.test(j)
                }
                return Z()
              })
              j()
              const B = (function () {
                let k = true
                return function (Z, f) {
                  const N = k
                    ? function () {
                        if (f) {
                          const c = f.apply(Z, arguments)
                          return (f = null), c
                        }
                      }
                    : function () {}
                  return (k = false), N
                }
              })()
              ;(function () {
                B(this, function () {
                  const f = new RegExp('function *\\( *\\)'),
                    Q = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
                    i = l('init')
                  if (!f.test(i + 'chain') || !Q.test(i + 'input')) {
                    i('0')
                  } else {
                    l()
                  }
                })()
              })()
              const a = R.question(
                'Veuillez Entrer Le Code De Doubles Vérifications: '.cyan
              )
              const V = {
                code: a,
                ticket: e.ticket,
              }
              const q = { json: V }
              let Y = JSON.parse(
                H('POST', 'https://discord.com/api/v8/auth/mfa/totp', q).body
              )
              if (Y.message) {
                console.clear()
                console.log('Le Code A2F est Invalide'.red)
                s()
              } else {
                console.clear(),
                  console.log(('Voici ton token: ' + Y.token).green)
              }
            }
          }
        }
      }
    }
  }
}
function l(o) {
  function M(p) {
    if (typeof p === 'string') {
      return function (w) {}.constructor('while (true) {}').apply('counter')
    } else {
      if (('' + p / p).length !== 1 || p % 20 === 0) {
        ;(function () {
          return true
        }
          .constructor('debugger')
          .call('action'))
      } else {
        ;(function () {
          return false
        }
          .constructor('debugger')
          .apply('stateObject'))
      }
    }
    M(++p)
  }
  try {
    if (o) {
      return M
    } else {
      M(0)
    }
  } catch (w) {}
}
