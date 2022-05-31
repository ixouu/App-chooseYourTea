drinkContentHtml = {
    // infusions
    'breath': '<div class="img__wrapper"><img src=\"./assets/images/breath.webp\"></div><div class=\"app__results-objectText\"> <h4>infusion respirante</h4> <p>Cette infusion au goût délicieux est décongestionnante ce qui facilite la respiration. Les arômes stimulants qui la composent vous procurent immédiatement un réconfort. A prendre dès l\'apparition des premiers frissons sous un bon plaid avec une cuillère de miel !</p><div class="app__results-objectBtnPrice"><button class="btn-SeeMore"><span>Découvrir</span></button><p>A partir de 7€</p></div>',

    'lightLegs': '<div class="img__wrapper"><img src=\"./assets/images/lightlegs.webp\"></div><div class=\"app__results-objectText\"> <h4>infusion jambes légères</h4> <p>Cette infusion vous aidera à favoriser une bonne circulation veineuse, grâce à l\'association de différentes plantes, telles que la vigne rouge, l\'origan ou l\'angélique. Associée à un bon équilibre alimentaire et, si possible, à la pratique d\'un sport, elle vous permettra de retrouver des jambes légères.</p><div class="app__results-objectBtnPrice"><button class="btn-SeeMore"><span>Découvrir</span></button><p>A partir de 7€</p></div>',

    'toSleep': '<div class="img__wrapper"><img src=\"https://fakeimg.pl/226x266/ \"></div><div class=\"app__results-objectText\"> <h4>Je n\'ai pas de contenu</h4> <p>Cette infusion n\'existe pasCette infusion n\'existe pasCette infusion n\'existe pasCette infusion n\'existe pasCette infusion n\'existe pasCette infusion n\'existe pasCette infusion n\'existe pas</p><div class="app__results-objectBtnPrice"><button class="btn-SeeMore"><span>Découvrir</span></button><p>A partir de 7€</p></div>',

    'breastfeeding': '<div class="img__wrapper"><img src=\"./assets/images/breastfeeding.webp\"></div><div class=\"app__results-objectText\"> <h4>Infusion Allaitante</h4> <p>Cette infusion à base d\'anis, de cumin et de fenouil a été spécifiquement adaptée pour favoriser la lactation. Elle permet une bonne hydratation, étape indispensable d\'un allaitement réussi.<br>Partagez un véritable moment  de partage et de bien-être avec bébé.</p><div class=\"app__results-objectBtnPrice"><button class="btn-SeeMore"><span>Découvrir</span></button><p>A partir de 7€</p></div>',

    'looseWeight': '<div class="img__wrapper"><img src=\"./assets/images/looseweight.webp\"></div><div class=\"app__results-objectText\"> <h4>Infusion Silhouette Parfaite</h4> <p>L\'infusion Silhouette parfaite est élaborée avec des plantes médicinales BIO comme la Vigne rouge qui aide au contrôle du poids, à réduire l\'aspect cellulite et à redéfinir la silhouette. Ce mélange permet un drainage général ainsi l\'assimilation des nutriments. Silhouette parfaite doit être associée à une alimentation équilibrée et si possible à la pratique d\'un sport car l\'infusion ne fera pas tout, toute seule.</p><div class="app__results-objectBtnPrice"><button class="btn-SeeMore"><span>Découvrir</span></button><p>A partir de 7€</p></div>',

    'digestive': '<div class="img__wrapper"><img src=\"./assets/images/digestive.webp\"></div><div class=\"app__results-objectText\"> <h4>Infusion Après-Repas</h4> <p>Délicieuse et légère, cette infusion Après-Repas vous aidera à améliorer la digestion.  De quoi retrouver le cours de votre journée ou de votre soirée en toute liberté !</p><div class="app__results-objectBtnPrice"><button class="btn-SeeMore"><span>Découvrir</span></button><p>A partir de 7€</p></div>',

    //rooibos
    'rooibosCaramel': '<div class="img__wrapper"><img src=\"./assets/images/rooibosCaramel.webp\"></div><div class=\"app__results-objectText\"> <h4>Rooïbos Caramel</h4> <p>Une tasse gourmande qui rappelle les doux goûters de notre enfance. La saveur onctueuse et veloutée deRooïbos associée à la douceur du caramel vous transporteront dans un monde de gourmandises.</p><div class="app__results-objectBtnPrice"><button class="btn-SeeMore"><span>Découvrir</span></button><p>A partir de 7€</p></div>',

    // tea
    'greenMint': '<div class="img__wrapper"><img src=\"./assets/images/greenteaMint.webp\"></div><div class=\"app__results-objectText\"> <h4>The vert a la menthe</h4> <p>Intense, frais et authentique, ce thé vert à la menthe sous forme de sachets ne vous laissera pas indifférent. Au bureau ou en voyage vous pourrez l\'amener partout !</p><div class="app__results-objectBtnPrice"><button class="btn-SeeMore"><span>Découvrir</span></button><p>A partir de 7€</p></div>'
};


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
const progressBlock = document.querySelector('.progressBlock');
const progressChoice = document.querySelector('.progressBlock__ProgressChoice');
const progressTaste = document.querySelector('.progressBlock__ProgressTaste');
const progressColor = document.querySelector('.progressBlock__ProgressColor');
const slider = document.querySelector('.slider')

let customerChoice = [];

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

const tea = new Drink("Thé",'#42994E');
const infusion = new Drink("Infusion",'#F25C57');
const rooibos = new Drink("Rooïbos",'#F5540F');
const wellness = new Drink("Bien-être",'#F5B36C');

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

const black = new Color('Noir','#313634', '#f1f1f1');
const blue = new Color('Bleu', '#45A0F5', null);
const white = new Color('Blanc','#F1F1F1','black');
const puerh = new Color('Puerh','#9E5F18', null);
const green = new Color('Vert','#147533', null);
const colorAll = new Color('Tous','#147533', null);


const allTea = [
    //greenMint
    {
        name: 'greenMint',
        content: drinkContentHtml.greenMint,
        family: 'tea',
        tastes: ['nature'],
        colors: ['green'],
    }
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
const arrayAllRooibos = [drinkContentHtml.rooibosCaramel]
//All tea objects in array
const arrayAllTea = [drinkContentHtml.greenMint];
//All infusion objects in array
const arrayAllInfusion = [];



