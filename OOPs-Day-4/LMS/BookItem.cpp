#include "BookItem.h"
#include <iostream>

BookItem::BookItem(Book* book, int copyID, int rackNumber) 
    : book(book), copyID(copyID), rackNumber(rackNumber), isAvailable(true) {}

bool BookItem::checkAvailability() const {
    return isAvailable;
}

void BookItem::setAvailability(bool status) {
    isAvailable = status;
}

void BookItem::displayBookItemInfo() const {
    cout << "Copy ID: " << copyID << ", Rack Number: " << rackNumber 
         << ", Available: " << (isAvailable ? "Yes" : "No") << endl;
    book->displayBookInfo();  // Display associated book info
}

int BookItem::getCopyID() const {
    return copyID;
}

int BookItem::getRackNumber() const {
    return rackNumber;
}

Book* BookItem::getBook() const {
    return book;
}
