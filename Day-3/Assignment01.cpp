#include <iostream>
#include <vector>
using namespace std;

void printArray(vector<vector<int>> &arr) {
    int rows = arr.size(), cols = arr[0].size();
    int top = 0, bottom = rows - 1, left = 0, right = cols - 1;
    bool clockwise = true;

    while (top <= bottom && left <= right) {
        if (clockwise) {
            // Print clockwise
            for (int i = left; i <= right; i++) cout << arr[top][i] << " ";
            for (int i = top + 1; i <= bottom; i++) cout << arr[i][right] << " ";
            if (top < bottom) {
                for (int i = right - 1; i >= left; i--) cout << arr[bottom][i] << " ";
            }
            if (left < right) {
                for (int i = bottom - 1; i > top; i--) cout << arr[i][left] << " ";
            }
            top++, bottom--, left++, right--;
        } else {
            // Print anti-clockwise
            for (int i = right; i >= left; i--) cout << arr[top][i] << " ";
            for (int i = top + 1; i <= bottom; i++) cout << arr[i][left] << " ";
            if (top < bottom) {
                for (int i = left + 1; i <= right; i++) cout << arr[bottom][i] << " ";
            }
            if (left < right) {
                for (int i = bottom - 1; i > top; i--) cout << arr[i][right] << " ";
            }
            top++, bottom--, left++, right--;
        }
        clockwise = !clockwise;
    }
}

int main() {
    vector<vector<int>> arr = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
    printArray(arr);
    return 0;
}
