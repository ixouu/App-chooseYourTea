// save user actions
let userChoice = [];

// display the current page
let currentPage = '';

// display tea of infusion Page
function showTeaOrInfusionPage() {
    document.querySelector(".teaOrInfusion").style.display = 'flex';

}
//******    All Tastes Page        ******//

// display all flavors from tastes array
function showAllFlavors() {
    for (let i = 0; i < tastes.length; i++) {
        const fig = document.createElement('figure');
        const figImg = document.createElement('img');
        fig.dataset.taste = `${tastes[i].name}`
        figImg.setAttribute('src', `${tastes[i].imageUrl}`);
        figImg.setAttribute('alt', `icone représentant ${tastes[i].title}`);
        const figcaption = document.createElement('figcaption');
        figcaption.innerText = `${tastes[i].title}`;
        fig.append(figImg, figcaption);
        allTastesDiv.append(fig);
        fig.addEventListener('click', (e) => {
            e.preventDefault();
            findProduct(fig.dataset.taste);
            currentPage = 'app__results'
        })
    }
}

// find the product where the taste is matching and display the result page
function findProduct(taste) {
    tasteChoice.style.display = 'none';
    results.style.display = 'flex';
    progressBlock.style.display = 'flex';
    userChoice.push(taste);
    Taste.progress(taste);
    progressBar();
    allDrinks.filter(product => product.taste.includes(taste))
        .forEach(product => {
            addContent(product)
        });
}

// return the total number of tastes in the Title
function displayNumberFlavors(flavors) {
    const numberOfFlavors = flavors.length + 1;
    document.querySelector('.numberOfTastes').innerText = `Choississez le goût de votre choix parmis nos ${numberOfFlavors} goûts uniques`
}

// display all Tastes page
function showAllTastesPage() {
    document.querySelector('.allTastes').style.display = 'flex';
    showAllFlavors();
    progressBar();
    displayNumberFlavors(tastes);
    userChoice.push('allTastes')
}

//******    Manage texts on the result page      ******//

// Any products are matching, suggest other product who has the same taste
function showSuggestProducts(taste) {
    createSuggestParagraph();
    let suggestBtn = document.createElement('button');
    let tasteName = eval(taste).name
    let familyName = eval(userChoice[0]).name
    suggestBtn.classList.add('suggestBtn');
    slider.style.overflowY = 'hidden'
    suggestBtn.innerText = `Découvrir des ${familyName} ${tasteName}`
    results.append(suggestBtn)
    document.querySelector('.suggestBtn').addEventListener('click', (e) => {
        e.preventDefault()
        slider.style.overflowY = 'scroll'
        userChoice.length == 3 ? userChoice.pop() : null;
        document.querySelector('.suggestBtn').remove()
        progressColor.innerText = '';
        progressColor.style.backgroundColor = 'transparent';
        console.log(userChoice)
        allDrinks.filter(product => product.family.includes(userChoice[0]) && product.tastes.includes(taste))
        .forEach(product => {
            showResultTitle()
            addContent(product)
            removeSuggestParagraph()
        })
    })
    console.log('taste ' + taste )
}

function removeSuggestParagraph(){
    if (document.querySelector('.result--suggestParagraph') !== null){
    document.querySelector('.result--suggestParagraph').remove();
    }
}

function createSuggestParagraph() {
    
    let paragraph = document.createElement('p');
    paragraph.classList.add('result--suggestParagraph')
    paragraph.textContent = 'Aucuns produits ne corresponds à votre recherches, essayez de chercher un autre goût.'
    results.replaceChild(paragraph, resultTitle);
   
}

// display the result title
function showResultTitle(){
    if (results.getElementsByTagName('h2').length == 0){
        slider.insertAdjacentHTML('beforebegin', `
        <h2 class=\'results--title\'>Voici ce que nous avons sélectionné pour vous :</h2>
        `)
    }else{
    resultTitle.textContent = 'Voici ce que nous avons sélectionné pour vous :';
    }
}

//******    add Tea cards to the result page       ******//

function addContent(product) {
    const newArticle = document.createElement('article');
    newArticle.classList.add('article');

    // image
    const articleLeft = document.createElement('div');
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
    const articleRight = document.createElement('div');
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

    for (let i = 0; i < product.taste.length; i++) {
        tastes.filter(taste => taste.name.includes(`${product.taste[i]}`))
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
                document.querySelectorAll('.tasteLine').forEach(e => e.append(imgInfo));

            });
    }
}

