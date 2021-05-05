var out = {};
fetch('http://localhost/quize/index.php').then(response => response.json())
    .then(function (test) {
            console.log(test);
            out = test;
            answers(n_question.value, test);

            btn.addEventListener("click", f_out);
            btn1.addEventListener("click", f_out1);
            btn2.addEventListener("click", () => f_out2(test));


        }
    );

/*
[
{"type":"header","version":"5.1.0","comment":"Export to JSON plugin for PHPMyAdmin"},
{"type":"database","name":"phpmyadmin"},
{"type":"table","name":"dbquize","database":"phpmyadmin","data":
[
{"id":"1","question":"What does SQL stand for?","a1":"Structured Query Language","a2":"Structured Question Language","a3":"Strong Question Language","a4":"Strong Query Language","answer":"Structured Query Language","n_answer":"1"},
{"id":"2","question":"Which SQL statement is used to extract data from a table?","a1":"SELECT","a2":"GET","a3":"OPEN","a4":"EXTRACT","answer":"SELECT","n_answer":"1"},
{"id":"3","question":"Which SQL statement is used to update data in a table?","a1":"UPDATE","a2":"MODIFY","a3":"SAVE","a4":"SAVE AS","answer":"UPDATE","n_answer":"1"},
{"id":"4","question":"Which SQL statement is used to delete records from a table?","a1":"DELETE","a2":"REMOVE","a3":"DROP","a4":"CLEAN","answer":"DELETE","n_answer":"1"},
{"id":"5","question":"Which SQL statement is used to insert new records in a table?","a1":"INSERT INTO","a2":"INSERT NEW","a3":"ADD RECORD","a4":"ADD NEW","answer":"INSERT INTO","n_answer":"1"},
{"id":"6","question":"With SQL, how do you select a column named \"FirstName\" from a table named \"Persons\"?","a1":"SELECT FirstName FROM Persons","a2":"EXTRACT FirstName FROM Persons","a3":"SELECT FirstName [Persons]","a4":"SELECT * FROM Persons","answer":"SELECT FirstName FROM Persons","n_answer":"1"},
{"id":"7","question":"With SQL, how do you select all the columns from a table named \"Persons\"?","a1":"SELECT * FROM Persons","a2":"SELECT Persons","a3":"SELECT ALL FROM Persons","a4":"SELECT ^ FROM Persons","answer":"SELECT * FROM Persons","n_answer":"1"}
]
}
]
*/
let n_answer = 6;
let right_answers = 0;

function f_out() {
    console.log(y1.checked);
    console.log(y2.checked);
    console.log(y3.checked);
    if (y1.checked) {
        n_a = 1;
    }
    if (y2.checked) {
        n_a = 2;
    }
    if (y3.checked) {
        n_a = 3;
    }
    if (y4.checked) {
        n_a = 4;
    }
    console.log(n_a);
    if (n_a == n_right_answer) {
        right_answers += 1;
        answer.classList.add("hidden");
        right_div.classList.remove("hidden");
        wrong_div.classList.add("hidden");
        console.log("n_question.value = " + n_question.value);
        console.log("n_answer = " + n_answer);
        console.log("right_answ = " + right_answers);
        if (n_question.value == n_answer) {
            btn.classList.add("hidden");
            btn2.classList.add("hidden");
            let el1 = document.createElement("p");
            el1.innerHTML = "<b>" + right_answers + "</b>";
            right_div.appendChild(el1);
            resa.classList.remove("hidden");
        }
    } else {
        right_answers -= 1;
        right_div.classList.add("hidden");
        wrong_div.classList.remove("hidden");
    }



}

function f_out1() {
    answer.classList.toggle("hidden");
    btn1.classList.toggle("opend");
}

function f_out2(test) {
    right_div.classList.add("hidden");
    k = Number(n_question.value);
    k += 1;
    answers(k, test);

}

function answers(k, test) {
    n_question.value = k;
    question.innerHTML = test.question_arr[n_question.value];
    a1.innerHTML = test.a1_arr[n_question.value];
    a2.innerHTML = test.a2_arr[n_question.value];
    a3.innerHTML = test.a3_arr[n_question.value];
    a4.innerHTML = test.a4_arr[n_question.value];
    answer.innerHTML = test.answer_arr[n_question.value];
    n_right_answer = test.n_right_answer_arr[n_question.value];
}