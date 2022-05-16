import Grid from "./Grid.js";
import pawn from "./pawn.js";
import {settings} from "./settings.js";
import { turns } from "./turns.js";

export var cellcheck={
    checktheatck(){
        document.querySelectorAll("div.cell").forEach(function(e){
            e.removeAttribute("data-attackedwhite") || e.removeAttribute("data-attackedblack");;
            
        });
    },
   
}

var board = document.querySelector("#game-board");      
var grid = new Grid(board);
var bb = document.querySelector(".board");

let b="black";
let w="white";
let pawns="pawns";
let tower="tower";
let horse="horse";
let queen="queen";
let king="king";
let bishop ="bishop";

riempi();

jQuery(document).ready(function () {
    $(".buttone").click(function(){
        if(settings.firstmove == false){
        }
        settings.firstmove=false;
        /* crea pedine nere */
        grid.cellti(0,1).pawn = new pawn(0,1,"A7",pawns,b,board);
        grid.cellti(1,1).pawn = new pawn(1,1,"B7",pawns,b,board);
        grid.cellti(2,1).pawn = new pawn(2,1,"C7",pawns,b,board);
        grid.cellti(3,1).pawn = new pawn(3,1,"D7",pawns,b,board);
        grid.cellti(4,1).pawn = new pawn(4,1,"E7",pawns,b,board);
        grid.cellti(5,1).pawn = new pawn(5,1,"F7",pawns,b,board);
        grid.cellti(6,1).pawn = new pawn(6,1,"G7",pawns,b,board);
        grid.cellti(7,1).pawn = new pawn(7,1,"H7",pawns,b,board);
        grid.cellti(0,0).pawn = new pawn(0,0,"A8",tower,b,board);
        grid.cellti(7,0).pawn = new pawn(7,0,"H8",tower,b,board);
        grid.cellti(1,0).pawn = new pawn(1,0,"B8",horse,b,board);
        grid.cellti(6,0).pawn = new pawn(6,0,"G8",horse,b,board);
        grid.cellti(3,0).pawn = new pawn(3,0,"D8",queen,b,board);
        grid.cellti(4,0).pawn = new pawn(4,0,"E8",king,b,board);
        grid.cellti(2,0).pawn = new pawn(2,0,"C8",bishop,b,board);
        grid.cellti(5,0).pawn = new pawn(5,0,"F8",bishop,b,board);

        /* crea pedine bianche */
        grid.cellti(0,6).pawn = new pawn(0,6,"A2",pawns,w,board);
        grid.cellti(1,6).pawn = new pawn(1,6,"B2",pawns,w,board);
        grid.cellti(2,6).pawn = new pawn(2,6,"C2",pawns,w,board);
        grid.cellti(3,6).pawn = new pawn(3,6,"D2",pawns,w,board);
        grid.cellti(4,6).pawn = new pawn(4,6,"E2",pawns,w,board);
        grid.cellti(5,6).pawn = new pawn(5,6,"F2",pawns,w,board);
        grid.cellti(6,6).pawn = new pawn(6,6,"G2",pawns,w,board);
        grid.cellti(7,6).pawn = new pawn(7,6,"H2",pawns,w,board);
        grid.cellti(0,7).pawn = new pawn(0,7,"A1",tower,w,board);
        grid.cellti(7,7).pawn = new pawn(7,7,"H1",tower,w,board);
        grid.cellti(1,7).pawn = new pawn(1,7,"B1",horse,w,board);
        grid.cellti(6,7).pawn = new pawn(6,7,"G1",horse,w,board);
        grid.cellti(3,7).pawn = new pawn(3,7,"D1",queen,w,board);
        grid.cellti(4,7).pawn = new pawn(4,7,"E1",king,w,board);
        grid.cellti(2,7).pawn = new pawn(2,7,"C1",bishop,w,board);
        grid.cellti(5,7).pawn = new pawn(5,7,"F1",bishop,w,board);
        setupgame();
        
    });
});

