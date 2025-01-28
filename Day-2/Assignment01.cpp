#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;

vector<int> removeDuplicates(const vector<int>& values) {
    unordered_set<int> uniqueValues;// initialize the unordered map
    vector<int> result;// initialize the result array

    for (int value : values) {
        if (uniqueValues.find(value) == uniqueValues.end()) {//check if it is already present or Not
            uniqueValues.insert(value);//if not found then it inserted in unordered set
            result.push_back(value);//creating the vector of uniques values
        }
    }
    return result;
}

int main() {
    vector<int> values = {2, 4, 6, 2, 8, 10, 4, 12, 14, 6};
    vector<int> result = removeDuplicates(values);

    cout << "Result: ";
    for (int num : result) {
        cout << num << " ";
    }
    cout << endl;

    return 0;
}
