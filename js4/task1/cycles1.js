btn.addEventListener("click",fnc);
function fnc() {
    a1 = a.value;
    b1 = b.value;
    flaga = 0;
    flagb = 0;
    let sum = 0;
    let mult = 1;
    if (!((a1 >= 1) && (a1 <= 20))) {
        flaga = 1;
    }
    if (!((b1 >= 1) && (b1 <= 20))) {
        flagb = 1;
    }
    if (flaga && !flagb) {
        alert("Число A не лежит в интервале от 1 до 20");
    }
    if (!flaga && flagb) {
        alert("Число B не лежит в интервале от 1 до 20");
    }
    if (flaga && flagb) {
        alert("Числа A и B не лежат в интервале от 1 до 20");
    }
    if (!flaga && !flagb) {
        if (a.value <= b.value) {
            for (let i = a1; i <= b1; i++) {
                sum += Number(i);
                mult = mult*Number(i);
                answer.innerHTML = "Сумма: " + sum + "<br> Произведение: " + mult;
                console.log(i);
                console.log(mult);
            }
        } else {
            for (let i = b1; i <= a1; i++) {
                sum += Number(i);
                mult = mult*Number(i);
                answer.innerHTML = "Сумма: " + sum + "<br> Произведение: " + mult;
                console.log(i);
                console.log(mult);
            }
        }
    }
}