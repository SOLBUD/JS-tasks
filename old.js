

/*console.log("====1 užduotis====");

let name = "Saulius";
let surname = "Budrys";
let birthYear = 1900;
let currentYear = 2023;
console.log("Aš esu " + name + " " + surname + ". Man yra " + (currentYear - birthYear) + " metai(ų)");
console.log();

console.log("====2 užduotis====");

let num1 = Math.round(Math.random() * 4);
let num2 = Math.round(Math.random() * 4);
console.log(num1);
console.log(num2);

if (num1 != 0 && num2 != 0 && num1 > num2) {
    console.log(Math.round(num1 / num2 * 100) / 100);
}
if (num1 != 0 && num2 != 0 && num1 < num2) {
    console.log(Math.round(num1 / num2 * 100) / 100);
}
 else{
    console.log("dalyba is nulio negalima")
 }


console.log("====3 užduotis====");

let n1 = Math.round(Math.random() * 25);
let n2 = Math.round(Math.random() * 25);
let n3 = Math.round(Math.random() * 25);
console.log(n1, n2, n3);

if ((n1 > n2 && n1 < n3) || (n1 < n2 && n1 > n3)) {
    console.log(n1);
}

if ((n2 > n1 && n2 < n3) || (n2 < n1 && n2 > n3)) {
    console.log(n2);
}

if ((n3 > n2 && n3 < n1) || (n3 < n2 && n3 > n1)) {
    console.log(n3);
}


 console.log("====4 užduotis====");


let a =1 + Math.round(Math.random()* 9);
let b =1 + Math.round(Math.random()*9);
let c =1 + Math.round(Math.random()*9);
console.log (a,b,c);

if (a+b > c && a+c>b && b+c> a) {
    console.log ("bus trikampis");
}else {
    console.log(" nebus trikampio");
}


console.log("====5 užduotis====");

let num93=Math.round(Math.random()*2);
let num94=Math.round(Math.random()*2);
let num95=Math.round(Math.random()*2);
let num96=Math.round(Math.random()*2);

console.log(num93, num94, num95, num96);

let count0=0;
let count1=0;
let count2=0;



if(num93==0){
count0++;
}

if(num94==0){
count0++;
}

if(num95==0){
count0++;
}

if(num96==0){
count0++;
}

if(num93==1){
count1++;
}

if(num94==1){
count1++;
}

if(num95==1){
count1++;
}

if(num96==1){
count1++;
}

if(num93==2){
    count2++;
}

if(num94==2){
    count2++;
}

if(num95==2){
    count2++;
}

if(num96==2){
    count2++;
}

console.log(count0, count1, count2);
console.log("nuliu rasta " +count0);
console.log("nuliu rasta " +count1);
console.log("nuliu rasta " +count2);



/*console.log("====6 užduotis====");
let min=-10;
let max=10;

let num139=min + Math.round(Math.random()* (max-min));
let num140=min + Math.round(Math.random()* (max-min));
let num141=min + Math.round(Math.random()* (max-min));

let string139= "";

if(num139<0) {
    string139+="["+num139+"]";
}
if(num139==0) {
    string139+="("+num139+")";
}
if(num139>0) {
    string139+="{"+num139+"}";
}

if(num140<0) {
    string139+="["+num140+"]";
}
if(num140==0) {
    string139+="("+num140+")";
}
if(num140>0) {
    string139+="{"+num140+"}";

}
if(num141<0) {
    string139+="["+num141+"]";
}
if(num141==0) {
    string139+="("+num141+")";
}
if(num141>0) {
    string139+="{"+num141+"}";
}

 console.log(string139);*/


/*console.log("====7 užduotis====");

let min=5;
let max=3000;

let num187= 5 + Math.round(Math.random() * (3000-5));
console.log(num187);

if(num187>1000 && num187 <2000) {
console.log(num187*0.97);
}

if(num187>2000) {
console.log(num187*0.96);
}

if(num187<1000) {
console.log(num187);
}

console.log("====8 uzduotis====");

let mn=10;
let mx=90;

let num200=Math.round(Math.random()*100);
let num201=Math.round(Math.random()*100);
let num202=Math.round(Math.random()*100);

console.log(Math.round((num200+num201+num202)/3));

console.log("====9 uzduotis====");

randomTime = () => {
    hrs = Math.round(Math.random() * 24);
    mins = Math.round(Math.random() * 60);    
    var hFormat = (hrs<10 ? "0" : "");
    var mFormat = (mins<10 ? "0" : "");
    var amPm = (hrs<12 ? "AM" : "PM");
    var is12 = (hrs % 12 === 0);
  
    return amPm === "AM" && !is12 ? String(hFormat+hrs+ ":" +mFormat+mins+ " " +amPm)
                  : "AM" && is12  ? String(12 + ":" +mFormat+mins+ " " +amPm)
                  : is12 ? String(hFormat+hrs+ ":" +mFormat+mins+ " " +amPm)
                  : String(hFormat+(hrs-12)+ ":" +mFormat+mins+ " " +amPm);
  
  }
  
  var resultTime = this.randomTime();
  console.log(resultTime);*/