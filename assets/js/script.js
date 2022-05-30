startBtn.addEventListener('click', () => {

    teaOrInfusion.style.display = "flex";
    appHome.style.display = 'none';
});

// TEA OR INFUSION

const teaOrInfusionForm = document.querySelector('.teaOrInfusion__form');
const teaOrinfusionBtnNext = document.querySelector('.teaOrInfusion__button--submit');
const teaOrinfusionBtnPrevious = document.querySelector('.teaOrInfusion__button--previous');

teaOrinfusionBtnNext.addEventListener('click', (e) => {
    e.preventDefault();
    const UserChoice = teaOrInfusionForm.querySelector(`input[name="choice"]:checked`)
    switch (UserChoice.value) {
        case value = 'tea':
            teaOrInfusion.style.display = 'none';
            teaTaste.style.display = 'flex';
            customerChoice.push(UserChoice.value);
            Drink.progress(tea);
            break;
        case value = 'infusion':
            teaOrInfusion.style.display = 'none';
            infusionFamily.style.display = 'flex';
            Drink.progress(infusion);
            break;
    }
    console.log(customerChoice);
});

teaOrinfusionBtnPrevious.addEventListener('click', (e) => {
    e.preventDefault();
    teaOrInfusion.style.display = "none";
    appHome.style.display = 'flex';
    customerChoice.pop();
    customerChoice.pop();
})

//TEA TASTE
const teaTasteForm = document.querySelector('.teaTaste__form');
const teaTasteBtnNext = document.querySelector('.teaTaste__button--submit');
const teaTasteBtnPrevious = document.querySelector('.teaTaste__button--previous');

teaTasteBtnNext.addEventListener('click', (e) => {
    e.preventDefault();

    customerChoice.push(teaTasteForm.querySelector(`input[name="teaTaste"]:checked`).value);
    

        switch (teaTasteForm.querySelector(`input[name="teaTaste"]:checked`).value) {
        case value = 'fruitty':
            teaTaste.style.display = "none";
            teaColorChoice.style.display = "flex";
            Taste.progress(fruitty);
            break;
        case value = 'spicy':
            teaTaste.style.display = "none";
            teaColorChoice.style.display = "flex";
            Taste.progress(spicy);
            break;
        case value = 'floral':
            teaTaste.style.display = "none";
            teaColorChoice.style.display = "flex";
            Taste.progress(floral);
            break;
        case value = 'gourmet':
            teaTaste.style.display = "none";
            teaColorChoice.style.display = "flex";
            Taste.progress(gourmet);
            break;
        case value = 'nature':
            teaTaste.style.display = "none";
            teaColorChoice.style.display = "flex";
            Taste.progress(nature);
            break;
        case value = 'teaTasteAll':
            teaTaste.style.display = "none";
            results.style.display = "flex";
            resultAllDrinksFunction(arrayAllTea);
            setTimeout(reloadBtnExpand, 4000);
            Taste.progress(all);
            break;
    };
    console.log(customerChoice)
});

teaTasteBtnPrevious.addEventListener('click', (e) => {
    e.preventDefault();
    teaOrInfusion.style.display = "flex";
    teaTaste.style.display = "none";
    customerChoice.pop();
    console.log(customerChoice)
});

// Infusion taste 
const infusionFamilyForm = document.querySelector('.infusionFamily__form');
const infusionFamilyBtnNext = document.querySelector('.infusionFamily__button--submit');
const infusionFamilyBtnPrevious = document.querySelector('.infusionFamily__button--previous')

infusionFamilyBtnNext.addEventListener('click', (e) => {
    e.preventDefault();

    customerChoice.push(infusionFamilyForm.querySelector(`input[name="infusionFamily"]:checked`).value);
    switch (infusionFamilyForm.querySelector(`input[name="infusionFamily"]:checked`).value) {
        case value = 'infusion':
            infusionFamily.style.display = "none";
            infusionTaste.style.display = "flex";
            Drink.progress(infusion);
            break;
        case value = 'rooibos':
            infusionFamily.style.display = "none";
            rooibosTaste.style.display = "flex";
            Drink.progress(rooibos);
            break;
        case value = 'wellness':
            infusionFamily.style.display = "none";
            wellnessTaste.style.display = "flex";
            Drink.progress(wellness);
            break;
    }
    console.log(customerChoice);
});

infusionFamilyBtnPrevious.addEventListener('click', (e) => {
    e.preventDefault();
    teaOrInfusion.style.display = "flex";
    infusionFamily.style.display = "none";
    customerChoice.pop();
    console.log(customerChoice)
});

//tea Color 
const teaColorChoiceForm = document.querySelector('.teaColorChoice__form');
const teaColorChoiceBtnNext = document.querySelector('.teaColorChoice__button--submit');
const teaColorChoiceBtnPrevious = document.querySelector('.teaColorChoice__button--previous');

