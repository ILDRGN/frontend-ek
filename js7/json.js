fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5').then(response => response.json())
    .then(function (comm) {
        console.log(comm);
        console.log(comm[0]);
        console.log(comm[0].ccy);
        console.log(comm[0].buy);
        cur1.innerHTML = comm[0].ccy + " / " + comm[0].base_ccy;
        cur1buy.innerHTML = comm[0].buy;
        cur1sale.innerHTML = comm[0].sale;
        cur2.innerHTML = comm[1].ccy + " / " + comm[1].base_ccy;
        cur2buy.innerHTML = comm[1].buy;
        cur2sale.innerHTML = comm[1].sale;
        cur3.innerHTML = comm[2].ccy + " / " + comm[2].base_ccy;
        cur3buy.innerHTML = comm[2].buy;
        cur3sale.innerHTML = comm[2].sale;
        cur4.innerHTML = comm[3].ccy + " / " + comm[3].base_ccy;
        cur4buy.innerHTML = comm[3].buy;
        cur4sale.innerHTML = comm[3].sale;
    }
    );
fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11').then(response => response.json())
    .then(function (comm1) {
            console.log(comm1);
            console.log(comm1[0]);
            console.log(comm1[0].ccy);
            console.log(comm1[0].buy);
            cur01.innerHTML = comm1[0].ccy + " / " + comm1[0].base_ccy;
            cur01buy.innerHTML = comm1[0].buy;
            cur01sale.innerHTML = comm1[0].sale;
            cur02.innerHTML = comm1[1].ccy + " / " + comm1[1].base_ccy;
            cur02buy.innerHTML = comm1[1].buy;
            cur02sale.innerHTML = comm1[1].sale;
            cur03.innerHTML = comm1[2].ccy + " / " + comm1[2].base_ccy;
            cur03buy.innerHTML = comm1[2].buy;
            cur03sale.innerHTML = comm1[2].sale;
            cur04.innerHTML = comm1[3].ccy + " / " + comm1[3].base_ccy;
            cur04buy.innerHTML = comm1[3].buy;
            cur04sale.innerHTML = comm1[3].sale;
        }
    );