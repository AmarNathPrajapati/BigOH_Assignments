#include <iostream>
using namespace std;

int swapFirstAndLast(int num) {
    int first = num, last = num % 10, digits = 1;
    
    // Find the first digit and count digits
    while (first >= 10) {
        first /= 10;
        digits *= 10;
    }
    
    // Calculate the middle part
    int middle = (num % digits) / 10;

    // Form the new number
    return (last * digits) + (middle * 10) + first;
}

int main() {
    int num;
    cout << "Enter a number: ";
    cin >> num;

    cout << "After swapping: " << swapFirstAndLast(num) << endl;
    return 0;
}