teaColorChoiceBtnNext.addEventListener('click', (e) => {
    e.preventDefault();

    customerChoice.push(teaColorChoiceForm.querySelector(`input[name="teaColorChoice"]:checked`).value);
    if (teaColorChoiceForm.querySelector(`input[name="teaColorChoice"]:checked`).value != '') {
        teaColorChoice.style.display = "none";
    };
    switch (teaColorChoiceForm.querySelector(`input[name="teaColorChoice"]:checked`).value) {
        case value = 'black':
            teaColorChoice.style.display = "none";
            results.style.display = "flex";
            findTea(customerChoice[1], customerChoice[2]);
            setTimeout(reloadBtnExpand, 4000);
            Color.progress(black);
            break;
        case value = 'blue':
            teaColorChoice.style.display = "none";
            results.style.display = "flex";
            findTea(customerChoice[1], customerChoice[2]);
            setTimeout(reloadBtnExpand, 4000);
            Color.progress(blue);
            break;
        case value = 'white':
            teaColorChoice.style.display = "none";
            results.style.display = "flex";
            findTea(customerChoice[1], customerChoice[2]);
            setTimeout(reloadBtnExpand, 4000);
            Color.progress(white);
            break;
        case value = 'puerh':
            teaColorChoice.style.display = "none";
            results.style.display = "flex";
            findTea(customerChoice[1], customerChoice[2]);
            setTimeout(reloadBtnExpand, 4000);
            Color.progress(puerh);
            break;
        case value = 'green':
            teaColorChoice.style.display = "none";
            results.style.display = "flex";
            findTea(customerChoice[1], customerChoice[2]);
            setTimeout(reloadBtnExpand, 4000);
            Color.progress(green);
            break;
        case value = 'TeaAll':
            teaColorChoice.style.display = "none";
            results.style.display = "flex";
            resultAllDrinksFunction(arrayAllTea);
            setTimeout(reloadBtnExpand, 4000);
            Color.progress(colorAll);
            break;
    }
    console.log(customerChoice);
});

teaColorChoiceBtnPrevious.addEventListener('click', (e) => {
    e.preventDefault();
    teaTaste.style.display = "flex";
    teaColorChoice.style.display = "none";
    customerChoice.pop();
    console.log(customerChoice)
});

//infusion flavors 
const infusionTasteForm = document.querySelector('.infusionTaste__form');
const infusionTasteBtnNext = document.querySelector('.infusionTaste__button--submit');
const infusionTasteBtnPrevious = document.querySelector('.infusionTaste__button--previous');

infusionTasteBtnNext.addEventListener('click', (e) => {
    e.preventDefault();
    customerChoice.push(infusionTasteForm.querySelector(`input[name="infusionTaste"]:checked`).value);
    switch (infusionTasteForm.querySelector(`input[name="infusionTaste"]:checked`).value) {
        case value = 'infusionGourmet':
            infusionTaste.style.display = "none";
            results.style.display = "flex";
            findInfusion(customerChoice[0], customerChoice[1]);
            Taste.progress(gourmet);
            setTimeout(reloadBtnExpand, 4000);
            break;
        case value = 'infusionSpicy':
            infusionTaste.style.display = "none";
            results.style.display = "flex";
            findInfusion(customerChoice[0], customerChoice[1]);
            setTimeout(reloadBtnExpand, 4000);
            Taste.progress(spicy);
            break;
        case value = 'infusionFloral':
            infusionTaste.style.display = "none";
            results.style.display = "flex";
            findInfusion(customerChoice[0], customerChoice[1]);
            setTimeout(reloadBtnExpand, 4000);
            Taste.progress(foral);
            break;
        case value = 'infusionFruitty':
            infusionTaste.style.display = "none";
            results.style.display = "flex";
            findInfusion(customerChoice[0], customerChoice[1]);
            setTimeout(reloadBtnExpand, 4000);
            Taste.progress(fruitty);
            break;
        case value = 'infusionNature':
            infusionTaste.style.display = "none";
            results.style.display = "flex";
            findInfusion(customerChoice[0], customerChoice[1]);
            setTimeout(reloadBtnExpand, 4000);
            Taste.progress(nature);
            break;
        case value = 'infusionAll':
            infusionTaste.style.display = "none";
            results.style.display = "flex";
            resultAllDrinksFunction(arrayAllInfusion);
            setTimeout(reloadBtnExpand, 4000);
            Taste.progress(all);
            break;
    }
    console.log(customerChoice)
});

infusionTasteBtnPrevious.addEventListener('click', (e) => {
    e.preventDefault();
    infusionFamily.style.display = "flex";
    infusionTaste.style.display = "none";
    customerChoice.pop();
    console.log(customerChoice)
});

