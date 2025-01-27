#include <iostream>
using namespace std;
//Dry run with example: 1234
int swapFirstAndLast(int num) {
    int first = num, last = num % 10, digits = 1;// first: 1234, last: 4 and digits = 1
    
    // Find the first digit and count digits
    while (first >= 10) {
        first /= 10;
        digits *= 10;
    }
    //finally : first = 1 and digits = 1000


    // Calculate the middle part
    int middle = (num % digits) / 10; // middle: 23

    // Form the new number
    return (last * digits) + (middle * 10) + first;// (4*1000)+(23*10)+1
}

int main() {
    int num;
    cout << "Enter a number: ";// for example: 1234
    cin >> num;
    if(num<10){
        cout<<"Swapping of First and last digit is not possible"<<endl;
    }else{
        cout << "After swapping: " << swapFirstAndLast(num) << endl;//final output: 4231
    }
    return 0;
}
