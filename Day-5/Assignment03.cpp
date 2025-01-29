#include <iostream>
#include <deque>
#include <vector>
using namespace std;

vector<int> maxSlidingWindow(vector<int>& nums, int k) {
    vector<int> result;
    deque<int> dq;

    for (int i = 0; i < nums.size(); i++) {
        // Remove elements that are out of this window
        while (!dq.empty() && dq.front() <= i - k) {
            dq.pop_front();
        }

        // Remove elements smaller than the current element
        while (!dq.empty() && nums[dq.back()] <= nums[i]) {
            dq.pop_back();
        }

        dq.push_back(i);

        // Start adding result after the first k-1 elements
        if (i >= k - 1) {
            result.push_back(nums[dq.front()]);
        }
    }

    return result;
}

int main() {
    vector<int> arr = {1, 2, 3, 1, 4, 5, 2, 3, 6};
    int k = 3;
    vector<int> result = maxSlidingWindow(arr, k);
    for (int num : result) {
        cout << num << " ";
    }

    cout << endl;

    vector<int> arr_2 = {8, 5, 10, 7, 9, 4, 15, 12, 90, 13};
    k = 4;
    result = maxSlidingWindow(arr_2, k);
    for (int num : result) {
        cout << num << " ";
    }

    return 0;
}



