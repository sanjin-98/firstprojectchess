import { arrayalphabet, arrayposition } from "./alphabet.js"
import { settings } from "./settings.js"

export default class pawn{
#x
#y
#cordinates
#type
#color
#element
#firstmove
    constructor(x,y,cordinates,type,color,board){
        this.#x=x;
        this.#y=y;
        this.#cordinates=cordinates;
        this.#type=type;
        this.#color=color;
        if(type === "pawns")
            this.#firstmove=true;
        this.#element = document.createElement("div");
        this.#element.style.setProperty("--x",x);
        this.#element.style.setProperty("--y",y);    
        
        this.#element.classList.add("pawn");
        this.#element.classList.add(color);
        this.#element.classList.add(type);
        this.#element.dataset.x=x;
        this.#element.dataset.y=y;
        this.#element.dataset.cordinates=cordinates;
        this.#element.dataset.color=color;
        this.#element.dataset.pawn=type;
        board.append(this.#element);
    }
    get x(){
        return this.#x;
    }
    set x(x){
        this.#x=x;
        this.#element.style.setProperty("--x",x);
    }
    get y(){
        return this.#y;
    }
    set y(y){
        this.#y=y;
        this.#element.style.setProperty("--y",y);
    }
    get cordinates(){
        return this.#cordinates;
    }
    set cordinates(cordinates){
        this.#cordinates=cordinates;
    }
    get color(){
        return this.#color;
    }
    set color(color){
        this.#color=color;
    }
    get type(){
        return this.#type;
    }
    set type(type){
        this.#type=type;
    }
    get element(){
        return this.#element;
    }
    set element(element){
        this.#element=element;
    }
    get firstmove(){
        return this.#firstmove;
    }
    set firstmove(firstmove){
        this.#firstmove=firstmove;
    }
    remove(){
        this.#x.remove();
        this.#y.remove();
        this.#cordinates.remove();
        this.#type.remove();
        this.#color.remove();
        this.#firstmove.remove();
        this.#element.remove();
    }
    //mettere tutti dataset ai metodi dataset.attack dataset.status
    mostramovimenti(cordinatelemento,tipo,color,indicelemento,array){
        let arraytoreturn=[];
        switch(tipo){
            case "pawns": arraytoreturn = this.showpawn(cordinatelemento,tipo,color,indicelemento,array);break;
            case "horse":arraytoreturn = this.showhorse(cordinatelemento,tipo,color,indicelemento,array);break;
            case "tower":arraytoreturn = this.showtower(cordinatelemento,tipo,color,indicelemento,array);break;
            case "bishop":arraytoreturn = this.showbishop(cordinatelemento,tipo,color,indicelemento,array);break;
            case "queen":arraytoreturn = this.showqueen(cordinatelemento,tipo,color,indicelemento,array);break;
            case "king":arraytoreturn = this.showking(cordinatelemento,tipo,color,indicelemento,array);break;
                default:return arraytoreturn;   
        }
        return arraytoreturn;
    }
    showpawn(cordinatelemento,tipo,color,indicelemento,array){
        let arraytoreturn=[];
        let x=array[indicelemento].pawn.x;
        let y= array[indicelemento].pawn.y;
        let moves =0;
        if(color == "white"){
            if(array[indicelemento].pawn.firstmove == true){
                moves=2;
            }
            else{
                moves=1;
            }
            if(y-1 >= 0){
                for(let i=y-1;moves>=1;i--){
                    moves--;
                    let index = settings.cordinatesTOindex(arrayalphabet[x] + arrayposition[i]); 
                    if(checkcella(array[index])){
                        arraytoreturn.push(index);
                       
                    }else{
                        moves=0;
                    }
                }
            }
            if((x+1)<8 && (y-1)>=0){
                let index = settings.cordinatesTOindex(arrayalphabet[x+1] + arrayposition[y-1]);
                if(checkcella(array[index]) == false && !(checkpawn(array[index],array[indicelemento]))){
                    arraytoreturn.push(index);
                }else{
                    setcella(array[index],array[indicelemento]);
                }
            }
            if((x-1)>=0 && (y-1)>=0){
                let index = settings.cordinatesTOindex(arrayalphabet[x-1] + arrayposition[y-1]);
                if(checkcella(array[index]) == false && !(checkpawn(array[index],array[indicelemento]))){
                    arraytoreturn.push(index);
                }else{
                    setcella(array[index],array[indicelemento]);
                }
            }
        }else if(color == "black"){
            if(array[indicelemento].pawn.firstmove == true){
                moves=2;
            }
            else{
                moves=1;
            }
            if(y+1 < 8){
                for(let i=y+1;moves>=1;i++){
                    moves--;
                    let index = settings.cordinatesTOindex(arrayalphabet[x] + arrayposition[i]); /* settings.reversecordinates */
                    if(checkcella(array[index])){
                        arraytoreturn.push(index);
                        //colora la cella e settala che e selezionabile
                    }else{
                        moves=0;
                    }
                }
            }
            if((x+1)<8 && (y+1)<8){
                let index = settings.cordinatesTOindex(arrayalphabet[x+1] + arrayposition[y+1]);
                if(checkcella(array[index]) == false && !(checkpawn(array[index],array[indicelemento]))){
                    arraytoreturn.push(index);
                }else{
                    setcella(array[index],array[indicelemento]);
                }
            }
            if((x-1)>=0 && (y+1)<8){
                let index = settings.cordinatesTOindex(arrayalphabet[x-1] + arrayposition[y+1]);
                if(checkcella(array[index]) == false && !(checkpawn(array[index],array[indicelemento]))){
                    arraytoreturn.push(index);
                }else{
                    setcella(array[index],array[indicelemento]);
                }
            }
        }
        return arraytoreturn;
    }
    showhorse(cordinatelemento,tipo,color,indicelemento,array){ // array = this.cells   indicelemento = index dell'elemento orgine color=colore tipo=che pedina cordinatelemento = cordinate origine
        let movesup=2;
        let movesright=1;
        let arraytoreturn=[];
        let x=array[indicelemento].pawn.x;
        let y=array[indicelemento].pawn.y;
        if(((x-movesup)>=0) && ((y-movesright)>=0)){
            let index = settings.cordinatesTOindex(arrayalphabet[x-movesup]+arrayposition[y-movesright]);
            if(checkcella(array[index])){
                setcella(array[index],array[indicelemento]);
                arraytoreturn.push(index);
            }else{
                if(!(checkpawn(array[index],array[indicelemento])))
                {
                    arraytoreturn.push(index);
                }else{

                }
            }
        }
        if(((x-movesup)>=0) && ((y+movesright)<8)){
            let index=settings.cordinatesTOindex(arrayalphabet[x-movesup]+arrayposition[y+movesright]);
            if(checkcella(array[index])){
                setcella(array[index],array[indicelemento]);
                arraytoreturn.push(index);
            }else{
                if(!(checkpawn(array[index],array[indicelemento])))
                {
                    arraytoreturn.push(index);
                }else{
                    
                }
            }
        }
        if(((x+movesup)<8) && ((y-movesright)>=0)){ /* g */
            let index=settings.cordinatesTOindex(arrayalphabet[x+movesup]+arrayposition[y-movesright]);
            if(checkcella(array[index])){
                setcella(array[index],array[indicelemento]);
                arraytoreturn.push(index);
            }else{
                if(!(checkpawn(array[index],array[indicelemento])))
                {
                    arraytoreturn.push(index);
                }else{
                    
                }
            }
        }
        if(((x+movesup)<8) && ((y+movesright)<8)){
            let index=settings.cordinatesTOindex(arrayalphabet[x+movesup]+arrayposition[y+movesright]);
            if(checkcella(array[index])){
                setcella(array[index],array[indicelemento]);
                arraytoreturn.push(index);
            }else{
                if(!(checkpawn(array[index],array[indicelemento])))
                {
                    arraytoreturn.push(index);
                }else{
                    
                }
            }
        }

        if(((x-movesright)>=0) && ((y-movesup)>=0)){/* g */
            let index=settings.cordinatesTOindex(arrayalphabet[x-movesright]+arrayposition[y-movesup]);
            if(checkcella(array[index])){
                setcella(array[index],array[indicelemento]);
                arraytoreturn.push(index);
            }else{
                if(!(checkpawn(array[index],array[indicelemento])))
                {
                    arraytoreturn.push(index);
                }else{
                    
                }
            }
        }
        if(((x-movesright)>=0) && ((y+movesup)<8)){
            let index=settings.cordinatesTOindex(arrayalphabet[x-movesright]+arrayposition[y+movesup]);
            if(checkcella(array[index])){
                setcella(array[index],array[indicelemento]);
                arraytoreturn.push(index);
            }else{
                if(!(checkpawn(array[index],array[indicelemento])))
                {
                    arraytoreturn.push(index);
                }else{
                    
                }
            }
        }
        if(((x+movesright)<8) && ((y-movesup)>=0)){ /* g */
            let index=settings.cordinatesTOindex(arrayalphabet[x+movesright]+arrayposition[y-movesup]);
            if(checkcella(array[index])){
                setcella(array[index],array[indicelemento]);
                arraytoreturn.push(index);
            }else{
                if(!(checkpawn(array[index],array[indicelemento])))
                {
                    arraytoreturn.push(index);
                }else{
                    
                }
            }
        }
        if(((x+movesright)<8) && ((y+movesup)<8)){
            let index=settings.cordinatesTOindex(arrayalphabet[x+movesright]+arrayposition[y+movesup]);
            if(checkcella(array[index])){
                setcella(array[index],array[indicelemento]);
                arraytoreturn.push(index);
            }else{
                if(!(checkpawn(array[index],array[indicelemento])))
                {
                    arraytoreturn.push(index);
                }else{
                    
                }
            }
        }
        return arraytoreturn;
    }
    showtower(cordinatelemento,tipo,color,indicelemento,array){
        let x=array[indicelemento].pawn.x;
        let y=array[indicelemento].pawn.y;
        let arraytoreturn=[];
        for(let i=x+1;i<8;i++){
            let index = arrayalphabet[i]+arrayposition[y];
            for(let k=0;k<array.length;k++)
            {
                if(array[k].thiselement.id == index){
                    if(checkcella(array[k])){
                        setcella(array[k],array[indicelemento]);
                        arraytoreturn.push(settings.cordinatesTOindex(index));
                        k=array.length;
                    }else{
                        if(!(checkpawn(array[k],array[indicelemento])))
                        {
                            arraytoreturn.push(settings.cordinatesTOindex(index));
                        }
                        i=8;
                        k=array.length;
                    }
                }
            }
        }
        for(let i=x-1;i>=0;i--){
            let index = arrayalphabet[i]+arrayposition[y];
            for(let k=0;k<array.length;k++)
            {
                if(array[k].thiselement.id == index){
                    if((checkcella(array[k]))){
                        setcella(array[k],array[indicelemento]);
                        k=array.length;
                        arraytoreturn.push(settings.cordinatesTOindex(index));
                    }else{
                        if(!(checkpawn(array[k],array[indicelemento])))
                        {
                            arraytoreturn.push(settings.cordinatesTOindex(index));
                        }
                        i=-1;
                        k=array.length;
                    }
                }
            }
        }
        for(let i=y-1;i>=0;i--){
            let index = arrayalphabet[x]+arrayposition[i];
            for(let k=0;k<array.length;k++)
            {
                if(array[k].thiselement.id == index){
                    if((checkcella(array[k]))){
                        setcella(array[k],array[indicelemento]);
                        arraytoreturn.push(settings.cordinatesTOindex(index));
                        k=array.length;
                    }else{
                        if(!(checkpawn(array[k],array[indicelemento])))
                        {
                            arraytoreturn.push(settings.cordinatesTOindex(index));
                        }
                        i=-1;
                        k=array.length;
                    }
                }
            }
        }
        for(let i=y+1;i<8;i++){
            let index = arrayalphabet[x]+arrayposition[i];
            for(let k=0;k<array.length;k++)
            {
                if(array[k].thiselement.id == index){
                    if((checkcella(array[k]))){
                        setcella(array[k],array[indicelemento]);
                        arraytoreturn.push(settings.cordinatesTOindex(index));
                        k=array.length;
                    }else{
                        if(!(checkpawn(array[k],array[indicelemento])))
                        {
                            arraytoreturn.push(settings.cordinatesTOindex(index));
                        }
                        i=8;
                        k=array.length;
                    }
                }
            }
        }
        return arraytoreturn;
    }
    showbishop(cordinatelemento,tipo,color,indicelemento,array){
        let arraytoreturn=[];
        let x=array[indicelemento].pawn.x;
        let y=array[indicelemento].pawn.y;
        let yindex=y;
        for (let i = x+1; i < 8; i++) {
            yindex++;
            if(yindex < 8){
            let index = arrayalphabet[i]+arrayposition[yindex];
            for(let k=0;k<array.length;k++)
            {
                if(array[k].thiselement.id == index){
                    if(checkcella(array[k])){
                        setcella(array[k],array[indicelemento]);
                        arraytoreturn.push(settings.cordinatesTOindex(index));
                        k=array.length;
                    }else{
                        if(!(checkpawn(array[k],array[indicelemento])))
                        {
                            arraytoreturn.push(settings.cordinatesTOindex(index));
                        }
                        i=8;
                        k=array.length;
                    }
                }
            }
                if(yindex == 7)
                    i=8;
            }
            else{ i = 8;
            }
        }
        yindex=y;
        for (let i = x-1; i >= 0; i--) {
            yindex--;
            if(yindex>=0){
            let index = arrayalphabet[i]+arrayposition[yindex];
            for(let k=0;k<array.length;k++)
            {
                if(array[k].thiselement.id == index){
                    if(checkcella(array[k])){
                        setcella(array[k],array[indicelemento]);
                        arraytoreturn.push(settings.cordinatesTOindex(index));
                        k=array.length;
                    }else{
                        if(!(checkpawn(array[k],array[indicelemento])))
                        {
                            arraytoreturn.push(settings.cordinatesTOindex(index));
                        }
                        i=-1;
                        k=array.length;
                    }
                }
            }
            if(yindex == 0)
                i=-1;
            }else{i=-1;}
        }
        yindex=y;
        for (let i = x+1; i < 8; i++) {
            yindex--;
            if(yindex>=0){
            let index = arrayalphabet[i]+arrayposition[yindex];
            for(let k=0;k<array.length;k++)
            {
                if(array[k].thiselement.id == index){
                    if(checkcella(array[k])){
                        setcella(array[k],array[indicelemento]);
                        arraytoreturn.push(settings.cordinatesTOindex(index));
                        k=array.length;
                    }else{
                        if(!(checkpawn(array[k],array[indicelemento])))
                        {
                            arraytoreturn.push(settings.cordinatesTOindex(index));
                        }
                        i=8;
                        k=array.length;
                    }
                }
            }
            if(yindex == 0)
                i=8;
            }else{i=8;}
        }
        yindex=y;
        for (let i = x-1; i >= 0; i--) {
            yindex++;
            if(yindex<8){
            let index = arrayalphabet[i]+arrayposition[yindex];
            for(let k=0;k<array.length;k++)
            {
                if(array[k].thiselement.id == index){
                    if(checkcella(array[k])){
                        setcella(array[k],array[indicelemento]);
                        arraytoreturn.push(settings.cordinatesTOindex(index));
                        k=array.length;
                    }else{
                        if(!(checkpawn(array[k],array[indicelemento])))
                        {
                            arraytoreturn.push(settings.cordinatesTOindex(index));
                        }
                        i=-1;
                        k=array.length;
                    }
                }
            }
            if(yindex == 7)
                i=-1;
            }else{i=-1;}
        }
        return arraytoreturn;        
    }
    showqueen(cordinatelemento,tipo,color,indicelemento,array){
        let x=array[indicelemento].pawn.x;
        let y=array[indicelemento].pawn.y;
        let arraytoreturn=[];

        //PARTE DELLA TORRE
        for(let i=x+1;i<8;i++){
            let index = arrayalphabet[i]+arrayposition[y];
            for(let k=0;k<array.length;k++)
            {
                if(array[k].thiselement.id == index){
                    if(checkcella(array[k])){
                        setcella(array[k],array[indicelemento]);
                        arraytoreturn.push(settings.cordinatesTOindex(index));
                        k=array.length;
                    }else{
                        if(!(checkpawn(array[k],array[indicelemento])))
                        {
                            arraytoreturn.push(settings.cordinatesTOindex(index));
                        }
                        i=8;
                        k=array.length;
                    }
                }
            }
        }
        for(let i=x-1;i>=0;i--){
            let index = arrayalphabet[i]+arrayposition[y];
            for(let k=0;k<array.length;k++)
            {
                if(array[k].thiselement.id == index){
                    if((checkcella(array[k]))){
                        setcella(array[k],array[indicelemento]);
                        k=array.length;
                        arraytoreturn.push(settings.cordinatesTOindex(index));
                    }else{
                        if(!(checkpawn(array[k],array[indicelemento])))
                        {
                            arraytoreturn.push(settings.cordinatesTOindex(index));
                        }
                        i=-1;
                        k=array.length;
                    }
                }
            }
        }
        for(let i=y-1;i>=0;i--){
            let index = arrayalphabet[x]+arrayposition[i];
            for(let k=0;k<array.length;k++)
            {
                if(array[k].thiselement.id == index){
                    if((checkcella(array[k]))){
                        setcella(array[k],array[indicelemento]);
                        arraytoreturn.push(settings.cordinatesTOindex(index));
                        k=array.length;
                    }else{
                        if(!(checkpawn(array[k],array[indicelemento])))
                        {
                            arraytoreturn.push(settings.cordinatesTOindex(index));
                        }
                        i=-1;
                        k=array.length;
                    }
                }
            }
        }
        for(let i=y+1;i<8;i++){
            let index = arrayalphabet[x]+arrayposition[i];
            for(let k=0;k<array.length;k++)
            {
                if(array[k].thiselement.id == index){
                    if((checkcella(array[k]))){
                        setcella(array[k],array[indicelemento]);
                        arraytoreturn.push(settings.cordinatesTOindex(index));
                        k=array.length;
                    }else{
                        if(!(checkpawn(array[k],array[indicelemento])))
                        {
                            arraytoreturn.push(settings.cordinatesTOindex(index));
                        }
                        i=8;
                        k=array.length;
                    }
                }
            }
        }
        //PARTE DEL BISHOP

        let yindex=y;
        for (let i = x+1; i < 8; i++) {
            yindex++;
            if(yindex < 8){
            let index = arrayalphabet[i]+arrayposition[yindex];
            for(let k=0;k<array.length;k++)
            {
                if(array[k].thiselement.id == index){
                    if(checkcella(array[k])){
                        setcella(array[k],array[indicelemento]);
                        arraytoreturn.push(settings.cordinatesTOindex(index));
                        k=array.length;
                    }else{
                        if(!(checkpawn(array[k],array[indicelemento])))
                        {
                            arraytoreturn.push(settings.cordinatesTOindex(index));
                        }
                        i=8;
                        k=array.length;
                    }
                }
            }
                if(yindex == 7)
                    i=8;
            }
            else{ i = 8;
            }
        }
        yindex=y;
        for (let i = x-1; i >= 0; i--) {
            yindex--;
            if(yindex>=0){
            let index = arrayalphabet[i]+arrayposition[yindex];
            for(let k=0;k<array.length;k++)
            {
                if(array[k].thiselement.id == index){
                    if(checkcella(array[k])){
                        setcella(array[k],array[indicelemento]);
                        arraytoreturn.push(settings.cordinatesTOindex(index));
                        k=array.length;
                    }else{
                        if(!(checkpawn(array[k],array[indicelemento])))
                        {
                            arraytoreturn.push(settings.cordinatesTOindex(index));
                        }
                        i=-1;
                        k=array.length;
                    }
                }
            }
            if(yindex == 0)
                i=-1;
            }else{i=-1;}
        }
        yindex=y;
        for (let i = x+1; i < 8; i++) {
            yindex--;
            if(yindex>=0){
            let index = arrayalphabet[i]+arrayposition[yindex];
            for(let k=0;k<array.length;k++)
            {
                if(array[k].thiselement.id == index){
                    if(checkcella(array[k])){
                        setcella(array[k],array[indicelemento]);
                        arraytoreturn.push(settings.cordinatesTOindex(index));
                        k=array.length;
                    }else{
                        if(!(checkpawn(array[k],array[indicelemento])))
                        {
                            arraytoreturn.push(settings.cordinatesTOindex(index));
                        }
                        i=8;
                        k=array.length;
                    }
                }
            }
            if(yindex == 0)
                i=8;
            }else{i=8;}
        }
        yindex=y;
        for (let i = x-1; i >= 0; i--) {
            yindex++;
            if(yindex<8){
            let index = arrayalphabet[i]+arrayposition[yindex];
            for(let k=0;k<array.length;k++)
            {
                if(array[k].thiselement.id == index){
                    if(checkcella(array[k])){
                        setcella(array[k],array[indicelemento]);
                        arraytoreturn.push(settings.cordinatesTOindex(index));
                        k=array.length;
                    }else{
                        if(!(checkpawn(array[k],array[indicelemento])))
                        {
                            arraytoreturn.push(settings.cordinatesTOindex(index));
                        }
                        i=-1;
                        k=array.length;
                    }
                }
            }
            if(yindex == 7)
                i=-1;
            }else{i=-1;}
        }

        return arraytoreturn;
    }
    showking(cordinatelemento,tipo,color,indicelemento,array){
        let arraytoreturn=[];
        let x=array[indicelemento].pawn.x;
        let y=array[indicelemento].pawn.y;
        let colorking = color;

        if(x+1<8){
            if(y-1>=0){
                let index=settings.cordinatesTOindex(arrayalphabet[x+1]+arrayposition[y-1]);
                if(checkcella(array[index]) && checkMove(array[index],colorking)){
                    arraytoreturn.push(index);
                }else{
                    if(checkMove(array[index],colorking) && !(checkpawn(array[index],array[indicelemento])))
                        {
                            arraytoreturn.push(index);
                        }
                }
                
            }
            let index=settings.cordinatesTOindex(arrayalphabet[x+1]+arrayposition[y]);
                if(checkcella(array[index]) && checkMove(array[index],colorking)){
                    arraytoreturn.push(index);
                }else{
                    if(checkMove(array[index],colorking) && !(checkpawn(array[index],array[indicelemento])))
                        {
                            arraytoreturn.push(index);
                        }
                }

            if(y+1<8){
                let index=settings.cordinatesTOindex(arrayalphabet[x+1]+arrayposition[y+1]);
                if(checkcella(array[index]) && checkMove(array[index],colorking)){
                    arraytoreturn.push(index);
                }else{
                    if(checkMove(array[index],colorking) && !(checkpawn(array[index],array[indicelemento])))
                        {
                            arraytoreturn.push(index);
                        }
                }
            }
            
        }
        if(y+1<8){
            let index=settings.cordinatesTOindex(arrayalphabet[x]+arrayposition[y+1]);

                if(checkcella(array[index]) && checkMove(array[index],colorking)){
                    arraytoreturn.push(index);
                }else{
                    if(checkMove(array[index],colorking) && !(checkpawn(array[index],array[indicelemento])))
                        {
                            arraytoreturn.push(index);
                        }
                }
        }
        if(y-1>=0){
            let index=settings.cordinatesTOindex(arrayalphabet[x]+arrayposition[y-1]);

                if(checkcella(array[index]) && checkMove(array[index],colorking)){
                    arraytoreturn.push(index);
                }else{
                    if(checkMove(array[index],colorking) && !(checkpawn(array[index],array[indicelemento])))
                        {
                            arraytoreturn.push(index);
                        }
                }
        }
        if(x-1>=0){
            if(y-1>=0){
                let index=settings.cordinatesTOindex(arrayalphabet[x-1]+arrayposition[y-1]);

                if(checkcella(array[index]) && checkMove(array[index],colorking)){
                    arraytoreturn.push(index);
                }else{
                    if(checkMove(array[index],colorking) && !(checkpawn(array[index],array[indicelemento])))
                        {
                            arraytoreturn.push(index);
                        }
                }
            }
                let index=settings.cordinatesTOindex(arrayalphabet[x-1]+arrayposition[y]);
                if(checkcella(array[index]) && checkMove(array[index],colorking)){
                    arraytoreturn.push(index);
                }else{
                    if(checkMove(array[index],colorking) && !(checkpawn(array[index],array[indicelemento])))
                        {
                            arraytoreturn.push(index);
                        }
                }
            if(y+1<8){
                let index=settings.cordinatesTOindex(arrayalphabet[x-1]+arrayposition[y+1]);

                if(checkcella(array[index]) && checkMove(array[index],colorking)){
                    arraytoreturn.push(index);
                }else{
                    if(checkMove(array[index],colorking) && !(checkpawn(array[index],array[indicelemento])))
                        {
                            arraytoreturn.push(index);
                        }
                }
            }
           
        }
        return arraytoreturn;
    }
    controlcheck(cordinatelemento,tipo,color,indicelemento,array){
        if(color == "black"){ //re nero
            if(array[indicelemento].thiselement.dataset.attackedwhite=="white"){
                settings.blackundercheck=true;
            }
            else {
                settings.blackundercheck=false;
                return;
            }        
        }else if(color == "white"){
            if(array[indicelemento].thiselement.dataset.attackedblack=="black"){
                settings.whiteundercheck=true;
            }else{
                settings.whiteundercheck=false;
                return;
            } 
        }
    }
    findthreat(cordinates,type,color,indicelemento,array){ //da finire di sistemare
        let arraytoreturn=[];
        let x=array[indicelemento].pawn.x;
        let y=array[indicelemento].pawn.y;
        if(color == "black"){
            if(x+1<8){
                if(y-1>0){
                    let index=settings.cordinatesTOindex(arrayalphabet[x+1]+arrayposition[y-1]);
                    if(checkcella(array[index]) && array[index].thiselement.dataset.attackedwhite == "white"){
                        arraytoreturn.push(index);
                    }else{
                        if(!(checkpawn(array[index],array[indicelemento])) && array[index].thiselement.dataset.attackedwhite == "white")
                            {
                                arraytoreturn.push(index);
                            }
                    }
                    
                }
                let index=settings.cordinatesTOindex(arrayalphabet[x+1]+arrayposition[y]);
                    if(checkcella(array[index]) && array[index].thiselement.dataset.attackedwhite == "white"){
                        arraytoreturn.push(index);
                    }else{
                        if(!(checkpawn(array[index],array[indicelemento])) && array[index].thiselement.dataset.attackedwhite == "white")
                            {
                                arraytoreturn.push(index);
                            }
                    }
    
                if(y+1<8){
                    let index=settings.cordinatesTOindex(arrayalphabet[x+1]+arrayposition[y+1]);
                    if(checkcella(array[index]) && array[index].thiselement.dataset.attackedwhite == "white"){
                        arraytoreturn.push(index);
                    }else{
                        if(!(checkpawn(array[index],array[indicelemento])) && array[index].thiselement.dataset.attackedwhite == "white")
                            {
                                arraytoreturn.push(index);
                            }
                    }
                }
                
            }
            if(y+1<8){
                let index=settings.cordinatesTOindex(arrayalphabet[x]+arrayposition[y+1]);
    
                    if(checkcella(array[index]) && array[index].thiselement.dataset.attackedwhite == "white"){
                        arraytoreturn.push(index);
                    }else{
                        if(!(checkpawn(array[index],array[indicelemento])) && array[index].thiselement.dataset.attackedwhite == "white")
                            {
                                arraytoreturn.push(index);
                            }
                    }
            }
            if(y-1>0){
                let index=settings.cordinatesTOindex(arrayalphabet[x]+arrayposition[y-1]);
    
                    if(checkcella(array[index]) && array[index].thiselement.dataset.attackedwhite == "white"){
                        arraytoreturn.push(index);
                    }else{
                        if(!(checkpawn(array[index],array[indicelemento])) && array[index].thiselement.dataset.attackedwhite == "white")
                            {
                                arraytoreturn.push(index);
                            }
                    }
            }
            if(x-1>0){
                if(y-1>0){
                    let index=settings.cordinatesTOindex(arrayalphabet[x-1]+arrayposition[y-1]);
    
                    if(checkcella(array[index]) && array[index].thiselement.dataset.attackedwhite == "white"){
                        arraytoreturn.push(index);
                    }else{
                        if(!(checkpawn(array[index],array[indicelemento])) && array[index].thiselement.dataset.attackedwhite == "white")
                            {
                                arraytoreturn.push(index);
                            }
                    }
                }
                let index=settings.cordinatesTOindex(arrayalphabet[x-1]+arrayposition[y]);
                
                    if(checkcella(array[index]) && array[index].thiselement.dataset.attackedwhite == "white"){
                        arraytoreturn.push(index);
                    }else{
                        if(!(checkpawn(array[index],array[indicelemento])) && array[index].thiselement.dataset.attackedwhite == "white")
                            {
                                arraytoreturn.push(index);
                            }
                    }
                if(y+1<8){
                    let index=settings.cordinatesTOindex(arrayalphabet[x-1]+arrayposition[y+1]);
    
                    if(checkcella(array[index]) && array[index].thiselement.dataset.attackedwhite == "white"){
                        arraytoreturn.push(index);
                    }else{
                        if(!(checkpawn(array[index],array[indicelemento])) && array[index].thiselement.dataset.attackedwhite == "white")
                            {
                                arraytoreturn.push(index);
                            }
                    }
                }
               
            }
        }else if(color == "white"){
            if(x+1<8){
                if(y-1>0){
                    let index=settings.cordinatesTOindex(arrayalphabet[x+1]+arrayposition[y-1]);
                    if(checkcella(array[index]) && array[index].thiselement.dataset.attackedblack == "black"){
                        arraytoreturn.push(index);
                    }else{
                        if(!(checkpawn(array[index],array[indicelemento])) && array[index].thiselement.dataset.attackedblack == "black")
                            {
                                arraytoreturn.push(index);
                            }
                    }
                    
                }
                let index=settings.cordinatesTOindex(arrayalphabet[x+1]+arrayposition[y]);
                    if(checkcella(array[index]) && array[index].thiselement.dataset.attackedblack == "black"){
                        arraytoreturn.push(index);
                    }else{
                        if(!(checkpawn(array[index],array[indicelemento])) && array[index].thiselement.dataset.attackedblack == "black")
                            {
                                arraytoreturn.push(index);
                            }
                    }
    
                if(y+1<8){
                    let index=settings.cordinatesTOindex(arrayalphabet[x+1]+arrayposition[y+1]);
                    if(checkcella(array[index]) && array[index].thiselement.dataset.attackedblack == "black"){
                        arraytoreturn.push(index);
                    }else{
                        if(!(checkpawn(array[index],array[indicelemento])) && array[index].thiselement.dataset.attackedblack == "black")
                            {
                                arraytoreturn.push(index);
                            }
                    }
                }
                
            }
            if(y+1<8){
                let index=settings.cordinatesTOindex(arrayalphabet[x]+arrayposition[y+1]);
    
                    if(checkcella(array[index]) && array[index].thiselement.dataset.attackedblack == "black"){
                        arraytoreturn.push(index);
                    }else{
                        if(!(checkpawn(array[index],array[indicelemento])) && array[index].thiselement.dataset.attackedblack == "black")
                            {
                                arraytoreturn.push(index);
                            }
                    }
            }
            if(y-1>0){
                let index=settings.cordinatesTOindex(arrayalphabet[x]+arrayposition[y-1]);
    
                    if(checkcella(array[index]) && array[index].thiselement.dataset.attackedblack == "black"){
                        arraytoreturn.push(index);
                    }else{
                        if(!(checkpawn(array[index],array[indicelemento])) && array[index].thiselement.dataset.attackedblack == "black")
                            {
                                arraytoreturn.push(index);
                            }
                    }
            }
            if(x-1>0){
                if(y-1>0){
                    let index=settings.cordinatesTOindex(arrayalphabet[x-1]+arrayposition[y-1]);
    
                    if(checkcella(array[index]) && array[index].thiselement.dataset.attackedblack == "black"){
                        arraytoreturn.push(index);
                    }else{
                        if(!(checkpawn(array[index],array[indicelemento])) && array[index].thiselement.dataset.attackedblack == "black")
                            {
                                arraytoreturn.push(index);
                            }
                    }
                }
                let index=settings.cordinatesTOindex(arrayalphabet[x-1]+arrayposition[y]);
                
                    if(checkcella(array[index]) && array[index].thiselement.dataset.attackedblack == "black"){
                        arraytoreturn.push(index);
                    }else{
                        if(!(checkpawn(array[index],array[indicelemento])) && array[index].thiselement.dataset.attackedblack == "black")
                            {
                                arraytoreturn.push(index);
                            }
                    }
                if(y+1<8){
                    let index=settings.cordinatesTOindex(arrayalphabet[x-1]+arrayposition[y+1]);
    
                    if(checkcella(array[index]) && array[index].thiselement.dataset.attackedblack == "black"){
                        arraytoreturn.push(index);
                    }else{
                        if(!(checkpawn(array[index],array[indicelemento])) && array[index].thiselement.dataset.attackedblack == "black")
                            {
                                arraytoreturn.push(index);
                            }
                    }
                }
               
            }
        }
        
        return arraytoreturn;
    }
}
function setcella(target,indicelementoorigine){
    if(indicelementoorigine.pawn.color == "white"){
            target.thiselement.dataset.attackedwhite = indicelementoorigine.pawn.color; //setta la cella ad attacked= colore dell'elemento index
    }else if(indicelementoorigine.pawn.color == "black"){
            target.thiselement.dataset.attackedblack = indicelementoorigine.pawn.color; //setta la cella ad attacked= colore dell'elemento index
    }
}
function checkcella(e){
    if(e.pawn == undefined){

        return true;
    }
    else{
        return false;
    }
}
function checkpawn(target,indicelementoorigine){    //true se entrambi hanno stesso colore dunque stesse pedine
    if(indicelementoorigine.pawn.color == "white"){
        if(target.pawn.color == indicelementoorigine.pawn.color){
            target.thiselement.dataset.attackedwhite = indicelementoorigine.pawn.color; //setta la cella ad attacked= colore dell'elemento index
            return true;
        }
        else{
            target.pawn.element.dataset.status="attacked"; //setta il pedone a status = attacked
            target.thiselement.dataset.attackedwhite = indicelementoorigine.pawn.color; //setta la cella ad attacked= colore dell'elemento index
            return false;
        }
    }else if(indicelementoorigine.pawn.color == "black"){
        if(target.pawn.color == indicelementoorigine.pawn.color){
            target.thiselement.dataset.attackedblack = indicelementoorigine.pawn.color; //setta la cella ad attacked= colore dell'elemento index
            return true;
        }
        else{
            target.pawn.element.dataset.status="attacked"; //setta il pedone a status = attacked
            target.thiselement.dataset.attackedblack = indicelementoorigine.pawn.color; //setta la cella ad attacked= colore dell'elemento index
            return false;
        }
    }
}
function checkMove(arraytarget,colorking){
    if(colorking == "black"){
        if(arraytarget.thiselement.dataset.attackedblack == "black"){
            return true;
        }else if(arraytarget.thiselement.dataset.attackedwhite == "white"){
            return false;
        }
    }else if(colorking == "white"){
        if(arraytarget.thiselement.dataset.attackedwhite == "white"){
            return true;
        }else if(arraytarget.thiselement.dataset.attackedblack == "black"){
            return false;
        }
    }
}