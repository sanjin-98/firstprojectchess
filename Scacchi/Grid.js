import {settings} from "./settings.js";
import {arrayposition,arrayalphabet} from "./alphabet.js";
import { turns } from "./turns.js";
import pawn from "./pawn.js";
import {cellcheck} from "./main.js";

export default class Grid{

    #cells;
    constructor(element){
        this.#cells=(createGrid(element).map((thiselement,index)=>{
          /*   thiselement.dataset.x=index % 8;
            thiselement.dataset.y=Math.floor(index / 8); */
            return new cell(thiselement,index % 8,Math.floor(index / 8));
        })).reverse();
        
    }
    get cells(){
        return this.#cells;
    }
    cellti(a,b){
        const index = this.#cells.findIndex(cell => cell.x == a && cell.y == b);
        return this.#cells[index];
    }
    showpans(){
        return this.#cells.filter(cell => cell.pawn);
    }
    showmoves(element,position,color,type){
        /* riceve posizione dell elemento e poi illumina le div che puo usare */
        let index = settings.cordinatesTOindex(position);
        let arraytoremovecolorcell=[];
        console.log(this.#cells);
        if(turns.whosturn === color){
            switch(type){
                case "pawns":
                    if(turns.isWhiteTurn){  
                            let arraypawn=this.#cells[index].pawn.mostramovimenti(position,type,color,index,this.#cells);   
                            console.log(arraypawn)
                            
                            for(let i=0;i<arraypawn.length;i++){
                                for(let k=0;k<this.#cells.length;k++){
                                    if(k == arraypawn[i]){
                                        if(this.#cells[k].checkappr()){
                                            this.#cells[k].attribute();
                                            arraytoremovecolorcell.push(this.#cells[k]);
                                        }
                                        else{
                                            this.#cells[k].attributered();
                                            arraytoremovecolorcell.push(this.#cells[k]);
                                        }
                                        
                                    }
                                }    
                            } 
                    }
                    else if(turns.isBlackTurn){
                            let arraypawn=this.#cells[index].pawn.mostramovimenti(position,type,color,index,this.#cells);   
                            for(let i=0;i<arraypawn.length;i++){
                                for(let k=0;k<this.#cells.length;k++){
                                    if(k == arraypawn[i]){
                                        if(this.#cells[k].checkappr()){
                                            this.#cells[k].attribute();
                                            arraytoremovecolorcell.push(this.#cells[k]);
                                        }
                                        else{
                                            this.#cells[k].attributered();
                                            arraytoremovecolorcell.push(this.#cells[k]);
                                        }
                                    }
                                }    
                            } 
                    }break;
                case "horse":
                        if(turns.isWhiteTurn){
                            let arrayhorse=this.#cells[index].pawn.mostramovimenti(position,type,color,index,this.#cells);                                                     
                            for(let i=0;i<arrayhorse.length;i++){
                                for(let k=0;k<this.#cells.length;k++){
                                    if(k == arrayhorse[i]){
                                        if(this.#cells[k].checkappr()){
                                            this.#cells[k].attribute();
                                            arraytoremovecolorcell.push(this.#cells[k]);
                                        }
                                        else{
                                            this.#cells[k].attributered();
                                            arraytoremovecolorcell.push(this.#cells[k]);
                                        }
                                    }
                                }    
                            }   
                        }
                        else if(turns.isBlackTurn){
                            let arrayhorse=this.#cells[index].pawn.mostramovimenti(position,type,color,index,this.#cells);                              
                            for(let i=0;i<arrayhorse.length;i++){
                                for(let k=0;k<this.#cells.length;k++){
                                    if(k == arrayhorse[i]){
                                        if(this.#cells[k].checkappr()){
                                            this.#cells[k].attribute();
                                            arraytoremovecolorcell.push(this.#cells[k]);
                                        }
                                        else{
                                            this.#cells[k].attributered();
                                            arraytoremovecolorcell.push(this.#cells[k]);
                                        }
                                    }
                                }    
                            }
                        }
                    break;
                case "bishop":
                        if(turns.isWhiteTurn){
                            let arraybishop=this.#cells[index].pawn.mostramovimenti(position,type,color,index,this.#cells);   
                            for(let i=0; i< arraybishop.length;i++){
                                for(let k=0;k<this.#cells.length;k++){
                                    if(k == arraybishop[i]){
                                        if(this.#cells[k].checkappr()){
                                            this.#cells[k].attribute();
                                            arraytoremovecolorcell.push(this.#cells[k]);
                                        }
                                        else{
                                            this.#cells[k].attributered();
                                            arraytoremovecolorcell.push(this.#cells[k]);
                                        }
                                    }
                                }    
                            }   
                        }
                        else if(turns.isBlackTurn){
                            let arraybishop=this.#cells[index].pawn.mostramovimenti(position,type,color,index,this.#cells);     
                            for(let i=0; i< arraybishop.length;i++){
                                for(let k=0;k<this.#cells.length;k++){
                                    if(k == arraybishop[i]){
                                        if(this.#cells[k].checkappr()){
                                            this.#cells[k].attribute();
                                            arraytoremovecolorcell.push(this.#cells[k]);
                                        }
                                        else{
                                            this.#cells[k].attributered();
                                            arraytoremovecolorcell.push(this.#cells[k]);
                                        }
                                    }
                                }    
                            }   
                        }
                    break;    
                case "tower":
                        if(turns.isWhiteTurn){
                            let arraytower=this.#cells[index].pawn.mostramovimenti(position,type,color,index,this.#cells);   
                            for(let i=0; i< arraytower.length;i++){
                                for(let k=0;k<this.#cells.length;k++){
                                    if(k == arraytower[i]){
                                        if(this.#cells[k].checkappr()){
                                            this.#cells[k].attribute();
                                            arraytoremovecolorcell.push(this.#cells[k]);
                                        }
                                        else{
                                            this.#cells[k].attributered();
                                            arraytoremovecolorcell.push(this.#cells[k]);
                                        }
                                    }
                                }    
                            }   
                        }
                        else if(turns.isBlackTurn){
                            let arraytower=this.#cells[index].pawn.mostramovimenti(position,type,color,index,this.#cells);   
                            for(let i=0; i< arraytower.length;i++){
                                for(let k=0;k<this.#cells.length;k++){
                                    if(k == arraytower[i]){
                                        if(this.#cells[k].checkappr()){
                                            this.#cells[k].attribute();
                                            arraytoremovecolorcell.push(this.#cells[k]);
                                        }
                                        else{
                                            this.#cells[k].attributered();
                                            arraytoremovecolorcell.push(this.#cells[k]);
                                        }
                                    }
                                }    
                            }   
                        }
                    break;
                case "queen":
                        if(turns.isWhiteTurn){
                            let arrayqueen=this.#cells[index].pawn.mostramovimenti(position,type,color,index,this.#cells);   
                            for(let i=0; i< arrayqueen.length;i++){
                                for(let k=0;k<this.#cells.length;k++){
                                    if(k == arrayqueen[i]){
                                        if(this.#cells[k].checkappr()){
                                           
                                            this.#cells[k].attribute();
                                            arraytoremovecolorcell.push(this.#cells[k]);
                                        }
                                        else{
                                            this.#cells[k].attributered();
                                            arraytoremovecolorcell.push(this.#cells[k]);
                                        }
                                    }
                                }    
                            }   
                        }
                        else if(turns.isBlackTurn){
                            let arrayqueen=this.#cells[index].pawn.mostramovimenti(position,type,color,index,this.#cells);   
                            for(let i=0; i< arrayqueen.length;i++){
                                for(let k=0;k<this.#cells.length;k++){
                                    if(k == arrayqueen[i]){
                                        if(this.#cells[k].checkappr()){
                                            
                                            this.#cells[k].attribute();
                                            arraytoremovecolorcell.push(this.#cells[k]);
                                        }
                                        else{
                                            this.#cells[k].attributered();
                                            arraytoremovecolorcell.push(this.#cells[k]);
                                        }
                                    }
                                }    
                            }   
                        }
                    break;
                case "king":
                        if(turns.isWhiteTurn){
                            let arrayking=this.#cells[index].pawn.mostramovimenti(position,type,color,index,this.#cells);   
                            for(let i=0; i< arrayking.length;i++){
                                for(let k=0;k<this.#cells.length;k++){
                                    if(k == arrayking[i]){
                                        if(this.#cells[k].checkappr()){
                                            this.#cells[k].attribute();
                                            arraytoremovecolorcell.push(this.#cells[k]);
                                        }
                                        else{/* king attribute red */
                                            this.#cells[k].attributered();
                                            arraytoremovecolorcell.push(this.#cells[k]);
                                        }
                                    }
                                }    
                            }   
                        }
                        else if(turns.isBlackTurn){
                            let arrayking=this.#cells[index].pawn.mostramovimenti(position,type,color,index,this.#cells);   
                            for(let i=0; i< arrayking.length;i++){
                                for(let k=0;k<this.#cells.length;k++){
                                    if(k == arrayking[i]){
                                        if(this.#cells[k].checkappr()){
                                            this.#cells[k].attribute();
                                            arraytoremovecolorcell.push(this.#cells[k]);
                                        }
                                        else{/* king attribute red */
                                            this.#cells[k].attributered();
                                            arraytoremovecolorcell.push(this.#cells[k]);
                                        }
                                    }
                                }    
                            }   
                        }
                    break;  
                    default: break;          
            }
        }   
        return arraytoremovecolorcell;
    }
    move(element,targetmove,arraytofix,board){
        let originindex = settings.cordinatesTOindex(element.dataset.cordinates);
        let indextofind = settings.cordinatesTOindex(targetmove);
       
        for(let i=0;i<this.#cells.length;i++){
            if(i == indextofind){
                if(settings.moving){
                    let cellaoriginal;
                    cellaoriginal=this.#cells[originindex].pawn;
                    /* qui ci sara il cambio di posizione e proprieta */
                    if(cellaoriginal.type == "king" && cellaoriginal.color == "white"){
                        settings.whitekingindex=i;
                    }else if(cellaoriginal.type == "king" && cellaoriginal.color == "black"){
                        settings.blackkingindex=i;
                    }
                    cellaoriginal.element.style.setProperty("--x",this.#cells[i].x);
                    cellaoriginal.element.style.setProperty("--y",this.#cells[i].y);
                    cellaoriginal.element.dataset.cordinates=targetmove;
                    cellaoriginal.element.dataset.x=this.#cells[i].x;
                    cellaoriginal.element.dataset.y=this.#cells[i].y;
                    cellaoriginal.cordinates=targetmove;
                    if(cellaoriginal.firstmove != undefined && cellaoriginal.firstmove == true){
                        cellaoriginal.element.dataset.datafirstmoveoriginal=cellaoriginal.firstmove;
                        cellaoriginal.firstmove = false;     
                    }
                    this.#cells[i].pawn=cellaoriginal;
                    this.#cells[originindex].pawn=undefined;
                    this.showallthreatening();
                    if(turns.whosturn == "black"){
                        if(settings.blackundercheck){ //checkthis
        
                            console.log("blackchecked?")
                            cellaoriginal.x=this.#cells[originindex].x;
                            cellaoriginal.y=this.#cells[originindex].y;
                            cellaoriginal.element.dataset.cordinates=arrayalphabet[this.#cells[originindex].x]+arrayposition[this.#cells[originindex].y];
                            cellaoriginal.element.dataset.x=this.#cells[originindex].x;
                            cellaoriginal.element.dataset.y=this.#cells[originindex].y;
                            cellaoriginal.cordinates=arrayalphabet[this.#cells[originindex].x]+arrayposition[this.#cells[originindex].y];
                            if(cellaoriginal.type == "king" && cellaoriginal.color == "black"){
                                settings.blackkingindex=originindex;
                            }
                            if(cellaoriginal.firstmove != undefined){
                                cellaoriginal.firstmove = cellaoriginal.element.dataset.datafirstmoveoriginal;
                                cellaoriginal.element.removeAttribute("data-datafirstmoveoriginal");
                            }
                            this.#cells[originindex].pawn=cellaoriginal;
                            //bisogna ridare gli status a cella original
                            let arraymate = [];
                            arraymate = this.#cells[settings.blackkingindex].pawn.mostramovimenti(this.#cells[settings.blackkingindex].pawn.cordinates,this.#cells[settings.blackkingindex].pawn.type,this.#cells[settings.blackkingindex].pawn.color,settings.blackkingindex,this.#cells);
                            if(arraymate.length == 0){
                                window.alert("black checkmate");
                            }                          
                            this.#cells[i].pawn = undefined;
                        }
                        else{
                            this.#cells[i].pawn.element.removeAttribute("data-datafirstmoveoriginal");
                            console.log(this.#cells)
                            turns.changeturn();
                            return;
                        }
                    } else if(turns.whosturn == "white"){
                        if(settings.whiteundercheck){
                            console.log("whitechecked?")
                            cellaoriginal.x=this.#cells[originindex].x;
                            cellaoriginal.y=this.#cells[originindex].y;
                            cellaoriginal.element.dataset.cordinates=arrayalphabet[this.#cells[originindex].x]+arrayposition[this.#cells[originindex].y];
                            cellaoriginal.element.dataset.x=this.#cells[originindex].x;
                            cellaoriginal.element.dataset.y=this.#cells[originindex].y;
                            cellaoriginal.cordinates=arrayalphabet[this.#cells[originindex].x]+arrayposition[this.#cells[originindex].y];
                            if(cellaoriginal.type == "king" && cellaoriginal.color == "white"){
                                settings.whitekingindex=originindex;
                            }
                            if(cellaoriginal.firstmove != undefined){
                                cellaoriginal.firstmove = cellaoriginal.element.dataset.datafirstmoveoriginal;
                                cellaoriginal.element.removeAttribute("data-datafirstmoveoriginal");
                            }
                            this.#cells[originindex].pawn=cellaoriginal;
                            //bisogna ridare gli status a cella original
        
                            this.#cells[i].pawn = undefined;
                        }else{
                            this.#cells[i].pawn.element.removeAttribute("data-datafirstmoveoriginal");
                            console.log(this.#cells)
                            turns.changeturn();
                            return;
                        }
                    }
                    console.log(this.#cells)
                    return;
                }
            let cellaoriginal;
            cellaoriginal=this.#cells[originindex].pawn;

            /* qui ci sara il cambio di posizione e proprieta */
            cellaoriginal.element.style.setProperty("--x",this.#cells[i].x);
            cellaoriginal.element.style.setProperty("--y",this.#cells[i].y);
            cellaoriginal.element.dataset.cordinates=targetmove;
            cellaoriginal.element.dataset.x=this.#cells[i].x;
            cellaoriginal.element.dataset.y=this.#cells[i].y;
            cellaoriginal.cordinates=targetmove;
            if(cellaoriginal.firstmove != undefined && cellaoriginal.firstmove == true){
                cellaoriginal.element.dataset.datafirstmoveoriginal=cellaoriginal.firstmove;
                cellaoriginal.firstmove = false;     
            }
            if(cellaoriginal.type == "king" && cellaoriginal.color == "white"){
                settings.whitekingindex=i;
            }else if(cellaoriginal.type == "king" && cellaoriginal.color == "black"){
                settings.blackkingindex=i;
            }
            let div = this.#cells[i].pawn.element; 
            if(this.#cells[i].pawn.firstmove != undefined){
                div.dataset.firstmove =this.#cells[i].pawn.firstmove;
            }
             // controllo first move e poi lo aggiungo come data cosi lo posso recuperare
            this.#cells[i].pawn.element.remove();
            this.#cells[i].pawn=cellaoriginal;
            this.#cells[originindex].pawn=undefined;

            //manca rimuovere elemento dalla board 
            this.showallthreatening();
            
            if(turns.whosturn == "black"){
                if(settings.blackundercheck){ //checkthis

                    console.log("blackchecked?")
                    cellaoriginal.x=this.#cells[originindex].x;
                    cellaoriginal.y=this.#cells[originindex].y;
                    cellaoriginal.element.dataset.cordinates=arrayalphabet[this.#cells[originindex].x]+arrayposition[this.#cells[originindex].y];
                    cellaoriginal.element.dataset.x=this.#cells[originindex].x;
                    cellaoriginal.element.dataset.y=this.#cells[originindex].y;
                    cellaoriginal.cordinates=arrayalphabet[this.#cells[originindex].x]+arrayposition[this.#cells[originindex].y];
                    if(cellaoriginal.type == "king" && cellaoriginal.color == "black"){
                        settings.whitekingindex=originindex;
                    }
                    if(cellaoriginal.firstmove != undefined){
                        cellaoriginal.firstmove = cellaoriginal.element.dataset.datafirstmoveoriginal;
                        cellaoriginal.element.removeAttribute("data-datafirstmoveoriginal");
                    }
                    this.#cells[originindex].pawn=cellaoriginal;
                    //bisogna ridare gli status a cella original

                    this.#cells[i].pawn = new pawn(div.dataset.x,div.dataset.y,div.dataset.cordinates,div.dataset.pawn,div.dataset.color,board);
                    if(div.dataset.firstmove != undefined){
                        this.#cells[i].pawn.firstmove = div.dataset.firstmove;
                    }
                    let arraymate = [];
                    arraymate = this.#cells[settings.blackkingindex].pawn.mostramovimenti(this.#cells[settings.blackkingindex].pawn.cordinates,this.#cells[settings.blackkingindex].pawn.type,this.#cells[settings.blackkingindex].pawn.color,settings.blackkingindex,this.#cells);
                    if(arraymate.length == 0){
                        window.alert("black checkmate");
                    }                    
                }
                else{
                    this.#cells[i].pawn.element.removeAttribute("data-datafirstmoveoriginal");
                    console.log(this.#cells)
                    turns.changeturn();
                    return;
                }
            } else if(turns.whosturn == "white"){
                if(settings.whiteundercheck){
                    console.log("whitechecked?")
                    cellaoriginal.x=this.#cells[originindex].x;
                    cellaoriginal.y=this.#cells[originindex].y;
                    cellaoriginal.element.dataset.cordinates=arrayalphabet[this.#cells[originindex].x]+arrayposition[this.#cells[originindex].y];
                    cellaoriginal.element.dataset.x=this.#cells[originindex].x;
                    cellaoriginal.element.dataset.y=this.#cells[originindex].y;
                    cellaoriginal.cordinates=arrayalphabet[this.#cells[originindex].x]+arrayposition[this.#cells[originindex].y];
                    if(cellaoriginal.type == "king" && cellaoriginal.color == "white"){
                        settings.whitekingindex=originindex;
                    }
                    if(cellaoriginal.firstmove != undefined){
                        cellaoriginal.firstmove = cellaoriginal.element.dataset.datafirstmoveoriginal;
                        cellaoriginal.element.removeAttribute("data-datafirstmoveoriginal");
                    }
                    this.#cells[originindex].pawn=cellaoriginal;
                    //bisogna ridare gli status a cella original

                    this.#cells[i].pawn = new pawn(div.dataset.x,div.dataset.y,div.dataset.cordinates,div.dataset.pawn,div.dataset.color,board);
                    if(div.dataset.firstmove != undefined){
                        this.#cells[i].pawn.firstmove = div.dataset.firstmove;
                    } 
                }else{
                    console.log(this.#cells)
                    this.#cells[i].pawn.element.removeAttribute("data-datafirstmoveoriginal");
                    turns.changeturn();
                    return;
                }
            }
        }
    }
    }
    showallthreatening(){/* da fare per fare scacco matto */
        console.log("minaccia");
        cellcheck.checktheatck();
        for(let i=0;i<this.#cells.length;i++){
            if(this.#cells[i].pawn != undefined){
                let cellp=this.#cells[i].pawn;
                switch(cellp.type){
                    case "pawns":cellp.mostramovimenti(cellp.cordinates,cellp.type,cellp.color,settings.cordinatesTOindex(cellp.cordinates),this.#cells);break;
                    case "horse":cellp.mostramovimenti(cellp.cordinates,cellp.type,cellp.color,settings.cordinatesTOindex(cellp.cordinates),this.#cells);break;
                    case "tower":cellp.mostramovimenti(cellp.cordinates,cellp.type,cellp.color,settings.cordinatesTOindex(cellp.cordinates),this.#cells);break;
                    case "bishop":cellp.mostramovimenti(cellp.cordinates,cellp.type,cellp.color,settings.cordinatesTOindex(cellp.cordinates),this.#cells);break;
                    case "queen":cellp.mostramovimenti(cellp.cordinates,cellp.type,cellp.color,settings.cordinatesTOindex(cellp.cordinates),this.#cells);break;
                    case "king":cellp.controlcheck(cellp.cordinates,cellp.type,cellp.color,settings.cordinatesTOindex(cellp.cordinates),this.#cells);break;
                }
            }
        }        
    }
    controlifcheck(){
        let indexcheck=[];
        if(turns.whosturn == "black"){
            console.log(this.#cells[settings.blackkingindex])
            indexcheck=this.#cells[settings.blackkingindex].pawn.findthreat(this.#cells[settings.blackkingindex].pawn.cordinates,this.#cells[settings.blackkingindex].pawn.type,this.#cells[settings.blackkingindex].pawn.color,settings.cordinatesTOindex(this.#cells[settings.blackkingindex].pawn.cordinates),this.#cells);
        }else if(turns.whosturn == "white"){
            indexcheck=this.#cells[settings.whitekingindex].pawn.findthreat(this.#cells[settings.whitekingindex].pawn.cordinates,this.#cells[settings.whitekingindex].pawn.type,this.#cells[settings.whitekingindex].pawn.color,settings.cordinatesTOindex(this.#cells[settings.whitekingindex].pawn.cordinates),this.#cells);
        } 
        for(let i=0;i<this.#cells.length;i++){
            if(this.#cells[i].pawn != undefined && turns.whosturn == this.#cells[i].pawn.color){
                let array=[];
                let cellp=this.#cells[i].pawn;
                switch(cellp.type){
                    case "pawns":array=cellp.mostramovimenti(cellp.cordinates,cellp.type,cellp.color,settings.cordinatesTOindex(cellp.cordinates),this.#cells);break;
                    case "horse":array=cellp.mostramovimenti(cellp.cordinates,cellp.type,cellp.color,settings.cordinatesTOindex(cellp.cordinates),this.#cells);break;
                    case "tower":array=cellp.mostramovimenti(cellp.cordinates,cellp.type,cellp.color,settings.cordinatesTOindex(cellp.cordinates),this.#cells);break;
                    case "bishop":array=cellp.mostramovimenti(cellp.cordinates,cellp.type,cellp.color,settings.cordinatesTOindex(cellp.cordinates),this.#cells);break;
                    case "queen":array=cellp.mostramovimenti(cellp.cordinates,cellp.type,cellp.color,settings.cordinatesTOindex(cellp.cordinates),this.#cells);break;
                    /* case "king":array=cellp.controlcheck(cellp.cordinates,cellp.type,cellp.color,settings.cordinatesTOindex(cellp.cordinates),this.#cells);break;  */
                }
                for(let k=0;k<array.length;k++){
                    for(let f=0;f<indexcheck.length;f++){
                        if(array[k] == indexcheck[f]){
                            cellp.element.style.setProperty("background-color","yellow");
                            cellp.element.dataset.canmove=true;
                        }
                    }
                }
            }
        }  
    }
}
class cell{
    #thiselement;
    #x;
    #y;
    #pawn;
    constructor(thiselement,x,y){
        this.#thiselement=thiselement;
        this.#x=x;
        this.#y=y;
    }
    get thiselement(){
        return this.#thiselement;
    }
    attribute(){
        this.#thiselement.style.setProperty("background-color","#3c3cc9b5");
        this.#thiselement.dataset.status="ready";
    }
    attributered(){
        this.#thiselement.style.setProperty("background-color","red");
        this.#thiselement.dataset.status="attack";
    }
    checkappr(){
        if(this.pawn == undefined && this.horse == undefined && this.bishop == undefined && this.tower == undefined && this.king == undefined && this.queen == undefined){
            return true;
        }
        else
            return false;
    }
    get x(){
        return this.#x;
    }
    get y(){
        return this.#y;
    }
    get pawn(){
        return this.#pawn;
    }
    set pawn(pawn){
        this.#pawn=pawn;
        if(pawn==null) return;
        this.#pawn.x=this.#x;
        this.#pawn.y=this.#y;
    }
}

function createGrid(board){
    let cells=[];
    let letter;
    for(let i=8;i>0;i--){
        if(i%2 == 0){
            for(let k=0;k<8;k++){
                let b = document.createElement("div");
                let w = document.createElement("div");
                switch(k){
                    case 0:letter = "A";break;
                    case 1:letter = "B";break;
                    case 2:letter = "C";break;
                    case 3:letter = "D";break;
                    case 4:letter = "E";break;
                    case 5:letter = "F";break;
                    case 6:letter = "G";break;
                    case 7:letter = "H";break;
                }
                if(k%2 == 0){
                    w.classList.add("cell");
                    w.classList.add("white");
                    w.setAttribute("id",letter+i);
                    board.append(w);
                    cells.push(w);
                }else{
                    b.classList.add("cell");
                    b.classList.add("black");
                    b.setAttribute("id",letter+i);
                    board.append(b);
                    cells.push(b);
                }
            }
        }else{
            for(let k=0;k<8;k++){

                let b = document.createElement("div");
                let w = document.createElement("div");
                switch(k){
                    case 0:letter = "A";break;
                    case 1:letter = "B";break;
                    case 2:letter = "C";break;
                    case 3:letter = "D";break;
                    case 4:letter = "E";break;
                    case 5:letter = "F";break;
                    case 6:letter = "G";break;
                    case 7:letter = "H";break;
                }
                if(k%2 == 0){
                    b.classList.add("cell");
                    b.classList.add("black");
                    b.setAttribute("id",letter+i);
                    board.append(b);
                    cells.push(b);
                }else{
                    w.classList.add("cell");
                    w.classList.add("white");
                    w.setAttribute("id",letter+i);
                    board.append(w);
                    cells.push(w);
                }
            }
        }
    }
    return cells;
}