//******    Functions aiming to find products from User choice      ******//
function findProductsFromUserChoice() {
    
    // if the user wants to see all the products of a color or a family 
    if (userChoice[2] == 'infusionAll' || userChoice[2] == 'rooibosAll' || userChoice[2] == 'wellnessAll') {
        allDrinks.filter(product => product.family.includes(userChoice[1]))
            .forEach(product => {
                showResultTitle();
                addContent(product)
                removeSuggestParagraph();
            })
    }
    // if the user wants to see all tea
    if (userChoice[1] == 'teaTasteAll') {
        allDrinks.filter(product => product.family.includes(userChoice[0]))
            .forEach(product => {
                showResultTitle()
                addContent(product)
                removeSuggestParagraph()
            })
    }
    // if the user wants to see all Tea with a taste but not a specific color 
    if (userChoice[2] == 'teaAll') {
        allDrinks.filter(product => product.family.includes(userChoice[0]) && product.tastes.includes(userChoice[1]))
            .forEach(product => {
                showResultTitle()
                addContent(product)
                removeSuggestParagraph()
            })
    }
    // if the user picked infusions
    if (userChoice[1] == 'infusion' || userChoice[1] == 'rooibos' || userChoice[1] == 'wellness') {
        // if (['infusion', 'rooibos', 'wellness'].includes(userChoice[1])){
        const products = allDrinks.filter(product => product.family.includes(userChoice[1]) && product.tastes.includes(userChoice[2]))
        if (products.length == 0) {
            showSuggestProducts(userChoice[1])
            
        } else {
            products.forEach(product => {
                showResultTitle()
                addContent(product)
                removeSuggestParagraph()
            })
        }
    } else {
        const products = allDrinks.filter(product => product.family.includes(userChoice[0]) && product.tastes.includes(userChoice[1]) && product.colors.includes(userChoice[2]));
        if (products.length == 0) {
            showSuggestProducts(userChoice[1])
            
        } else {
            products.forEach(product => {
                showResultTitle()
                addContent(product)
                removeSuggestParagraph()
            })
        }
    }
}
//******    Delete products from result page       ******//

function deleteAllProductFromResults() {
    document.querySelectorAll('.article').forEach(article => article.remove())
}

//******    Progress bar       ******//

// aims to manage the progressBar
function progressBar() {
    if (userChoice.length == 0) {
        return
    }
    const progressToShow = findProgressElement(userChoice)
    return progressToShow
}

function findProgressElement(userChoice) {
    progressBlock.style.display = 'flex';
    if (userChoice[0] !== undefined && userChoice[1] == undefined && userChoice[2] == undefined) {
        Drink.progress(eval(userChoice[0]))
    } else if (userChoice[0] !== undefined && userChoice[1] !== undefined && userChoice[2] == undefined) {
        Taste.progress(eval(userChoice[1]))
    } else if (userChoice[0] !== undefined && userChoice[1] !== undefined && userChoice[2] !== undefined) {
        Color.progress(eval(userChoice[2]))
    }
}

function displayElementOfProgressBar() {
    if (userChoice.length === 1) {
        progressBlock.style.display = 'none'
        document.querySelectorAll('.progressBlock__Progress').forEach(e => {
            e.style.backgroundColor = 'transparent'
            e.innerText = ''
        })
    }
    if (userChoice.length === 2) {
        document.querySelector('.progressBlock__ProgressTaste').style.backgroundColor = 'transparent'
        document.querySelector('.progressBlock__ProgressTaste').innerText = ''
    }
    if (userChoice.length === 3) {
        document.querySelector('.progressBlock__ProgressColor').style.backgroundColor = 'transparent'
        document.querySelector('.progressBlock__ProgressColor').innerText = ''
    }
}

function hideProgressBar() {
    progressBlock.style.display = 'none';
    document.querySelectorAll('.progressBlock__Progress').forEach(e => {
        e.style.backgroundColor = 'transparent'
        e.innerText = ''
    })
}


progressBar()

//******    Deal how pages are working together        ******//

