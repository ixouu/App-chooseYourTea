

document.querySelector('.startBtn').addEventListener('click', () =>{
    teaOrInfusion.style.display = "flex";
    appHome.style.display = 'none';
})

// TEA OR INFUSION

const teaOrInfusionForm = document.querySelector('.teaOrInfusion__form');
const teaOrinfusionBtnNext = document.querySelector('.teaOrInfusion__button--submit');
const teaOrinfusionBtnPrevious = document.querySelector('.teaOrInfusion__button--previous');


teaOrinfusionBtnNext.addEventListener('click', (e) => {
    e.preventDefault();
    const UserChoice = teaOrInfusionForm.querySelector(`input[name="choice"]:checked`);
    switch (UserChoice.value) {
        case value = 'tea':
            teaOrInfusion.style.display = 'none';
            teaTaste.style.display = 'flex';
            progressBlock .style.display = 'flex';
            customerChoice.push(UserChoice.value);
            Drink.progress(tea);
            break;
        case value = 'infusion':
            teaOrInfusion.style.display = 'none';
            infusionFamily.style.display = 'flex';
            progressBlock .style.display = 'flex';
            Drink.progress(infusion);
            break;
    }
    console.log(customerChoice);
});

teaOrinfusionBtnPrevious.addEventListener('click', (e) => {
    e.preventDefault();
    teaOrInfusion.style.display = "none";
    appHome.style.display = 'flex';
    progressBlock.style.display = 'none';
    customerChoice.pop();
    customerChoice.pop();
})

// TASTE CHOICE
document.querySelector('.tasteChoicePreviousBtn').addEventListener('click', () =>{
    tasteChoice.style.display = 'none';
    appHome.style.display = 'flex'
    customerChoice.pop();
});

// find the product where the taste is matching and display the result page
function findProduct(taste){    
    tasteChoice.style.display = 'none';
    results.style.display = 'flex';
    progressBlock.style.display = 'flex';
    customerChoice.push(taste);
    Taste.progress(taste)
    allDrinks.filter(product => product.taste.includes(taste))
    .forEach(product => {
        addContent(product)
    });
}

// return the total number of tastes in the Title
function displayNumberFlavors(flavors){
    const numberOfFlavors = flavors.length +1;
    document.querySelector('.numberOfTastes').innerText= `Choississez le goût de votre choix parmis nos ${numberOfFlavors} goûts uniques`
}

// display all flavors from allTastes array
function showAllFlavors(){
    for (let i = 0 ; i < allTastes.length; i++){
        const fig = document.createElement('figure');
        const figImg = document.createElement('img');
        fig.dataset.taste = `${allTastes[i].name}`
        figImg.setAttribute('src', `${allTastes[i].imageUrl}`);
        figImg.setAttribute('alt', `icone représentant ${allTastes[i].title}`);
        const figcaption = document.createElement('figcaption');
        figcaption.innerText = `${allTastes[i].title}`;
        fig.append(figImg, figcaption);
        allTastesDiv.append(fig);
        fig.addEventListener('click', (e) =>{
            e.preventDefault();
            findProduct(fig.dataset.taste);
        })
    }
}

document.querySelector('.tasteBtn').addEventListener('click', () => {
    tasteChoice.style.display = 'flex'; 
    appHome.style.display = 'none';
    customerChoice.push('allFlavors')
    showAllFlavors();
    displayNumberFlavors(allTastes);
});

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
            findDrink();
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
    progressChoice.innerHTML = '';
    progressChoice.style.backgroundColor = 'transparent';
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
    progressChoice.innerHTML = '';
    progressChoice.style.backgroundColor = 'transparent';
    customerChoice.pop();
    console.log(customerChoice);
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
            setTimeout(reloadBtnExpand, 4000);
            Color.progress(black);
            findDrink(customerChoice[1], customerChoice[2]);
            break;
        case value = 'blue':
            teaColorChoice.style.display = "none";
            results.style.display = "flex";
            setTimeout(reloadBtnExpand, 4000);
            Color.progress(blue);
            findDrink(customerChoice[1], customerChoice[2])
            break;
        case value = 'white':
            teaColorChoice.style.display = "none";
            results.style.display = "flex";
            setTimeout(reloadBtnExpand, 4000);
            Color.progress(white);
            findDrink(customerChoice[1], customerChoice[2])
            break;
        case value = 'puerh':
            teaColorChoice.style.display = "none";
            results.style.display = "flex";
            setTimeout(reloadBtnExpand, 4000);
            Color.progress(puerh);
            findDrink(customerChoice[1], customerChoice[2])
            break;
        case value = 'green':
            teaColorChoice.style.display = "none";
            results.style.display = "flex";
            setTimeout(reloadBtnExpand, 4000);
            Color.progress(green);
            findDrink(customerChoice[1], customerChoice[2])
            break;
        case value = 'TeaAll':
            teaColorChoice.style.display = "none";
            results.style.display = "flex";
            setTimeout(reloadBtnExpand, 4000);
            Color.progress(colorAll);
            findDrink(customerChoice[1], customerChoice[2]);
            break;
    }
    console.log(customerChoice);
});

