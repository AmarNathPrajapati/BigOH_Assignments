#ifndef LIBRARIAN_H
#define LIBRARIAN_H

#include <vector>
#include "Member.h"
#include "Book.h"

class Librarian {
public:
    void registerMember(Member& member);
    void cancelMembership(Member& member);
    void addBook(Book& book);
    void removeBook(Book& book);
    void modifyBookDetails(Book& book);
    void issueBook(Member& member, BookItem& bookItem);
    void reserveBook(Member& member, Book& book);
    void returnBook(Member& member, BookItem& bookItem);
};

#endif
