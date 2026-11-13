// Pour ajouter une vidéo dans un article, insère ce bloc dans "content" :
// { type: "video", videoId: "ID_YOUTUBE", title: "Titre de la vidéo" }

const articles = [
  {
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
    slug: "hivernage-batterie-vae",
    title: "Hivernage : conserver sa batterie pendant l'hiver",
    description: "Niveau de charge, température, fréquence de vérification : les bons réflexes pour retrouver une batterie saine au printemps.",
    date: "2026-11-06",
    readTime: 4,
    category: "Entretien",
    icon: "❄️",
    content: [
      { type: "p", text: "Une batterie stockée pleine ou vide pendant plusieurs mois vieillit beaucoup plus vite. L'hivernage consiste à la placer dans son état de confort : mi-charge, au frais et au sec, avec une petite vérification régulière." },
      { type: "h2", text: "Le niveau de charge idéal" },
      { type: "p", text: "Visez 40 à 60 % de charge. Dans BatLife, la cible d'hivernage est d'environ 45 %, soit 46,8 V au repos pour une batterie 48 V, ou 35,1 V pour une 36 V. C'est la zone où la chimie Li-Ion est la plus stable." },
      { type: "h2", text: "Température et lieu de stockage" },
      { type: "list", items: [
        "Idéalement entre 10 et 20 °C, dans un endroit sec.",
        "Évitez le garage non isolé en plein hiver et le plein soleil derrière une vitre.",
        "Si possible, retirez la batterie du vélo et stockez-la à l'intérieur.",
        "Éloignez-la de tout matériau inflammable, par précaution.",
      ]},
      { type: "h2", text: "Vérifier pendant l'hiver" },
      { type: "p", text: "Contrôlez la tension toutes les 4 à 6 semaines et redonnez un petit complément si elle descend sous la cible. BatLife vous alerte automatiquement après 33 jours sans vérification d'équilibrage." },
      { type: "tip", text: "Utilisez le Diagnostic hivernage (Outils) : entrez votre tension ou votre pourcentage, l'app vous dit immédiatement si vous êtes dans la bonne zone." },
      { type: "warning", text: "Ne chargez jamais une batterie dont la température est inférieure à 0 °C. Laissez-la d'abord revenir à température ambiante : charger à froid provoque un dépôt de lithium irréversible." },
    ],
  },
  {
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
];

export default articles;