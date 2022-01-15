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



function describeClickButton() {
    let test = document.querySelector(".container");
    test.style.color = "yellow";
    test.style.fontSize = "24px";
    test.style.display = "flex";
    test.style.alignItems = "center";
    test.style.flexDirection = "column";
    return test;
};
let count = 0;
let pressButton = function() {
    
    let notice = document.querySelector('.inscription');
    count = count + 1;
    return count % 2 === 0 ? notice.textContent = "don't press" : notice.textContent = "pressed";
};
describeClickButton().addEventListener('click', pressButton);
    