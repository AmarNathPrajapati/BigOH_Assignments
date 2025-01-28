#include <iostream>
#include <unordered_map>
#include <vector>
using namespace std;

void backtrack(string digits, unordered_map<char, vector<string>> &map, string current, vector<string> &result, int index) {
    if (index == digits.size()) {
        result.push_back(current);
        return;
    }
    for (string &ch : map[digits[index]]) {
        backtrack(digits, map, current + ch, result, index + 1);
    }
}

int main() {
    unordered_map<char, vector<string>> map;
    map['1'] = {"Z", "Y", "A"};
    map['2'] = {"B", "O"};
    map['3'] = {"U", "P"};
    map['1' + '2'] = {"L"}; // For '12'

    string input = "123";
    vector<string> result;
    backtrack(input, map, "", result, 0);

    for (string &comb : result) {
        cout << comb << " ";
    }
    return 0;
}
