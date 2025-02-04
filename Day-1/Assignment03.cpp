#include <iostream>
using namespace std;

bool isPrimeDigit(int digit) {//checking if digit is prime or not
    return digit == 2 || digit == 3 || digit == 5 || digit == 7;
}

bool areAllDigitsPrime(int num) {//checking each digits 
    while (num > 0) {
        if (!isPrimeDigit(num % 10)){
            return false;  
        } 
        num /= 10;
    }
    return true;
}

int largestPrimeDigitNumber(int n) {
    for (int i = n - 1; i > 0; i--) {// reverse check to find quickly
        if (areAllDigitsPrime(i)){
            return i;  
        } 
    }
    return -1;
}

int main() {
    int n;
    cout << "Enter N: ";// for example: 500
    cin >> n;

    cout << "Largest number with all prime digits less than N: " << largestPrimeDigitNumber(n) << endl;// final output: 377
    return 0;
}
/*
    Time complexity: 
        Best-case Time Complexity: O(log N) (early termination ho jaye toh fast)
        Worst-case Time Complexity: O(N log N) (loop pura chalne par slow ho sakta hai)
    Spavn ce complexity: O(1)
*/