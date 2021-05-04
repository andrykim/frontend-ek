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