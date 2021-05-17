const fs = require('fs')
const path = "./node_modules/tomoriproject/config.js"
/*
_________                _____.__                            __  .__               
\_   ___ \  ____   _____/ ____\__| ____  __ ______________ _/  |_|__| ____   ____  
/    \  \/ /  _ \ /    \   __\|  |/ ___\|  |  \_  __ \__  \\   __\  |/  _ \ /    \ 
\     \___(  <_> )   |  \  |  |  / /_/  >  |  /|  | \// __ \|  | |  (  <_> )   |  \
 \______  /\____/|___|  /__|  |__\___  /|____/ |__|  (____  /__| |__|\____/|___|  /
        \/            \/        /_____/                   \/                    \/
*/
fs.writeFile(path, `

const token = ""// Mets ton token entre les ""
const prefix = ""// Mets ton prefix entre les ""
const image = "https://i.pinimg.com/originals/d3/26/4d/d3264ddc12decfa0a5c23ecbcaccff7b.gif"// Mets le lien de ton image entre les "" (.gif, .png, .jpg ...)
const autoclaimer = "" // on ou off (on : Activer, off : Désactiver)
const color = "" // Mets ta couleur exemple : RANDOM/red/blue Ou des couleurs HTML exemple : #00aaaa
const twitch = "" // Mettez votre lien twitch ici (Facultatif)
const rpc = "" // ON OU OFF POUR DESACTIVER LE RPC DE BASE DU PROJECT




























































module.exports = {
	token,
	prefix,
	image,
	autoclaimer,
	color,
	twitch,
	rpc
}
`, err => {
	if (err) console.error(err);
});