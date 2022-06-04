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
const slider = document.querySelector('.slider');

const teaOrInfusionForm = document.querySelector('.teaOrInfusion__form');
const teaOrinfusionBtnNext = document.querySelector('.teaOrInfusion__button--submit');
const teaOrinfusionBtnPrevious = document.querySelector('.teaOrInfusion__button--previous');

const teaTasteForm = document.querySelector('.teaTaste__form');
const teaTasteBtnNext = document.querySelector('.teaTaste__button--submit');
const teaTasteBtnPrevious = document.querySelector('.teaTaste__button--previous');

const infusionFamilyForm = document.querySelector('.infusionFamily__form');
const infusionFamilyBtnNext = document.querySelector('.infusionFamily__button--submit');
const infusionFamilyBtnPrevious = document.querySelector('.infusionFamily__button--previous');

const teaColorChoiceForm = document.querySelector('.teaColorChoice__form');
const teaColorChoiceBtnNext = document.querySelector('.teaColorChoice__button--submit');
const teaColorChoiceBtnPrevious = document.querySelector('.teaColorChoice__button--previous');

const infusionTasteForm = document.querySelector('.infusionTaste__form');
const infusionTasteBtnNext = document.querySelector('.infusionTaste__button--submit');
const infusionTasteBtnPrevious = document.querySelector('.infusionTaste__button--previous');

const rooibosTasteForm = document.querySelector('.rooibosTaste__form');
const rooibosTasteBtnNext = document.querySelector('.rooibosTaste__button--submit');
const rooibosTasteBtnPrevious = document.querySelector('.rooibosTaste__button--previous');

const wellnessTasteForm = document.querySelector('.wellnessTaste__form');
const wellnessTasteBtnNext = document.querySelector('.wellnessTaste__button--submit');
const wellnessTasteBtnPrevious = document.querySelector('.wellnessTaste__button--previous');

let customerChoice = [];

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


// All wellness objects in array
const arrayAllWellness = [drinkContentHtml.breath, drinkContentHtml.lightLegs, drinkContentHtml.toSleep, drinkContentHtml.breastfeeding, drinkContentHtml.looseWeight, drinkContentHtml.digestive];
// All rooibos objects in array
const arrayAllRooibos = [drinkContentHtml.rooibosCaramel]
//All tea objects in array
const arrayAllTea = [drinkContentHtml.greenMint];
//All infusion objects in array
const arrayAllInfusion = [];

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