// Pour ajouter une vidéo dans un article, insère ce bloc dans "content" :
// { type: "video", videoId: "ID_YOUTUBE", title: "Titre de la vidéo" }

const articles = [
        {
    id: "batterie-vae-occasion",
    lang: "fr",
    slug: "verifier-batterie-vae-occasion",
    title: "Comment vérifier l'état d'une batterie VAE d'occasion avant d'acheter ?",
    description: "Acheter une batterie de vélo électrique d'occasion ? Voici les 4 tests indispensables pour vérifier son état et négocier le bon prix.",
    date: "2026-11-28",
    readTime: 4,
    category: "Tutoriels",
    icon: "🔍",
    content: [
      { type: "p", text: "Acheter un vélo électrique d'occasion est une excellente affaire, mais la batterie représente souvent 30 à 50 % de la valeur du vélo. Une batterie usée peut coûter plus cher que l'économie réalisée. Voici 4 étapes concrètes pour éviter les mauvaises surprises." },
      { type: "h2", text: "1. L'inspection visuelle (les signes qui ne trompent pas)" },
      { type: "p", text: "Avant même de parler technique, observez le boîtier. Certains défauts physiques sont des signaux d'alarme immédiats." },
      { type: "list", items: [
        "Gonflement ou déformation du boîtier : signe de cellules endommagées ou de gaz interne. Fuyez.",
        "Corrosion sur les connecteurs : indique une exposition à l'humidité et une possible oxydation des circuits.",
        "Chocs importants ou fissures : un impact violent a pu endommager le BMS (Battery Management System)."
      ]},
      { type: "h2", text: "2. Le test de la tension au repos" },
      { type: "p", text: "Le pourcentage affiché sur l'écran du vélo est souvent une estimation peu fiable. Pour un vrai diagnostic, vous pouvez aussi recalibrer la jauge si elle semble incohérente (voir notre guide de calibration)." },
      { type: "list", items: [
        "Laissez la batterie reposer au moins 2 heures après une charge ou une utilisation.",
        "Si vous avez un multimètre, mesurez la tension aux bornes.",
        "Une chute de tension trop rapide par rapport aux spécifications du constructeur indique des cellules fatiguées."
      ]},
      { type: "h2", text: "3. Le test sous charge (le test de vérité)" },
      { type: "p", text: "Une batterie peut afficher 100 % au repos, mais s'effondrer dès que le moteur tire." },
      { type: "list", items: [
        "Faites un essai de 10 à 15 minutes en montée ou avec une assistance élevée.",
        "Si l'autonomie affichée chute brutalement (par exemple de 80 % à 40 % en quelques minutes), le SoH est probablement bas.",
        "Écoutez le moteur : des coupures de puissance soudaines trahissent un BMS qui protège des cellules faibles."
      ]},
      { type: "h2", text: "4. L'historique de suivi : votre meilleur argument" },
      { type: "p", text: "Ne vous fiez pas uniquement aux dires du vendeur. La transparence est la clé." },
      { type: "list", items: [
        "Si le vendeur utilise une application de suivi de batterie : demandez-lui de vous montrer son historique ou d'exporter un certificat. C'est la preuve qu'il a réellement entretenu sa batterie.",
        "S'il n'a pas de suivi : notez l'état qu'il déclare (par exemple « usagée à 80 % ») et faites un premier relevé vous-même avant l'achat, avec une application comme BatLife.",
        "Si, après quelques jours d'utilisation, la batterie se décharge beaucoup plus vite que prévu : vous avez un début de preuve objective pour renégocier le prix ou demander une garantie."
      ]},
      { type: "tip", text: "Pour comprendre comment est calculé l'état de santé d'une batterie, consultez notre guide sur le SoH (State of Health)." },
      { type: "tip", text: "Une batterie dont le vendeur peut prouver l'entretien via un suivi régulier est un gage de confiance majeur. À l'inverse, un vendeur qui refuse de laisser tester la batterie doit vous mettre la puce à l'oreille." },
      { type: "warning", text: "Si le vendeur vous presse de conclure la vente sans essai, ou refuse catégoriquement que vous testiez la batterie, c'est un signal d'alarme majeur. Passez votre chemin." }
    ]
  },
    {
    id: "used-ebike-battery-check-en",
    lang: "en",
    slug: "check-used-ebike-battery",
    title: "How to check a used e-bike battery before buying?",
    description: "Buying a used e-bike battery? Here are the 4 essential tests to check its health and negotiate the right price.",
    date: "2026-11-28",
    readTime: 4,
    category: "Tutorials",
    icon: "🔍",
    content: [
      { type: "p", text: "Buying a used e-bike is a great deal, but the battery often represents 30 to 50% of the bike's value. A worn-out battery can cost more than the savings. Here are 4 concrete steps to avoid unpleasant surprises." },
      { type: "h2", text: "1. Visual inspection (the signs that don't lie)" },
      { type: "p", text: "Before even talking about technical specs, observe the casing. Some physical defects are immediate red flags." },
      { type: "list", items: [
        "Swelling or deformation of the casing: a sign of damaged cells or internal gas. Walk away.",
        "Corrosion on the connectors: indicates exposure to moisture and possible circuit oxidation.",
        "Major impacts or cracks: a violent shock may have damaged the BMS (Battery Management System)."
      ]},
      { type: "h2", text: "2. The resting voltage test" },
      { type: "p", text: "The percentage displayed on the bike's screen is often an unreliable estimate. For a real diagnosis, you can also recalibrate the gauge if it seems inconsistent (see our calibration guide)." },
      { type: "list", items: [
        "Let the battery rest for at least 2 hours after charging or use.",
        "If you have a multimeter, measure the voltage at the terminals.",
        "A voltage drop that is too fast compared to the manufacturer's specs indicates tired cells."
      ]},
      { type: "h2", text: "3. The load test (the truth test)" },
      { type: "p", text: "A battery can show 100% at rest, but collapse as soon as the motor draws power." },
      { type: "list", items: [
        "Take a 10 to 15-minute test ride uphill or with high assistance.",
        "If the displayed range drops abruptly (e.g., from 80% to 40% in a few minutes), the SoH is likely low.",
        "Listen to the motor: sudden power cuts betray a BMS protecting weak cells."
      ]},
      { type: "h2", text: "4. Your negotiation leverage: tracking history" },
      { type: "p", text: "Don't just rely on the seller's words. Transparency is key:" },
      { type: "list", items: [
        "If the seller uses a battery tracking app: ask them to show you their history or export a certificate. It's proof they actually maintained their battery.",
        "If they have no tracking: note the condition they claim (e.g., 'used at 80%') and take a first reading yourself before buying, using an app like BatLife.",
        "If, after a few days of use, the battery drains much faster than expected: you have objective grounds to renegotiate the price or ask for a warranty."
      ]},
      { type: "tip", text: "To understand how a battery's health is calculated, check out our guide on SoH (State of Health)." },
      { type: "tip", text: "A battery whose seller can prove maintenance via regular tracking is a major trust factor. Conversely, a seller who refuses to let you test the battery should raise a red flag." },
      { type: "warning", text: "If the seller pressures you to close the deal without a test, or flat out refuses to let you test the battery, it's a major warning sign. Walk away." }
    ]
  },
  {
    id: "wh-km-consumption-en",
    lang: "en",
    slug: "measure-reduce-ebike-wh-km-consumption",
    title: "Wh/km: how to measure and reduce your e-bike consumption?",
    description: "Learn to calculate and optimize your Wh/km consumption. Practical tips to extend your e-bike battery range and track it for free with BatLife.",
    date: "2026-11-28",
    readTime: 5,
    category: "Understanding",
    icon: "⚡",
    content: [
      { type: "p", text: "Knowing your actual consumption in Watt-hours per kilometer (Wh/km) is like knowing the liters per 100 km for a car. It's the key indicator to understand your battery's health and adapt your riding style. High consumption also accelerates battery wear (see our guide on lifespan)." },
      { type: "h2", text: "What is Wh/km and how to calculate it?" },
      { type: "p", text: "Wh/km measures the energy spent to travel one kilometer. An average consumption is between 10 and 15 Wh/km for a well-tuned e-bike. Above 20 Wh/km, there is room for optimization." },
      { type: "list", items: [
        "Simple formula: (Battery capacity in Wh × % of battery used) / Distance traveled in km.",
        "Example: You use 250 Wh to travel 10 km. Your consumption is 25 Wh/km.",
        "A progressive increase in this figure over several months is often the first sign that your battery's SoH is decreasing."
      ]},
      { type: "h2", text: "The 4 factors that skyrocket your consumption" },
      { type: "list", items: [
        "Tire pressure: Under-inflated tires increase rolling resistance. Check pressure weekly (the #1 cause of overconsumption).",
        "Total weight: Every extra kilo (backpack, luggage) demands more energy, especially uphill.",
        "Riding style: Abrupt starts and braking followed by re-acceleration consume much more than a constant speed.",
        "Assistance level: Switching from 'Eco' to 'Turbo' mode can instantly double your consumption."
      ]},
      { type: "h2", text: "How to measure your actual consumption with BatLife" },
      { type: "p", text: "It is tedious to do this calculation by hand after every ride. BatLife automates this tracking for you:" },
      { type: "list", items: [
        "Enter your data: After your ride, enter the distance and the battery level used in the app.",
        "Automatic calculation: BatLife instantly calculates your consumption in Wh/km.",
        "Long-term tracking: Thanks to CSV export, you can track the evolution of your consumption month after month."
      ]},
      { type: "tip", text: "Do a consumption test with well-inflated tires and in Eco mode. You will be surprised by the extra range you can gain without changing your battery." },
      { type: "warning", text: "Do not compare your consumption with others without taking into account the terrain, your weight, and the weather. Compare yourself to yourself on the same route." }
    ]
  },
  {
    id: "consommation-wh-km",
    lang: "fr",
    slug: "consommation-batterie-vae-wh-km",
    title: "Wh/km : comment mesurer et réduire sa consommation sur un VAE  ?",
    description: "Apprenez à calculer et optimiser votre consommation en Wh/km. Conseils pratiques pour prolonger l'autonomie de votre batterie VAE et suivi gratuit avec BatLife.",
    date: "2026-11-28",
    readTime: 5,
    category: "Comprendre",
    icon: "⚡",
    content: [
      { type: "p", text: "Connaître sa consommation réelle en Watt-heure par kilomètre (Wh/km), c'est comme connaître la consommation en litres aux 100 km pour une voiture. C'est l'indicateur clé pour comprendre l'état de santé de votre batterie et adapter votre pilotage. Une consommation élevée accélère aussi l'usure de la batterie (voir notre guide sur la durée de vie)." },
      { type: "h2", text: "Qu'est-ce que le Wh/km et comment le calculer ?" },
      { type: "p", text: "Le Wh/km mesure l'énergie dépensée pour parcourir un kilomètre. Une consommation moyenne se situe entre 10 et 15 Wh/km pour un VAE bien réglé. Au-delà de 20 Wh/km, il y a une marge d'optimisation." },
      { type: "list", items: [
        "Formule simple : (Capacité de la batterie en Wh × % de batterie utilisé) / Distance parcourue en km.",
        "Exemple : Vous utilisez 250 Wh pour faire 10 km. Votre consommation est de 25 Wh/km.",
        "Une hausse progressive de ce chiffre sur plusieurs mois est souvent le premier signe que le SoH de votre batterie diminue."
      ]},
      { type: "h2", text: "Les 4 facteurs qui font exploser votre consommation" },
      { type: "list", items: [
        "La pression des pneus : Des pneus sous-gonflés augmentent la résistance au roulement. Vérifiez la pression chaque semaine (cause n°1 de surconsommation).",
        "Le poids total : Chaque kilo supplémentaire (sac à dos, bagages) demande plus d'énergie, surtout en côte.",
        "Le style de pilotage : Les démarrages brusques et les freinages suivis de ré-accélérations consomment beaucoup plus qu'une vitesse constante.",
        "Le niveau d'assistance : Passer du mode « Eco » au mode « Turbo » peut doubler votre consommation instantanée."
      ]},
      { type: "h2", text: "Comment mesurer votre consommation réelle avec BatLife" },
      { type: "p", text: "Il est fastidieux de faire ce calcul à la main après chaque sortie. BatLife automatise ce suivi pour vous :" },
      { type: "list", items: [
        "Saisissez vos données : Après votre trajet, entrez la distance et le niveau de batterie utilisé dans l'app.",
        "Calcul automatique : BatLife calcule instantanément votre consommation en Wh/km.",
        "Suivi dans le temps : Grâce à l'export CSV, vous pouvez suivre l'évolution de votre consommation mois après mois."
      ]},
      { type: "tip", text: "Faites un test de consommation avec des pneus bien gonflés et en mode Eco. Vous serez surpris de l'autonomie supplémentaire que vous pouvez gagner sans changer de batterie." },
      { type: "warning", text: "Ne comparez pas votre consommation avec celle des autres sans prendre en compte le relief, votre poids et la météo. Comparez-vous à vous-même sur le même trajet." }
    ]
  },
  {
    id: "decharge-seule",
    lang: "fr", 
    slug: "batterie-vae-se-decharge-toute-seule",
    title: "Batterie de vélo électrique qui se décharge toute seule : causes et solutions",
    description: "Votre batterie de VAE se vide à l'arrêt, entre deux sorties ? Voici les pertes normales, les causes anormales, et la méthode simple pour les distinguer.",
    date: "2026-11-17",
    readTime: 5,
    category: "Entretien",
    icon: "🪫",
    content: [
      { type: "p", text: "Vous laissez votre vélo quelques jours et la batterie a perdu 10, 20 ou 30 % ? Pas de panique : une partie de cette perte est parfaitement normale. Mais certaines chutes sont anormales et méritent un diagnostic. Voici comment faire la différence, et quoi faire dans chaque cas." },
      { type: "h2", text: "Ce qui est normal (et ce qui ne l'est pas)" },
      { type: "p", text: "Une batterie Li-Ion n'est jamais totalement « au repos » : ses cellules s'auto-déchargent légèrement, et les électroniques du vélo (BMS, console, antivol connecté…) continuent parfois de consommer. L'ordre de grandeur :" },
      { type: "list", items: [
        "2 à 5 % par mois : l'auto-décharge naturelle des cellules, à température ambiante. C'est normal.",
        "5 à 15 % par mois : la consommation des électroniques restées actives (BMS, display, tracker GPS, alarme). Courant, et évitable.",
        "10 % ou plus en quelques jours : anormal. Il faut chercher une cause, avec la méthode plus bas.",
        "Une perte rapide accompagnée de chaleur, d'odeur ou de gonflement : arrêtez tout et lisez l'encadré sécurité.",
      ]},
      { type: "h2", text: "Les causes les plus fréquentes" },
      { type: "list", items: [
        "La console restée active : sur certains modèles, le display continue de consommer tant qu'il est clipsé ; le retirer coupe l'alimentation.",
        "Les accessoires connectés : tracker GPS, antivol connecté, alarme ou éclairage alimentés par la batterie principale, même vélo éteint.",
        "Le vélo pas vraiment « endormi » : clé laissée sur ON, bouton d'alimentation non coupé, contrôleur encore sous tension.",
        "Le froid : une batterie froide affiche une capacité réduite temporairement. Ce n'est pas une décharge : elle « revient » à température ambiante.",
        "L'usure : cellules fatiguées ou déséquilibrées, BMS qui laisse fuir un peu de courant. La perte s'aggrave avec le temps.",
        "L'humidité sur les connecteurs : oxydation et micro-courants de fuite, surtout après un lavage ou un stockage humide.",
      ]},
      { type: "h2", text: "La méthode simple : le test des 48 heures" },
      { type: "list", items: [
        "Chargez à 100 %, laissez reposer 30 minutes, puis notez la tension au repos (BatLife, mode expert) ou le pourcentage affiché.",
        "Retirez la batterie du vélo si elle est amovible, et stockez-la à température ambiante, sans rien de branché dessus.",
        "Attendez 48 heures, puis mesurez à nouveau dans les mêmes conditions.",
        "Comparez : perte de 1–2 % maximum → la batterie va bien, c'est le vélo qui consommait. Perte de 5 % ou plus, batterie isolée → la batterie elle-même est en cause.",
      ]},
      { type: "tip", text: "Notez la tension au repos plutôt que le pourcentage : c'est la mesure la plus fiable. L'outil Calibration de BatLife la convertit en charge réelle, et chaque mesure enregistrée construit votre historique." },
      { type: "h2", text: "Les solutions selon la cause" },
      { type: "list", items: [
        "Électroniques qui consomment : retirez la console au stationnement, désactivez les accessoires connectés, vérifiez la position de la clé.",
        "Stationnement prolongé : retirez la batterie et stockez-la autour de 45 % de charge, au frais et au sec — c'est exactement le mode d'hivernage.",
        "Froid : rentrez la batterie à l'intérieur et attendez qu'elle revienne à température ambiante avant de juger sa charge (et avant de la charger).",
        "Connecteurs humides ou oxydés : séchez, nettoyez les contacts, stockez dans un endroit sec.",
        "Batterie en cause (perte rapide même isolée) : faites-la examiner par un professionnel. N'ouvrez jamais une batterie de VAE vous-même.",
      ]},
      { type: "warning", text: "Une batterie qui se vide très vite ET chauffe, sent le solvant ou gonfle présente un risque d'emballement thermique. Ne la rechargez pas, stockez-la à l'extérieur loin de tout matériau inflammable, et faites-la examiner rapidement." },
      { type: "h2", text: "Et le SoH dans tout ça ?" },
      { type: "p", text: "Une auto-décharge qui augmente au fil des mois peut être un signe de vieillissement : c'est une information précieuse sur l'état réel de votre batterie. En enregistrant régulièrement la tension au repos dans BatLife, vous voyez la tendance sur la durée — bien plus parlant qu'une mesure isolée — et le SoH se calcule cycle après cycle." },
      { type: "tip", text: "Attention au faux diagnostic : si le pourcentage chute brutalement mais que la tension au repos reste bonne, c'est la jauge qui dérive, pas la batterie. Un recalibrage suffit souvent — voir notre guide de calibration." },
    ],
  },
    {
    id: "battery-drains-itself",
    lang: "en",
    slug: "ebike-battery-drains-itself",
    title: "Electric bike battery draining on its own: causes and solutions",
    description: "Your e-bike battery loses charge when parked? Here's what's normal, what's not, and a simple 48-hour test to tell the difference.",
    date: "2026-11-17",
    readTime: 5,
    category: "Maintenance",
    icon: "🪫",
    content: [
      { type: "p", text: "You leave your bike for a few days and the battery has lost 10, 20 or 30%? Don't panic: some of this loss is perfectly normal. But some drops are abnormal and deserve a diagnosis. Here's how to tell the difference, and what to do in each case." },
      { type: "h2", text: "What's normal (and what's not)" },
      { type: "p", text: "A Li-Ion battery is never truly 'at rest': its cells self-discharge slightly, and the bike's electronics (BMS, display, connected lock…) sometimes keep drawing power. Here are the orders of magnitude:" },
      { type: "list", items: [
        "2 to 5% per month: natural self-discharge of the cells at room temperature. This is normal.",
        "5 to 15% per month: consumption by electronics left active (BMS, display, GPS tracker, alarm). Common, and avoidable.",
        "10% or more in a few days: abnormal. You need to look for a cause, using the method below.",
        "A rapid loss accompanied by heat, smell or swelling: stop everything and read the safety box."
      ]},
      { type: "h2", text: "The most common causes" },
      { type: "list", items: [
        "The display left active: on some models, the display keeps drawing power as long as it's clipped on; removing it cuts the power.",
        "Connected accessories: GPS tracker, connected lock, alarm or lights powered by the main battery, even when the bike is off.",
        "The bike not truly 'asleep': key left on ON, power button not switched off, controller still powered.",
        "Cold: a cold battery temporarily shows reduced capacity. This is not a discharge: it 'comes back' at room temperature.",
        "Wear: tired or unbalanced cells, a BMS that lets a little current leak. The loss worsens over time.",
        "Moisture on the connectors: oxidation and micro-leakage currents, especially after washing or damp storage."
      ]},
      { type: "h2", text: "The simple method: the 48-hour test" },
      { type: "list", items: [
        "Charge to 100%, let it rest for 30 minutes, then note the resting voltage (BatLife, expert mode) or the displayed percentage.",
        "Remove the battery from the bike if it's removable, and store it at room temperature with nothing plugged in.",
        "Wait 48 hours, then measure again under the same conditions.",
        "Compare: a loss of 1–2% maximum → the battery is fine, it was the bike drawing power. A loss of 5% or more, with the battery isolated → the battery itself is the cause."
      ]},
      { type: "tip", text: "Note the resting voltage rather than the percentage: it's the most reliable measurement. BatLife's Calibration tool converts it into actual charge, and each recorded measurement builds your history." },
      { type: "h2", text: "Solutions depending on the cause" },
      { type: "list", items: [
        "Electronics drawing power: remove the display when parked, disable connected accessories, check the key position.",
        "Extended parking: remove the battery and store it at around 45% charge, cool and dry — this is exactly the winter storage mode.",
        "Cold: bring the battery indoors and wait until it returns to room temperature before judging its charge (and before charging it).",
        "Damp or oxidized connectors: dry them, clean the contacts, store in a dry place.",
        "Battery at fault (rapid loss even when isolated): have it examined by a professional. Never open an e-bike battery yourself."
      ]},
      { type: "warning", text: "A battery that drains very quickly AND heats up, smells of solvent or swells presents a risk of thermal runaway. Do not recharge it, store it outdoors away from any flammable material, and have it examined quickly." },
      { type: "h2", text: "And what about SoH in all this?" },
      { type: "p", text: "A self-discharge that increases over the months can be a sign of ageing: it's valuable information about the real state of your battery. By regularly recording the resting voltage in BatLife, you see the trend over time — far more telling than an isolated measurement — and the SoH is calculated cycle after cycle." },
      { type: "tip", text: "Beware of false diagnoses: if the percentage drops suddenly but the resting voltage remains good, it's the gauge drifting, not the battery. A recalibration is often enough — see our calibration guide." }
    ]
  },
  {
    id: "duree-vie",
    lang: "fr", 
    slug: "duree-vie-batterie-vae",
    title: "Durée de vie d'une batterie de vélo électrique : ce qui l'use vraiment",
    description: "Combien d'années et de cycles espérer d'une batterie de VAE ? Ce qui l'use au quotidien, les signes d'usure, et comment repousser le remplacement.",
    date: "2026-11-16",
    readTime: 5,
    category: "Comprendre",
    icon: "⏳",
    content: [
      { type: "p", text: "C'est la question n°1 des propriétaires de vélo électrique, et pour cause : une batterie de remplacement coûte entre 400 et 900 €. La bonne nouvelle, c'est qu'à modèle identique, la durée de vie peut varier du simple au double selon la façon dont on la traite. Voici ce qu'il faut savoir pour être dans le bon camp." },
      { type: "h2", text: "Combien de temps dure une batterie de VAE ?" },
      { type: "p", text: "Deux horloges tournent en parallèle : les cycles de charge et le calendrier. Une batterie Li-Ion de vélo électrique supporte généralement 500 à 1 000 cycles complets avant de descendre sous 80 % de sa capacité d'origine, et vieillit de toute façon en 4 à 7 ans, même si vous roulez peu." },
      { type: "list", items: [
        "500 à 1 000 cycles complets : c'est la plage où la plupart des batteries de VAE gardent au moins 80 % de leur capacité.",
        "4 à 7 ans : la chimie vieillit aussi au repos (c'est le vieillissement « calendaire »), même sans rouler.",
        "Un cycle = 100 % d'énergie cumulée, pas un branchement : deux charges de 50 % comptent pour un seul cycle.",
        "80 % de capacité ne veut pas dire « morte » : la batterie fonctionne encore, simplement avec moins d'autonomie.",
      ]},
      { type: "tip", text: "BatLife compte vos cycles à chaque charge enregistrée et estime votre SoH (indice de santé) avec un indice de confiance. Vous savez ainsi où vous en êtes réellement, plutôt que de deviner." },
      { type: "h2", text: "Ce qui l'use le plus vite" },
      { type: "list", items: [
        "La chaleur : charger ou stocker en plein soleil, ou dans un garage à 35 °C, accélère fortement le vieillissement.",
        "Rester à 100 % plusieurs jours d'affilée : c'est l'état où la chimie Li-Ion est la plus sous tension.",
        "Les décharges profondes répétées : descendre régulièrement sous 10–15 % fatigue les cellules.",
        "Charger par température négative : en dessous de 0 °C, un dépôt de lithium irréversible se forme.",
        "Un chargeur inadapté : tension ou connectique incorrectes, chargeur bas de gamme sans coupure fiable.",
      ]},
      { type: "warning", text: "La combinaison la plus destructrice : une batterie stockée pleine (100 %) dans un endroit chaud, pendant des semaines. C'est typiquement le vélo laissé au garage tout l'été… ou mal hiverné." },
      { type: "h2", text: "Les signes d'une batterie qui fatigue" },
      { type: "list", items: [
        "L'autonomie fond à parcours égal : vous faisiez 60 km, vous en faites 40.",
        "Le pourcentage chute brutalement (de 30 % à 5 % d'un coup) : souvent la jauge qui dérive, pas la batterie.",
        "La charge semble plus rapide qu'avant : la capacité réelle a diminué, le « plein » arrive plus vite.",
        "Des coupures en côte ou à l'accélération : le BMS protège des cellules faibles.",
      ]},
      { type: "p", text: "Avant de conclure que la batterie est usée, pensez à recalibrer la jauge : après des mois de charges partielles, l'indicateur peut afficher n'importe quoi alors que la batterie va bien. Notre guide de calibration explique la méthode en 4 étapes." },
      { type: "h2", text: "Comment prolonger sa durée de vie" },
      { type: "list", items: [
        "Au quotidien, visez la zone 20–80 % quand c'est possible ; faites le plein complet juste avant de partir, pas la veille.",
        "Pour un arrêt prolongé, stockez autour de 45 % de charge, au frais et au sec (10–20 °C).",
        "Vérifiez la tension toutes les 4 à 6 semaines pendant un stockage, et redonnez un complément si besoin.",
        "Chargez à température ambiante, jamais en plein soleil ni par grand froid.",
        "Utilisez toujours le chargeur d'origine ou un modèle strictement compatible.",
      ]},
      { type: "tip", text: "Le mode ❄️ Hivernage de BatLife calcule pour vous la tension cible et le temps de charge nécessaire pour atteindre la zone de stockage idéale. Voir notre guide hivernage pour le pas-à-pas." },
      { type: "h2", text: "Quand faut-il la remplacer ?" },
      { type: "p", text: "Il n'y a pas de date limite : tout dépend de votre usage. Sous 70–75 % de SoH, l'autonomie devient nettement réduite ; si elle ne couvre plus vos trajets quotidiens, le remplacement se discute. Comptez 400 à 900 € selon la capacité, ou moins avec le reconditionnement (remplacement des cellules par un spécialiste — qualité variable, choisissez un professionnel établi)." },
      { type: "p", text: "Et si vous revendez votre vélo, une batterie suivie se valorise : le certificat PDF de BatLife prouve l'historique d'entretien réel, ce qui rassure l'acheteur et défend votre prix." },
      { type: "warning", text: "Le meilleur réflexe reste de suivre sa batterie dès le premier jour : enregistrez vos charges dans BatLife, le SoH se calcule cycle après cycle, et vous savez toujours où en est votre batterie. Gratuit, sans compte, et vos données restent sur votre appareil." },
    ],
  },
  {
    id: "installation" ,
    lang: "fr",
    slug: "installer-batlife-iphone-android",
    title: "Installer BatLife sur iPhone et Android : le guide complet",
    description: "BatLife fonctionne sur iPhone, Android et ordinateur. Voici comment l'installer en moins d'une minute, sans passer par l'App Store.",
    date: "2026-11-15",
    readTime: 4,
    category: "Tutoriels",
    icon: "📱",
    content: [
      { type: "p", text: "Bonne nouvelle : BatLife n'est pas réservée à Android. L'application fonctionne aussi parfaitement sur iPhone, iPad et ordinateur. Comme il s'agit d'une application web progressive (PWA), elle s'installe directement depuis votre navigateur, en moins d'une minute." },
      { type: "h2", text: "Sur iPhone et iPad (iOS)" },
      { type: "list", items: [
        "Ouvrez Safari (le navigateur d'Apple) et allez sur batlife.app.",
        "Touchez l'icône Partager (le carré avec une flèche vers le haut).",
        "Faites défiler le menu et choisissez « Ajouter à l'écran d'accueil ».",
        "Validez avec « Ajouter » : l'icône BatLife apparaît sur votre écran d'accueil.",
      ]},
      { type: "p", text: "Vous pouvez ensuite lancer BatLife comme n'importe quelle application : elle s'ouvre en plein écran, avec vos données conservées sur l'appareil." },
      { type: "tip", text: "Sur iPhone, l'installation passe obligatoirement par Safari. Chrome et Firefox sur iOS ne proposent pas l'option « Ajouter à l'écran d'accueil »." },
      { type: "h2", text: "Sur Android" },
            { type: "list", items: [
        "En PWA (comme sur iPhone) : ouvrez batlife.app dans Chrome, puis menu ⋮ → « Installer l'application » ou « Ajouter à l'écran d'accueil ».",
        "Ou via le Google Play Store : recherchez BatLife et installez l'app Android (la même application que la version web).",
      ]},
      { type: "h2", text: "Sur ordinateur (Windows, Mac, Linux)" },
      { type: "p", text: "Ouvrez batlife.app dans Chrome ou Edge. Cliquez sur l'icône d'installation dans la barre d'adresse pour ajouter BatLife comme application, ou utilisez-la directement dans le navigateur." },
      { type: "h2", text: "Pourquoi une application web (PWA) ?" },
      { type: "list", items: [
        "Légère : pas de téléchargement lourd, pas de compte à créer.",
        "Toujours à jour : les mises à jour sont automatiques, sans manipulation.",
        "Données 100 % locales : votre historique reste sur votre appareil, rien sur un serveur.",
        "Fonctionne hors-ligne : vos données restent accessibles même sans connexion.",
        "Gratuite et sans publicité.",
      ]},
      { type: "warning", text: "Avant de changer de téléphone, pensez à exporter votre Passeport BatLife (JSON) depuis l'application pour conserver votre historique de suivi." },
      { type: "tip", text: "Une fois installée, retrouvez le mode ❄️ Hivernage sur l'accueil pour préparer votre batterie à l'hiver, avec le temps de charge estimé." },
    ],
  },
  {
    id: "calibration" ,
    lang: "fr" ,
    slug: "calibrer-sa-batterie-vae",
    title: "Calibrer sa batterie VAE : le guide complet",
    description: "Pourquoi votre indicateur de charge dérive, et comment le recalibrer simplement en 4 étapes.",
    date: "2026-11-10",
    readTime: 5,
    category: "Tutoriels",
    icon: "🎯",
    content: [
      { type: "p", text: "Après plusieurs mois de charges partielles, il arrive que le pourcentage affiché par votre vélo ne corresponde plus à la réalité : il chute brutalement de 30 % à 5 %, ou reste bloqué à 100 % pendant longtemps. Ce n'est généralement pas la batterie qui est en cause, mais son indicateur qui a besoin d'être recalibré." },
      { type: "h2", text: "Pourquoi l'indicateur dérive" },
      { type: "p", text: "Le BMS (le circuit de gestion de la batterie) estime la charge en comptant l'énergie qui entre et qui sort. À force de cycles partiels, cette estimation accumule une petite erreur. La calibration consiste à lui redonner deux repères fiables : le plein complet et le bas de la plage." },
      { type: "h2", text: "La méthode pas à pas" },
      { type: "list", items: [
        "Chargez la batterie à 100 %, jusqu'à ce que le chargeur coupe de lui-même.",
        "Laissez-la reposer 30 minutes, puis notez la tension au repos dans BatLife (Outils → Calibration).",
        "Roulez normalement jusqu'à environ 10–15 %, sans forcer la décharge.",
        "Rechargez complètement en une seule fois, sans interruption.",
      ]},
      { type: "tip", text: "L'outil Calibration de BatLife convertit automatiquement la tension au repos en pourcentage réel, pour vérifier que la jauge est cohérente." },
      { type: "h2", text: "À quelle fréquence ?" },
      { type: "p", text: "Une calibration tous les 20 à 30 cycles suffit, ou dès que le pourcentage vous semble incohérent. Inutile de le faire à chaque charge : les cycles complets répétés usent prématurément la batterie." },
      { type: "warning", text: "Ne descendez jamais volontairement jusqu'à 0 %. Arrêtez-vous aux premiers signes de faiblesse (perte de puissance, voyant bas). Une décharge profonde est l'un des pires ennemis du Li-Ion." },
    ],
  },
  {
    id: "hivernage" ,
    lang: "fr" ,
    slug: "hivernage-batterie-vae",
    title: "Hivernage : conserver sa batterie pendant l'hiver",
    description: "Niveau de charge, température, fréquence de vérification : les bons réflexes pour retrouver une batterie saine au printemps. Nouveau : BatLife calcule votre temps de charge d'hivernage.",
    date: "2026-11-14",
    readTime: 5,
    category: "Entretien",
    icon: "❄️",
    content: [
      { type: "p", text: "Une batterie stockée pleine ou vide pendant plusieurs mois vieillit beaucoup plus vite. L'hivernage consiste à la placer dans son état de confort : mi-charge, au frais et au sec, avec une petite vérification régulière." },
      { type: "h2", text: "Le niveau de charge idéal" },
      { type: "p", text: "Visez 40 à 60 % de charge. Dans BatLife, la cible d'hivernage est d'environ 45 %, soit environ 47 V au repos pour une batterie 48 V, ou 35 V pour une 36 V. C'est la zone où la chimie Li-Ion est la plus stable." },
      { type: "h2", text: "Nouveau : le mode Hivernage dans le suivi de charge" },
      { type: "p", text: "Depuis la dernière mise à jour, plus besoin de calculer vous-même : sur l'écran d'accueil, choisissez le mode ❄️ Hivernage, puis entrez votre charge actuelle. BatLife affiche immédiatement la tension cible et le temps de charge estimé avec votre chargeur." },
      { type: "list", items: [
        "Ouvrez l'accueil et sélectionnez ❄️ Hivernage dans « Mode de charge ».",
        "Entrez votre tension (mode expert) ou votre pourcentage actuel.",
        "Lisez la cible (≈ 45 %) et le temps estimé, par exemple « 1 h 24 ».",
        "Lancez le suivi : BatLife affiche la progression jusqu'à la cible d'hivernage.",
      ]},
      { type: "h2", text: "Température et lieu de stockage" },
      { type: "list", items: [
        "Idéalement entre 10 et 20 °C, dans un endroit sec.",
        "Évitez le garage non isolé en plein hiver et le plein soleil derrière une vitre.",
        "Si possible, retirez la batterie du vélo et stockez-la à l'intérieur.",
        "Éloignez-la de tout matériau inflammable, par précaution.",
      ]},
      { type: "h2", text: "Vérifier pendant l'hiver" },
      { type: "p", text: "Contrôlez la tension toutes les 4 à 6 semaines et redonnez un petit complément si elle descend sous la cible. BatLife vous alerte automatiquement après 33 jours sans vérification d'équilibrage." },
      { type: "tip", text: "Deux outils complémentaires : le mode ❄️ Hivernage (Accueil) pour charger au bon niveau avec le temps estimé, et le Diagnostic hivernage (Outils) pour vérifier rapidement si vous êtes dans la bonne zone." },
      { type: "warning", text: "Ne chargez jamais une batterie dont la température est inférieure à 0 °C. Laissez-la d'abord revenir à température ambiante : charger à froid provoque un dépôt de lithium irréversible." },
    ],
  },
  {
    id: "soh" ,
    lang: "fr" ,
    slug: "comprendre-le-soh",
    title: "Comprendre le SoH : l'indice de santé de votre batterie",
    description: "Ce que mesure le SoH, comment BatLife l'estime, et pourquoi c'est utile pour la revente de votre vélo.",
    date: "2026-10-28",
    readTime: 4,
    category: "Comprendre",
    icon: "🔋",
    content: [
      { type: "p", text: "Le SoH (State of Health, ou état de santé) exprime la capacité réelle de votre batterie par rapport à sa capacité d'origine. Un SoH de 90 % signifie qu'elle peut encore stocker environ 90 % de l'énergie de ses premiers jours." },
      { type: "h2", text: "Comment BatLife l'estime" },
      { type: "p", text: "BatLife compare la capacité mesurée lors de vos cycles de charge avec la capacité nominale de votre batterie. Plus vous enregistrez de cycles complets et cohérents, plus l'indice de confiance (Faible / Moyen / Fort) est élevé. C'est une estimation indicative, pas un diagnostic de laboratoire." },
      { type: "h2", text: "Pourquoi c'est utile" },
      { type: "list", items: [
        "Anticiper le remplacement : sous 70–75 % de SoH, l'autonomie devient nettement réduite.",
        "Valoriser la revente : le certificat PDF de suivi prouve l'entretien réel de la batterie.",
        "Détecter un vieillissement anormal : une chute rapide doit alerter (chargeur inadapté, chaleur, décharges profondes).",
      ]},
      { type: "h2", text: "Préserver son SoH au quotidien" },
      { type: "list", items: [
        "Évitez de laisser la batterie à 100 % plusieurs jours d'affilée.",
        "Évitez les décharges profondes répétées sous 10–15 %.",
        "Chargez à température modérée, jamais en plein soleil ou par grand froid.",
        "Pour un stockage long, placez-vous autour de 45 % de charge.",
      ]},
      { type: "tip", text: "Retrouvez l'explication du calcul directement dans l'app, onglet Coach, et exportez votre certificat PDF depuis l'onglet Stats." },
    ],
  },
    {
    id: "lifespan-en",
    lang: "en",
    slug: "ebike-battery-lifespan",
    title: "E-bike battery lifespan: what really wears it out",
    description: "How many years and cycles can you expect from an e-bike battery? What wears it out daily, signs of wear, and how to delay replacement.",
    date: "2026-11-16",
    readTime: 5,
    category: "Understanding",
    icon: "⏳",
    content: [
      { type: "p", text: "This is the #1 question for e-bike owners, and for good reason: a replacement battery costs between $400 and $900. The good news is that for the same model, lifespan can vary from single to double depending on how you treat it. Here's what you need to know to be on the right side." },
      { type: "h2", text: "How long does an e-bike battery last?" },
      { type: "p", text: "Two clocks are ticking in parallel: charge cycles and the calendar. A Li-Ion e-bike battery generally supports 500 to 1,000 full cycles before dropping below 80% of its original capacity, and it ages anyway in 4 to 7 years, even if you rarely ride." },
      { type: "list", items: [
        "500 to 1,000 full cycles: the range where most e-bike batteries retain at least 80% of their capacity.",
        "4 to 7 years: the chemistry also ages at rest (this is 'calendar aging'), even without riding.",
        "One cycle = 100% cumulative energy, not one plug-in: two 50% charges count as a single cycle.",
        "80% capacity does not mean 'dead': the battery still works, simply with less range."
      ]},
      { type: "tip", text: "BatLife counts your cycles with every recorded charge and estimates your SoH (State of Health) with a confidence index. This way, you know exactly where you stand, rather than guessing." },
      { type: "h2", text: "What wears it out the fastest" },
      { type: "list", items: [
        "Heat: charging or storing in direct sunlight, or in a garage at 95°F (35°C), strongly accelerates aging.",
        "Staying at 100% for several days in a row: this is the state where Li-Ion chemistry is under the most stress.",
        "Repeated deep discharges: regularly dropping below 10–15% fatigues the cells.",
        "Charging in sub-zero temperatures: below 32°F (0°C), irreversible lithium plating occurs.",
        "An unsuitable charger: incorrect voltage or connectivity, or a low-end charger without reliable cutoff."
      ]},
      { type: "warning", text: "The most destructive combination: a battery stored fully charged (100%) in a warm place for weeks. This is typically a bike left in the garage all summer... or poorly stored for winter." },
      { type: "h2", text: "Signs of a tiring battery" },
      { type: "list", items: [
        "Range melts on equal routes: you used to do 60 km, now you do 40.",
        "The percentage drops abruptly (from 30% to 5% at once): often the gauge drifting, not the battery itself.",
        "Charging seems faster than before: actual capacity has decreased, so 'full' is reached quicker.",
        "Cut-outs on hills or during acceleration: the BMS is protecting weak cells."
      ]},
      { type: "p", text: "Before concluding the battery is worn out, consider recalibrating the gauge: after months of partial charges, the indicator can display anything while the battery is actually fine. Our calibration guide explains the 4-step method." },
      { type: "h2", text: "How to extend its lifespan" },
      { type: "list", items: [
        "Daily, aim for the 20–80% zone when possible; top up to full just before leaving, not the night before.",
        "For extended storage, store around 45% charge, cool and dry (50–68°F / 10–20°C).",
        "Check the voltage every 4 to 6 weeks during storage, and top up if needed.",
        "Charge at room temperature, never in direct sunlight or in severe cold.",
        "Always use the original charger or a strictly compatible model."
      ]},
      { type: "tip", text: "BatLife's ❄️ Winter Storage mode calculates the target voltage and charging time needed to reach the ideal storage zone for you. See our winter storage guide for the step-by-step." },
      { type: "h2", text: "When should you replace it?" },
      { type: "p", text: "There is no expiration date: it all depends on your usage. Below 70–75% SoH, range becomes noticeably reduced; if it no longer covers your daily trips, replacement is worth discussing. Count $400 to $900 depending on capacity, or less with repurposing (cell replacement by a specialist — variable quality, choose an established professional)." },
      { type: "p", text: "And if you resell your bike, a tracked battery holds its value: BatLife's PDF certificate proves the real maintenance history, which reassures the buyer and defends your price." },
      { type: "warning", text: "The best habit is to track your battery from day one: record your charges in BatLife, SoH is calculated cycle after cycle, and you always know where your battery stands. Free, no account, and your data stays on your device." }
    ]
  },
  {
    id: "installation-en",
    lang: "en",
    slug: "install-batlife-iphone-android",
    title: "Installing BatLife on iPhone and Android: the complete guide",
    description: "BatLife works on iPhone, Android, and desktop. Here's how to install it in under a minute, without going through the App Store.",
    date: "2026-11-15",
    readTime: 4,
    category: "Tutorials",
    icon: "📱",
    content: [
      { type: "p", text: "Good news: BatLife is not reserved for Android. The application works perfectly on iPhone, iPad, and desktop. As it is a Progressive Web App (PWA), it installs directly from your browser in under a minute." },
      { type: "h2", text: "On iPhone and iPad (iOS)" },
      { type: "list", items: [
        "Open Safari (Apple's browser) and go to batlife.app.",
        "Tap the Share icon (the square with an upward arrow).",
        "Scroll down the menu and choose 'Add to Home Screen'.",
        "Confirm with 'Add': the BatLife icon appears on your home screen."
      ]},
      { type: "p", text: "You can then launch BatLife like any other app: it opens full screen, with your data kept on the device." },
      { type: "tip", text: "On iPhone, installation must go through Safari. Chrome and Firefox on iOS do not offer the 'Add to Home Screen' option." },
      { type: "h2", text: "On Android" },
      { type: "list", items: [
        "As a PWA (like on iPhone): open batlife.app in Chrome, then tap the menu ⋮ → 'Install app' or 'Add to Home screen'.",
        "Or via the Google Play Store: search for BatLife and install the Android app (the same application as the web version)."
      ]},
      { type: "h2", text: "On desktop (Windows, Mac, Linux)" },
      { type: "p", text: "Open batlife.app in Chrome or Edge. Click the install icon in the address bar to add BatLife as an app, or use it directly in the browser." },
      { type: "h2", text: "Why a web app (PWA)?" },
      { type: "list", items: [
        "Lightweight: no heavy download, no account to create.",
        "Always up to date: updates are automatic, no manual action required.",
        "100% local data: your history stays on your device, nothing on a server.",
        "Works offline: your data remains accessible even without a connection.",
        "Free and ad-free."
      ]},
      { type: "warning", text: "Before changing phones, remember to export your BatLife Passport (JSON) from the app to keep your tracking history." },
      { type: "tip", text: "Once installed, find the ❄️ Winter Storage mode on the home screen to prepare your battery for winter, with estimated charging time." }
    ]
  },
  {
    id: "calibration-en",
    lang: "en",
    slug: "calibrate-ebike-battery",
    title: "Calibrating your e-bike battery: the complete guide",
    description: "Why your charge indicator drifts, and how to simply recalibrate it in 4 steps.",
    date: "2026-11-10",
    readTime: 5,
    category: "Tutorials",
    icon: "🎯",
    content: [
      { type: "p", text: "After several months of partial charges, the percentage displayed by your bike may no longer match reality: it drops abruptly from 30% to 5%, or stays stuck at 100% for a long time. It is usually not the battery at fault, but its indicator that needs recalibrating." },
      { type: "h2", text: "Why the indicator drifts" },
      { type: "p", text: "The BMS (Battery Management System) estimates the charge by counting the energy going in and out. After many partial cycles, this estimate accumulates a small error. Calibration consists of giving it two reliable reference points again: a full charge and the bottom of the range." },
      { type: "h2", text: "The step-by-step method" },
      { type: "list", items: [
        "Charge the battery to 100%, until the charger cuts off by itself.",
        "Let it rest for 30 minutes, then note the resting voltage in BatLife (Tools → Calibration).",
        "Ride normally until about 10–15%, without forcing the discharge.",
        "Recharge completely in a single go, without interruption."
      ]},
      { type: "tip", text: "BatLife's Calibration tool automatically converts the resting voltage into actual percentage, to verify that the gauge is consistent." },
      { type: "h2", text: "How often?" },
      { type: "p", text: "A calibration every 20 to 30 cycles is enough, or as soon as the percentage seems inconsistent. No need to do it at every charge: repeated full cycles prematurely wear out the battery." },
      { type: "warning", text: "Never intentionally drain down to 0%. Stop at the first signs of weakness (power loss, low light). A deep discharge is one of the worst enemies of Li-Ion." }
    ]
  },
  {
    id: "winter-storage-en",
    lang: "en",
    slug: "ebike-battery-winter-storage",
    title: "Winter storage: how to keep your battery healthy during winter",
    description: "Charge level, temperature, check frequency: the right habits to find a healthy battery in spring. New: BatLife calculates your winter charging time.",
    date: "2026-11-14",
    readTime: 5,
    category: "Maintenance",
    icon: "❄️",
    content: [
      { type: "p", text: "A battery stored full or empty for several months ages much faster. Winter storage consists of placing it in its comfort state: half-charged, cool and dry, with a small regular check." },
      { type: "h2", text: "The ideal charge level" },
      { type: "p", text: "Aim for 40 to 60% charge. In BatLife, the winter storage target is around 45%, which is about 47V at rest for a 48V battery, or 35V for a 36V battery. This is the zone where Li-Ion chemistry is most stable." },
      { type: "h2", text: "New: Winter Storage mode in charge tracking" },
      { type: "p", text: "Since the latest update, no need to calculate it yourself: on the home screen, choose the ❄️ Winter Storage mode, then enter your current charge. BatLife immediately displays the target voltage and estimated charging time with your charger." },
      { type: "list", items: [
        "Open the home screen and select ❄️ Winter Storage in 'Charge Mode'.",
        "Enter your voltage (expert mode) or your current percentage.",
        "Read the target (≈ 45%) and the estimated time, for example '1 h 24'.",
        "Start tracking: BatLife displays the progress up to the winter storage target."
      ]},
      { type: "h2", text: "Temperature and storage location" },
      { type: "list", items: [
        "Ideally between 50 and 68°F (10 and 20°C), in a dry place.",
        "Avoid an uninsulated garage in the middle of winter and direct sunlight behind a window.",
        "If possible, remove the battery from the bike and store it indoors.",
        "Keep it away from any flammable material, as a precaution."
      ]},
      { type: "h2", text: "Checking during winter" },
      { type: "p", text: "Check the voltage every 4 to 6 weeks and give it a small top-up if it drops below the target. BatLife automatically alerts you after 33 days without a balancing check." },
      { type: "tip", text: "Two complementary tools: the ❄️ Winter Storage mode (Home) to charge to the right level with estimated time, and the Winter Diagnostic (Tools) to quickly check if you are in the right zone." },
      { type: "warning", text: "Never charge a battery whose temperature is below 32°F (0°C). Let it return to room temperature first: charging in the cold causes irreversible lithium plating." }
    ]
  },
  {
    id: "soh-en",
    lang: "en",
    slug: "understand-ebike-battery-soh",
    title: "Understanding SoH: your battery's health index",
    description: "What SoH measures, how BatLife estimates it, and why it's useful for reselling your bike.",
    date: "2026-10-28",
    readTime: 4,
    category: "Understanding",
    icon: "🔋",
    content: [
      { type: "p", text: "SoH (State of Health) expresses the actual capacity of your battery compared to its original capacity. An SoH of 90% means it can still store about 90% of the energy of its early days." },
      { type: "h2", text: "How BatLife estimates it" },
      { type: "p", text: "BatLife compares the capacity measured during your charge cycles with the nominal capacity of your battery. The more complete and consistent cycles you record, the higher the confidence index (Low / Medium / High). This is an indicative estimate, not a laboratory diagnosis." },
      { type: "h2", text: "Why it's useful" },
      { type: "list", items: [
        "Anticipate replacement: below 70–75% SoH, range becomes noticeably reduced.",
        "Boost resale value: the PDF tracking certificate proves the real maintenance of the battery.",
        "Detect abnormal aging: a rapid drop should raise an alert (unsuitable charger, heat, deep discharges)."
      ]},
      { type: "h2", text: "Preserving your SoH daily" },
      { type: "list", items: [
        "Avoid leaving the battery at 100% for several days in a row.",
        "Avoid repeated deep discharges below 10–15%.",
        "Charge at moderate temperatures, never in direct sunlight or in severe cold.",
        "For long-term storage, keep it around 45% charge."
      ]},
      { type: "tip", text: "Find the calculation explanation directly in the app, Coach tab, and export your PDF certificate from the Stats tab." }
    ]
  }
];

export default articles;