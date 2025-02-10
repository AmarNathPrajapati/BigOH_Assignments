#include "User.h"
#include <algorithm>

User::User(std::string name, std::string email)
    : name(name), email(email) {}

Member::Member(std::string name, std::string email, std::string memberId)
    : User(name, email), memberId(memberId) {}

bool Member::checkoutBook(BookItem* book) {
    if (checkedOutBooks.size() >= 5 || book->getStatus() != AVAILABLE) {
        return false;
    }
    
    book->setStatus(LOANED);
    checkedOutBooks.push_back(book);
    return true;
}

bool Member::returnBook(BookItem* book) {
    auto it = std::find(checkedOutBooks.begin(), checkedOutBooks.end(), book);
    if (it == checkedOutBooks.end()) {
        return false;
    }
    
    book->setStatus(AVAILABLE);
    checkedOutBooks.erase(it);
    return true;
}

bool Member::reserveBook(BookItem* book) {
    if (book->getStatus() == AVAILABLE || reservedBooks.size() >= 5) {
        return false;
    }
    
    book->setStatus(RESERVED);
    reservedBooks.push_back(book);
    return true;
}

bool Member::cancelReservation(BookItem* book) {
    auto it = std::find(reservedBooks.begin(), reservedBooks.end(), book);
    if (it == reservedBooks.end()) {
        return false;
    }
    
    book->setStatus(AVAILABLE);
    reservedBooks.erase(it);
    return true;
}

Librarian::Librarian(std::string name, std::string email, std::string staffId)
    : User(name, email), staffId(staffId) {}

bool Librarian::addBook(Book* book) {
    // Implementation would interact with Library class
    return true;
}

bool Librarian::removeBook(Book* book) {
    // Implementation would interact with Library class
    return true;
}

bool Librarian::modifyBook(Book* book) {
    // Implementation would interact with Library class
    return true;
}
