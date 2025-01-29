#include <iostream>
using namespace std;

bool isValidURL(string url) {
    // Check if the URL starts with "http://" or "https://"
    if (url.substr(0, 7) != "http://" && url.substr(0, 8) != "https://"){
        return false;
    };

    // Check for spaces in the URL
    for (char ch : url) {
        if (ch == ' '){
            return false;
        } 
    }

    // Check if the URL ends with a valid domain
    string domain = url.substr(url.find_last_of('.') + 1);
    if (domain == "com" || domain == "org" || domain == "net"){
        return true;
    } 
    return false;
    
}

int main() {
    string url;
    cout << "Enter URL: ";
    cin >> url;

    if (isValidURL(url)){
        cout << "Given URL is valid\n";
    }else{
        cout << "Given URL is not valid\n";
    } 
    return 0;
}
/*
    Time complexity:
        Best case: O(1) (agar invalid URL mila start me hi reject ho gaya).
        Worst case: O(N) (agar valid URL ho ya space check karna pade).
    Space complexity: O(1)
*/