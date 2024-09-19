let btn = document.querySelector(".input #submit");
let listItem = document.querySelectorAll(".note");
let listLength = document.querySelectorAll(".note").length;
let currentItem = 0;
let inputValue;




btn.addEventListener("click", function() {
   
    inputValue = document.querySelector(".input #text").value;


console.log(inputValue);



if (currentItem < listLength) {
    listItem[currentItem].innerHTML = "<p>" + inputValue + "</p>";
    listItem[currentItem].style.display = "block";
    currentItem++;

    
} else if (currentItem === listLength) {
    console.log("end of notes");
} 

})



let icon1 = document.getElementById("icon1");
let icon2 = document.getElementById("icon2");
let icon3 = document.getElementById("icon3");
let icon4 = document.getElementById("icon4");
let icon5 = document.getElementById("icon5");
let icon6 = document.getElementById("icon6");
let icon7 = document.getElementById("icon7");
let icon8 = document.getElementById("icon8");





icon1.addEventListener("click", function () {
    console.log("clicked icon");
    listItem[0].innerHTML = " ";
    listItem[0].style.display = "none";
    currentItem = 0;
})

icon2.addEventListener("click", function () {
    console.log("clicked icon");
    listItem[1].innerHTML = " ";
    listItem[1].style.display = "none";
})

icon3.addEventListener("click", function () {
    console.log("clicked icon");
    listItem[2].innerHTML = " ";
    listItem[2].style.display = "none";
})

icon4.addEventListener("click", function () {
    console.log("clicked icon");
    listItem[3].innerHTML = " ";
    listItem[3].style.display = "none";
})

icon5.addEventListener("click", function () {
    console.log("clicked icon");
    listItem[4].innerHTML = " ";
    listItem[4].style.display = "none";
})

icon6.addEventListener("click", function () {
    console.log("clicked icon");
    listItem[5].innerHTML = " ";
    listItem[5].style.display = "none";
})

icon7.addEventListener("click", function () {
    console.log("clicked icon");
    listItem[6].innerHTML = " ";
    listItem[6].style.display = "none";
})

icon8.addEventListener("click", function () {
    console.log("clicked icon");
    listItem[7].innerHTML = " ";
    listItem[7].style.display = "none";
})


let clearAll = document.getElementById("clear");

clearAll.addEventListener("click", function() {
    listItem[0].innerHTML = " ";
    listItem[1].innerHTML = " ";
    listItem[2].innerHTML = " ";
    listItem[3].innerHTML = " ";
    listItem[4].innerHTML = " ";
    listItem[5].innerHTML = " ";
    listItem[6].innerHTML = " ";
    listItem[7].innerHTML = " ";
    listItem[0].style.display = "none";
    listItem[1].style.display = "none";
    listItem[2].style.display = "none";
    listItem[3].style.display = "none";
    listItem[4].style.display = "none";
    listItem[5].style.display = "none";
    listItem[6].style.display = "none";
    listItem[7].style.display = "none";
    currentItem = 0;

})

