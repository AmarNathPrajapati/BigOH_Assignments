#ifndef LIBRARIAN_H
#define LIBRARIAN_H

#include "Member.h"
#include "Book.h"
#include "BookItem.h"
#include <vector>
#include <string>
using namespace std;

class Librarian {
private:
    vector<Book*> books;
    vector<BookItem*> bookItems;
    vector<Member*> members;

public:
    Librarian();
    void addBook(Book* book);
    void removeBook(string isbn);
    void editBook(string isbn, string newTitle, string newAuthor);
    void registerMember(Member* member);
    void unregisterMember(int memberID);
    void checkOutBook(Member* member, BookItem* bookItem);
    void returnBook(Member* member, BookItem* bookItem);
    void reserveBook(Member* member, BookItem* bookItem);
    void collectFine(Member* member, double fineAmount);
    void displayAllBooks() const;
    void displayAllMembers() const;
};

#endif
