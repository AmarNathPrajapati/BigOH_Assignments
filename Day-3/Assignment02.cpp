#include<bits/stdc++.h>
using namespace std;

void generateCombinations(unordered_map<string, vector<string>>& mapping, 
                          string digits, int index, string current, vector<string>& result) {
    if (index == digits.length()) {
        result.push_back(current);
        return;
    }
    string digit = digits.substr(index, 1); 

    //for single digit
     if (mapping.find(digit) != mapping.end()) {//if that digit exist in map keys
        for (string ch : mapping[digit]) {
            generateCombinations(mapping, digits, index + 1, current + ch, result);//backtracking 
        }
    }

    //for two digits
    if (index < digits.length() - 1) {
        string twoDigit = digits.substr(index, 2);//extract two digit
        if (mapping.find(twoDigit) != mapping.end()) {//if any keys exist in map
            for (string ch : mapping[twoDigit]) {
                generateCombinations(mapping, digits, index + 2, current + ch, result);
            }
        }
    }
}

vector<string> getCombinations(string digits, unordered_map<string, vector<string>>& mapping) {
    vector<string> result;
    if (digits.empty()) {//termination of recursion
        return result;
    }
    generateCombinations(mapping, digits, 0, "", result);
    return result;
}

int main() {
    unordered_map<string, vector<string>> mapping = {
        {"1", {"Z", "Y", "A"}},
        {"2", {"B", "O"}},
        {"12", {"L"}},
        {"3", {"U", "P"}}
    };
    
    string input = "12";
    vector<string> combinations = getCombinations(input, mapping);
    for (string combination : combinations) {
        cout << combination << " ";
    }

    return 0;
}
/*
    ime Complexity: O(k^d), jahan k hai average number of possible characters per digit, aur d hai digits ki total length. Har recursion step mein k possibilities ko explore kiya ja raha hai.

    Space Complexity: O(k^d), kyunki recursion ke through har possible combination ko store karna padta hai, jisme total combinations k^d hote hain.
*/