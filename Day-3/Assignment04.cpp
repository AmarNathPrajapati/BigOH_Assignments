#include <iostream>
#include <vector>
using namespace std;

void dfs(vector<vector<char>> &grid, int i, int j) {
    int row = grid.size();
    int col = grid[0].size();
    if (i < 0 || i >= row || j < 0 || j >= col || grid[i][j] == '0'){
        return;//completion of an island or out of bound
    } 

    grid[i][j] = '0';//so that it didn't recount the island
    //exploring the connected lands
    dfs(grid, i, j - 1); //exploring in left direction
    dfs(grid, i, j + 1); //exploring in right direction
    dfs(grid, i + 1, j); //exploring in down direction
    dfs(grid, i - 1, j); //exploring in UP direction
}

int numIslands(vector<vector<char>> &grid) {
    int count = 0;
    int row = grid.size();
    int col = grid[0].size();

    for (int i = 0; i < row; i++) {
        for (int j = 0; j < col; j++) {
            if (grid[i][j] == '1') {
                count++;
                dfs(grid, i, j);
            }
        }
    }
    return count;
}

int main() {
    vector<vector<char>> grid = {{'1', '1', '0', '1', '0'},
                                 {'1', '1', '0', '1', '0'},
                                 {'1', '1', '0', '0', '0'},
                                 {'0', '0', '0', '0', '0'}};

    cout <<"Number of islands are: "<< numIslands(grid);
    return 0;
}
/*
    Time Complexity: O(n * m) (har cell ko ek baar visit karna hota hai).
    Space Complexity: O(n * m) (recursion stack size ke liye).
*/