//roibos flavors 
const rooibosTasteForm = document.querySelector('.rooibosTaste__form');
const rooibosTasteBtnNext = document.querySelector('.rooibosTaste__button--submit');
const rooibosTasteBtnPrevious = document.querySelector('.rooibosTaste__button--previous');

rooibosTasteBtnNext.addEventListener('click', (e) => {
    e.preventDefault();

    customerChoice.push(rooibosTasteForm.querySelector(`input[name="rooibosTaste"]:checked`).value);
    switch (rooibosTasteForm.querySelector(`input[name="rooibosTaste"]:checked`).value) {
        case value = 'rooibosNature':
            rooibosTaste.style.display = "none";
            results.style.display = "flex";
            findInfusion(customerChoice[0], customerChoice[1]);
            setTimeout(reloadBtnExpand, 4000);
            Taste.progress(nature)
            break;
        case value = 'rooibosSpicy':
            rooibosTaste.style.display = "none";
            results.style.display = "flex";
            findInfusion(customerChoice[0], customerChoice[1]);
            setTimeout(reloadBtnExpand, 4000);
            Taste.progress(spicy);
            break;
        case value = 'rooibosFruitty':
            rooibosTaste.style.display = "none";
            results.style.display = "flex";
            findInfusion(customerChoice[0], customerChoice[1]);
            setTimeout(reloadBtnExpand, 4000);
            Taste.progress(fruitty);
            break;
        case value = 'rooibosAll':
            rooibosTaste.style.display = "none";
            results.style.display = "flex";
            resultAllDrinksFunction(arrayAllRooibos);
            setTimeout(reloadBtnExpand, 4000);
            Taste.progress(all);
            break;
    }
    console.log(customerChoice);
});

rooibosTasteBtnPrevious.addEventListener('click', (e) => {
    e.preventDefault();
    infusionFamily.style.display = "flex";
    rooibosTaste.style.display = "none";
    customerChoice.pop();
    console.log(customerChoice)
});

//wellness flavors 
const wellnessTasteForm = document.querySelector('.wellnessTaste__form');
const wellnessTasteBtnNext = document.querySelector('.wellnessTaste__button--submit');
const wellnessTasteBtnPrevious = document.querySelector('.wellnessTaste__button--previous');

wellnessTasteBtnNext.addEventListener('click', (e) => {
    e.preventDefault();

    customerChoice.push(wellnessTasteForm.querySelector(`input[name="wellnessTaste"]:checked`).value);
    switch (wellnessTasteForm.querySelector(`input[name="wellnessTaste"]:checked`).value) {
        case value = 'breath':
            wellnessTaste.style.display = "none";
            results.style.display = "flex";
            findInfusion(customerChoice[0], customerChoice[1]);
            setTimeout(reloadBtnExpand, 4000);
            Taste.progress(breath);
            break;
        case value = 'lightLegs':
            wellnessTaste.style.display = "none";
            results.style.display = "flex";
            findInfusion(customerChoice[0], customerChoice[1]);
            setTimeout(reloadBtnExpand, 4000);
            Taste.progress(lightLegs);
            break;
        case value = 'toSleep':
            wellnessTaste.style.display = "none";
            results.style.display = "flex";
            findInfusion(customerChoice[0], customerChoice[1]);
            setTimeout(reloadBtnExpand, 4000);
            Taste.progress(toSleep);
            break;
        case value = 'breastFeeding':
            wellnessTaste.style.display = "none";
            results.style.display = "flex";
            findInfusion(customerChoice[0], customerChoice[1]);
            setTimeout(reloadBtnExpand, 4000);
            Taste.progress(breastFeeding);
            break;
        case value = 'looseWeight':
            wellnessTaste.style.display = "none";
            results.style.display = "flex";
            findInfusion(customerChoice[0], customerChoice[1]);
            setTimeout(reloadBtnExpand, 4000);
            Taste.progress(looseWeight);
            break;
        case value = 'digestive':
            wellnessTaste.style.display = "none";
            results.style.display = "flex";
            findInfusion(customerChoice[0], customerChoice[1]);
            setTimeout(reloadBtnExpand, 4000);
            Taste.progress(digestive);
            break;
        case value = 'all':
            wellnessTaste.style.display = "none";
            results.style.display = "flex";
            resultAllDrinksFunction(arrayAllWellness);
            setTimeout(reloadBtnExpand, 4000);
            Taste.progress(wellnessAll);
            break;
    }
    console.log(customerChoice);
});

wellnessTasteBtnPrevious.addEventListener('click', (e) => {
    e.preventDefault();
    infusionFamily.style.display = "flex";
    wellnessTaste.style.display = "none";
    customerChoice.pop();
    console.log(customerChoice)
});

//results__button--reload

