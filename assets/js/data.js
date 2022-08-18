const appHome = document.querySelector(".appHome");
const teaOrInfusion = document.querySelector(".teaOrInfusion");
const teaTaste = document.querySelector(".teaTaste");
const teaColorChoice = document.querySelector(".teaColorChoice");
const infusionFamily = document.querySelector(".infusionFamily");
const infusionTaste = document.querySelector(".infusionTaste");
const rooibosTaste = document.querySelector(".rooibosTaste");
const wellnessTaste = document.querySelector(".wellnessTaste");
const previousBtn = document.querySelector(".previous");
const btnReload = document.querySelector('.btnReload');
const results = document.querySelector('.app__results');
const startBtn = document.querySelector(".startBtn");
const tasteBtn = document.querySelector('.tasteBtn');
const ResultsPreviousBtn = document.querySelector('.results__button--previous');
const resultBtnReload = document.querySelector('.results__button--reload');
const progressBlock = document.querySelector('.progressBlock');
const progressChoice = document.querySelector('.progressBlock__ProgressChoice');
const progressTaste = document.querySelector('.progressBlock__ProgressTaste');
const progressColor = document.querySelector('.progressBlock__ProgressColor');
const slider = document.querySelector('.slider')
const tasteChoice = document.querySelector('.allTastes');
const allTastesDiv = document.getElementById('allTastesIcons');
const resultTitle = document.querySelector('.results--title')


// Family values 
class Drink {
    constructor(name, backgroundColor) {
        this.name = name;
        this.backgroundColor = backgroundColor;
    }


   static progress(choice) {
        progressChoice.textContent = choice.name;
        progressChoice.style.backgroundColor = choice.backgroundColor;
    };

};

class Taste extends Drink {
    constructor(name, backgroundColor) {
        super(name, backgroundColor);}

    static progress(choice) {
        progressTaste.textContent = choice.name;
        progressTaste.style.backgroundColor = choice.backgroundColor;
    };

};
class Color extends Drink {
    constructor(name, backgroundColor,fontColor) {
        super(name, backgroundColor);
        this.fontColor = fontColor;
    }
    static progress(choice) {
        progressColor.textContent = choice.name;
        progressColor.style.backgroundColor = choice.backgroundColor;
        progressColor.style.color = choice.fontColor;
    };
};

const tea = new Drink("Thés",'#42994E');
const infusions = new Drink ('Infusions', '#F25C57')
const infusion = new Drink("Infusion",'#F25C57');
const rooibos = new Drink("Rooïbos",'#F5540F');
const wellness = new Drink("Bien-être",'#F5B36C');
const allTastes = new Drink('Tous les gouts','#2FC080')

const gourmet = new Taste("Gourmand","#F25C57");
const spicy = new Taste("Epicé", '#F2843A');
const floral = new Taste('Florale', '#F28DDC');
const fruitty = new Taste('Fruitté', '#B39D6F');
const nature = new Taste('Nature', '#42994E');
const all = new Taste('Tous', '#42994E');
const breath = new Taste('Respirer', '#B39D6F');
const lightLegs = new Taste('Jambes légères','#F2843A');
const toSleep = new Taste('Pour dormir','#F28DDC');
const breastFeeding = new Taste('Alaitement','#F25C57');
const looseWeight = new Taste('Perte de poids','#42994E');
const digestive = new Taste('Digestif','#B3C5F2');
const wellnessAll = new Taste('Toutes', '#B3C5F2');
const sugarLess = new Taste ('Sucre moins', '#42994E');
const mint = new Taste('Menthe', '#147501');
const jasmin = new Taste ('Jasmin', '#1D5902');
const mango = new Taste ('Mangue', '#D97904');
const orange = new Taste ('Orange', '#F29F05');
const raspberry = new Taste ('Framboise', '#D93D66');
const blueCornFlower = new Taste ('Bleuet', '#526AF2');
const vanilla = new Taste ('Vanille', '#785825');
const spice = new Taste ('Epicé', '#5A1F00');
const caramel = new Taste('Caramel', '#F28705');
const almond = new Taste('Amande', '#A65F46');
const nut = new Taste ('Noix', '#89725B');
const redBerries = new Taste ('Groseille', '#F22727');
const ginger = new Taste ('Gingembre', '#BF8C6F');
const lemon = new Taste ('Citron', '#F2D129');
const rose = new Taste('Rose', '#BF0426');
const plum = new Taste('Mirabelle', '#520316');
const lemongrass = new Taste('Citronelle','#607846');
const dates = new Taste('Dates','#590202');
const strawberry = new Taste ('Fraise', '#BF0413');
const leetchee = new Taste('Litchi','#BF4C41');
const pistachio = new Taste ('Pistache', '#A9BF04');
const pepper = new Taste ('Poivre', '#593C22');
const cloves = new Taste ('Clou de girofle', '#734945');
const peach = new Taste ('Pêche', '#F2C84B');
const apricot = new Taste ('Abricot', '#F28705');
const bergamote = new Taste ('Bergamote', '#55A603');
const chocolat = new Taste ('Chocolat', '#8C594D');
const smoked = new Taste ('Fumé', '#3D0100');
const papaya = new Taste ('Papaye','#F28705');
const orangeBlossom = new Taste('Fleur d\'oranger', '#F2790F');
const apple = new Taste('Pomme', '#598C0D');
const cannelle = new Taste('Cannelle','#A65F46');
const sourCream = new Taste('Crème fraîche', '#BFAE99');
const yuzu = new Taste('Yuzu', '#F2D129');
const pineapple = new Taste('Ananas', '#EBC354');
const coconut = new Taste('Noix de coco', '#A65F37');
const herbs = new Taste('Herbe', '#558C03');
const pomelos = new Taste('Pamplemousse','#A64F03');
const grenade = new Taste('Grenade','#590219');
const verbana = new Taste('Verveine','#B078BF');
const popcorn = new Taste('PopCorn','#F2D0A7');
const banana = new Taste('Banane','#F2B66D');
const hibiscus = new Taste('Hibiscus', '#f1f1f1');
const canneberge = new Taste('Canneberge', '#8C0303');
const orangeBerries = new Taste('Argousier','#F28705');
const fennel = new Taste('Fenouil', '#489C4A');
const thym = new Taste('Thym','#7C8C03');
const eucalyptus = new Taste('Eucalyptus', '#3B8C47');
const lavandin = new Taste('Lavandin','#7654BF');
const rosmary = new Taste('Romarin','#85A653');
const grappes = new Taste('Raisin','#87A646');
const anis = new Taste('Anis', '#732210');
const cumin = new Taste('Cumin', '#733E1F');
const mint2 = new Taste('Menthe poivrée', '#265902');
const bloodOrange = new Taste('Orange sanguine','#8C030E');


