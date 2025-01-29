#include <iostream>
#include <vector>

using namespace std;

// Function to check if position is within the board
bool isValid(int x, int y) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
}

// Function to check if King is safe
bool isKingSafe(vector<vector<char>>& board) {
    int kingX = -1, kingY = -1;
    
    // Find the position of the King
    for (int i = 0; i < 8; i++) {
        for (int j = 0; j < 8; j++) {
            if (board[i][j] == 'K') {
                kingX = i;
                kingY = j;
                break;
            }
        }
    }

    if (kingX == -1) return false; // King not found

    // Knight (Horse) Moves
    int knightMoves[8][2] = {{-2, -1}, {-2, 1}, {2, -1}, {2, 1}, 
                             {-1, -2}, {-1, 2}, {1, -2}, {1, 2}};
    for (auto move : knightMoves) {
        int x = kingX + move[0], y = kingY + move[1];
        if (isValid(x, y) && board[x][y] == 'N') return false;
    }

    //Bishop & Queen (Diagonal)
    int diagonalMoves[4][2] = {{-1, -1}, {-1, 1}, {1, -1}, {1, 1}};
    for (auto move : diagonalMoves) {
        int x = kingX, y = kingY;
        while (isValid(x += move[0], y += move[1])) {
            if (board[x][y] == 'B' || board[x][y] == 'Q') return false;
            if (board[x][y] != '.') break; // Blocked by another piece
        }
    }

    // Rook & Queen (Straight lines)
    int straightMoves[4][2] = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
    for (auto move : straightMoves) {
        int x = kingX, y = kingY;
        while (isValid(x += move[0], y += move[1])) {
            if (board[x][y] == 'R' || board[x][y] == 'Q') return false;
            if (board[x][y] != '.') break; // Blocked by another piece
        }
    }

    return true; // King is safe
}

// Main function with default input
int main() {
    vector<vector<char>> board = {
        {'.', '.', '.', '.', '.', '.', '.', '.'},
        {'.', '.', '.', '.', '.', 'N', '.', '.'},
        {'.', '.', 'Q', '.', '.', '.', '.', '.'},
        {'.', '.', '.', 'K', '.', '.', '.', '.'},
        {'.', '.', '.', '.', '.', '.', '.', '.'},
        {'.', '.', '.', '.', '.', '.', 'Q', '.'},
        {'.', 'R', '.', '.', '.', '.', '.', '.'},
        {'.', '.', '.', '.', '.', '.', '.', '.'}
    };

    if (isKingSafe(board)) {
        cout << "King is Safe\n";
    } else {
        cout << "King is in Danger\n";
    }

    return 0;
}
