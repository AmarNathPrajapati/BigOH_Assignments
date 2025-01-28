#include <iostream>
#include <string>
using namespace std;

string swapFirstAndLast(string num) {
    if (num.length() == 1) {
        return num; // Single digit, no swapping needed
    }
    
    // Swap the first and last characters
    char first = num[0];
    char last = num[num.length() - 1];
    num[0] = last;
    num[num.length() - 1] = first;

    return num;
}

int main() {
    string num;
    cout << "Enter a number: "; // Example: "012"
    cin >> num;
    
    if (num.length() < 2) {
        cout << "Swapping of first and last digit is not possible" << endl;
    } else {
        cout << "After swapping: " << swapFirstAndLast(num) << endl; // Output: "210"
    }
    
    return 0;
}
