const appHome = document.querySelector(".appHome");
const teaOrInfusion = document.querySelector(".teaOrInfusion");
const teaTaste = document.querySelector(".teaTaste");
const teaColor = document.querySelector(".teaColor");
const infusionTaste = document.querySelector(".infusionTaste");
const infusionFlavor = document.querySelector(".infusionFlavor");
const roibosFlavor = document.querySelector(".roibosFlavor");
const wellnessFlavor = document.querySelector(".wellnessFlavor");
const previousBtn = document.querySelector(".previous");
const btnReload = document.querySelector('.btnReload');
const results = document.querySelector('.app__results');
let teaCustomerChoice = [];
let infusionCustomerChoice = [];




// HOME
const startBtn = document.querySelector(".startBtn");

startBtn.addEventListener('click', ()=>{
        
        teaOrInfusion.style.display = "flex";
        appHome.style.display = 'none';
});

// TEA OR INFUSION

const teaOrInfusionForm = document.querySelector('.teaOrInfusion__form');
const teaOrinfusionBtnNext = document.querySelector('.teaOrInfusion__button--submit');
const teaOrinfusionBtnPrevious = document.querySelector('.teaOrInfusion__button--previous');

teaOrinfusionBtnNext.addEventListener('click',(e)=>{
        e.preventDefault();
        switch (teaOrInfusionForm.querySelector(`input[name="choice"]:checked`).value) {
                case value = 'tea':
                        teaOrInfusion.style.display = 'none';
                        teaTaste.style.display = 'flex';
                        teaCustomerChoice.push(teaOrInfusionForm.querySelector(`input[name="choice"]:checked`).value);
                        break;
                case value = 'infusion':
                        teaOrInfusion.style.display = 'none';
                        infusionTaste.style.display = 'flex';
                        infusionCustomerChoice.push(teaOrInfusionForm.querySelector(`input[name="choice"]:checked`).value);
                        break;
        }
});

teaOrinfusionBtnPrevious.addEventListener('click',(e)=>{
        e.preventDefault();
        teaOrInfusion.style.display = "none";
        appHome.style.display = 'flex';
        teaCustomerChoice.pop();
        infusionCustomerChoice.pop();
})

//TEA TASTE
const teaTasteForm = document.querySelector('.teaTaste__form');
const teaTasteBtnNext = document.querySelector('.teaTaste__button--submit');
const teaTasteBtnPrevious = document.querySelector('.teaTaste__button--previous');


teaTasteBtnNext.addEventListener('click',(e)=>{
        e.preventDefault();
        teaCustomerChoice.push(teaTasteForm.querySelector(`input[name="teaChoice"]:checked`).value);

        if(teaTasteForm.querySelector(`input[name="teaChoice"]:checked`).value != ''){
                teaTaste.style.display = "none";
                teaColor.style.display = "flex";
        };
});

teaTasteBtnPrevious.addEventListener('click',(e)=>{
        e.preventDefault();
        teaOrInfusion.style.display = "flex";
        teaTaste.style.display = "none";
        teaCustomerChoice.pop();
});

// Infusion taste 
const infusionTasteForm = document.querySelector('.infusionTaste__form');
const infusionTasteBtnNext = document.querySelector('.infusionTaste__button--submit');
const infusionTasteBtnPrevious = document.querySelector('.infusionTaste__button--previous') 

infusionTasteBtnNext.addEventListener('click',(e) =>{
        e.preventDefault();

        infusionCustomerChoice.push(infusionTasteForm.querySelector(`input[name="infusionChoice"]:checked`).value);
        switch (infusionTasteForm.querySelector(`input[name="infusionChoice"]:checked`).value){
                case value = 'infusion':
                        infusionTaste.style.display = "none";
                        infusionFlavor.style.display = "flex";    
                        break;
                case value = 'roibos':
                        infusionTaste.style.display = "none";
                        roibosFlavor.style.display = "flex";    
                        break;
                case value = 'wellness':
                        infusionTaste.style.display = "none";
                        wellnessFlavor.style.display = "flex";    
                        break;
        }
});

