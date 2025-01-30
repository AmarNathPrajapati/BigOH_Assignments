#include <iostream>
#include <vector>
#include <unordered_set>

using namespace std;

bool isValidSudoku(vector<vector<char>>& board) {

    vector<unordered_set<char>> rows(9);
    vector<unordered_set<char>> cols(9);
    vector<unordered_set<char>> boxes(9);

    for (int i = 0; i < 9; i++) {
        for (int j = 0; j < 9; j++) {
            char num = board[i][j];
            if (num == '.'){
                continue; 
            } 
            int boxIndex = (i / 3) * 3 + j / 3;
            // Check row, column, and 3x3 box
            if (rows[i].count(num) || cols[j].count(num) || boxes[boxIndex].count(num)) {
                return false;// if num is already exist
            }
            // Insert into sets 
            rows[i].insert(num);
            cols[j].insert(num);
            boxes[boxIndex].insert(num);
        }
    }
    return true;
}

int main() {
    vector<vector<char>> board = {
        {'5', '3', '.', '.', '7', '.', '.', '.', '.'},
        {'6', '.', '.', '1', '9', '5', '.', '.', '.'},
        {'.', '8', '9', '.', '.', '.', '.', '6', '.'},
        {'8', '.', '.', '.', '6', '.', '.', '.', '3'},
        {'4', '.', '.', '8', '.', '3', '.', '.', '1'},
        {'7', '.', '.', '.', '2', '.', '.', '.', '6'},
        {'.', '6', '.', '.', '.', '.', '2', '8', '.'},
        {'.', '.', '.', '4', '1', '9', '.', '.', '5'},
        {'.', '.', '.', '.', '8', '.', '9', '7', '9'}
    };

    if (isValidSudoku(board)) {
        cout << "Valid Sudoku\n";
    } else {
        cout << "Invalid Sudoku\n";
    }

    return 0;
}
/*
    Time complexity: O(9*9) = O(1)
    Space complexity: O(9*9*9) = O(1)
 */