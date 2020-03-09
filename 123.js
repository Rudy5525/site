function policz(){

    var x = document.getElementById("wagi").value.split(',');   //bierze wartosc z pola wpisywania wag
    var wagi = x.map(Number);                                   //konwertuje wpisane wagi na liczby
    var ilewag = wagi.length;                                   //ilosc wpisanych wag
    if(wagi.every(sprawdzWagi) == true){
        addElements(ilewag,wagi);}
    else{
        alert("Niepoprawna wartosc!");}
}
function addElements(ilewag,wagi){
    
    for(var i=0; i<ilewag;i++){
        var form1, form2;
       form1 = document.createElement("form");
       form1.innerHTML = "<br>Wpisz oceny wagi "+wagi[i]+" odzielajac je srednikiem: <input type= 'text' id="+wagi[i]+"><br>";  
        document.body.insertBefore(form1,form2); 
        
    }
    var przycisk1 = document.createElement("form");
    var przycisk2;
    przycisk1.innerHTML = "<br><input type= button value = Policz onclick=zliczanie()>";
    document.body.insertBefore(przycisk1,przycisk2);
        
}
function zliczanie(){
    var x = document.getElementById("wagi").value.split(',');                       //bierze wartosc z pola wpisywania wag
    var wagi = x.map(Number);                                                       //konwertuje wpisane wagi na liczby
    var ilewag = wagi.length;                                                       //bierze ilosc wpisanych wag
    var oceny = [];                                                                 //tablica zawierajaca oceny w jednym polu
    var suma = [];                                                                  //tablica zawierajaca wszystkie sumy wszystkich ocen
    for(var i=0;i<ilewag;i++){
        suma[i] = 0;
        oceny[i] = document.getElementById(wagi[i]).value.split(";").map(Number);
            for(var j=0;j<oceny[i].length;j++){
                suma[i] += parseFloat(oceny[i][j]);
            }
    }
    if(suma.every(sprawdzSumy) == true){
        var gora = 0;
        var dol = 0;
        var wynik = 0;
        for (var k=0;k<ilewag;k++){
            gora += suma[k]*wagi[k];
            dol += oceny[k].length*wagi[k];
        }
        wynik = (gora/dol).toFixed(2);
        console.log(wynik,suma,oceny);
        

        var div1 = document.createElement("div");
        var div2;
        div1.innerHTML = "<br><div id=wynik></div>";
        document.body.insertBefore(div1,div2);
        document.getElementById("wynik").innerHTML = "Twoja srednia wazona wynosi: " + wynik;
    }
    else 
        alert("Niepoprawne wartosci!");

}
function sprawdzWagi(waga){
    return Number.isInteger(waga) == true && waga >0;
}
function sprawdzOceny(ocena){
    return Number.isInteger(ocena) && ocena>0 && ocena <=6;
}
function sprawdzSumy(suma){ 
    for (var i=0; i<suma.length; i++)
        suma[i] = sprawdzOceny(ocena);
    return suma;
}