teaColorChoiceBtnPrevious.addEventListener('click', (e) => {
    e.preventDefault();
    teaTaste.style.display = "flex";
    teaColorChoice.style.display = "none";
    progressColor.innerHTML = '';
    progressColor.style.backgroundColor = 'transparent';
    progressTaste.innerHTML = '';
    progressTaste.style.backgroundColor = 'transparent';
    customerChoice.pop();
    resultBtnReload.classList.remove('btnReload--result');
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
        case value = 'gourmet':
            infusionTaste.style.display = "none";
            results.style.display = "flex";
            findDrink(customerChoice[1], null);
            Taste.progress(gourmet);
            setTimeout(reloadBtnExpand, 4000);
            break;
        case value = 'spicy':
            infusionTaste.style.display = "none";
            results.style.display = "flex";
            findDrink(customerChoice[1], null);
            setTimeout(reloadBtnExpand, 4000);
            Taste.progress(spicy);
            break;
        case value = 'floral':
            infusionTaste.style.display = "none";
            results.style.display = "flex";
            findDrink(customerChoice[1], null);
            setTimeout(reloadBtnExpand, 4000);
            Taste.progress(floral);
            break;
        case value = 'fruitty':
            infusionTaste.style.display = "none";
            results.style.display = "flex";
            findDrink(customerChoice[1], null);
            setTimeout(reloadBtnExpand, 4000);
            Taste.progress(fruitty);
            break;
        case value = 'nature':
            infusionTaste.style.display = "none";
            results.style.display = "flex";
            findDrink(customerChoice[1], null);
            setTimeout(reloadBtnExpand, 4000);
            Taste.progress(nature);
            break;
        case value = 'infusionAll':
            infusionTaste.style.display = "none";
            results.style.display = "flex";
            findDrink(customerChoice[0]);
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
    progressChoice.innerHTML = '';
    progressChoice.style.backgroundColor = 'transparent';
    customerChoice.pop();
    resultBtnReload.classList.remove('btnReload--result');
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
        case value = 'gourmet':
            rooibosTaste.style.display = "none";
            results.style.display = "flex";
            findDrink(customerChoice[1], null);
            setTimeout(reloadBtnExpand, 4000);
            Taste.progress(gourmet)
            break;
        case value = 'nature':
            rooibosTaste.style.display = "none";
            results.style.display = "flex";
            findDrink(customerChoice[1], null);
            setTimeout(reloadBtnExpand, 4000);
            Taste.progress(nature)
            break;
        case value = 'spicy':
            rooibosTaste.style.display = "none";
            results.style.display = "flex";
            findDrink(customerChoice[1], null);
            setTimeout(reloadBtnExpand, 4000);
            Taste.progress(spicy);
            break;
        case value = 'fruitty':
            rooibosTaste.style.display = "none";
            results.style.display = "flex";
            findDrink(customerChoice[1], null);
            setTimeout(reloadBtnExpand, 4000);
            Taste.progress(fruitty);
            break;
        case value = 'rooibosAll':
            rooibosTaste.style.display = "none";
            results.style.display = "flex";
            findDrink(customerChoice[0]);
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
    progressChoice.innerHTML = '';
    progressChoice.style.backgroundColor = 'transparent';
    customerChoice.pop();
    resultBtnReload.classList.remove('btnReload--result');
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
            findDrink(customerChoice[1], null);
            setTimeout(reloadBtnExpand, 4000);
            Taste.progress(breath);
            break;
        case value = 'lightLegs':
            wellnessTaste.style.display = "none";
            results.style.display = "flex";
            findDrink(customerChoice[1], null);
            setTimeout(reloadBtnExpand, 4000);
            Taste.progress(lightLegs);
            break;
        case value = 'toSleep':
            wellnessTaste.style.display = "none";
            results.style.display = "flex";
            findDrink(customerChoice[1], null);
            setTimeout(reloadBtnExpand, 4000);
            Taste.progress(toSleep);
            break;
        case value = 'breastFeeding':
            wellnessTaste.style.display = "none";
            results.style.display = "flex";
            findDrink(customerChoice[1], null);
            setTimeout(reloadBtnExpand, 4000);
            Taste.progress(breastFeeding);
            break;
        case value = 'looseWeight':
            wellnessTaste.style.display = "none";
            results.style.display = "flex";
            findDrink(customerChoice[1], null);
            setTimeout(reloadBtnExpand, 4000);
            Taste.progress(looseWeight);
            break;
        case value = 'digestive':
            wellnessTaste.style.display = "none";
            results.style.display = "flex";
            findDrink(customerChoice[1], null);
            setTimeout(reloadBtnExpand, 4000);
            Taste.progress(digestive);
            break;
        case value = 'all':
            wellnessTaste.style.display = "none";
            results.style.display = "flex";
            findDrink(customerChoice[0]);
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
    progressChoice.innerHTML = '';
    progressChoice.style.backgroundColor = 'transparent';
    customerChoice.pop();
    resultBtnReload.classList.remove('btnReload--result');
    console.log(customerChoice)
});

