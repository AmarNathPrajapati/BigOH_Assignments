#ifndef MEMBER_H
#define MEMBER_H

#include <string>
#include <vector>
#include "BookItem.h"
#include "Book.h"
#include "NotificationSystem.h"

class Member {
private:
    std::string name;
    int memberID;
    std::vector<BookItem*> checkedOutBooks;
    int fineAmount;

public:
    Member(int id, const std::string& name) : memberID(id), name(name), fineAmount(0) {}

    void checkOutBook(BookItem& bookItem);
    void returnBook(BookItem& bookItem);
    void reserveBook(Book& book);
    void renewBook(BookItem& bookItem);
    bool hasOverdueBooks() const;
    void addFine(int fine);
    int getFineAmount() const { return fineAmount; }
    void clearFines() { fineAmount = 0; }

    std::string getName() const { return name; }
    int getMemberID() const { return memberID; }
};

#endif
