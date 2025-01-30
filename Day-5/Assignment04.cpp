
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int maxArea(vector<int>& height) {
    int left = 0, right = height.size() - 1;
    int max_area = 0;

    while (left < right) {
        int width = right - left;
        int h = min(height[left], height[right]);
        max_area = max(max_area, width * h);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
        cout<<endl;
    }

    return max_area;
}

int main() {
    vector<int> height = {1, 2, 6, 2, 5, 4, 8, 3, 7};
    cout << "Max Area: " << maxArea(height) << endl;

    return 0;
}

