#include <bits/stdc++.h>
using namespace std;

#define PLAYER 'X'
#define COMPUTER 'O'
#define EMPTY ' '

// Function to print the Tic Tac Toe board
void printBoard(const vector<vector<char>>&board){
    cout << "-------------\n";
    for(int i = 0; i<3; i++){
        cout<<"| ";
        for(int j = 0; j<3; j++){
            cout<<board[i][j]<<" | ";
        }
        cout << "\n-------------\n";
    }
}

//Check if a player has worn
bool isWinner(const vector<vector<char>>&board, char player){
    //checking rows and columns
    for(int i = 0; i<3; i++){
        if ((board[i][0]==player && board[i][1]==player && board[i][2]==player) ||
        board[0][i]==player && board[1][i]==player && board[2][i]==player){
            return true;
        }
    }
    //checking the diagonals
    if((board[0][0]==player && board[1][1]==player && board[2][2] == player)||
        board[0][2]==player && board[1][1]==player && board[2][0]== player){
            return true;
        }
    return false;
}


// Check if the board is full
bool isBoardFull(const vector<vector<char>>&board){
    for(int i = 0; i<3; i++){
        for(int j = 0; j<3; j++){
            if(board[i][j]==EMPTY){
                return false;
            }
        }
    }
    return true;
}


// Minimax algorithm to find the best move for the computer
int minimax(vector<vector<char>>& board, int depth, bool isMaximizing) {
    if (isWinner(board, COMPUTER)){
        return 10 - depth;// so that it can give perference to that move which can win quickly..
    } 
    if (isWinner(board, PLAYER)) {
        return depth - 10;// if player wins...then computer assigned with negative number.
    }
    if (isBoardFull(board)){
        return 0;
    }
    //maximizing computer moves
    if (isMaximizing) {
        int best = INT_MIN;
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                if (board[i][j] == EMPTY) {
                    board[i][j] = COMPUTER;//Evaluating this moves
                    best = max(best, minimax(board, depth + 1, false));//maximizing best score and Now player turn
                    board[i][j] = EMPTY;// backtracking
                }
            }
        }
        return best;//returning computer best possible score
    } else {//minimizting player moves : goal to minimize AI Score.
        int best = INT_MAX;
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                if (board[i][j] == EMPTY) {
                    board[i][j] = PLAYER;
                    best = min(best, minimax(board, depth + 1, true));//Now Computer turns
                    board[i][j] = EMPTY;//backtracking.
                }
            }
        }
        return best;//return player best possible score.
    }
}

// Function to find the best move for the computer
pair<int, int> findBestMove(vector<vector<char>>& board) {
    int bestVal = INT_MIN;
    pair<int, int> bestMove = {-1, -1};

    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            if (board[i][j] == EMPTY) {
                board[i][j] = COMPUTER;//computer takes hypothetical moves
                int moveVal = minimax(board, 0, false);// intialize depth with 0, start with player moves
                board[i][j] = EMPTY;//backtracking
                if (moveVal > bestVal) {
                    bestMove = {i, j};
                    bestVal = moveVal;
                }
            }
        }
    }
    return bestMove;
}

void playerMove(vector<vector<char>>& board) {
    int row, col;
    bool validMove = false; // Valid move track karne ke liye

    do {
        cout << "Enter your move (row and column [1-3]): ";

        // nput validation
        if (!(cin >> row >> col)) {
            cout << "Invalid input! Please enter numbers between 1 and 3.\n";
            cin.clear();  
            cin.ignore(numeric_limits<streamsize>::max(), '\n');
            continue; 
        }

        // **Convert to 0-based indexing**
        row--; col--;

        // **Out-of-bounds check**
        if (row < 0 || row > 2 || col < 0 || col > 2) {
            cout << "Out of bounds! Please enter numbers between 1 and 3.\n";
            continue;
        }

        // **Occupied cell check**
        if (board[row][col] != EMPTY) {
            cout << "Cell already occupied! Choose another move.\n";
            continue;
        }

        // **Valid move detected**
        board[row][col] = PLAYER;
        validMove = true;

    } while (!validMove);

}


// Function to handle computer's move
void computerMove(vector<vector<char>>& board) {
    pair<int, int> bestMove = findBestMove(board);
    board[bestMove.first][bestMove.second] = COMPUTER;
}

// Main game function (run untill game finish)
void playGame() {
    vector<vector<char>> board(3, vector<char>(3, EMPTY));
    printBoard(board);//initially printing the empty board

    while (true) {
        playerMove(board);
        printBoard(board);

        if (isWinner(board, PLAYER)) {
            cout << "You win!\n";
            break;
        }
        if (isBoardFull(board)) {
            cout << "It's a tie!\n";
            break;
        }

        computerMove(board);
        printBoard(board);

        if (isWinner(board, COMPUTER)) {
            cout << "Computer wins!\n";
            break;
        }
        if (isBoardFull(board)) {
            cout << "It's a tie!\n";
            break;
        }
    }
}

int main() {
    cout << "Tic Tac Toe Game - You are 'X' and the Computer is 'O'\n";
    playGame();
    return 0;
}

