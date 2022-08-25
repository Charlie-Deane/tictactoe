
//gather all container DIVs in DOM
const space_1 = document.getElementById('space_1');
const space_2 = document.getElementById('space_2');
const space_3 = document.getElementById('space_3');
const space_4 = document.getElementById('space_4');
const space_5 = document.getElementById('space_5');
const space_6 = document.getElementById('space_6');
const space_7 = document.getElementById('space_7');
const space_8 = document.getElementById('space_8');
const space_9 = document.getElementById('space_9');

const GameBoard = () =>{

    //X and Y png elements
    const x_img = document.createElement('img');
    const o_img = document.createElement('img')
    x_img.setAttribute('src', 'img/x_img.png');
    o_img.setAttribute('src', 'img/o_img.png');
    x_img.classList.add('icon');
    o_img.classList.add('icon');

    //create private correlary arrays for DOM objects and game data
    const _spaces_index = [[space_1,space_2,space_3],[space_4,space_5,space_6],[space_7,space_8,space_9]];
    const _spaces_init = [['','',''],['','',''],['','','']];

    //create running board variable
    let _spaces = _spaces_init;

    removeAllChildNodes = (parent) => {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    //zeroes out the board
    initialize = () => {
        removeAllChildNodes(space_1);
        removeAllChildNodes(space_2);
        removeAllChildNodes(space_3);
        removeAllChildNodes(space_4);
        removeAllChildNodes(space_5);
        removeAllChildNodes(space_6);
        removeAllChildNodes(space_7);
        removeAllChildNodes(space_8);
        removeAllChildNodes(space_9);
        _spaces = [['','',''],['','',''],['','','']];
    };

    //draw the board
    draw = () => {
        for(let i = 0; i < 3; i++){
            for(let n = 0; n < 3; n++){
                if(_spaces[i][n] === 'X'){
                    _spaces_index[i][n].appendChild(x_img.cloneNode());
                }
                if(_spaces[i][n] === 'O'){
                    _spaces_index[i][n].appendChild(o_img.cloneNode());
                }
            }
        }
    }

    //check for winner
    winner = () =>{
        if ((_spaces[0][0] == _spaces[0][1] && _spaces[0][1] == _spaces[0][2] && _spaces[0][0] != '') ||
            (_spaces[1][0] == _spaces[1][1] && _spaces[1][1] == _spaces[1][2] && _spaces[1][0] != '') ||
            (_spaces[2][0] == _spaces[2][1] && _spaces[2][1] == _spaces[2][2] && _spaces[2][0] != '') ||
            (_spaces[0][0] == _spaces[1][0] && _spaces[1][0] == _spaces[2][0] && _spaces[0][0] != '') ||
            (_spaces[0][1] == _spaces[1][1] && _spaces[1][1] == _spaces[2][1] && _spaces[0][1] != '') ||
            (_spaces[0][2] == _spaces[1][2] && _spaces[1][2] == _spaces[2][2] && _spaces[0][2] != '') ||
            (_spaces[0][0] == _spaces[1][1] && _spaces[1][1] == _spaces[2][2] && _spaces[0][0] != '') ||
            (_spaces[2][0] == _spaces[1][1] && _spaces[1][1] == _spaces[0][2] && _spaces[2][0] != '') ){
            return true;
        }
        return false;
    }

    //check if space already occupied
    available = (x,y) =>{
        if(_spaces[x][y] == ''){
            return true;
        }
        return false;
    }

    //places piece in spot on grid (formatted to match DOM grid coordinates)
    placePiece = (x, y, piece) => {
        x = x - 1;
        y = y - 1;
        if(available(x, y)){
            _spaces[x][y] = piece;
            draw();
        }
    }
    
    return{
        placePiece,
        winner,
        initialize
    };
}

Player = function(piece, name, isHuman){
    this.piece = piece;
    this.name = name;
    this.isHuman = isHuman;    
}


const Game = (myPlayer, CPU, myGameBoard) =>{
    //game variables
    myGameBoard = GameBoard();
    myPlayer = new Player('X', 'You', true);
    CPU = new Player('O', 'Computer', false);
    let playerArray = [CPU, myPlayer];
    let turn = 1;
    
    checkForWinner = function(){
        if (myGameBoard.winner() === true){
            alert(`${playerArray[turn%2].piece} wins!`);
            myGameBoard.initialize();
            turn = 1;
        }
    }

    //event listeners
    space_1.addEventListener('click', () =>{
        myGameBoard.placePiece(1,1,playerArray[turn%2].piece);
        checkForWinner();
        turn++;
    });
    space_2.addEventListener('click', () =>{
        myGameBoard.placePiece(1,2,playerArray[turn%2].piece);
        checkForWinner();
        turn++;
    });
    space_3.addEventListener('click', () =>{
        myGameBoard.placePiece(1,3,playerArray[turn%2].piece);
        checkForWinner();
        turn++;
    });
    space_4.addEventListener('click', () =>{
        myGameBoard.placePiece(2,1,playerArray[turn%2].piece);
        checkForWinner();
        turn++;
    });
    space_5.addEventListener('click', () =>{
        myGameBoard.placePiece(2,2,playerArray[turn%2].piece);
        checkForWinner();
        turn++;
    });
    space_6.addEventListener('click', () =>{
        myGameBoard.placePiece(2,3,playerArray[turn%2].piece);
        checkForWinner();
        turn++;
    });
    space_7.addEventListener('click', () =>{
        myGameBoard.placePiece(3,1,playerArray[turn%2].piece);
        checkForWinner();
        turn++;
    });
    space_8.addEventListener('click', () =>{
        myGameBoard.placePiece(3,2,playerArray[turn%2].piece);
        checkForWinner();
        turn++;
    });
    space_9.addEventListener('click', () =>{
        myGameBoard.placePiece(3,3,playerArray[turn%2].piece);
        checkForWinner();
        turn++;
    });
}

const myGame = Game();


