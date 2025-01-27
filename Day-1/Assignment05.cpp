#include <iostream>
using namespace std;

// Function to calculate GCD
int gcd(int a, int b) {
    return b == 0 ? a : gcd(b, a % b);
}

// Function to calculate LCM
int lcm(int a, int b) {
    return (a / gcd(a, b)) * b;
}

// Function to calculate smallest number divisible by all numbers from 1 to n
int smallestNumberDivisible(int n) {
    int result = 1;
    for (int i = 1; i <= n; i++) {
        result = lcm(result, i);
    }
    return result;
}

int main() {
    int n;
    cout << "Enter n: ";
    cin >> n;

    cout << "Smallest number divisible by all numbers from 1 to " << n << ": " << smallestNumberDivisible(n) << endl;
    return 0;
}
