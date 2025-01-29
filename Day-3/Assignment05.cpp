#include<bits/stdc++.h>
using namespace std;

void rotate(vector<vector<int>> &matrix) {
    int n = matrix.size();
    // Transpose the matrix
    
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            swap(matrix[i][j], matrix[j][i]);
        }
    }
    /* 
    After Transpose
                    1 2 3             1 4 7
                    4 5 6  ---------> 2 5 8
                    7 8 9             3 6 9
    */
    // Reverse each row
    for (int i = 0; i < n; i++) {
        reverse(matrix[i].begin(), matrix[i].end());
    }
    /*
    After reverse of each
                    1 4 7            7 4 1
                    2 5 8 ---------> 8 5 2
                    3 6 9            9 6 3
    */
}

int main() {
    vector<vector<int>> matrix = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
    rotate(matrix);

    for (auto &row : matrix) {
        for (int &elem : row) {
            cout << elem << " ";
        }
        cout << endl;
    }
    return 0;
}
/*
    Time Complexity: O(n^2), kyunki transpose aur row reversal dono operations matrix ke har element ko touch karte hain.
    Space Complexity: O(n^2), kyunki input matrix ko store karna padta hai.
*/