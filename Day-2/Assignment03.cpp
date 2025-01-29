#include <bits/stdc++.h>
using namespace std;

void printPattern(int n) {
    for (int i = 0; i < n; ++i) {
        for (int j = 0; j < n; ++j) {
            if (j == i) {
                cout << "\\";
            } else if (j == n - i - 1) {
                cout << "/";
            } else if (j < i || j > n - i - 1) {
                cout << "*";
            } else {
                cout << "*";
            }
        }
        cout << endl;
    }
}

int main() {
    int n;
    cout<<"Enter the number of lines: ";
    cin>>n;
    printPattern(n);
    return 0;
}
/*
    Time Complexity: O(n^2) (Outer aur inner loops ke liye)
    Space Complexity: O(1) (Koi extra space nahi)
*/