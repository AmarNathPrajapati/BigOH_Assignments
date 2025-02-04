#ifndef LIBRARY_H
#define LIBRARY_H

#include <vector>
#include "Book.h"
#include "Member.h"

class Library {
private:
    vector<Book*> books;
    vector<Member*> members;

public:
    void addBook(Book* book);
    void registerMember(Member* member);
    void showAllBooks();
    void showAllMembers();
};

#endif