infusionTasteBtnPrevious.addEventListener('click',(e)=>{
        e.preventDefault();
        teaOrInfusion.style.display = "flex";
        infusionTaste.style.display = "none";
        infusionCustomerChoice.pop();
});

//tea Color 
const teaColorForm = document.querySelector('.teaColor__form');
const teaColorBtnNext = document.querySelector('.teaColor__button--submit');
const teaColorBtnPrevious = document.querySelector ('.teaColor__button--previous');

teaColorBtnNext.addEventListener('click', (e) =>{
        e.preventDefault();

        teaCustomerChoice.push(teaColorForm.querySelector(`input[name="teaColorChoice"]:checked`).value);
        
        if(teaColorForm.querySelector(`input[name="teaColorChoice"]:checked`).value != ''){
                teaColor.style.display = "none";
        };
        switch (teaColorForm.querySelector(`input[name="teaColorChoice"]:checked`).value){
                case value = 'black':
                        teaColor.style.display = "none";
                        results.style.display = "flex";    
                        break;
                case value = 'blue':
                        teaColor.style.display = "none";
                        results.style.display = "flex";      
                        break;
                case value = 'white':
                        teaColor.style.display = "none";
                        results.style.display = "flex";  
                        break;
                case value = 'puerh':
                        teaColor.style.display = "none";
                        results.style.display = "flex";    
                        break;
                case value = 'green':
                        teaColor.style.display = "none";
                        results.style.display = "flex";      
                        break;
                case value = 'idontknow':
                        teaColor.style.display = "none";
                        results.style.display = "flex";  
                        break;
        }
});

teaColorBtnPrevious.addEventListener('click',(e)=>{
        e.preventDefault();
        teaTaste.style.display = "flex";
        teaColor.style.display = "none";
        teaCustomerChoice.pop();
});

//infusion flavors 
const infusionFlavorForm = document.querySelector('.infusionFlavor__form');
const infusionFlavorBtnNext = document.querySelector('.infusionFlavor__button--submit');
const infusionFlavorBtnPrevious = document.querySelector('.infusionFlavor__button--previous');

infusionFlavorBtnNext.addEventListener('click', (e) =>{
        e.preventDefault();

        infusionCustomerChoice.push(infusionFlavorForm.querySelector(`input[name="infusionFlavor"]:checked`).value);
        switch (infusionFlavorForm.querySelector(`input[name="infusionFlavor"]:checked`).value){
                case value = 'gourmet':
                        infusionFlavor.style.display = "none";
                        results.style.display = "flex";
                        break;
                case value = 'spicy':
                        infusionFlavor.style.display = "none";
                        results.style.display = "flex";  
                        break;
                case value = 'floral':
                        infusionFlavor.style.display = "none";
                        results.style.display = "flex";   
                        break;
                case value = 'fruitty':
                        infusionFlavor.style.display = "none";
                        results.style.display = "flex";      
                        break;
                case value = 'nature':
                        infusionFlavor.style.display = "none";
                        results.style.display = "flex";     
                        break;
        }
});

infusionFlavorBtnPrevious.addEventListener('click',(e)=>{
        e.preventDefault();
        infusionTaste.style.display = "flex";
        infusionFlavor.style.display = "none";
        infusionCustomerChoice.pop();
});

//roibos flavors 
const roibosFlavorForm = document.querySelector('.roibosFlavor__form');
const roibosFlavorBtnNext = document.querySelector('.roibosFlavor__button--submit');
const roibosFlavorBtnPrevious = document.querySelector('.roibosFlavor__button--previous');

roibosFlavorBtnNext.addEventListener('click', (e) =>{
        e.preventDefault();

        infusionCustomerChoice.push(roibosFlavorForm.querySelector(`input[name="roibosFlavor"]:checked`).value);
        switch (roibosFlavorForm.querySelector(`input[name="roibosFlavor"]:checked`).value){
                case value = 'nature':
                        roibosFlavor.style.display = "none";
                        results.style.display = "flex";
                        break;
                case value = 'spicy':
                        roibosFlavor.style.display = "none";
                        results.style.display = "flex";
                        break;
                case value = 'fruitty':
                        roibosFlavor.style.display = "none";
                        results.style.display = "flex";      
                        break;
        }
});

