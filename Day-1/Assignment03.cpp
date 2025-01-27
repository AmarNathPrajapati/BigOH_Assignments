#include <iostream>
using namespace std;

bool isPrimeDigit(int digit) {
    return digit == 2 || digit == 3 || digit == 5 || digit == 7;
}

bool areAllDigitsPrime(int num) {
    while (num > 0) {
        if (!isPrimeDigit(num % 10)) return false;
        num /= 10;
    }
    return true;
}

int largestPrimeDigitNumber(int n) {
    for (int i = n - 1; i > 0; i--) {
        if (areAllDigitsPrime(i)) return i;
    }
    return -1;
}

int main() {
    int n;
    cout << "Enter N: ";
    cin >> n;

    cout << "Largest number with all prime digits less than N: " << largestPrimeDigitNumber(n) << endl;
    return 0;
}
