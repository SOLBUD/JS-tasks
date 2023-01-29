console.log("==== CIKLAI ====");
console.log("==== Lengvesni ====");

console.log("==== 1 uzduotis ====");
/*Sukurkite ciklą kuris atspausdintų 10 kartų žodį “labas”.*/

for (let i = 1; i <= 10; i++) {
    console.log("labas" + i);
}

console.log("==== 2 uzduotis ====");
/*Sukurkite ciklą kuris atspausdintų skaičius nuo 0 iki 9.*/

for (let i = 1; i < 10; i++) {
    console.log(" " + i);
}

console.log("==== 3 uzduotis ====");
/*i 9.
Sukurkite masyvą su dešimt augalų pavadinimų.
*/

let augalai = ["obelis", "kriause", "serbentas", "vysnia", "tresne", "silauoge", "braske", "zemuoge", "brukne", "melyne"]; 
console.log(augalai);


console.log("==== 4 uzduotis ====");
/*Atspausdinkite kiekvieną 3čio uždavinio augalą atskiroje eilutėje.*/

let augalai1 = ["obelis", "kriause", "serbentas", "vysnia", "tresne", "silauoge", "braske", "zemuoge", "brukne", "melyne"];

for (let i = 0; i < augalai1.length; i++) {
    console.log(augalai1[i]);
}


console.log("==== 5 uzduotis ====");
/*Atspausdinkite 3čio uždavinio kiekvieną augalą pradedant nuo paskutinio, ir baigiant pirmuoju. (atvirkščias ciklas).*/

let augalai2 = ["obelis", "kriause", "serbentas", "vysnia", "tresne", "silauoge", "braske", "zemuoge", "brukne", "melyne"];

for (let i = augalai2.length - 1; i >= 0; i--) {
    console.log(augalai2[i]);
}

console.log("==== 6 uzduotis ====");
/*Atspausdinkite kas antrą skaičių nuo 10 iki 50 (porinius);*/


/*for (let i = 10; i < 50; i++);
if (i % 2 == 0) {
    console.log(i);
}*/

for (let i = 0; i <= 50; i += 2) {
    console.log(i);
}


console.log("==== 7 uzduotis ====");
/*Atspausdinkite kas antrą skaičių nuo 10 iki 50. (porinius) Jei skaičius dalinasi iš 10 be liekanos jo nespausdinkite. ( naudokite continue.) (atspausdinti visus porinius skaičius, išskyrus tuos kurie dalinasi iš 10 be liekanos)*/

for (let i = 0; i <= 50; i += 2) {
    if (i % 10 != 0)
        console.log(i);
}


console.log("==== 8 uzduotis ====");

/*Sukurkite ciklą kuris suktųsi nuo 0 iki 30. Suskaičiuokite, kiek kartų kintamasis i turėjo porinę reikšmę;*/

let count = 0;
for (let a = 0; a < 30; a++) {
    if (a % 2 == 0) {
        count++;
    }
}
console.log(count);


/*console.log("==== 9 uzduotis ====");
/*Suskaičiuokite kiek 3čio uždavinio masyve yra žodžių trumpesnių nei 5 simboliai, ir kiek ilgesnių nei 7 simboliai. Skaičiuojam abu atskirai.*/

/*let augalai5 = ["azuolas", "berzas", "pusis", "egle", "tuja", "kadagys", "klevas", "tuopa", "maumedis", "lazdynas"];
let count5=0;
let count7=0;
for (let i = 0; i < augalai5.length; i++); {
    if (augalai5[i].length < 5) {
        count5++;
        /*continue;    
    }

    if (augalai5[i].length > 7) {
        count7++;
    }
}
console.log("spausdinam" + count5, + "arba" + count7);*/

console.log("==== SUNKESNI ====");
console.log("==== 1 uzduotis ====");
/*Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių už 150.  Skaičiai didesni nei 275 turi būti atspausdinti skliausteliuose” [ ] “.*/

let skaicius = 0;
let res = "";
/*for (let i = 0; i < 300; i++) {
    let skaicius = Math.round(Math.random() * 300);
    console.log(skaicius);
    skaicius += " " + skaicius + " ";
    if (skaicius > 150) {
        console.log(count);
    }
    if (skaicius > 275) {
        console.log("[" + skaicius + "]");
    }
}*/

for (let i = 0; i < 300; i++) {
    let rndNum = Math.round(Math.random() * 300);

    if (rndNum <= 275) {
        res += rndNum + " ";
    } else {
        res += "[" + rndNum + "]";
    }
}
console.log(res);


console.log("==== 2 uzduotis ====");
/*Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos. Skaičius atskirkite kableliais. Po paskutinio skaičiaus kablelio neturi būti.*/

let b = 0;
for (let i = 0; i <= 3000; i++)
    if (i % 77 == 0) {
        b += (i + ",");
    }

console.log(b.slice(0, -1) + ".")

console.log("==== 3 uzduotis ====");

for (let c = 1; c <= 10; c++) {
    let row = "";
    for (let i = 1; i <= 10; i++) {
        row += "<*>";
    }
    console.log(row);
}



console.log("==== 4 uzduotis ====");

let t=0;
let row=0;
for (let i=0; i<=10; i++){
    if (row==i || row==9-i) {
        row +="X";
    } else {
        row+="*";
    }
    console.log(row); 
}

