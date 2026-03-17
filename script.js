function translateText(){
let text=document.getElementById("translateInput").value;
document.getElementById("translateOutput").innerText=
"德语翻译示例: "+text;
}

function generateTitle(){
let name=document.getElementById("productName").value;

let title=
name+" Möbel Modern Wohnzimmer Funktional Design Komfortabel";

document.getElementById("titleOutput").innerText=title;
}

function generateFeatures(){
let feature=document.getElementById("featureInput").value;

let result=
"1. Hochwertige Materialien – langlebig und stabil\n"+
"2. Praktisches Design – funktional im Alltag\n"+
"3. Platzsparende Konstruktion – optimale Raumnutzung\n"+
"4. Moderne Optik – passend für verschiedene Wohnstile\n"+
"5. Einfache Nutzung – komfortabel und praktisch";

document.getElementById("featureOutput").innerText=result;
}
