var stampa;
var arr=new Array(0,0);
var i=0;
var segno;
var soluzione;;

function calcola(aa,dato) {
    if(dato=="1"){
        stampa="1";
        scrivi=document.getElementsByTagName("span");
       scrivi[0].innerHTML=stampa;
        arr[i]=stampa;
        i++
    } else if(dato=="2"){
        stampa="2";
        scrivi=document.getElementsByTagName("span");
        scrivi[0].innerHTML=stampa;
        arr[i]=stampa;
        i++
    }
    else if(dato=="3"){
        stampa="3";
        scrivi=document.getElementsByTagName("span");
        scrivi[0].innerHTML=stampa;
        arr[i]=stampa;
        i++
    }
    else if(dato=="4"){
        stampa="4";
        scrivi=document.getElementsByTagName("span");
        scrivi[0].innerHTML=stampa;
        arr[i]=stampa;
        i++
    }
    else if(dato=="5"){
        stampa="5";
        scrivi=document.getElementsByTagName("span");
        scrivi[0].innerHTML=stampa;
        arr[i]=stampa;
        i++
    }
    else if(dato=="6"){
        stampa="6";
        scrivi=document.getElementsByTagName("span");
        scrivi[0].innerHTML=stampa;
        arr[i]=stampa;
        i++
    }
    else if(dato=="7"){
        stampa="7";
        scrivi=document.getElementsByTagName("span");
        scrivi[0].innerHTML=stampa;
        arr[i]=stampa;
        i++
    }
    else if(dato=="8"){
        stampa="8";
        scrivi=document.getElementsByTagName("span");
        scrivi[0].innerHTML=stampa;
        arr[i]=stampa;
        i++
    }
    else if(dato=="9"){
        stampa="9";
        scrivi=document.getElementsByTagName("span");
        scrivi[0].innerHTML=stampa;
        arr[i]=stampa;
        i++
    }

}
function operazioni(aa,dato){
    if(dato=="+"){
        stampa="+"
        scrivi=document.getElementsByTagName("span");
        scrivi[0].innerHTML=stampa;
        segno=dato;
    }else if(dato=="-"){
        stampa="-"
        scrivi=document.getElementsByTagName("span");
        scrivi[0].innerHTML=stampa;
        segno=dato;
    }else if(dato=="x"){
        stampa="x"
        scrivi=document.getElementsByTagName("span");
        scrivi[0].innerHTML=stampa;
        segno=dato;
    }else if(dato=="/"){
        stampa="/"
        scrivi=document.getElementsByTagName("span");
        scrivi[0].innerHTML=stampa;
        segno=dato;
    }
}
function risultato(aa,dato){
    if(segno=="+"){
        soluzione=Number(arr[0]) + Number(arr[1]);
        scrivi=document.getElementsByTagName("span");
        scrivi[0].innerHTML=soluzione;
    }
    else if(segno=="-"){
        soluzione=Number(arr[0]) - Number(arr[1]);
        scrivi=document.getElementsByTagName("span");
        scrivi[0].innerHTML=soluzione;
    }
    else if(segno=="x"){
        soluzione=Number(arr[0]) * Number(arr[1]);
        scrivi=document.getElementsByTagName("span");
        scrivi[0].innerHTML=soluzione;

    }
    else if(segno=="/"){
        soluzione=Number(arr[0]) / Number(arr[1]);
        scrivi=document.getElementsByTagName("span");
        scrivi[0].innerHTML=soluzione;

    }
}
function cancella(){
    scrivi=document.getElementsByTagName("span");
    scrivi[0].innerHTML="--------------";
    arr[0]=0;
    arr[1]=0;
}