#include <iostream>
using namespace std;

// Function to calculate GCD
// Euclidean algorithm ki time complexity O(log(min(a, b))) hoti hai.
int gcd(int a, int b) {
    if(b==0){
        return a;
    }else{
        return gcd(b,a%b);
    }
}

// Function to calculate LCM
int lcm(int a, int b) { // We know that a*b = lcm*hcf
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
    cout << "Enter n: ";// for example :5 
    cin >> n;

    cout << "Smallest number divisible by all numbers from 1 to " << n << ": " << smallestNumberDivisible(n) << endl;
    return 0;
}
/*
    Best-case Time Complexity: O(1) (for smallest n)
    Worst-case Time Complexity: O(n log n) (for larger n)
    Space Complexity: O(log n) (due to recursion stack) (not purely O(1), because of recursive GCD function)
*/