//results__button--reload

function reloadBtnExpand(){
    resultBtnReload.classList.add ('btnReload--result');
    let newText = document.createElement('p');
    newText.classList.add('reloadText')
    newText.innerText = 'Recommencer';
    resultBtnReload.appendChild(newText);
};


//results__button--previous

ResultsPreviousBtn.addEventListener('click', (e) => {
    e.preventDefault();
    clearTimeout(reloadBtnExpand);
    resultBtnReload.classList.remove('btnReload--result');
    if (customerChoice[0] === 'tea' && customerChoice[2] === 'black' || customerChoice[2] === 'blue' || customerChoice[2] === 'white' || customerChoice[2] === 'puerh' || customerChoice[2] === 'green' || customerChoice[2] === 'TeaAll') {
        results.style.display = "none";
        teaColorChoice.style.display = 'flex';
        customerChoice.pop();
        progressColor.innerHTML = '';
        progressColor.style.backgroundColor = 'transparent';
        ;
    }
    else if (customerChoice[0]=== 'infusion' && customerChoice[1] === "gourmet" || customerChoice[1] === 'spicy' || customerChoice[1] === 'floral' || customerChoice[1] === 'fruitty' || customerChoice[1] === 'nature' || customerChoice[1] === 'infusionAll') {
        results.style.display = "none";
        infusionTaste.style.display = "flex";
        progressTaste.innerHTML = '';
        progressTaste.style.backgroundColor = 'transparent';
        customerChoice.pop();
    }
    else if (customerChoice[0]==='tea' && customerChoice[1] === "fruitty" || customerChoice[1] === 'spicy' || customerChoice[1] === 'floral' || customerChoice[1] === 'gourmet' || customerChoice[1] === 'nature' || customerChoice[1] === 'teaTasteAll') {
        results.style.display = "none";
        teaTaste.style.display = "flex";
        progressTaste.innerHTML = '';
        progressTaste.style.backgroundColor = 'transparent';
        customerChoice.pop();
    }
    else if (customerChoice[0]==='rooibos' && customerChoice[1] === "nature" || customerChoice[1] === 'spicy' || customerChoice[1] === 'fruitty' || customerChoice[1] === 'rooibosAll') {
        results.style.display = "none";
        rooibosTaste.style.display = "flex";
        progressTaste.innerHTML = '';
        progressTaste.style.backgroundColor = 'transparent';
        customerChoice.pop();
        
    } else if (customerChoice[0] === "wellness") {
        results.style.display = "none";
        wellnessTaste.style.display = "flex";
        progressTaste.innerHTML = '';
        progressTaste.style.backgroundColor = 'transparent';
        customerChoice.pop();       
    } else if (customerChoice[0] === 'allFlavors'){
        results.style.display = "none";
        tasteChoice.style.display = 'flex';
        document.querySelectorAll('article').forEach(e => e.remove())
    }
    ;
    
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
    progressBlock .style.display = 'none';
    progressChoice.textContent = " ";
    progressTaste.textContent = " ";
    progressColor.textContent = " ";
    progressChoice.style.backgroundColor = 'transparent';
    progressColor.style.backgroundColor = 'transparent';
    progressTaste.style.backgroundColor = 'transparent';
    resultBtnReload.removeElementsByClass('reloadText');
});



