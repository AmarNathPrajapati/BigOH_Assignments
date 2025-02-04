#ifndef BOOK_H
#define BOOK_H

#include <iostream>
#include <string>
using namespace std;

class Book {
private:
    string title;
    string author;
    string subject;
    string publicationDate;
    string isbn;
    int rackNumber;
    bool isAvailable;

public:
    Book(string title, string author, string subject, string pubDate, string isbn, int rack);
    void displayBookInfo();
    bool checkAvailability();
    void setAvailability(bool status);
    string getISBN();
};

#endif
