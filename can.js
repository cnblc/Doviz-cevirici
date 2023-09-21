function hesapla(){

    var euroBtn = document.getElementById('euro-btn');
    var dollaBtn = document.getElementById('dollar-btn');
    var sterlinBtn = document.getElementById('sterlin-btn');
    
    var euro = document.getElementById('euro').value;
    var dollar = document.getElementById('dollar').value;
    var sterlin = document.getElementById('sterlin').value;

    var e = Number(euro)
    var d = Number(dollar)
    var s = Number(sterlin)

    var euroHesapla = e * 28.81;
    var dollarHesapla = d * 27.04;
    var sterlinHesapla = s * 33.27;

    document.getElementById('euro-demo').innerHTML  =  euro +" €: "  +euroHesapla +"₺";
    document.getElementById('dollar-demo').innerHTML  =  dollar +" $: "  +dollarHesapla +"₺";
    document.getElementById('sterlin-demo').innerHTML  =   sterlin +"£ "  +sterlinHesapla +"₺";


}


