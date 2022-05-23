//Objects

function Tea(choice, teaChoice, teaColorChoice){
    this.choice         = choice;
    this.teaChoice      = teaChoice;
    this.teaColorChoice = teaColorChoice;  
};

function Infusion (choice,infusionChoice, infusionFlavor, roibosFlavor, wellnessFlavor){
    this.choice         = choice;
    this.infusionChoice = infusionChoice;
    this.infusionFlavor = infusionFlavor;
    this.roibosFlavor   = roibosFlavor;
    this.wellnessFlavor = wellnessFlavor;
}; 
 
let breath            = new Infusion ('infusion', 'wellness', null, null, 'breath');
let lightLegs         = new Infusion ('infusion', 'wellness', null, null, 'lightLegs');
let toSleep           = new Infusion ('infusion', 'wellness', null, null, 'toSleep');
let breastfeeding     = new Infusion ('infusion', 'wellness', null, null, 'breastfeeding');
let looseWeight       = new Infusion ('infusion', 'wellness', null, null, 'looseWeight');
let digestive         = new Infusion ('infusion', 'wellness', null, null, 'digestive');

//result function
function resultWellnessFunction(){
    if (infusionCustomerChoice[0] == breath.choice 
        && infusionCustomerChoice[1] == breath.infusionChoice 
        && infusionCustomerChoice[2] == breath.wellnessFlavor){
            let newDiv = document.createElement('div');
            let newContent = document.innerHTML ="<img src=\"./assets/images/breath.webp\"><div class=\"app__results-objectText\"> <h4>infusion respirante</h4> <p>Cette infusion au goût délicieux est décongestionnante ce qui facilite la respiration. Les arômes stimulants qui la composent vous procurent immédiatement un réconfort. A prendre dès l\'apparition des premiers frissons sous un bon plaid avec une cuillère de miel !</p></div>";
            newDiv.classList.add('app__results--object');
            newDiv.innerHTML = newContent;
            results.append(newDiv);
    }else if(infusionCustomerChoice[0] == lightLegs.choice 
          && infusionCustomerChoice[1] == lightLegs.infusionChoice
          && infusionCustomerChoice[2] == lightLegs.wellnessFlavor){
            let newDiv = document.createElement('div');
            let newContent = document.innerHTML ="<img src=\"./assets/images/lightlegs.webp\"><div class=\"app__results-objectText\"> <h4>infusion jambes légères</h4> <p>Cette infusion vous aidera à favoriser une bonne circulation veineuse, grâce à l'association de différentes plantes, telles que la vigne rouge, l'origan ou l'angélique. Associée à un bon équilibre alimentaire et, si possible, à la pratique d'un sport, elle vous permettra de retrouver des jambes légères.</p></div>";
            newDiv.classList.add('app__results--object');
            newDiv.innerHTML = newContent;
            results.append(newDiv);
    }else if(infusionCustomerChoice[0] == toSleep.choice 
        && infusionCustomerChoice[1] == toSleep.infusionChoice
        && infusionCustomerChoice[2] == toSleep.wellnessFlavor){
          let newDiv = document.createElement('div');
          let newContent = document.innerHTML ="<img src=\"https://fakeimg.pl/226x266/ \"><div class=\"app__results-objectText\"> <h4>Je n'ai pas de contenu</h4> <p>Cette infusion n'existe pas</p></div>";
          newDiv.classList.add('app__results--object');
          newDiv.innerHTML = newContent;
          results.append(newDiv);
        }else if(infusionCustomerChoice[0] == breastfeeding.choice 
            && infusionCustomerChoice[1] == breastfeeding.infusionChoice
            && infusionCustomerChoice[2] == breastfeeding.wellnessFlavor){
              let newDiv = document.createElement('div');
              let newContent = document.innerHTML ="<img src=\"./assets/images/breastfeeding.webp\"><div class=\"app__results-objectText\"> <h4>Infusion Allaitante</h4> <p>Cette infusion à base d'anis, de cumin et de fenouil a été spécifiquement adaptée pour favoriser la lactation. Elle permet une bonne hydratation, étape indispensable d'un allaitement réussi.<br>Partagez un véritable moment  de partage et de bien-être avec bébé.</p></div>";
              newDiv.classList.add('app__results--object');
              newDiv.innerHTML = newContent;
              results.append(newDiv);
      }else if(infusionCustomerChoice[0] == looseWeight.choice 
        && infusionCustomerChoice[1] == looseWeight.infusionChoice
        && infusionCustomerChoice[2] == looseWeight.wellnessFlavor){
          let newDiv = document.createElement('div');
          let newContent = document.innerHTML ="<img src=\"./assets/images/looseweight.webp\"><div class=\"app__results-objectText\"> <h4>Infusion Silhouette Parfaite</h4> <p>L'infusion Silhouette parfaite est élaborée avec des plantes médicinales BIO comme la Vigne rouge qui aide au contrôle du poids, à réduire l'aspect cellulite et à redéfinir la silhouette. Ce mélange permet un drainage général ainsi l'assimilation des nutriments. Silhouette parfaite doit être associée à une alimentation équilibrée et si possible à la pratique d'un sport car l'infusion ne fera pas tout, toute seule.</p></div>";
          newDiv.classList.add('app__results--object');
          newDiv.innerHTML = newContent;
          results.append(newDiv);
        }else if(infusionCustomerChoice[0] == digestive.choice 
            && infusionCustomerChoice[1] == digestive.infusionChoice
            && infusionCustomerChoice[2] == digestive.wellnessFlavor){
              let newDiv = document.createElement('div');
              let newContent = document.innerHTML ="<img src=\"./assets/images/digestive.webp\"><div class=\"app__results-objectText\"> <h4>Infusion Après-Repas</h4> <p>Délicieuse et légère, cette infusion Après-Repas vous aidera à améliorer la digestion.  De quoi retrouver le cours de votre journée ou de votre soirée en toute liberté !</p></div>";
              newDiv.classList.add('app__results--object');
              newDiv.innerHTML = newContent;
              results.append(newDiv);
      }
    };

console.log(lightLegs);