const black = new Color('Noir','#313634', '#f1f1f1');
const blue = new Color('Bleu', '#45A0F5', null);
const white = new Color('Blanc','#F1F1F1','black');
const puerh = new Color('Puerh','#9E5F18', null);
const green = new Color('Vert','#147533', null);
const teaAll = new Color('Tous','#147533', null);

/* MODEL

name: '',
family: '',
tastes: [],
colors: [],
linkImage: './assets/images/',
title: '',
description: '',
price: ,
 
*/

const allDrinks = [
    //greenMint
    {
        name: 'greenMint',
        family: 'tea',
        tastes: ['floral'],
        colors: ['green'],
        linkImage: './assets/images/greenteaMint.webp',
        title: 'The vert à la menthe',
        description: 'Intense, frais et authentique, ce thé vert à la menthe sous forme de sachets ne vous laissera pas indifférent. Au bureau ou en voyage vous pourrez l\'amener partout !',
        taste: ['mint'], 
        price: 6.5,
    },
    {
        name: 'greenJasmin',
        family: 'tea',
        tastes: ['floral'],
        colors: ['green'],
        linkImage: './assets/images/greenJasmin.webp',
        title: 'Thé au Jasmin',
        description: 'Les Fleurs de Jasmin sont cueillies immédiatement après la floraison et sont déposées dès le lendemain sur les feuilles de thé lors du flétrissage. Toutes les huiles essentielles des feuilles se gorgent ainsi des arômes délicats du jasmin pour un goût intense. Ce Thé vert au Jasmin est une merveille pour le palais.',
        taste: ['jasmin'], 
        price: 7.5,
    },
    {
        name: 'greenVolga',
        family: 'tea',
        tastes: ['fruitty'],
        colors: ['green'],
        linkImage: './assets/images/greenVolga.webp',
        title: 'Balade sur la Volga',
        description: 'Balade sur la Volga est un thé vert élégant et original. Issu d’un jardin de renom, il est agrémenté de dés de mangues et de zestes d’orange.',
        taste: ['mango', 'orange'], 
        price: 6,
    },
    {
        name: 'greenDouceFrance',
        family: 'tea',
        tastes: ['fruitty'],
        colors: ['green'],
        linkImage: './assets/images/greenDouceFrance.webp',
        title: 'Douce France',
        description: 'Le Douce France est une composition subtile de thé vert Sencha, framboises, et boutons de bleuets blancs. Cette création extrêmement raffinée vous envoûtera dès la première gorgée avec ses légères notes crémeuses.',
        taste: ['raspberry', 'blueCornFlower'], 
        price: 7.5,
    },
    {
        name: 'greenBourbonFlowers',
        family: 'tea',
        tastes: ['floral'],
        colors: ['green'],
        linkImage: './assets/images/greenBourbonFlowers.webp',
        title: 'Fleur de Bourbon',
        description: 'Fleur de Bourbon est un thé vert intemporel. Alliant la douceur du thé vert et les épices de la vanille, cette création gourmande saura ravir les palais les plus exigeants.',
        taste: ['vanilla'], 
        price: 6.5,
    },
    {
        name: 'greenGenmaicha',
        family: 'tea',
        tastes: ['nature'],
        colors: ['green'],
        linkImage: './assets/images/greenGenmaïcha.webp',
        title: 'Genmaïcha',
        description: 'Le Genmaïcha est un thé vert japonais surprenant. Composé de bancha et agrémenté de grains de blé et riz soufflé, il est idéal pour la digestion.',
        taste: [], 
        price: 12.5,
    },
    {
        name: 'greenMatcha',
        family: 'green',
        tastes: ['nature'],
        colors: ['green'],
        linkImage: './assets/images/greenMatcha.webp',
        title: 'Matcha',
        description: 'Le Matcha est un thé vert en poudre traditionnel aux multiples utilisations : pâtisserie, cuisine, infusion. Découvrez-le !',
        taste: [], 
        price: 9.5,
    },
    {
        name: 'greenMarrakech',
        family: 'tea',
        tastes: ['spicy'],
        colors: ['green'],
        linkImage: './assets/images/greenMarrakech.webp',
        title: 'Nuit à Marrakech',
        description: 'Ce thé vert Sencha est agrémenté de zestes d’orange, de badiane et de cardamone. Nuit à Marrakech est un thé magique et envoûtant aux notes de pain d\'épices.',
        taste: ['spice'], 
        price: 7,
    },
    {
        name: 'greenNy',
        family: 'tea',
        tastes: ['gourmet'],
        colors: ['green'],
        linkImage: './assets/images/greenNy.webp',
        title: 'Escale à New-York',
        description: 'Le thé Escale à New-York vous fera fondre grâce à ses notes caramélisées ! Avec son caramel, ses amandes et ses noix, découvrez une tasse gourmande à souhait ! Alors, qu\'attendez-vous pour le découvrir ? ',
        taste: ['caramel', 'almond', 'nut'], 
        price: 6.5,
    },
    {
        name: 'greenPondichery',
        family: 'tea',
        tastes: ['fruitty'],
        colors: ['green'],
        linkImage: './assets/images/greenPondichery.webp',
        title: 'Pondichery Chéri',
        description: 'Pondichery Chéri, une composition subtile de thé vert Sencha aux notes délicates de mirabelles et dés de mangues. Une tasse qui laisse entrevoir la douceur des îles du pacifique',
        taste: ['mango'], 
        price: 7.5,
    },
    {
        name: 'greenCasablanca',
        family: 'tea',
        tastes: ['floral'],
        colors: ['green'],
        linkImage: './assets/images/greenCasablanca.webp',
        title: 'Casablanca',
        description: 'Le thé vert Casablanca saura éveiller votre palais grâce à son bon goût de menthe. Une vraie dose de fraîcheur qui saura réveiller votre palais !',
        taste: ['mint', 'redBerries'], 
        price: 6.5,
    },
    {
        name: 'greenIndiaMemories',
        family: 'tea',
        tastes: ['fruitty'],
        colors: ['green'],
        linkImage: './assets/images/greenIndiaMemories.webp',
        title: 'Souvenir des Indes',
        description: 'Composé de gingembre, d\'écorces de citron et de fleurs de souci, le thé vert  Souvenir des Indes vous offre un véritable instant de fraîcheur qui saura vous dynamiser pour toute la journée.',
        taste: ['ginger', 'lemon'], 
        price: 7.5,
    },
    {
        name: 'greenRukeri',
        family: 'tea',
        tastes: ['nature'],
        colors: ['green'],
        linkImage: './assets/images/greenRukeri.webp',
        title: 'Op Rukeri',
        description: 'Originaire du Rwanda, le Op Rukeri est un thé rare aux notes citronnées, il se révèle aromatique et corsé aux accents frais et épicés',
        taste: [], 
        price: 12.50,
    },
    {
        name: 'greenSenchaLaiChau',
        family: 'tea',
        tastes: ['nature'],
        colors: ['green'],
        linkImage: './assets/images/greenSenchaLaiChau.webp',
        title: 'Sencha Lai Chau',
        description: 'Thé vert idéal pour la découverte du thé vietnamien, le Sencha Lai Chau est à la fois facile d\'accès et suffisamment complexe pour un grand moment de dégustation et de détente.',
        taste: [], 
        price: 10,
    },
    {
        name: 'greenAntiguaRosa',
        family: 'tea',
        tastes: ['fruitty', 'floral'],
        colors: ['green'],
        linkImage: './assets/images/greenAntiguaRosa.webp',
        title: 'Antigua Rosa',
        description: 'Antigua Rosa est un thé à la fois très fruité et délicat grâce à ses arômes de rose et ses fruits exotiques. Une vraie petite perle qu\'on aimera déguster en début d\'après-midi pour retrouver calme et poésie.',
        taste: ['rose', 'plum'], 
        price: 7.5,
    },
    {
        name: 'greenAlexandrie',
        family: 'tea',
        tastes: ['fruitty'],
        colors: ['green'],
        linkImage: './assets/images/greenAlexandrie.webp',
        title: 'Merveilles d\'Alexandrie',
        description: 'Merveilles d\'Alexandrie est un thé vert frais avec ses dattes, sa citronnelle, son maté et ses écorces de citron. Avec ses ingrédients principalement issus de l\'agriculture biologique et son côté rafraîchissant, il sera l\'allié de votre printemps/été.',
        taste: ['lemongrass', 'dates', 'lemon'], 
        price: 7.5,
    },
    {
        name: 'greenCilaos',
        family: 'tea',
        tastes: ['fruitty'],
        colors: ['green'],
        linkImage: './assets/images/greenCilaos.webp',
        title: 'Flâner à Cilaos',
        description: 'Vous avez envie d\'être surpris ? Bonne nouvelle, notre thé vert Flâner à Cilaos est là pour vous satisfaire. Avec ses litchis, ses fleurs de jasmin et ses pétales de rose, il sera idéal pour ceux qui recherche un peu de douceur et d\'exotisme. ',
        taste : ['strawberry', 'leetchee', 'rose'],
        price: 7,
    },
    //black teas
    {
        name : 'blackVersailles',
        family: 'tea',
        tastes: ['gourmet'],
        colors: ['black'],
        linkImage: './assets/images/blackVersailles.webp',
        title: 'Balade à Versailles',
        description: 'Balade à Versailles est un thé noir de Ceylan de grande qualité. Accompagné de pistaches, de pétales de fleurs et de boules de massepain fondant pendant l\'infusion, il vous offre une tasse élégante, et gourmande',
        taste : ['almond', 'pistachio'],
        price: 7.5,
    },
    {
        name: 'blackChai',
        family: 'tea',
        tastes: ['spicy'],
        colors: ['black'],
        linkImage: './assets/images/blackChai.webp',
        title: 'Thé Chaï',
        description: 'Un mélange de thé noir et d\'épices telles que la cardamone, le clou de girofle, le poivre noir et le gingembre pour une tasse tonique.',
        taste: ['pepper', 'cloves', 'ginger'], 
        price: 7.5,
    },
    {
        name: 'blackDarjeeling',
        family: 'tea',
        tastes: ['nature'],
        colors: ['black'],
        linkImage: './assets/images/blackDarjeeling.webp',
        title: 'Darjeeling Margaret\'s Hope TGFOP1',
        description: 'Provenant d\'un grand jardin de Darjeeling, le Margaret\'s Hope est un thé nature extrêmement aromatique et fruité. D\'une grande douceur, le Darjeeling Maraget\'s Hope TGFOP1 est un thé à offrir ou à s\'offrir pour partager des moments chaleureux.',
        taste: [], 
        price: 7.5,
    },
    {
        name: 'blackProvence',
        family: 'tea',
        tastes: ['fruitty'],
        colors: ['black'],
        linkImage: './assets/images/blackProvence.webp',
        title: 'Été en Provence',
        description: 'Dans le Été en Provence, les notes pétillantes et poétiques de pêches et d\'abricots se marient magnifiquement bien avec la subtilité des fleurs de mauves et de bleuets. Vous retrouverez en ce thé toutes les caractéristiques d\'une tasse délicate et sensible.',
        taste : ['peach', 'apricot'],
        price: 7.5,
    },
    {
        name: 'blackBergamote',
        family: 'tea',
        tastes: ['floral'],
        colors: ['black'],
        linkImage: './assets/images/blackBergamote.webp',
        title: 'Earl Grey Bergamote',
        description: 'Un thé emblématique connu pour ses notes à la fois corsées, douces et crémeuses. Ce Earl Grey Bergamote est mélange haute qualité de thés noirs du Yunnan et Ceylan',
        taste: ['bergamote'], 
        price: 7.5,
    },
    {
        name: 'blackLondon',
        family: 'tea',
        tastes: ['gourmet'],
        colors: ['black'],
        linkImage: './assets/images/blackLondon.webp',
        title: 'London After Tea',
        description: 'Grâce à sa menthe et à son chocolat, London after tea vous offre une tasse terriblement gourmande et riche en saveurs !',
        taste: ['mint', 'chocolat'], 
        price: 7.5,
    },
    {
        name: 'blackKemi',
        family: 'tea',
        tastes: ['gourmet'],
        colors: ['black'],
        linkImage: './assets/images/blackKemi.webp',
        title: 'Kemi',
        description: 'Édition limitée, le Kemi est un thé noir au goût réconfortant de chocolat truffé. Composé de nougatine, de morceaux de fèves et de coques de cacao ce thé résolument gourmand saura plaire aux palais les plus gourmands.',
        taste : ['chocolat'],
        price: 7.5,
    },
    {
        name: 'blackLapsang',
        family: 'tea',
        tastes: ['spicy'],
        colors: ['black'],
        linkImage: './assets/images/blackLapsang.webp',
        title: 'Tarry Lapsang Souchong',
        description: 'Le Tarry Lapsang Souchong est un thé bio fumé, provenant de la province du Fujian. Son aspect ambré et sa texture lisse lui confèrent un caractère qui se retrouve en tasse avec une légère amertume.',
        taste : ['smoked'],
        price: 7.5,
    },
    {
        name: 'blackAcapulco',
        family: 'tea',
        tastes: ['fruitty'],
        colors: ['black'],
        linkImage: './assets/images/blackAcapulco.webp',
        title: 'Souvenir d\'Acapulco',
        description: 'Souvenir d\'Acapulco est un thé noir issu d’un jardin du Yunnan. Également composé de 20% de thé vert Sencha et agrémenté de dés de papayes et de baies légèrement épicées, c\'est une création originale avec du caractère.',
        taste: ['papaya', 'rose'], 
        price: 6.5,
    },
    // Blue teas
    {
        name: 'blueMaroco',
        family: 'tea',
        tastes: ['floral','fruitty'],
        colors: ['blue'],
        linkImage: './assets/images/blueMaroco.webp',
        title: 'Sur un air Marocain',
        description: 'Ce thé bleu, ou Oolong, aux agrumes vous transportera rapidement au Maroc. Ses notes délicieusement fruitées d\'orange et de fleurs d\'oranger, compensées par la douceur du thé bleu offrent un voyage gustatif garanti. Laissez vous tenter sans tarder',
        taste: ['orange', 'orangeBlossom'], 
        price: 7.5 ,
    },
    {
        name: 'blueQuebec',
        family: 'tea',
        tastes: ['gourmet'],
        colors: ['blue'],
        linkImage: './assets/images/blueQuebec.webp',
        title: 'Noël à Québec',
        description: 'Un Thé oolong, bleu-noir, avec des dés de pommes caramélisées, de la cannelle. Il est parfait pour l\'après midi ! Fermez les yeux vous êtes déjà à Noël.',
        taste: ['apple', 'canelle', 'caramel'], 
        price: 8.5,
    },
    {
        name: 'blueWulong',
        family: 'tea',
        tastes: ['gourmet'],
        colors: ['blue'],
        linkImage: './assets/images/blueWulong.webp',
        title: 'Wulong Milky',
        description: 'Le Wulong Milky nous offre un goût très doux aux notes crémeuses de beurre. Ce thé nature est tout simplement exceptionnel.',
        taste: ['sourCream'], 
        price: 8.5,
    },
    {
        name: 'blueTokyo',
        family: 'tea',
        tastes: ['fruitty'],
        colors: ['blue'],
        linkImage: './assets/images/blueTokyo.webp',
        title: 'Hiver à Tokyo',
        description: 'Le wulong Hiver à Tokyo est un thé bleu agrémenté de dés de Yuzu et de minis chamallows infusés au citron japonais. Un thé aux notes d’agrumes exquises et délicates.',
        taste: ['lemon', 'yuzu'],
        price: 7.5,
    },
    {
        name: 'blueHongKong',
        family: 'tea',
        tastes: ['fruitty'],
        colors: ['blue'],
        linkImage: './assets/images/blueHongKong.webp',
        title: 'Hong-Kong Paradise',
        description: 'Le thé Hong-Kong Paradise est un Oolong aux notes à la fois fleuries et épicées, caractéristiques des Oolong Chinois.Hong-Kong Paradise est un thé élégant qui vous laissera une longueur en bouche très agréable grâce à ses notes de pêche et d\'abricot',
        taste: ['peach', 'apricot', 'rose'], 
        price: 7.5,
    },
    //white teas
    {
        name: 'whiteLille',
        family: 'tea',
        tastes: ['fruitty'],
        colors: ['white'],
        linkImage: './assets/images/whiteLille.webp',
        title: 'Lille sous les Tropiques',
        description: 'Ce thé blanc a été sélectionné personnellement par notre cliente historique, Krystalle. Il est composé de thé blanc, thé vert, papaye, noix de coco, ananas et fleurs de carthame. Une vraie pause exotique.',
        taste : ['pineapple', 'coconut', 'papaya'],
        price: 7.5,
    },
    {
        name: 'whiteSagano',
        family: 'tea',
        tastes: ['floral'],
        colors: ['white'],
        linkImage: './assets/images/whiteSagano.webp',
        title: 'Promenade à Sagano',
        description: 'Avec ses feuilles de bambou, Promenade à Sagano s\'illustre comme un thé doux et original. Particulièrement élégant, il saura ravir les palais les plus rafinés avec ses boutons des roses.',
        taste: ['mint', 'rose'], 
        price: 14.5,
    },
    {
        name: 'whiteIndia',
        family: 'tea',
        tastes: ['floral'],
        colors: ['white'],
        linkImage: './assets/images/whiteIndia.webp',
        title: 'Douceur Indienne',
        description: 'Douceur Indienne est un grand « cru » de thé blanc Pai Mu Dan agrémenté de fleurs de jasmin, de bleuets, et d’essence de citron pour un thé extrêmement délicat et élégant.',
        taste: ['rose', 'herbs'], 
        price: 8.5,
    },
    {
        name: 'whiteCopacabana',
        family: 'tea',
        tastes: ['fruitty'],
        colors: ['white'],
        linkImage: './assets/images/whiteCopacabana.webp',
        title: 'Copacabana',
        description: 'Résolument exotique grâce à ses fruits tropicaux, le thé blanc Copacabana qui vous fera voyager jusqu\'au Brésil en un rien de temps !',
        taste: ['pineapple', 'mango'], 
        price: 8.5,
    },
    //rooibos
    {
        name: 'rooibosCaramel',
        family: 'rooibos',
        tastes: ['gourmet'],
        colors: [],
        linkImage: './assets/images/rooibosCaramel.webp',
        title: 'Rooïbos Caramel',
        description: 'Une tasse gourmande qui rappelle les doux goûters de notre enfance. La saveur onctueuse et veloutée de Rooïbos associée à la douceur du caramel vous transporteront dans un monde de gourmandises.',
        taste: ['caramel'], 
        price: 6.5 ,
    },
    {
        name: 'rooibosGreen',
        family: 'rooibos',
        tastes: ['nature'],
        colors: [],
        linkImage: './assets/images/rooibosGreen.webp',
        title: 'Rooïbos Vert',
        description: 'Le Rooïbos vert est un rooïbos nature, simplement séché qui délivre tout son goût naturel lors de l\'infusion.',
        taste: [], 
        price: 6.5,
    },
    {
        name: 'rooibosPomelos',
        family: 'rooibos',
        tastes: ['fruitty'],
        colors: [],
        linkImage: './assets/images/rooibosPomelos.webp',
        title: 'Rooïbos Grenade Pamplemousse',
        description: 'Le rooïbos Grenade Pamplemousse vous offre une tasse sans théine et particulièrement fruitée. Parfait pour les soirs d\'été, il se révele être particulièrement frais et d\'un agréable dynamisme.',
        taste: ['pomelos', 'orange', 'grenade'], 
        price: 6.5,
    },
    {
        name: 'rooibosGinger',
        family: 'rooibos',
        tastes: ['fruitty', 'spicy'],
        colors: [],
        linkImage: './assets/images/rooibosGinger.webp',
        title: 'Rooïbos Gingembre Citron',
        description: 'Le rooïbos Gingembre Citron est sans théine. Il peut se consommer à n\'importe quel moment de la journée ; sa tasse fraîche et dynamique sera parfaite si vous souhaitez commencer la journée du bon pied !',
        taste: ['ginger', 'lemon'], 
        price: 6.5,
    },
    {
        name: 'rooibosAmaretto',
        family: 'rooibos',
        tastes: ['gourmet'],
        colors: [],
        linkImage: './assets/images/rooibosAmaretto.webp',
        title: 'Rooïbos Amaretto',
        description: 'Le Rooïbos Amaretto est un rooïbos rouge gourmand au bon goût d\'amandes. Souvenir d\'enfance sur les bancs de l\'école garanti !',
        taste: ['almond'], 
        price: 6.5,
    },
    // infusion
    {
        name: 'infusionManosque',
        family: 'infusion',
        tastes: ['fruitty'],
        colors: [],
        linkImage: './assets/images/infusionManosque.webp',
        title: 'Manosque',
        description: 'Manosque est une infusion fraîche et légère au bon goût de mangue et de citron. Parfaite en début de soirée, elle saura vous rafraîchir après une journée ensoleillée.',
        taste: ['mango', 'lemon', 'verbena'], 
        price: 6.5,
    },
    {
        name: 'infusionBroadway',
        family: 'infusion',
        tastes: ['gourmet', 'fruitty'],
        colors: [],
        linkImage: './assets/images/infusionBroadway.webp',
        title: 'Broadway',
        description: 'Broadway est une infusion gourmande au léger côté régressif ; elle attire les "becs sucrés" ne voulant pas culpabiliser et avec ses pop corns, elle fait la joie des enfants. A tester de toute urgence !',
        taste: ['apple', 'popcorn' ,'canelle'],
        price: 6.5,
    },
    {
        name: 'infusionKimbe',
        family: 'infusion',
        tastes: ['fruitty'],
        colors: [],
        linkImage: './assets/images/infusionKimbe.webp',
        title: 'Kimbe',
        description: 'Parfait pour l\'après-midi, l\'infusion bio Kimbe saura vous surprendre avec ses morceaux de fraises et de bananes. Résolument régressive, cette petite merveille se déguste à tout âge !',
        taste: ['apple', 'banana', 'strawberry'],
        price: 6.5,
    },
    {
        name: 'infusionDelhi',
        family: 'infusion',
        tastes: ['fruitty'],
        colors: [],
        linkImage: './assets/images/infusionDelhi.webp',
        title: 'Royal Delhi',
        description: 'Avec ses dés de pommes,  ses oranges et ses fraises , Royal Delhi est assurément une infusion qui vous fera voyager ! Évadez-vous pour les plus belles contrées d\'Inde avec cette infusion fruitée et rafraîchissante. À consommer également froide, c\'est un régal !',
        taste: ['hibiscus', 'apple', 'orange'],
        price: 6.5,
    },
    {
        name: 'infusionSaoPaulo',
        family: 'infusion',
        tastes: ['fruitty'],
        colors: [],
        linkImage: './assets/images/infusionSaoPaulo.webp',
        title: 'São Paulo',
        description: 'Créée d\'abord édition limitée, São Paulo  est très vite devenue l\'un de nos Best Seller. Cette infusion fruitée et gourmande composée de framboises et de saveurs exotiques telles que l\'ananas, le citron vert se consomme glacée, sans modération, tout au long de la journée. Un bain de fraicheur et d’exotisme qui vous fera voyager !',
        taste: ['raspeberry', 'pineapple'],
        price: 10.50,
    },
    {
        name: 'infusionLouxor',
        family: 'infusion',
        tastes: ['fruitty'],
        colors: [],
        linkImage: './assets/images/infusionLouxor.webp',
        title: 'Louxor J\'adore',
        description: 'Louxor J\'adore est une subtile création composée de verveine, d\'oranges, de pommes caramélisées et de fleurs d\'hibiscus. Une tasse dynamique  à consommer aussi bien chaude que froide.',
        taste: ['orange', 'verbena', 'apple'],
        price: 6.5,
    },
    {
        name: 'infusionCopenhaguen',
        family: 'infusion',
        tastes: ['fruitty'],
        colors: [],
        linkImage: './assets/images/infusionCopenhaguen.webp',
        title: 'Délice de Copenhague',
        description: 'Résolument rafraîchissante, Délice de Copenhague est une infusion au bon goût de canneberge et d\'argousier. Une tasse parfaite pour ceux qui aiment les infusions avec du caractère et beaucoup d\'énergie !',
        taste: ['canneberge', 'orangeBerries'],
        price: 6.5,
    },
    {
        name: 'infusionLaponie',
        family: 'infusion',
        tastes: ['fruitty'],
        colors: [],
        linkImage: './assets/images/infusionLaponie.webp',
        title: 'Noël en Laponie',
        description: 'Découvrez notre infusion de Noël ! Une infusion pour petits et grands, à base de pommes, ananas, raisins de Corinthe, pépins de citrouille grillés, cannelle, chips de coco et flocons de framboise. La magie peut commencer.',
        taste: ['apple', 'coconut', 'pineapple'],
        price: 6.5,
    },
    {
        name: 'infusionBarrow',
        family: 'infusion',
        tastes: ['floral', 'fruitty'],
        colors: [],
        linkImage: './assets/images/infusionBarrow.webp',
        title: 'Nuit à Barrow',
        description: 'Cette infusion est idéale pour ceux qui rêvent de nuits calmes et paisibles, elle deviendra vite votre alliée du soir avant le coucher.',
        taste: ['fennel', 'mint', 'lemongrass'],
        price: 7.5,
    },
    //Breath
    {
        name: 'wellnessBreath',
        family: 'wellness',
        tastes: ['floral','breath'],
        colors: [],
        linkImage: './assets/images/breath.webp',
        title: 'Infusion Respirante',
        description: 'Cette infusion au goût délicieux est décongestionnante ce qui facilite la respiration. Les arômes stimulants qui la composent vous procurent immédiatement un réconfort. ',
        taste : ['thym', 'eucalyptus', 'lavandin'],
        price: 7,
    },
    //lightLegs
    {
        name: 'wellnessLightLegs',
        family: 'wellness',
        tastes: ['floral','lightLegs'],
        colors: [],
        linkImage: './assets/images/lightlegs.webp',
        title: 'Infusion Jambes Légères',
        description: 'Cette infusion vous aidera à favoriser une bonne circulation veineuse, grâce à l\'association de différentes plantes, telles que la vigne rouge, l\'origan ou l\'angélique. Associée à un bon équilibre alimentaire et, si possible, à la pratique d\'un sport, elle vous permettra de retrouver des jambes légères.',
        taste : ['rosmary', 'ginger', 'grappes'],
        price: 7,
    },
    {
        name: 'wellnessLooseWeight',
        family: 'wellness',
        tastes: ['floral', 'looseWeight'],
        colors: [],
        linkImage: './assets/images/looseweight.webp',
        title: 'Infusion Silhouette Parfaite',
        description: 'L\'infusion Silhouette parfaite est élaborée avec des plantes médicinales BIO comme la Vigne rouge qui aide au contrôle du poids, à réduire l\'aspect cellulite et à redéfinir la silhouette. Ce mélange permet un drainage général ainsi l\'assimilation des nutriments. ',
        taste : ['rosmary', 'mint', 'orange'],
        price: 7,
    },
    //breastfeeding    
    {
        name: 'wellnessBreathFeeding',
        family: 'wellness',
        tastes: ['floral', 'breastFeeding'],
        colors: [],
        linkImage: './assets/images/breastfeeding.webp',
        title: 'Infusion Allaitante',
        description : 'Cette infusion à base d\'anis, de cumin et de fenouil a été spécifiquement adaptée pour favoriser la lactation. Elle permet une bonne hydratation, étape indispensable d\'un allaitement réussi.',
        taste : ['anis', 'cumin', 'fennel'],
        price: 7,
    },
    //looseWeight
    {
        name: "SugarLess",
        family: 'wellness',
        tastes: ['floral','sugarLess'],
        colors: [],
        linkImage: './assets/images/wellnessSugarLess.webp',
        title: 'Infusion Sucre Moins',
        description : 'Si vous souhaitez maitriser votre taux de sucre dans le sang, nous avons la solution. Nous vous proposons un mélange de plantes qui permet à la fois de diminer l\'absorption des sucres et de réguler son assimilation. Un régime alimentaire équilibré est recommandé car l\'infusion seule ne fera rien sans un petit coup de pouce de votre part.',
        taste : ['eucalyptus', 'bloodOrange', 'mint2'],
        price: 7,
    },
    //digestive
    {
        name: "wellnessDigestive",
        family: 'wellness',
        tastes: ['floral','digestive'],
        colors: [],
        linkImage: './assets/images/digestive.webp',
        title: 'Infusion Après-Repas',
        description : 'Délicieuse et légère, cette infusion Après-Repas vous aidera à améliorer la digestion. De quoi retrouver le cours de votre journée ou de votre soirée en toute liberté !',
        taste : ['anis', 'rosmary', 'thym'],
        price: 7,
    }
]

