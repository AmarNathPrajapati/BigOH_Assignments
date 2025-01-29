#include <iostream>
#include <vector>
using namespace std;

void findInterleavingsDP(string str1, string str2) {
    int m = str1.size(), n = str2.size();
    vector<vector<vector<string>>> dp(m + 1, vector<vector<string>>(n + 1));

    // Base case: when both strings are empty, there is one valid interleaving (empty string).
    dp[0][0].push_back("");

    // Fill DP table
    for (int i = 0; i <= m; i++) {
        for (int j = 0; j <= n; j++) {
            if (i < m) {
                for (auto &s : dp[i][j]) {
                    dp[i + 1][j].push_back(s + str1[i]);
                }
            }
            if (j < n) {
                for (auto &s : dp[i][j]) {
                    dp[i][j + 1].push_back(s + str2[j]);
                }
            }
        }
    }

    // Print all interleavings
    for (auto &s : dp[m][n]) {
        cout << s << endl;
    }
}

int main() {
    string str1 = "AB", str2 = "CD";
    cout << "Interleavings of \"" << str1 << "\" and \"" << str2 << "\":" << endl;
    findInterleavingsDP(str1, str2);

    cout << endl;

    str1 = "AB"; str2 = "C";
    cout << "Interleavings of \"" << str1 << "\" and \"" << str2 << "\":" << endl;
    findInterleavingsDP(str1, str2);

    return 0;
}


