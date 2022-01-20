let test = document.querySelector(".container");
let describeClickButton = function() {
    test.style.color = "yellow";
    test.style.fontSize = "24px";
    test.style.display = "flex";
    test.style.alignItems = "center";
    test.style.flexDirection = "column";
};

function pressButton() {
    let notice = document.querySelector('.inscription');
    notice.textContent = getLabelText();
};
let but = document.querySelector('.press').addEventListener('click', pressButton);
let count = false;

function getLabelText() {
    if (count) {
        count = false;
        return "don't press";
    } else {
        count = true;
        return "pressed";
    }; 
};

describeClickButton();


const bottomButtons = document.createElement('div');
    test.after(bottomButtons);

let plusButton = document.createElement('button');
    plusButton.textContent = '+';
    bottomButtons.append(plusButton);

let minusButton = document.createElement('button');
    minusButton.textContent = '-';
    bottomButtons.append(minusButton);

let note = 0;

let textButtonPlus = function() {
    note += 1;
    if (note <= 10) {
        let addTextButtonPlus = document.createElement('p');
        addTextButtonPlus.classList.add('change-text-btn');
        bottomButtons.after(addTextButtonPlus);
        addTextButtonPlus.textContent = 'Press me again';
    } else if (note > 10) {
        alert("Sorry, the button is no longer pressed");
    };
};

let textButtonMinus = function() {
    alert('Hello')
    note -= 1;
    if (note <= 10) {
        let item = document.querySelector('change-text-btn');
        item.remove();
    };
};

plusButton.addEventListener('click', textButtonPlus);

minusButton.addEventListener('click', textButtonMinus);
