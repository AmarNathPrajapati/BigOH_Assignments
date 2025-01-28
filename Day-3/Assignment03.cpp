#include <iostream>
#include <vector>
using namespace std;

bool searchMatrix(vector<vector<int>> &matrix, int target) {
    int rows = matrix.size();
    int cols = matrix[0].size();
    
    int s = 0;
    int e = rows * cols - 1;

    while (s <= e) {//implementing binary search algorithm
        int mid = s + (e - s) / 2;
        int midValue = matrix[mid / cols][mid % cols];//middle element of matrix

        if (midValue == target){
            return true;//if found
        } 
        else if (midValue < target){//it target is more than middle value search in next part
            s = mid + 1;
        }
        else{//otherwise search in first part
            e = mid - 1;
        } 
    }
    return false;
}

int main() {
    vector<vector<int>> matrix = {{1, 3, 5, 7}, {10, 11, 16, 20}, {23, 30, 34, 60}};
    int target;
    cout<<"Enter the target Value: ";
    cin>>target;
    cout << (searchMatrix(matrix, target) ? "Target is found" : "Target not found");
    return 0;
}
