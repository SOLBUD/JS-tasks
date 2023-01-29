

/*function sayHi() {
    console.log("labas");
}

sayHi();
sayHi();
sayHi();
sayHi();
sayHi();


let num=Math.random();
let num=Math.round(num);

function simplifiedPI() {
    return 3.14;
}

console.log(simplifiedPI());

let skaicius=12;

function numSq(num) {
    return num*num;
}

console.log(numSq(100) );
console.log(numSq(skaicius) );

console.log(skaicius);*/

console.log("==== 6. Funkcijos. Lengvesni ====");

console.log("==== 1 uzdavinys ====");
/*Sukurkite funkciją kuri priimtų du kintamuosius, juos sudaugintų ir atspausdintų sandaugą į konsolę*/

function skaiciai(a,b) {
    console.log(a*b);
}
skaiciai(15, 15);

console.log("==== 2 uzdavinys ====");

/*Sukurkite funkciją kuri priimtų vieną kintamąjį, vardą. Ir konsolėje išspausdintų “labas “ ir tą paduotą vardą. */

function vardas(name) {
    console.log("labas, "+ name);
}
vardas ("Jonai");

console.log("==== 3 uzdavinys ====");
/*Sukurkite funkciją  kuri priimtų vieną kintamąjį, tekstą. Ir konsolėje išspausdintų kiek simbolių yra tame tekste.*/

function tekstas (sveiki) {
    console.log(sveiki.length);
}
tekstas("mano ilgas tekstas");

console.log("==== 4 uzdavinys ====");
/*Sukurkite funkciją kuri priimtų 2 kintamuosius tekstus, vardą, pavardę ir atspausdintų inicialus. T.y vardo ir pavardės pirmąsias raides DIDŽIOSIOMIS raidėmis.*/

function vardai (vardas, pavarde) {
    console.log(vardas.charAt(0)+ " " + pavarde.charAt(0));
}
vardai ("Jonas", "Petraitis");

console.log("==== 5 uzdavinys ====");
/*Sukurkite HTML div’ą su id “numberPlace”. Parašykite funkciją kuri priimtų kintamąjį, skaičių ir jį atspausdintų tame HTML elemente.*/

let HTML= "<h1>labas</h1>";
numberPlace(HTML);

function numberPlace(textToSendTo) {
    document.getElementById("numberPlace").innerHTML=textToSendTo
}

console.log("==== 7 uzdavinys ====");
/*Parašykite funkciją kuri sugeneruotų 3 random skaičius nuo 0 iki 5 ir atspausdintų konsolėje vienoje eilutėje atskirtus kableliais. Po paskutinio skaičiaus kablelio neturi būti.*/

function rand() {
    console.log(
        Math.floor(Math.random()*5)+ "," +
        Math.floor(Math.random()*5)+ "," +
        Math.floor(Math.random()*5)
    );

}
rand(3)
 
console.log("==== 8 uzdavinys ====");
/*Parašykite funkciją kuri priimtų du kintamuosius “nuo” ir “iki”. Funkcija turi sugeneruoti random skaičių tame intervale ir jį GRAŽINTI.*/

function random (nuo, iki) { 
    return nuo + Math.round(Math.random() * (nuo+iki));
}

nuo=5;
iki=25;
nuo + Math.round(Math.random() * (nuo+iki))

let result=0;
console.log(result);

console.log(random (5, 25) );

console.log("==== 9 uzdavinys ====");
/*Sukurkite HTML div’ą su id “sequence”. Parašykite funkciją kuri sugeneruotų 10 p tagų su skaičiais juose nuo 1 iki 10 ir atiduotų į tą HTML elementą. Rezultate HTML’e turi matytis 10 p tagų su skaičiais. Šie TURI BŪTI SUGENERUOTI JAVASCRIPTU.*/


function pTags10(){
    for(let i=1; i<11; i++) {
        document.getElementById("sequence").innerHTML+="p"+i+"</p>";
    }
}
pTags10();