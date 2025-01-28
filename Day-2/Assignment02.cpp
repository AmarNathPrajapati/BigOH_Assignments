#include<bits/stdc++.h>
using namespace std;

vector<vector<int>> findTriplets(vector<int> nums, int targetSum) {
    vector<vector<int>> result;

    sort(nums.begin(), nums.end()); // Sort the array to simplify finding triplets

    for (int i = 0; i < nums.size() - 2; ++i) {// Skiping duplicate values
        if (i > 0 && nums[i] == nums[i - 1]){
            continue; 
        } 

        int left = i + 1, right = nums.size() - 1;//using Two pointer approach
        while (left < right) {
            int currentSum = nums[i] + nums[left] + nums[right];

            if (currentSum == targetSum) {
                result.push_back({nums[i], nums[left], nums[right]});//storing the value in result
                ++left;
                --right;

                // Avoid duplicates
                while (left < right && nums[left] == nums[left - 1]){
                    ++left; 
                }
                while (left < right && nums[right] == nums[right + 1]){
                    --right; 
                } 
            } else if (currentSum < targetSum) {
                ++left;
            } else {
                --right;
            }
        }
    }

    return result;
}

int main() {
    vector<int> nums = {1, 2, 3, 4, 5, 6, 7, 8, 9};
    int targetSum = 6;

    vector<vector<int>> result = findTriplets(nums, targetSum);

    cout << "Result: " << endl;
    for (auto& triplet : result) {
        cout << "[";
        for (int i = 0; i < triplet.size(); ++i) {
            cout << triplet[i];
            if (i < triplet.size() - 1) cout << ", ";
        }
        cout << "]" << endl;
    }

    return 0;
}