// Type functions
function addContent(product) {
    const newArticle = document.createElement('article');
    newArticle.classList.add('article');

    // image
    const articleLeft= document.createElement('div');
    articleLeft.classList.add('article-left')
    const img = document.createElement('img');
    img.classList.add('img__wrapper')
    img.setAttribute('src', `${product.linkImage}`);
    img.setAttribute('alt', `${product.name}`);
    articleLeft.append(img);

    // text
    const top = document.createElement('div');
    top.classList.add('top');
    top.insertAdjacentHTML('afterbegin', `
    <h4>${product.title}</h4>
    <p>${product.description}</p>
    `)

    const articleRight= document.createElement('div');
    articleRight.classList.add('article-right')

    //bottom text
    const bottom = document.createElement('div')
    bottom.classList.add('bottom');
    bottom.insertAdjacentHTML('afterbegin', `
    <div class="bottom-left">
        <button class="discover"><span>Découvrir</span></button>
        <p>A partir de ${product.price}€</p>
    </div>
    <div class="bottom-right">
    </div>
    `)
 

    //create DOM elements
    articleLeft.append(img);
    articleRight.append(top, bottom)
    newArticle.append(articleLeft, articleRight);
    slider.append(newArticle);

    for (let i = 0; i < product.taste.length ; i++){
        allTastes.filter(taste => taste.name.includes(`${product.taste[i]}`))
        .forEach(element => {
            const tasteLine = document.createElement('div');
            tasteLine.classList.add('tasteLine')
            const tasteImg = document.createElement('img');
            tasteImg.setAttribute('src', `${element.imageUrl}`)
            tasteImg.setAttribute('alt', `icone représentant ${element.title}`)
            document.querySelectorAll('.bottom-right').forEach(e => e.append(tasteLine))
            document.querySelectorAll('.tasteLine').forEach(e => e.append(tasteImg))
            const imgInfo = document.createElement('span');
            imgInfo.classList.add('img-info')
            imgInfo.innerText = `${element.title}`;
            document.querySelectorAll('.tasteLine').forEach(e => e.append(imgInfo))
        });
    }
};
// All drinks 
function resultAllDrinksFunction(allContext) {
    for (let i in allContext) {
        let newDiv = document.createElement('div');
        let newContent = document.innerHTML = allContext[i];
        newDiv.classList.add('app__results--object');
        newDiv.innerHTML = newContent;
        slider.append(newArticle);
    }
};

// Find all teas where the taste and the color are matching and for each, call addContent function
function findDrink(tastes, colors) {
    switch (customerChoice[0]) {
        case 'tea':
            // Display all Tea who has a taste
            if (customerChoice[2] == "TeaAll"){
                allDrinks.filter(product => product.family.includes('tea') && product.tastes.includes(tastes))
                .forEach(product => {
                    addContent(product)
                })
            } else if(customerChoice[1] == 'teaTasteAll' ){
                allDrinks.filter(product => product.family.includes('tea'))
                .forEach(product => {
                    addContent(product)
                })
            } else{
                allDrinks.filter(product => product.family.includes('tea') && product.tastes.includes(tastes) && product.colors.includes(colors))
                .forEach(product => {
                    addContent(product)
                });
            }
            break;
        case 'infusion':
            if (customerChoice[1] == 'infusionAll'){
                allDrinks.filter(product => product.family.includes('infusion'))
                .forEach(product => {
                    addContent(product)
                })
            }else {
                allDrinks.filter(product => product.family.includes('infusion') && product.tastes.includes(tastes))
                .forEach(product => {
                    addContent(product)
                });
            }

        case 'rooibos':
            if(customerChoice[1]== 'rooibosAll'){
                allDrinks.filter(product => product.family.includes('rooibos'))
                .forEach(product => {
                    addContent(product)
                });
            }else {
                allDrinks.filter(product => product.family.includes('rooibos') && product.tastes.includes(tastes))
                .forEach(product => {
                    addContent(product)
                }); 
            }
        case 'wellness':
            if(customerChoice[1]== 'all'){
                allDrinks.filter(product => product.family.includes('wellness'))
                .forEach(product => {
                    addContent(product)
                }); 
            }else{
                allDrinks.filter(product => product.family.includes('wellness') && product.tastes.includes(tastes))
                .forEach(product => {
                    addContent(product)
                }); 
            }

        default:
            // let notFound = document.createElement('p');
            // notFound.textContent = 'Désolé aucuns produits ne correspond à votre recherche';
            // slider.append(notFound)
            break;
    }
};

