bttn.addEventListener("click", f_out);
bttn1.addEventListener("click", f_out1);
  function f_out (){
    console.log(y1.checked);
    console.log(y2.checked);
    console.log(y3.checked);
    console.log(y4.checked);

    if (y2.checked){
      right.classList.remove("hidden");
      wrong_hidden.classList.add("hidden");
    }else{
      right.classList.add("hidden");
      wrong_hidden.classList.remove("hidden");
    }
   
    
  }
  function f_out1 (){
    answer.classList.toggle("hidden");
    bttn1.classList.toggle("opend");
  }