
export const settings = {
        firstmove:true,
        turn:"white",
        invoked:false,
        moving:false,
        coloredarray:[],
        canMove:false,
        whitekingindex:3,
        blackkingindex:59,
        whiteundercheck:false,
        blackundercheck:false,
        whitecheckmate:false,
        blackcheckmate:false,

        cordinatesTOindex(cordinate){
        let tempo;
        switch(cordinate[0]){
                case "A":return (tempo = cordinate[1]*8 - 0)-1; 
                case "B":return (tempo = cordinate[1]*8 - 1)-1;
                case "C":return (tempo = cordinate[1]*8 - 2)-1;
                case "D":return (tempo = cordinate[1]*8 - 3)-1;
                case "E":return (tempo = cordinate[1]*8 - 4)-1;
                case "F":return (tempo = cordinate[1]*8 - 5)-1;
                case "G":return (tempo = cordinate[1]*8 - 6)-1;
                case "H":return (tempo = cordinate[1]*8 - 7)-1;
        }
        },
};

