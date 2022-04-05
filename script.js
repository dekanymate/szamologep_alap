window.addEventListener("load",init)

function ID(elem) {
    return document.getElementById(elem);
}

function $(elem) {
    return document.getElementsByClassName(elem);
}

function init(){
    for (let index = 0; index < 10; index++) {
        let gomb = document.querySelectorAll(".szamok")[0];
        gomb.innerHTML += "<button></button>";
        let szam = document.querySelectorAll("button")[index];
        szam.innerHTML = index;
    }

    let klikkSzam = document.querySelectorAll(".szamok button");
        for (let index = 0; index < klikkSzam.length; index++) {
            klikkSzam[index].addEventListener("click", megJelenit)
        }
    let muvjel = document.querySelectorAll(".muvjelek button");
    for (let index = 0; index < 5; index++) {
        muvjel[index].addEventListener("click", megJelenit1)
    }
    ID("torles").addEventListener("click",torol)
    

}

function megJelenit() {
        $("kifejezes")[0].innerHTML += event.target.innerHTML
    }
        

function megJelenit1(){
    if($("kifejezes")[0].innerHTML == ""){
        console.log("nem jó")
    }else{
        $("kifejezes")[0].innerHTML += event.target.innerHTML
    }
}

function torol(){
    $("kifejezes")[0].innerHTML = ""
}