#ifndef BOOKITEM_H
#define BOOKITEM_H

#include "Book.h"

class BookItem {
private:
    Book* book;        // Link to the Book object
    int copyID;        // Unique ID for each copy
    int rackNumber;    // Rack number where the book is located
    bool isAvailable;  // Availability status of the book item

public:
    BookItem(Book* book, int copyID, int rackNumber);
    bool checkAvailability() const;
    void setAvailability(bool status);
    void displayBookItemInfo() const;
    int getCopyID() const;
    int getRackNumber() const;
    Book* getBook() const; // To link back to the main Book
};

#endif