function riempi(){
    for(let k=0;k<10;k++){
        switch(k){
            case 0:
                for(let i=0;i<10;i++){
                    let div = document.createElement("div");
                    div.classList.add("cellb");
                    switch(i){
                        case 1:div.textContent="A";break;
                        case 2:div.textContent="B";break;
                        case 3:div.textContent="C";break;
                        case 4:div.textContent="D";break;
                        case 5:div.textContent="E";break;
                        case 6:div.textContent="F";break;
                        case 7:div.textContent="G";break;
                        case 8:div.textContent="H";break;
                        default:break;
                    }
                    bb.append(div);
                }break;
            case 1:
                for(let i=0;i<10;i++){
                    let div = document.createElement("div");
                    div.classList.add("cellb");
                    switch(i){
                        case 0:div.textContent="8";break;
                        case 9:div.textContent="8";break;
                    }
                    bb.append(div);
                }break;
            case 2:
                for(let i=0;i<10;i++){
                    let div = document.createElement("div");
                    div.classList.add("cellb");
                    switch(i){
                        case 0:div.textContent="7";break;
                        
                        case 9:div.textContent="7";break;
                    }
                    bb.append(div);
                }break;
            case 3:
                for(let i=0;i<10;i++){
                    let div = document.createElement("div");
                    div.classList.add("cellb");
                    switch(i){
                        case 0:div.textContent="6";break;
                        
                        case 9:div.textContent="6";break;
                    }
                    bb.append(div);
                }break;
            case 4:
                for(let i=0;i<10;i++){
                    let div = document.createElement("div");
                    div.classList.add("cellb");
                    switch(i){
                        case 0:div.textContent="5";break;
                        
                        case 9:div.textContent="5";break;
                    }
                    bb.append(div);
                }break;
            case 5:
                for(let i=0;i<10;i++){
                    let div = document.createElement("div");
                    div.classList.add("cellb");
                    switch(i){
                        case 0:div.textContent="4";break;
                        
                        case 9:div.textContent="4";break;
                    }
                    bb.append(div);
                }break;
            case 6:
                for(let i=0;i<10;i++){
                    let div = document.createElement("div");
                    div.classList.add("cellb");
                    switch(i){
                        case 0:div.textContent="3";break;
                        
                        case 9:div.textContent="3";break;
                    }
                    bb.append(div);
                }break;
            case 7:
                for(let i=0;i<10;i++){
                    let div = document.createElement("div");
                    div.classList.add("cellb");
                    switch(i){
                        case 0:div.textContent="2";break;
                        
                        case 9:div.textContent="2";break;
                    }
                    bb.append(div);
                }break;
            case 8: 
            for(let i=0;i<10;i++){
                let div = document.createElement("div");
                div.classList.add("cellb");
                switch(i){
                    case 0:div.textContent="1";break;
                    
                    case 9:div.textContent="1";break;
                }
                bb.append(div);
            }break;
            case 9:
                for(let i=0;i<10;i++){
                    let div = document.createElement("div");
                    div.classList.add("cellb");
                    switch(i){
                        case 1:div.textContent="A";break;
                        case 2:div.textContent="B";break;
                        case 3:div.textContent="C";break;
                        case 4:div.textContent="D";break;
                        case 5:div.textContent="E";break;
                        case 6:div.textContent="F";break;
                        case 7:div.textContent="G";break;
                        case 8:div.textContent="H";break;
                    }
                    bb.append(div);
                }break;
            default:break;    
        }
       
    }
}
console.log("partita iniziata!!!");
/* window.addeventglobalistener per gestire gli eventi e cliccare le cose ,di per se gli elementi vanno basta la sequenza del come li chiami */
function setupgame(){
    let pawnclicked;
    $("div.pawn").click(function(e){
        console.log(turns.whosturn)
        if(this.dataset.color == turns.whosturn){
            pawnclicked = this;
            document.querySelectorAll("div.cell").forEach(function(e){
                e.removeAttribute("style");
                e.removeAttribute("data-status");
            });
            if(turns.whosturn == "white" && settings.whiteundercheck){
                /* grid.controlifcheck(); */
                window.alert("white under check");
                controlthreatening(); 
                pawnclicked.dataset.canmove=true;

            }else if(turns.whosturn == "black" && settings.blackundercheck){
               /*  grid.controlifcheck(); */
               window.alert("black under check");
               controlthreatening(); 
               pawnclicked.dataset.canmove=true;
            }else{
                controlthreatening(); 
                pawnclicked.dataset.canmove=true;
            }
            if(pawnclicked.dataset.canmove){
                console.log("chiamata rilevazione");
                settings.coloredarray = rilevazione(pawnclicked);
                if(pawnclicked.dataset.active){
                    pawnclicked.removeAttribute("data-active");
                    document.querySelectorAll("div.cell").forEach(function(e){
                        e.removeAttribute("style");
                        e.removeAttribute("data-status");
                    });
                }else{
                    document.querySelectorAll("div.pawn").forEach(function(e){
                        e.removeAttribute("data-active");
                    });
                    pawnclicked.dataset.active=true;
                }
                pawnclicked.removeAttribute("data-canmove");
                e.stopImmediatePropagation(); 
            }
        }
        $("div.cell[data-status]").click(function(e){
            console.log("chiamata a mossa");
            if(settings.coloredarray.length>0){
                settings.moving=true;
                mossa(pawnclicked,e.currentTarget.id,settings.coloredarray,board);
                settings.moving=false;
                document.querySelectorAll("div.pawn").forEach(function(e){  
                    e.removeAttribute("data-status");
                    e.removeAttribute("data-active");
                    e.removeAttribute("data-canmove");
                });
            }
            document.querySelectorAll("div.cell").forEach(function(e){
                e.removeAttribute("style");
                e.removeAttribute("data-status");
            });
                 
            settings.coloredarray=[];
            e.stopImmediatePropagation();    
        });
        $("div.pawn[data-status]").click(function(e){
            if($(this).data("status") == "attacked"){
    
                settings.moving=false;
                if(settings.coloredarray.length>0){
                    console.log("chiamata mossa elminazione")
                    
                    mossa(pawnclicked,$(this).data("cordinates"),settings.coloredarray,board);
                    
                    document.querySelectorAll("div.pawn").forEach(function(e){  
                        e.removeAttribute("data-status");
                    });
                    controlthreatening();
    
                }
                document.querySelectorAll("div.cell").forEach(function(e){
                    e.removeAttribute("style");
                    e.removeAttribute("data-status");
                });
                settings.nomoves=true;
                settings.invoked=false;
                settings.coloredarray=[];
                settings.moving=false;
                e.stopImmediatePropagation();     
            }
        });                              
    });
 
}


function rilevazione(value){
    if(value != undefined && value != null){
        return grid.showmoves(value,value.dataset.cordinates,value.dataset.color,value.dataset.pawn);
    }
    else return;
}
function mossa(value,target,coloredarray,board){
    if(value != undefined && target != undefined && coloredarray != undefined)
    {
        grid.move(value,target,coloredarray,board);
    }else
        return

}

function controlthreatening(){
    grid.showallthreatening();
}

