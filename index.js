const button = document.getElementsByClassName("qb");
const answer = document.getElementsByClassName("answer");
const icon = document.getElementsByClassName("action-icon");

const plusImage = "assets/images/icon-plus.svg";
const minusImage = "assets/images/icon-minus.svg";

const answers = {
    a1: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    a2:  "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
    a3:  "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    a4:  "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
};

answer[0].innerText = answers.a1;

button[0].addEventListener("click", function(){
    if (answer[0].innerText === "") {
        icon[0].src = minusImage;
        answer[0].innerText = answers.a1;
    } else {
        icon[0].src = plusImage;
        answer[0].innerText = "";
    }
});

button[1].addEventListener("click", function(){
    if (answer[1].innerText === "") {
        icon[1].src = minusImage;
        answer[1].innerText = answers.a2;
    } else {
        icon[1].src = plusImage;
        answer[1].innerText = "";
    }
    return false;
});

button[2].addEventListener("click", function(){
    if (answer[2].innerText === "") {
        icon[2].src = minusImage;
        answer[2].innerText = answers.a3;
    } else {
        icon[2].src = plusImage;
        answer[2].innerText = "";
    }
});

button[3].addEventListener("click", function(){
    if (answer[3].innerText === "") {
        icon[3].src = minusImage;
        answer[3].innerText = answers.a4;

    } else {
        icon[3].src = plusImage;
        answer[3].innerText = "";
    }
});
