class TicTacToe{
    constructor(){
        this.playerTurn='X';
        this.turnDisplayElement = document.getElementsByClassName('turn')[0];
        this.boardState=[
            ['','',''],
            ['','',''],
            ['','','']
        ];
        this.renderBoard();
    }
    renderBoard(){
          this.showPlayerTurn();
          this.updateBoard();
    }
    showPlayerTurn(){
        if(this.playerTurn === 'X'){
            this.turnDisplayElement.innerText="player one's turn";
        }
        if(this.playerTurn === 'Y'){
            this.turnDisplayElement.innerText="player two's turn";
        }
    }
    


}