const tastes = [
    {
        name : 'anis',
        title : 'anis',
        imageUrl : './assets/images/tastes/anis.webp' ,
    },
    {
        name : 'almond',
        title : 'amande',
        imageUrl : './assets/images/tastes/almond.webp' ,
    },
    {
        name : 'apple',
        title: 'pomme',
        imageUrl : './assets/images/tastes/apple.webp' ,
    },
    {
        name : 'apricot',
        title : 'abricot',
        imageUrl : './assets/images/tastes/apricot.webp' ,
    },
    {
        name : 'banana',
        title: 'banane',
        imageUrl : './assets/images/tastes/banana.webp' ,
    },
    {
        name : 'bergamote',
        title: 'bergamote',
        imageUrl : './assets/images/tastes/bergamote.webp' ,
    },
    {
        name : 'blackberry',
        title : 'mûre',
        imageUrl : './assets/images/tastes/blackberry.webp' ,
    },
    {
        name : 'blueCornFlower',
        title: 'bleuet blanc',
        imageUrl : './assets/images/tastes/blueCornflower.webp' ,
    },
    {
        name : 'bloodOrange',
        title: 'orange sanguine',
        imageUrl : './assets/images/tastes/bloodOrange.webp' ,
    },
    {
        name : 'canelle',
        title : 'canelle',
        imageUrl : './assets/images/tastes/canelle.webp',
    },
    {
        name : 'canneberge',
        title : 'canneberge',
        imageUrl : './assets/images/tastes/canneberge.webp',
    },
    {
        name : 'chamomille',
        title : 'camomille' ,
        imageUrl : './assets/images/tastes/chamomille.webp' ,
    },
    {
        name : 'coconut',
        title : 'noix de coco' ,
        imageUrl : './assets/images/tastes/coconut.webp' ,
    },
    {
        name : 'dates',
        title : 'dattes' ,
        imageUrl : './assets/images/tastes/dates.webp' ,
    },
    {
        name : 'caramel',
        title : 'caramel' ,
        imageUrl : './assets/images/tastes/caramel.webp' ,
    },
    {
        name : 'chocolat',
        title : 'chocolat' ,
        imageUrl : './assets/images/tastes/choco.webp' ,
    },
    {
        name : 'cloves',
        title : 'clou de girofle' ,
        imageUrl : './assets/images/tastes/cloves.webp' ,
    },
    {
        name : 'cumin',
        title : 'cumin' ,
        imageUrl : './assets/images/tastes/cumin.webp' ,
    },
    {
        name : 'eucalyptus',
        title : 'eucalyptus' ,
        imageUrl : './assets/images/tastes/eucalyptus.webp' ,
    },
    {
        name : 'ginger',
        title : 'gingembre' ,
        imageUrl : './assets/images/tastes/ginger.webp' ,
    },
    {
        name : 'grappes',
        title : 'raisin' ,
        imageUrl : './assets/images/tastes/grappes.webp' ,
    },
    {
        name : 'grenade',
        title : 'grenade' ,
        imageUrl : './assets/images/tastes/grenade.webp' ,
    },
    {
        name : 'groseille',
        title: 'groseille',
        imageUrl : './assets/images/tastes/groseille.webp' ,
    },
    {
        name : 'herbs',
        title : 'herbe',
        imageUrl : './assets/images/tastes/herb.webp',
    },
    {
        name : 'hibiscus',
        title : 'hibiscus' ,
        imageUrl : './assets/images/tastes/hibiscus.webp' ,
    },
    {
        name : 'fennel',
        title : 'fenouil',
        imageUrl : './assets/images/tastes/herb.webp'
    },
    {
        name : 'jasmin',
        title : 'jasmin' ,
        imageUrl : './assets/images/tastes/jasmin.webp' ,
    },
    {
        name : 'lavandin',
        title : 'lavandin' ,
        imageUrl : './assets/images/tastes/lavender.webp' ,
    },
    {
        name : 'lavender',
        title: 'lavende',
        imageUrl : './assets/images/tastes/lavender.webp' ,
    },
    {
        name : 'leetchee',
        title: 'litchi',
        imageUrl : './assets/images/tastes/leetchee.webp' ,
    },
    {
        name : 'lemon',
        title: 'citron',
        imageUrl : './assets/images/tastes/lemon.webp' ,
    },
    {
        name : 'lemongrass',
        title: 'citronelle',
        imageUrl : './assets/images/tastes/lemongrass.webp' ,
    },
    {
        name : 'mango',
        title: 'mangue',
        imageUrl : './assets/images/tastes/mango.webp' ,
    },
    {
        name : 'mint',
        title: 'menthe',
        imageUrl : './assets/images/tastes/mint.webp' ,
    },
    {
        name : 'mint2',
        title: 'menthe poivrée',
        imageUrl : './assets/images/tastes/mint2.webp' ,
    },
    {
        name : 'nut',
        title: 'noix',
        imageUrl : './assets/images/tastes/nut.webp' ,
    },
    {
        name : 'orange',
        title: 'orange',
        imageUrl : './assets/images/tastes/orange.webp' ,
    },
    {
        name : 'orangeBerries',
        title: 'argousier',
        imageUrl : './assets/images/tastes/orangeBerries.webp' ,
    },
    {
        name : 'orangeBlossom',
        title: 'fleur d\'oranger',
        imageUrl: './assets/images/tastes/orangeBlossom.webp'
    },
    {
        name : 'papaya',
        title: 'papaille',
        imageUrl : './assets/images/tastes/papaya.webp' ,
    },
    {
        name : 'peach',
        title: 'Pêche',
        imageUrl : './assets/images/tastes/peach.webp' ,
    },
    {
        name : 'pepper',
        title: 'poivre',
        imageUrl : './assets/images/tastes/pepper.webp' ,
    },
    {
        name : 'pineapple',
        title: 'ananas',
        imageUrl : './assets/images/tastes/pineapple.webp' ,
    },
    {
        name : 'pistachio',
        title: 'pistache',
        imageUrl : './assets/images/tastes/pistachio.webp' ,
    },
    {
        name : 'plum',
        title: 'mirabelle',
        imageUrl : './assets/images/tastes/plum.webp' ,
    },
    {
        name : 'pomelos',
        title: 'pamplemousse',
        imageUrl : './assets/images/tastes/pomelos.webp' ,
    },
    {
        name : 'popcorn',
        title : 'pop corn',
        imageUrl: './assets/images/tastes/popcorn.webp',
    },
    {
        name : 'raspberry',
        title: 'framboise',
        imageUrl : './assets/images/tastes/raspberry.webp' ,
    },
    {
        name : 'redBerries',
        title: 'groseille',
        imageUrl : './assets/images/tastes/redBerries.webp' ,
    },
    {
        name : 'rose',
        title: 'rose',
        imageUrl : './assets/images/tastes/rose.webp' ,
    },
    {
        name : 'rosmary',
        title: 'romarin',
        imageUrl : './assets/images/tastes/rosmary.webp' ,
    },
    {
        name: 'smoked',
        title: 'fumées',
        imageUrl : './assets/images/tastes/smoked.webp'
    },
    {
        name : 'strawberry',
        title: 'fraise',
        imageUrl : './assets/images/tastes/strawberry.webp' ,
    },
    {
        name : 'thym',
        title: 'thym',
        imageUrl : './assets/images/tastes/thym.webp' ,
    },
    {
        name : 'vanilla',
        title: 'vanille',
        imageUrl : './assets/images/tastes/vanilla.webp' ,
    },
    {
        name : 'verbena',
        title: 'verveine',
        imageUrl : './assets/images/tastes/mint2.webp' ,
    },
    {
        name : 'sourCream',
        title: 'crème fraîche',
        imageUrl : './assets/images/tastes/sourCream.webp' ,
    },
    {
        name : 'spice',
        title : 'épices',
        imageUrl : './assets/images/tastes/pepper.webp',
    },
    {
        name : 'yuzu',
        title : 'yuzu',
        imageUrl : './assets/images/tastes/lemon.webp',
    }


]