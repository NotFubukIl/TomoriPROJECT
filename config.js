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
const prefix = "&"// Mets ton prerfx entre les "'
const image = ""// Mets le lien de ton image entre les "" (.gif, .png, .jpg ...)
const autoclaimer = "on" // on ou off (on : Activer, off : Désactiver)
const color = "red" // Mets ta couleur exemple : RANDOM/red/blue Ou des couleurs HTML exemple : #00aaaa
const twitch = "" // Mettez votre lien twitch ici (Facultatif)




























































module.exports = {
	token,
	prefix,
	image,
	autoclaimer,
	color,
	twitch
}
`, err => {
	if (err) console.error(err);
});