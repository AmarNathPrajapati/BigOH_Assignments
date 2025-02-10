#ifndef MEMBER_H
#define MEMBER_H

#include <iostream>
#include <vector>
#include "BookItem.h"
using namespace std;

class Member {
private:
    int memberID;
    string name;
    string email;
    vector<BookItem*> checkedOutBooks;  // List of books currently checked out
    vector<BookItem*> reservedBooks;    // Books reserved by the member
    double fines;                      // Pending fines for overdue books

public:
    Member(int memberID, string name, string email);
    int getMemberID() const;
    string getName() const;
    string getEmail() const;
    void checkOutBook(BookItem* bookItem);
    void returnBook(BookItem* bookItem);
    void reserveBook(BookItem* bookItem);
    void payFines(double amount);
    bool isBookCheckedOut(BookItem* bookItem) const;
    void displayMemberInfo() const;
    double getFines() const;
};

#endif