// display the good page set the name of the current Page
function showPage(element, className) {
    appHome.style.display = 'none';
    let checkedChoice = document.querySelector('input:checked')
    if (className.includes('startBtn')) {
        showTeaOrInfusionPage()
        currentPage = 'teaOrInfusion'
    };
    if (className.includes('tasteBtn')) {
        showAllTastesPage();
        currentPage = 'allTastes'
    }
    if (className.includes('btnPrevious')) {
        showLastPageVisited(element)
    }
    if (className.includes('btnNext')) {
        let choiceId = checkedChoice.id
        userChoice.push(checkedChoice.value)
        if (choiceId.includes('teaTaste')) {
            showNextPage('teaColorChoice', element.closest('div'))
        } else if (choiceId.includes('all')) {
            showNextPage('app__results', element.closest('div'))
            findProductsFromUserChoice()
        }
        else {
            currentPage = checkedChoice.value;
            showNextPage(checkedChoice.value, element.closest('div'))
        }
    }
    if (className.includes('btnShowResults')) {
        userChoice.push(checkedChoice.value)
        showNextPage('app__results', element.closest('div'))
        findProductsFromUserChoice();
        currentPage = 'app__results'
    }
    if (className.includes('btnReload')) {
        userChoice = [];
        slider.innerText = '';
        showNextPage('appHome', element.closest('div'))
        currentPage = 'appHome';
        hideProgressBar();
    }
    if (checkedChoice != null) {
        checkedChoice.checked = false;
    }
    progressBar()
}

// undisplay the current Page and Pick the next page to display
function showNextPage(checkedElement, currentPageshown) {
    const pageToShow = document.querySelector(`.${checkedElement}`)
    pageToShow.style.display = 'flex';
    currentPage = checkedElement
    currentPageshown.style.display = 'none';
}

// display the last page visited
function showLastPageVisited(element) {
    console.log(element)
    element.closest('div').style.display = 'none'
    displayElementOfProgressBar();
    switch (currentPage) {
        case 'allTastes':
            appHome.style.display = 'flex';
            currentPage = 'appHome'
            break;
        case 'teaTaste':
            teaOrInfusion.style.display = 'flex';
            currentPage = 'teaOrInfusion'
            break;
        case 'teaOrInfusion':
            appHome.style.display = 'flex';
            currentPage = 'appHome'
            break;
        case 'infusions':
            teaOrInfusion.style.display = 'flex';
            currentPage = 'teaOrInfusion';
            break;
        case 'tea':
            teaOrInfusion.style.display = 'flex';
            currentPage = 'teaOrInfusion';
            break;
        case 'teaColorChoice':
            teaTaste.style.display = 'flex';
            currentPage = 'teaTaste';
            break;
        case 'infusion':
            infusionFamily.style.display = 'flex';
            currentPage = 'infusions'
            break;
        case 'rooibos':
            infusionFamily.style.display = 'flex';
            currentPage = 'infusions';
            break;
        case 'wellness':
            infusionFamily.style.display = 'flex';
            currentPage = 'teaColorChoice';
            break;
        case 'app__results':
            deleteAllProductFromResults();
            if (userChoice[1] == 'teaTasteAll') {
                document.querySelector('.teaTaste').style.display = 'flex';
                currentPage = 'teaTaste'
            }
            if (userChoice[0] == 'tea' && userChoice[2] !== undefined) {
                document.querySelector('.teaColorChoice').style.display = 'flex'
                currentPage = 'teaColorChoice'
            }
            if (userChoice[0] == 'tea' && userChoice[1] !== undefined) {
                document.querySelector('.teaTaste').style.display = 'flex'
                currentPage = 'teaTaste'
            }
            if (userChoice[0] == 'infusions' && userChoice[1] == 'infusion') {
                document.querySelector('.infusion').style.display = 'flex'
                currentPage = 'infusion'
            }
            if (userChoice[0] == 'infusions' && userChoice[1] == 'rooibos') {
                document.querySelector('.rooibos').style.display = 'flex'
                currentPage = 'rooibos'
            }
            if (userChoice[0] == 'infusions' && userChoice[1] == 'wellness') {
                document.querySelector('.wellness').style.display = 'flex'
                currentPage = 'wellness'
            }
            if (userChoice[0] == 'allTastes') {
                tasteChoice.style.display = 'flex';
                currentPage = 'allTastes'
            }
            break;
        default:
            break;
    }
    userChoice.pop();
}


// add Eventlisterners 
function addEventListeners(element, className) {
    if (element.nodeName == 'BUTTON') {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            showPage(element, className)
        })
    };
    if (element.nodeName == 'INPUT') {
        element.addEventListener('input', (e) => {
            e.preventDefault();
        })
    }
}

// listen all buttons add call the function to add Event listerner
document.querySelectorAll('.btn').forEach(element => {
    addEventListeners(element, element.className)
})
