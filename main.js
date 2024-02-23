//import { SZEMELYLISTA } from "./adat.js"
import { kiir, listaOsszeallit, kartyabaLetrehozas } from "./fuggvenyek.js";
import { SZEMELYLISTA } from "./adat.js";
kiir(SZEMELYLISTA)


/*meg kell fogni az a html elemet amibe írni szeretnénk*/
const FELSELEM = document.getElementById("felsorolas")
const FELSELEM2 = document.getElementById("kartyaContainer")
/*const FELSELEM = document.querySelector("#felsorolas")*/
console.log(FELSELEM)
FELSELEM.innerHTML="<h1>Ügyesek vagyunk</h1>"
FELSELEM.innerHTML += listaOsszeallit(SZEMELYLISTA)
FELSELEM2.innerHTML += kartyabaLetrehozas(SZEMELYLISTA)
















//const LISTA = ["Géza", "Jenő"]
/*Egyszerű adatszerkezet esetén konstal való deklarációkról a változó nem írható felül*/
/*Összetett adatszerkezet esetén(lista,objektum) konstal való deklaráláskor a lista címe nem változtatható meg, a lista értékei igen, megváltoztathatóak, módosithatom az elemeit, adhatok hozzá újabb elemet*/

//console.log(LISTA[1])

//LISTA[10]="Béla"

//LISTA.push("Jakab")/*A lista végére elhelyez egy elemet*/
//LISTA.pop()/*leveszi a lista utolsó elemét*/
//console.log(LISTA)
/*ismerőseim nyilvántartása*/
/*const NEV=["Géza", "Jenő"]
const TEL=["06-30-5464", ]*/

/*objektum-összetett adatszerkezet, amelyben az*/

//console.log(SZEMELY1.nev)
//console.log(SZEMELY2.suly)

/*JSON objektum*/
