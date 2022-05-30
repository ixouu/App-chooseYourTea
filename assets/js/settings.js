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
const ResultsPreviousBtn = document.querySelector('.results__button--previous');
const resultBtnReload = document.querySelector('.results__button--reload');

let customerChoice = [];
let userObject   = null;

const drinkContentHtml = {
    // infusions
    'breath': '<img src=\"./assets/images/breath.webp\"><div class=\"app__results-objectText\"> <h4>infusion respirante</h4> <p>Cette infusion au goût délicieux est décongestionnante ce qui facilite la respiration. Les arômes stimulants qui la composent vous procurent immédiatement un réconfort. A prendre dès l\'apparition des premiers frissons sous un bon plaid avec une cuillère de miel !</p></div>',
    'lightLegs': "<img src=\"./assets/images/lightlegs.webp\"><div class=\"app__results-objectText\"> <h4>infusion jambes légères</h4> <p>Cette infusion vous aidera à favoriser une bonne circulation veineuse, grâce à l'association de différentes plantes, telles que la vigne rouge, l'origan ou l'angélique. Associée à un bon équilibre alimentaire et, si possible, à la pratique d'un sport, elle vous permettra de retrouver des jambes légères.</p></div>",
    'toSleep': "<img src=\"https://fakeimg.pl/226x266/ \"><div class=\"app__results-objectText\"> <h4>Je n'ai pas de contenu</h4> <p>Cette infusion n'existe pasCette infusion n'existe pasCette infusion n'existe pasCette infusion n'existe pasCette infusion n'existe pasCette infusion n'existe pasCette infusion n'existe pas</p></div>",
    'breastfeeding': "<img src=\"./assets/images/breastfeeding.webp\"><div class=\"app__results-objectText\"> <h4>Infusion Allaitante</h4> <p>Cette infusion à base d'anis, de cumin et de fenouil a été spécifiquement adaptée pour favoriser la lactation. Elle permet une bonne hydratation, étape indispensable d'un allaitement réussi.<br>Partagez un véritable moment  de partage et de bien-être avec bébé.</p></div>",
    'looseWeight': "<img src=\"./assets/images/looseweight.webp\"><div class=\"app__results-objectText\"> <h4>Infusion Silhouette Parfaite</h4> <p>L'infusion Silhouette parfaite est élaborée avec des plantes médicinales BIO comme la Vigne rouge qui aide au contrôle du poids, à réduire l'aspect cellulite et à redéfinir la silhouette. Ce mélange permet un drainage général ainsi l'assimilation des nutriments. Silhouette parfaite doit être associée à une alimentation équilibrée et si possible à la pratique d'un sport car l'infusion ne fera pas tout, toute seule.</p></div>",
    'digestive': "<img src=\"./assets/images/digestive.webp\"><div class=\"app__results-objectText\"> <h4>Infusion Après-Repas</h4> <p>Délicieuse et légère, cette infusion Après-Repas vous aidera à améliorer la digestion.  De quoi retrouver le cours de votre journée ou de votre soirée en toute liberté !</p></div>",
    //rooibos
    'rooibosCaramel': "<img src=\"./assets/images/rooibosCaramel.webp\"><div class=\"app__results-objectText\"> <h4>Rooïbos Caramel</h4> <p>Une tasse gourmande qui rappelle les doux goûters de notre enfance. La saveur onctueuse et veloutée deRooïbos associée à la douceur du caramel vous transporteront dans un monde de gourmandises.</p></div>",
    // tea
    'greenMint': '<img src=\"./assets/images/greenteaMint.webp\"><div class=\"app__results-objectText\"> <h4>The vert a la menthe</h4> <p>Intense, frais et authentique, ce thé vert à la menthe sous forme de sachets ne vous laissera pas indifférent. Au bureau ou en voyage vous pourrez l\'amener partout !</p></div>'
}

const allTea = [
    //greenMint
    {
        name: 'greenMint',
        content: drinkContentHtml.greenMint,
        family: 'tea',
        tastes: ['nature'],
        colors: ['green']
    },
]

const allTeaColors = [
    'black', 'blue', 'white', 'puerh', 'green'
]

const allTeaTastes = [
    'fruitty', 'spicy', 'floral', 'gourmet', 'nature'
]

const allInfusion = [
    //rooibosCaramel
    {
        name: "rooibosCaramel",
        content: drinkContentHtml.rooibosCaramel,
        family: ["rooibos"],
        tastes: ['rooibosFruitty']
    },
    //Breath
    {
        name: "breath",
        content: drinkContentHtml.breath,
        family: ["wellness"],
        tastes: ['breath']
    },
    //lightLegs
    {
        name: "lightLegs",
        content: drinkContentHtml.lightLegs,
        family: ["wellness"],
        tastes: ['lightLegs']
    },
    //toSleep
    {
        name: "toSleep",
        content: drinkContentHtml.lightLegs,
        family: ["wellness"],
        tastes: ['toSleep']
    },
    //breastfeeding
    {
        name: "breastfeeding",
        content: drinkContentHtml.breastfeeding,
        family: ["wellness"],
        tastes: ['breastfeeding']
    },
    //looseWeight
    {
        name: "looseWeight",
        content: drinkContentHtml.looseWeight,
        family: ["wellness"],
        tastes: ['looseWeight']
    },
    //digestive
    {
        name: "digestive",
        content: drinkContentHtml.digestive,
        family: ["wellness"],
        tastes: ['digestive']
    }
]

// All wellness objects in array
const arrayAllWellness = [drinkContentHtml.breath, drinkContentHtml.lightLegs, drinkContentHtml.toSleep, drinkContentHtml.breastfeeding, drinkContentHtml.looseWeight, drinkContentHtml.digestive];

// All rooibos objects in array
const arrayAllRooibos = [drinkContentHtml.rooibosCaramel];

//All tea objects in array
const arrayAllTea = [drinkContentHtml.greenMint];

//All infusion objects in array
const arrayAllInfusion = [];
