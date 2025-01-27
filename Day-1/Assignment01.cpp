#include <iostream>
using namespace std;

bool isNameValid(string name) {
    int vowels[26] = {0}; // Array to count vowels
    bool foundS = false;  // To track 'S'
    
    for (int i = 0; i < name.length(); i++) {
        char ch = toupper(name[i]);
        
        // Count vowels
        if (ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U') {
            vowels[ch - 'A']++;
            if (vowels[ch - 'A'] > 1) return false; // Vowel repeats
        }

        // Check for 'S' and 'T'
        if (ch == 'S') {
            if (foundS) return false; // Another 'S' without 'T' in between
            foundS = true;
        } else if (ch == 'T' && foundS) {
            return false; // 'T' found between two 'S'
        }
    }
    return true;
}

int main() {
    string name;
    cout << "Enter the name: ";
    cin >> name;

    if (isNameValid(name)) cout << "Valid name\n";
    else cout << "Invalid name\n";
    return 0;
}
