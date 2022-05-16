export const turns = {
    whosturn:"white",

    get isWhiteTurn(){
        return this.whosturn == "white";
    },

    get isBlackTurn(){
        return this.whosturn == "black";
    },

    changeturn(){
        if ( this.isWhiteTurn ) {
            this.whosturn = 'black'
        }
        else if ( this.isBlackTurn ) {
            this.whosturn = 'white'
        }
    },
    isWrongTurn( pieceType ) {
        if ( 
            this.isWhiteTurn &&
            this.isBlackPiece( pieceType )
        ) {
            return true
        }
        else if ( 
            this.isBlackTurn &&
            this.isWhitePiece( pieceType )
        ) {
            return  true
        }

        return false
    },
    isRightTurn( pieceType ) {
        return !this.isWrongTurn( pieceType )
    },
    isWhitePiece( pieceType ) {
        return !!pieceType.match(/white_/)
    },
    isBlackPiece( pieceType ) {
        return !!pieceType.match(/black_/)
    }
};

window.turns = turns;