// const test = document.querySelector(".container");

// test.style.color = "yellow";
// test.style.fontSize = "24px";
// test.style.display = "flex";
// test.style.alignItems = "center";
// test.style.flexDirection = "column";

// let count = 0;
// let pressButton = function() {
//     let notice = document.querySelector('.inscription');
//     count = count + 1;
//     if (count % 2 === 0) {
//         notice.textContent = "don't press";
//     }  else {
//         notice.textContent = "pressed";
//     }   
// };

// test.addEventListener('click', pressButton);


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

