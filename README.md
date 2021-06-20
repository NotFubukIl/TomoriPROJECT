  ______                           _ ____  ____  ____      ____________________
 /_  __/___  ____ ___  ____  _____(_) __ \/ __ \/ __ \    / / ____/ ____/_  __/
  / / / __ \/ __ `__ \/ __ \/ ___/ / /_/ / /_/ / / / /_  / / __/ / /     / /   
 / / / /_/ / / / / / / /_/ / /  / / ____/ _, _/ /_/ / /_/ / /___/ /___  / /    
/_/  \____/_/ /_/ /_/\____/_/  /_/_/   /_/ |_|\____/\____/_____/\____/ /_/     
                                                                               
----------------------------------------------------------------------------
PC :
1. Récupérez votre Token :
Avec ce code :

CTRL + SHIFT + I -> Console -> 

Coller ce script :
getYourToken();

function getYourToken() {
    var req = webpackJsonp.push([
        [], {
            extra_id: (e, _t, r) => e.exports = r
        },
        [
            ["extra_id"]
        ]
    ]);
    for (let e in req.c)
        if (req.c.hasOwnProperty(e)) {
            let t = req.c[e].exports;
            if (t && t.__esModule && t.default)
                for (let e in t.default)
                    "getToken" === e && (token = t.default.getToken());
        }
    console.log("Votre token : " + \`${token}\`);
}

Celà fait mettez votre token, prefix, image, etc  dans le config.js 

et après Lancer le start.bat !
---------------------------------------------------------------------------
Téléphone :

Récuperez votre token avec ce code :
CREDIT = Discord.gg/punchnox
https://github.com/NotPunchnox/Discord-get-token
Vous extraiyez le tool
Vous faites cd vers l'index
vous vous connectez 
et vous avez votre token
ensuite aller dans TomoriPROJECT 
Mettez votre token etc etc etc dans Config.js
dans Termux 
CD vers l'index de Tomori 
node index ! 
Et voilà Tomori est à vous !