console.log("==== 5a uzduotis ====");

/*Metam monetą. Monetos kritimo rezultatą imituojam Math.random() funkcija, kur 0 yra herbas, o 1 - skaičius. Monetos metimo rezultatus išvedame į ekraną atskiroje eilutėje: “S” jeigu iškrito skaičius ir “H” jeigu herbas. Suprogramuokite tris skirtingus scenarijus kai monetos metimą stabdome:
Iškritus herbui;
Tris kartus iškritus herbui;
Tris kartus iš eilės iškritus herbui;*/

while (true) {
    let chance = Math.round(Math.random());
    if (chance == 0) {
        console.log("H");
        break;

    } else {
        console.log("S");
    }
}

console.log("stop");

console.log("==== 5b uzduotis ====");

let count2 = 0;
while (true) {
    let chance = Math.round(Math.random());
    if (chance) {
        console.log("H");
        count2++;
    } else {
        console.log("S");
    }

    if (count2 == 3) {
        break;
    }
}

console.log("==== 5c uzduotis ====");

let count8 = 0;
while (true) {
    let chance = Math.round(Math.random());
    if (chance) {
        console.log("H");
        count8++;
    } else {
        console.log("S");
        count8 = 0;
    }

    if (count8 == 3) {
        break;
    }
}

console.log("==== 6 uzduotis ====");
/*Kazys ir Petras žaidžia šaškėm. Petras surenka taškų kiekį nuo 10 iki 20, Kazys surenka taškų kiekį nuo 5 iki 25. Vienoje eilutėje išvesti žaidėjų vardus su taškų kiekiu ir “Partiją laimėjo: ​laimėtojo vardas​”. Taškų kiekį generuokite funkcija ​Math.random()​. Žaidimą laimi tas, kas greičiau surenka 222 taškus. Partijas kartoti tol, kol kažkuris žaidėjas pirmas surenka 222 arba daugiau taškų.*/

let petroTaskai = 0;
let kazioTaskai = 0;

while (true) {
    let petras = 10 + Math.round(Math.random() * 10);
    let kazys = 5 + Math.round(Math.random() * 20);
    petroTaskai += petras;
    kazioTaskai += kazys;
    console.log("petras " + petras + " kazys " + kazys);
    if (petroTaskai >= 222 || kazioTaskai >= 222) {
        break;
    }

}

if (petroTaskai < kazioTaskai) {
    console.log("Žaidimą laimėjo: laimėtojas Kazys, surinko " + kazioTaskai + " taškų, o jo konkurentas " + petroTaskai);
} else {
    console.log("Žaidimą laimėjo: laimėtojas Petras, surinko " + petroTaskai + " taškų, o jo konkurentas " + kazioTaskai);
}

console.log("==== 8a uzduotis ====");
/*Sumodeliuokite vinies kalimą. Įkalimo gylį sumodeliuokite pasinaudodami Math.random() funkcija. Vinies ilgis 8.5cm (pilnai sulenda į lentą).
“Įkalkite” 5 vinis mažais smūgiais. Vienas smūgis vinį įkala 5-20 mm. Suskaičiuokite kiek reikia smūgių.
“Įkalkite” 5 vinis dideliais smūgiais. Vienas smūgis vinį įkala 20-30 mm, bet yra 50% tikimybė (pasinaudokite Math.random() funkcija tikimybei sumodeliuoti), kad smūgis nepataikys į vinį. Suskaičiuokite kiek reikia smūgių.*/

for (let i = 0; i < 5; i++) {
    let nailDepth = 0;
    let taukstCount = 0;
    while (nailDepth < (85)) {
        let taukst = 5 + Math.round(Math.random() * (15));
        nailDepth += taukst;
        taukstCount++;
    }
    console.log((i+1)+"asis vinis buvo įkaltas "+taukstCount+" smūgiais.gylis -",nailDepth);
}


console.log("==== 8b uzduotis ====");


for (let i = 0; i < 5; i++) {
    let nailDepth = 0;
    let taukstCount = 0;
    while (nailDepth < (85)) {
        if(Math.round(Math.random())) {
        let taukst = 20 + Math.round(Math.random() * (10));
        console.log("pataikiau, ikaliau "+taukst);
        nailDepth += taukst;   
    } else {
        console.log("nepataikiau");
    }
    taukstCount++;
    }
    console.log((i+1)+"asis vinis buvo įkaltas "+taukstCount+" smūgiais.gylis -",nailDepth);
}


console.log("==== 9 uzduotis ====");
Sugeneruokite stringą, kurį sudarytų 50 atsitiktinių skaičių nuo 1 iki 200, atskirtų tarpais. Skaičiai turi būti unikalūs (t.y. nesikartoti). Sugeneruokite antrą stringą, pasinaudodami pirmu, palikdami jame tik pirminius skaičius (t.y tokius, kurie dalinasi be liekanos tik iš 1 ir patys savęs). Skaičius stringe sudėliokite didėjimo tvarka, nuo mažiausio iki didžiausio. (reikės split() funkcijos ir masyvų.)*/

/*let skaic = 0;
let re = "";

for (let i = 0; i < 200; i++) {
    let rndNum = Math.round(Math.random() * 200);

    if (rndNum >0) {
        re += rndNum + " ";
    } 
}
console.log(re);


