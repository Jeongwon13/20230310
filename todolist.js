const maincheckBox = document.querySelector(".mainCheckBox");



const enter = document.querySelector(".mainInput");
    enter.addEventListener("change", e => {
    
const li = document.createElement("li");
    li.classList.add("li"); // <li class="li"></li>

const div = document.createElement("div");
    div.classList.add("div"); // <div class="div1"></div>

const input = document.createElement("input");
    input.classList.add("mainInput"); // <input class="input1">
    input.setAttribute("type","text");

const span = document.createElement("span");
    span.classList.add("span1");
    span.innerHTML = "&times;";

    span.addEventListener("click", e => {
        e.target.parentElement.remove();
    });



li.append(div,input, span);
document.querySelector(".ul").append(li);
input.focus();



    })


document.querySelector(".Btn1").addEventListener("click", e => {
    createElement();

});


maincheckBox.addEventListener("click", e => {
    input.

});
