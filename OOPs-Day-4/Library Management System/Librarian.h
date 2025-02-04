#ifndef LIBRARIAN_H
#define LIBRARIAN_H

#include "Book.h"
#include "NotificationService.h"
#include <vector>

class Librarian : public Observer {
public:
    void addBook(vector<Book*>& books, Book* newBook);
    void removeBook(vector<Book*>& books, string isbn);
    void update(string message) override; // Observer Pattern
};

#endif
