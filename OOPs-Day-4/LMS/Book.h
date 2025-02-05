#ifndef BOOK_H
#define BOOK_H

#include <iostream>
#include <string>
#include <vector>
using namespace std;

class Book {
private:
    string title;
    string author;
    string subject;
    string publicationDate;
    string isbn;

public:
    Book(string title, string author, string subject, string pubDate, string isbn);
    string getTitle() const;
    string getAuthor() const;
    string getSubject() const;
    string getPublicationDate() const;
    string getISBN() const;
    void displayBookInfo() const;
};

#endif
