//test = { 
//   question_arr : ["1. Americans call them French fries, the British call them chips.","2. Americans call it cotton candy, the British call it candyfloss.", "3. Americans call it a clothespin, the British call it a nipper.",
//    "4. On a car, Americans call it the hood, the British call it the bonnet.","5. Americans call it a pacifier, the British call it a dummy.", "6. Americans call them flip-flops, the British call them flats.", 
//    "7. On ice cream, Americans call them sprinkles, the British call them hundreds and thousands.", "8. Americans call them mints, the British call them jezzies."],
//    a1_arr : ["True","True","True","True","True","True","True","True"],
//    a2_arr : ["False","False","False","False","False","False","False","False"],
//    answer_arr : ["In England, what we in America refer to as chips are called crisps.","Fun fact: In Australia they call cotton candy 'fairy floss'.","The British do have a different name for it, though! They generally call it a clothes peg.", 
// "The British will also use bonnet to mean a hat (as we use it).","¯\_(ツ)_/¯","The British also call them flip-flops, but sometimes thongs.","Seems like a mouthful (Do you want more hundreds and thousands on your froyo?), but who am I to criticize!",
// "They call them mints too. 'Jezzies' sort of sounds like something they'd say, though, right? 'Aye, lad, you got a tin of jezzies, don't cha?'"],
//    n_right_answer_arr : [1,1,2,1,1,2,1,2],
//}

var out = {};
fetch('http://localhost/js8/index.php').then(response => response.json())
    .then(function (test) {
            console.log(test);
            out = test;
            answers(n_question.value, test);

            btn.addEventListener("click", f_out);
            btn1.addEventListener("click", f_out1);
            btn2.addEventListener("click", () => f_out2(test));


        }
    );

    
    let n_answer = 7;
    let right_answers = 0;
    let count = -1;
    let count2 = 7;
    

    function f_out() {
        console.log(y1.checked);
        console.log(y2.checked);
    
        if (y1.checked) {
            n_a = 1;
        }
        if (y2.checked) {
            n_a = 2;
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
                alert("Well done")
                resa.classList.remove("hidden");
            }
        } else {
            right_answers -= 1;
            right_div.classList.add("hidden");
            wrong_div.classList.remove("hidden");
        }
    
        if (right_answers < 0) {
            right_answers = count;
        }
        if (right_answers > 8) {
            right_answers = count2;
        }
    
        if (n_question.value == 0) {
            desc.classList.add("hidden");
            im.classList.add("hidden");
        }
        if ((right_answers - n_question.value) >= 2) {
            right_answers -= 1;
            console.log("try_count_answ= " + right_answers);
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
        answer.innerHTML = test.answer_arr[n_question.value];
        n_right_answer = test.n_right_answer_arr[n_question.value];
    }