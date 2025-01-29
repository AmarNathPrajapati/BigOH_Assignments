#include <bits/stdc++.h>
using namespace std;

bool isNameValid(string name)
{
    int vowels[26] = {0}; // Array to count vowels
    for (int i = 0; i < name.length(); i++)
    {
        char ch = toupper(name[i]);

        // Count vowels
        if (ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U')
        {
            vowels[ch - 'A']++;
            if (vowels[ch - 'A'] > 1)
            {
                return false; // Vowel repeat ho gaya hai.
            };
        }

        int l = name.find('S');
        int r = name.rfind('S');

        // Check if 'T' exists between the first and last 'S'
        if (l != string::npos && r != string::npos)
        {
            for (int i = l + 1; i < r; ++i)
            {
                if (name[i] == 'T')
                {
                    return false;
                }
            }
        }
    }
    return true;
}

int main()
{
    string name;
    cout << "Enter the name: ";
    cin >> name;

    if (isNameValid(name))
        cout << "Valid name\n";
    else
        cout << "Invalid name\n";
    return 0;
}
/*
    Time complexity: 
        worst case: O(N^2)
        best case: O(N) ho sakta hai (agar 'S' na ho ya 'T' jaldi mil jaye)
    Space complexity:
*/