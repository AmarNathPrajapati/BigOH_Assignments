#include <iostream>
using namespace std;

bool isValidURL(string url) {
    // Check if the URL starts with "http://" or "https://"
    if (url.substr(0, 7) != "http://" && url.substr(0, 8) != "https://") return false;

    // Check for spaces in the URL
    for (char ch : url) {
        if (ch == ' ') return false;
    }

    // Check if the URL ends with a valid domain
    string domain = url.substr(url.find_last_of('.') + 1);
    if (domain == "com" || domain == "org" || domain == "net") return true;

    return false;
}

int main() {
    string url;
    cout << "Enter URL: ";
    cin >> url;

    if (isValidURL(url)) cout << "Yes\n";
    else cout << "No\n";
    return 0;
}
