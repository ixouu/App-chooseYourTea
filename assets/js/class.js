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










