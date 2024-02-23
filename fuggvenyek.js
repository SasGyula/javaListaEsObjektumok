export function kiir(lista){
    for(let i = 0; i<lista.length; i++){
        console.log(`név:${lista[i].nev}, tel: ${lista[i].tel}`)
   }
}
export function listaOsszeallit(lista){
    let txt ="<ul>"
    for (let index = 0; index < lista.length; index++) {
        txt+=`<li>név:${lista[index].nev}, tel: ${lista[index].tel},}</li>`
    }
    txt += "</ul>"
    console.log(txt)
    return txt
}
export function kartyabaLetrehozas(lista){
    let txt = "";
    for (let index = 0; index < lista.length; index++) {
        txt +="<div class='kartya'>"
        txt+=`<h3>név:${lista[index].nev}</h3>` 
        txt+= `<p>suly:${lista[index].suly}</p>`
        txt+= `<p>tel: ${lista[index].tel}</p>`
        txt +="</div>"
    }
    return txt
}



