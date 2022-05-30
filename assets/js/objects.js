//Objects
class Drink {
    constructor(choice, content) {
        this.choice = choice;
    }

    setContent(content) {
        this.content = content;
    }

    // Type functions
    addContent() {
        let newDiv = document.createElement('div');
        let newContent = document.innerHTML = this.content;
        newDiv.classList.add('app__results--object');
        newDiv.innerHTML = newContent;
        results.append(newDiv);
    };

    // All drinks
    resultAllDrinksFunction() {
        for (const htmlContent of Object.values(drinkContentHtml)) {
            let newDiv = document.createElement('div');
            let newContent = document.innerHTML = htmlContent;
            newDiv.classList.add('app__results--object');
            newDiv.innerHTML = newContent;
            results.append(newDiv);
        }
    };

};


class Tea extends Drink {
    constructor(choice, content, taste, colors) {
        super(choice, content);
        this.taste = taste;
        this.colors = colors;
    }

    findByColor(valeurATrouver) {
        if (this.colors.includes(valeurATrouver)) {
            return true;
        }
        return false;
    }
};


class Infusion extends Drink {
    constructor(choice, content, family, taste) {
        super(choice, content);
        this.family = family;
        this.taste = taste;
    }
};


const rooibosCaramel = new Infusion("infusion", drinkContentHtml.rooibosCaramel, ['rooibos'], ['fruitty']);
const greenMint = new Tea('tea', drinkContentHtml.greenMint, ['fruitty', 'nature'], ['green', 'yellow']);
