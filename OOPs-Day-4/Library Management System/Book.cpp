#include "Book.h"
#include <iostream>

Book::Book(string title, string author, string subject, string pubDate, string isbn, int rack) 
    : title(title), author(author), subject(subject), publicationDate(pubDate), isbn(isbn), rackNumber(rack), isAvailable(true) {}

void Book::displayBookInfo() {
    cout << "Title: " << title << ", Author: " << author << ", Subject: " << subject 
         << ", Publication Date: " << publicationDate << ", ISBN: " << isbn 
         << ", Rack: " << rackNumber << ", Available: " << (isAvailable ? "Yes" : "No") << endl;
}

bool Book::checkAvailability() {
    return isAvailable;
}

void Book::setAvailability(bool status) {
    isAvailable = status;
}

string Book::getISBN() {
    return isbn;
}
