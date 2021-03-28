btn.addEventListener("click",f_out);
function f_out (){
    price = p.value;
    procent = pr.value;
    time = t.value;
    let q = 0;
    if ((procent <=0) || (procent >100)){
        alert("Некорректное значение процента");
    }

    else if ((price || time) <= 0){
        alert("Значения должны быть положительны");
        console.log(price);
        console.log(time);
    } else  {
    for (let i = 1; i <=time; i++) {
      q = Math.floor(price * (1+(procent/100))**i);
      res.innerHTML = q;
    }
}
}
