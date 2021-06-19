window.onload = function () {
    show(0);
    start();

}

let userName = sessionStorage.getItem("Name")
let wel = document.getElementById('userNameId')
wel.innerHTML = userName

// question and answer in object

var questions = [{
    id: 1,
    question: "Who is the mass IT trainner of Saylani?",
    answer: "Sir Muhammad Ali Mughal",
    options: [
        "Sir Muhammad Ali Mughal",
        "Ghous Ahmed",
        "Basit",
        "Muhammad Bariq Kamran"
    ]


},
{
    id: 2,
    question: "What is the abbreviation of ROM?",
    answer: "Read Only Memory",
    options: [
        "Read On Memory",
        "Read Only Memory",
        "Read Only Message",
        "Read Only Me"
    ]

},
{
    id: 3,
    question: "What is the abbreviation of RAM?",
    answer: "Random Access Memory",
    options: [
        "Read Only Memory",
        "Read Access Message",
        "Random Access Memory",
        "Read Access Memory"
    ]

},
{
    id: 4,
    question: "What is the abbreviation of AI?",
    answer: "Artificial Intelligence",
    options: [
        "Artificial Instrument",
        "Arabian Intelligence",
        "Arithmetic Intelligence",
        "Artificial Intelligence"
    ]

}

]



// next question button
let question_count = 0;
var point = 0;
var c = 0;
function next() {
    let user_answer = document.querySelector('li.option.active').innerHTML;
    // user answer


    if (user_answer == questions[question_count].answer) {
        point += 10;
        c++;
        sessionStorage.setItem("Correct", c)
        var a = user_answer + " is " + "RIGHT";
        console.log(a)
        sessionStorage.setItem("points", point)
    } else {
        var a = user_answer + " is " + "wrong"
        console.log(a)
        point += 0

    }
    console

    if (question_count == questions.length - 1) {
        stop()
        location.href = "end.html"
        return;
    }


    question_count++;
    show(question_count)
}


function show(e) {
    var ques = document.getElementById('questions')
    ques.innerHTML = `
    <h2 class="text">Q ${question_count + 1 + " : "}${questions[e].question}</h2>
        <ul class="ul" >
            <li class="option" >${questions[e].options[0]}</li>
            <li class="option">${questions[e].options[1]}</li>
            <li class="option">${questions[e].options[2]}</li>
            <li class="option">${questions[e].options[3]}</li>
        </ul>
        `;

    toggleActive()


}

function toggleActive() {
    let option = document.querySelectorAll("li.option")
    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function () {
            for (let j = 0; j < option.length; j++) {
                if (option[j].classList.contains("active")) {
                    option[j].classList.remove("active")
                }
            }
            option[i].classList.add('active')

        }

    }
}

// counter

var getCounter = document.getElementById("counter")
var ms = 100;
var s = 60;
var m = 3;
var interval;

function watch() {
    return (m < 10 ? "0" + m : m) + " : " + (s < 10 ? "0" + s : s) + " : " + (ms < 10 ? "0" + ms : ms);
}



function timer() {
    getCounter.innerHTML = watch();
    --ms
    if (ms == 0) {
        --s;
        ms = 100;
    } else if (s == 0) {
        --m;
        s = 60
    }
}
function start() {
    interval = setInterval(timer, 10)
}
function stop() {
    clearTimeout(interval)
}
