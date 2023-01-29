console.log ("====2.Stringai====");

console.log ("====1 pratimas=====");

let name="Petras";
let surname="Petraitis";

console.log(name.length);
console.log(surname.length);
if (name.length < surname.length){
    console.log(name);
} 
else{
    console.log(surname);
}


 console.log("====2 pratimas====");

 let name1="Lepnardo";
 let surname1="Dicaprio";

 console.log(name1.toUpperCase());
 console.log(surname1.toLowerCase());


 console.log ("====3 pratimas====")

let vardas="Jurgis";
let pavarde="Jurgaitis";

console.log(vardas.charAt(0));
console.log(pavarde.charAt(0));
console.log(vardas.charAt(0)+pavarde.charAt(0));


console.log ("====4 pratimas====")

let vardas1="Giedrius";
let pavarde1="Savickas";

console.log(vardas1.substring(vardas1.length-3));
console.log(pavarde1.substring(pavarde1.length-3));



console.log("====5 pratimas====")

let moviename="An American in Paris";

console.log(moviename.replaceAll("a","*").replaceAll("A","*"));

let mn = moviename.replaceAll("a","*");

console.log(mn.replaceAll("A","*"));



 console.log ("====6 pratimas====")

let movieName="An American in Paris";

console.log(movieName.replaceAll("a", "").replaceAll("A","").replaceAll("e","").replaceAll("i",""));

let movieBAT="Breakfast at Tiffany's";

console.log(movieBAT.replaceAll("e","").replaceAll("a","").replaceAll("i",""). replaceAll("y",""));

let movieBATT="Breakfast at Tiffany's";
console.log(movieBATT.replaceAll(/[aeiou]/gi,""));


let movie2001="2001: A Space Odyssey";

console.log(movie2001.replaceAll("A","").replaceAll("a","").replaceAll("e","").replaceAll("O","").replaceAll("y",""));

let movie20011="2001: A Space Odyssey";
console.log(movie20011.replaceAll(/[aeiou]/gi,""));


let movieIAWL="It's a Wonderful Life";

console.log(movieIAWL.replaceAll("I","").replaceAll("a","").replaceAll("o","").replaceAll("e","").replaceAll("u","").replaceAll("i","")); 

let movieIAWLL="It's a Wonderful Life";
console.log(movieIAWLL.replaceAll(/[aeiou]/gi,""));


let movieName11="An American in Paris";

console.log(movieName11.replaceAll(/[aeiou]/gi,""));


console.log ("====7 pratimas====")

let starwarsText= "Star Wars: Episode "+ " ".repeat( Math.ceil(Math.random() * 10))+(Math.ceil (Math.random() * 7)+1) + " - A New Hope";

console.log(starwarsText.charAt(starwarsText.length-14));



console.log("====9 pratimas====");

const characters ="abcdefghijklmnopqrstuvwxyz";

function generateString(length) {
    let result = "";
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

console.log(generateString(3));*/






