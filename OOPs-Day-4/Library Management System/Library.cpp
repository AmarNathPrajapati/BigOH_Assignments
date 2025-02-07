#include "LibraryManagement.h"
#include <iostream>

bool Book::searchBookByTitle(const std::vector<Book>& books, const std::string& title) {
    for (const auto& book : books) {
        if (book.getTitle() == title) {
            return true;
        }
    }
    return false;
}

bool Book::searchBookByAuthor(const std::vector<Book>& books, const std::string& author) {
    for (const auto& book : books) {
        if (book.getAuthor() == author) {
            return true;
        }
    }
    return false;
}

bool Book::searchBookBySubject(const std::vector<Book>& books, const std::string& subject) {
    for (const auto& book : books) {
        if (book.getSubject() == subject) {
            return true;
        }
    }
    return false;
}

bool Book::searchBookByPublicationDate(const std::vector<Book>& books, int year) {
    for (const auto& book : books) {
        if (book.getPublicationYear() == year) {
            return true;
        }
    }
    return false;
}

void Member::checkOutBook(BookItem& bookItem) {
    if (checkedOutBooks.size() < 5) {
        checkedOutBooks.push_back(&bookItem);
        bookItem.setAvailability(false);
    } else {
        std::cout << "You cannot check out more than 5 books." << std::endl;
    }
}

void Member::returnBook(BookItem& bookItem) {
    auto it = std::find(checkedOutBooks.begin(), checkedOutBooks.end(), &bookItem);
    if (it != checkedOutBooks.end()) {
        checkedOutBooks.erase(it);
        bookItem.setAvailability(true);
    }
}

void Member::reserveBook(Book& book) {
    // If all book items are unavailable, reserve the book
    std::cout << "Book has been reserved for you." << std::endl;
}

bool Member::hasOverdueBooks() const {
    return fineAmount > 0;
}

void Member::addFine(int fine) {
    fineAmount += fine;
}

void Librarian::registerMember(Member& member) {
    std::cout << "Member " << member.getName() << " registered successfully." << std::endl;
}

void Librarian::cancelMembership(Member& member) {
    std::cout << "Membership for " << member.getName() << " canceled." << std::endl;
}

void Librarian::addBook(Book& book) {
    std::cout << "Book " << book.getTitle() << " added to the library." << std::endl;
}

void Librarian::removeBook(Book& book) {
    std::cout << "Book " << book.getTitle() << " removed from the library." << std::endl;
}

void Librarian::modifyBookDetails(Book& book) {
    std::cout << "Book " << book.getTitle() << " details modified." << std::endl;
}

void Librarian::issueBook(Member& member, BookItem& bookItem) {
    member.checkOutBook(bookItem);
}

void Librarian::reserveBook(Member& member, Book& book) {
    member.reserveBook(book);
}

void Librarian::returnBook(Member& member, BookItem& bookItem) {
    member.returnBook(bookItem);
}
