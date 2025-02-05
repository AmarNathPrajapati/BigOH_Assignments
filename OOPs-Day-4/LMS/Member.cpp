#include "Member.h"
#include <bits/stdc++.h>

Member::Member(int memberID, string name, string email) 
    : memberID(memberID), name(name), email(email), fines(0) {}

int Member::getMemberID() const {
    return memberID;
}

string Member::getName() const {
    return name;
}

string Member::getEmail() const {
    return email;
}

void Member::checkOutBook(BookItem* bookItem) {
    if (checkedOutBooks.size() < 5) {
        checkedOutBooks.push_back(bookItem);
        bookItem->setAvailability(false);
        cout << name << " has checked out: ";
        bookItem->displayBookItemInfo();
    } else {
        cout << "Maximum checkout limit reached for member " << name << endl;
    }
}

void Member::returnBook(BookItem* bookItem) {
    auto it = find(checkedOutBooks.begin(), checkedOutBooks.end(), bookItem);
    if (it != checkedOutBooks.end()) {
        checkedOutBooks.erase(it);
        bookItem->setAvailability(true);
        cout << name << " has returned: ";
        bookItem->displayBookItemInfo();
    } else {
        cout << "This book is not checked out by " << name << endl;
    }
}

void Member::reserveBook(BookItem* bookItem) {
    reservedBooks.push_back(bookItem);
    cout << name << " has reserved: ";
    bookItem->displayBookItemInfo();
}

void Member::payFines(double amount) {
    fines -= amount;
    if (fines < 0) fines = 0;
    cout << name << " has paid fine: " << amount << endl;
}

bool Member::isBookCheckedOut(BookItem* bookItem) const {
    return find(checkedOutBooks.begin(), checkedOutBooks.end(), bookItem) != checkedOutBooks.end();
}

void Member::displayMemberInfo() const {
    cout << "Member ID: " << memberID << ", Name: " << name << ", Email: " << email << endl;
    cout << "Fines: " << fines << endl;
}

double Member::getFines() const {
    return fines;
}
