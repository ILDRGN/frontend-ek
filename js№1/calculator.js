btn.addEventListener("click",f_out);

   function f_out (){
       q = Number(ni.value) - Number(sp.value) - Number(ct.value) - Number(up.value) + Number(tp.value) + Number(is.value) - Number(id.value);
       res.innerHTML = q;
   }