roibosFlavorBtnPrevious.addEventListener('click',(e)=>{
        e.preventDefault();
        infusionTaste.style.display = "flex";
        roibosFlavor.style.display = "none";
        infusionCustomerChoice.pop();
});

//wellness flavors 
const wellnessFlavorForm = document.querySelector('.wellnessFlavor__form');
const wellnessFlavorBtnNext = document.querySelector('.wellnessFlavor__button--submit');
const wellnessFlavorBtnPrevious = document.querySelector('.wellnessFlavor__button--previous');

wellnessFlavorBtnNext.addEventListener('click', (e) =>{
        e.preventDefault();

        infusionCustomerChoice.push(wellnessFlavorForm.querySelector(`input[name="wellnessFlavor"]:checked`).value);
        switch (wellnessFlavorForm.querySelector(`input[name="wellnessFlavor"]:checked`).value){
                case value = 'breath':
                        wellnessFlavor.style.display = "none";
                        results.style.display = "flex";
                        resultWellnessFunction();
                        break;
                case value = 'lightLegs':
                        wellnessFlavor.style.display = "none";
                        results.style.display = "flex";
                        resultWellnessFunction(); 
                        break;
                case value = 'toSleep':
                        wellnessFlavor.style.display = "none";
                        results.style.display = "flex";
                        resultWellnessFunction();
                        break;
                case value = 'breastfeeding':
                        wellnessFlavor.style.display = "none";
                        results.style.display = "flex";
                        resultWellnessFunction();      
                        break;
                case value = 'looseWeight':
                        wellnessFlavor.style.display = "none";
                        results.style.display = "flex";
                        resultWellnessFunction();     
                        break;
                case value = 'digestive':
                        wellnessFlavor.style.display = "none";
                        results.style.display = "flex";
                        resultWellnessFunction();
                        break;
        }
        test();
});

wellnessFlavorBtnPrevious.addEventListener('click',(e)=>{
        e.preventDefault();
        infusionTaste.style.display = "flex";
        wellnessFlavor.style.display = "none";
        infusionCustomerChoice.pop();
});

//results__button--previous
const ResultsPreviousBtn = document.querySelector('.results__button--previous');
ResultsPreviousBtn.addEventListener('click',(e)=>{
        e.preventDefault();
        if (teaCustomerChoice[2] != null){
                results.style.display = "none";
                teaColor.style.display = "flex";
                teaCustomerChoice.pop();
        }else if (infusionCustomerChoice[1] == "infusion"){
                results.style.display = "none";
                infusionFlavor.style.display = "flex";
                infusionCustomerChoice.pop();
        }else if (infusionCustomerChoice[1] == "roibos"){
                results.style.display = "none";
                roibosFlavor.style.display = "flex";
                infusionCustomerChoice.pop();
        }else if (infusionCustomerChoice[1] == "wellness"){
                results.style.display = "none";
                wellnessFlavor.style.display = "flex";
                infusionCustomerChoice.pop();
                results.removeChild(document.querySelector('.app__results--object'));
        }
});
//reload Btn
btnReload.addEventListener('click',(e)=>{
        e.preventDefault();
        teaCustomerChoice = [];
        infusionCustomerChoice = [];
        teaOrInfusion.style.display = "none";
        teaColor.style.display = "none";
        teaTaste.style.display = "none";
        infusionTaste.style.display = "none";
        infusionFlavor.style.display = "none";
        roibosFlavor.style.display = "none";
        wellnessFlavor.style.display = "none";
        results.style.display = "none";
        appHome.style.display = 'flex';
});



function test (){
        if(infusionCustomerChoice[0] == lightLegs.choice 
                && infusionCustomerChoice[1] == lightLegs.infusionChoice
                && infusionCustomerChoice[2] == lightLegs.wellnessFlavor){
        console.log('ok')}
        else{console.log('paok')}
        console.log(teaCustomerChoice);
        console.log(infusionCustomerChoice);
}
