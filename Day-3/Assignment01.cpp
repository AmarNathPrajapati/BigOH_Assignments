#include <iostream>
#include <vector>
using namespace std;

void printArray(vector<vector<int>> &arr) {
    int rows = arr.size();
    int cols = arr[0].size();

    int top = 0, bottom = rows - 1, left = 0, right = cols - 1;
    cout<<"Clockwise: ";
    while (top <= bottom && left <= right) {
        // Print clockwise
        for (int i = left; i <= right; i++){//printing the top row 
            cout << arr[top][i] << " ";
        } 
        for (int i = top + 1; i <= bottom; i++){//printing the right column with top increment
            cout << arr[i][right] << " ";
        } 
        if (top < bottom) {
            for (int i = right - 1; i >= left; i--){//printing the bottom row in reverse direction with right decrement
                cout << arr[bottom][i] << " ";
            }
        }
        if (left < right) {
            for (int i = bottom - 1; i > top; i--){//printing the left column in up directioin with bottom decrement
                cout << arr[i][left] << " ";
            }
        }
        top++, bottom--, left++, right--;
    }

    cout<<endl;
    cout<<"Anti Alockwise: ";
    top = 0, bottom = rows - 1, left = 0, right = cols - 1;
    while (top <= bottom && left <= right) {
        // Print anti-clockwise
        for (int i = right; i >= left; i--){//print top row in reverse direction        
            cout << arr[top][i] << " ";
        } 
        for (int i = top + 1; i <= bottom; i++){//print left column with top increment
            cout << arr[i][left] << " ";
        } 
        if (top < bottom) {
            for (int i = left + 1; i <= right; i++){//print bottom row with left increment
                cout << arr[bottom][i] << " ";
            } 
        }
        if (left < right) {
            for (int i = bottom - 1; i > top; i--){//Print botton row in up direction with bottom decrement
                cout << arr[i][right] << " ";
            } 
        }
        top++, bottom--, left++, right--;
    }
    cout<<endl;
}

int main() {
    vector<vector<int>> arr = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
    printArray(arr);
    return 0;
}