function reloadBtnExpand(){
    resultBtnReload.classList.add ('btnReload--result');
    let newText = document.createElement('p');
    newText.classList.add('reloadText')
    newText.innerHTML = 'Recommencer';
    resultBtnReload.appendChild(newText);
};


//results__button--previous

ResultsPreviousBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (customerChoice[2] === 'black' || customerChoice[2] === 'blue' || customerChoice[1] === 'white' || customerChoice[2] === 'puerh' || customerChoice[2] === 'green' || customerChoice[2] === 'TeaAll') {
        results.style.display = "none";
        teaColorChoice.style.display = 'flex';
        customerChoice.pop();
        clearTimeout(reloadBtnExpand);
        resultBtnReload.classList.remove('btnReload--result');
    }
    else if (customerChoice[1] === "infusionGourmet" || customerChoice[1] === 'infusionSpicy' || customerChoice[1] === 'infusionFloral' || customerChoice[1] === 'infusionFruitty' || customerChoice[1] === 'infusionNature' || customerChoice[1] === 'infusionAll') {
        results.style.display = "none";
        infusionTaste.style.display = "flex";
        customerChoice.pop();
        clearTimeout(reloadBtnExpand);
        resultBtnReload.classList.remove('btnReload--result');
    }
    else if (customerChoice[1] === "fruitty" || customerChoice[1] === 'spicy' || customerChoice[1] === 'floral' || customerChoice[1] === 'gourmet' || customerChoice[1] === 'nature' || customerChoice[1] === 'teaTasteAll') {
        results.style.display = "none";
        teaTaste.style.display = "flex";
        customerChoice.pop();
        clearTimeout(reloadBtnExpand);
        resultBtnReload.classList.remove('btnReload--result');
    }
    else if (customerChoice[1] === "rooibosNature" || customerChoice[1] === 'rooibosSpicy' || customerChoice[1] === 'rooibosFruitty' || customerChoice[1] === 'rooibosAll') {
        results.style.display = "none";
        rooibosTaste.style.display = "flex";
        customerChoice.pop();
        clearTimeout(reloadBtnExpand);
        resultBtnReload.classList.remove('btnReload--result');
        
    } else if (customerChoice[0] === "wellness") {
        results.style.display = "none";
        wellnessTaste.style.display = "flex";
        customerChoice.pop();
        clearTimeout(reloadBtnExpand);
        resultBtnReload.classList.remove('btnReload--result');
        
    };
    
    function removeElementsByClass(className){
        const elements = document.getElementsByClassName(className);
        while(elements.length > 0){
            elements[0].remove();
        }
    }
    removeElementsByClass('app__results--object');
    removeElementsByClass('reloadText');
    
});
//reload Btn
btnReload.addEventListener('click', (e) => {
    e.preventDefault();
    customerChoice = [];
    teaOrInfusion.style.display = "none";
    teaColorChoice.style.display = "none";
    teaTaste.style.display = "none";
    infusionFamily.style.display = "none";
    infusionTaste.style.display = "none";
    rooibosTaste.style.display = "none";
    wellnessTaste.style.display = "none";
    results.style.display = "none";
    appHome.style.display = 'flex';
    resultBtnReload.classList.remove('btnReload--result');
    progress1.textContent = " ";
    progress2.textContent = " ";
    progress3.textContent = " ";
    progress1.style.backgroundColor = 'transparent';
    progress2.style.backgroundColor = 'transparent';
    progress3.style.backgroundColor = 'transparent';
    resultBtnReload.removeElementsByClass('reloadText');
});


// Type functions
function addContent(type) {
    let newDiv = document.createElement('div');
    let newContent = document.innerHTML = type.content;
    newDiv.classList.add('app__results--object');
    newDiv.innerHTML = newContent;
    results.append(newDiv);
};
// All drinks 
function resultAllDrinksFunction(allContext) {
    for (let i in allContext) {
        let newDiv = document.createElement('div');
        let newContent = document.innerHTML = allContext[i];
        newDiv.classList.add('app__results--object');
        newDiv.innerHTML = newContent;
        results.append(newDiv);
    }
};


function findTea(tastes, colors) {
    const result = allTea.filter(obj => obj.tastes.includes(tastes) && obj.colors.includes(colors))
        .forEach(obj => addContent(obj));
};
function findInfusion(family, tastes) {
    let result = allInfusion.filter(obj => obj.family.includes(family) && obj.tastes.includes(tastes))
        .forEach(obj => addContent(obj));
};

//appelee sur le click suivant 
function progress01 (choice){
    progress1.textContent = choice.name;
    progress1.style.backgroundColor = choice.backgroundColor;
};

function progress02 (choice){
    progress2.textContent = choice.name;
    progress2.style.backgroundColor = choice.backgroundColor;
};

function progress03 (choice){
    progress3.textContent = choice[0].name;
    progress3.style.backgroundColor = choice[0].backgroundColor;
};


