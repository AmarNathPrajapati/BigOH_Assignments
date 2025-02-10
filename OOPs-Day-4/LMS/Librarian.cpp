#include "Librarian.h"
#include <iostream>
#include <algorithm>

Librarian::Librarian() {}

void Librarian::addBook(Book* book) {
    books.push_back(book);
    cout << "Book added: " << book->getTitle() << endl;
}

void Librarian::removeBook(string isbn) {
    auto it = remove_if(books.begin(), books.end(), [&](Book* b) { return b->getISBN() == isbn; });
    if (it != books.end()) {
        books.erase(it, books.end());
        cout << "Book removed with ISBN: " << isbn << endl;
    } else {
        cout << "Book not found with ISBN: " << isbn << endl;
    }
}

void Librarian::editBook(string isbn, string newTitle, string newAuthor) {
    for (auto& book : books) {
        if (book->getISBN() == isbn) {
            // Assume we modify title and author for simplicity
            book->displayBookInfo();
            cout << "Editing book: " << newTitle << " by " << newAuthor << endl;
        }
    }
}

void Librarian::registerMember(Member* member) {
    members.push_back(member);
    cout << "Member registered: " << member->getName() << endl;
}

void Librarian::unregisterMember(int memberID) {
    auto it = remove_if(members.begin(), members.end(), [&](Member* m) { return m->getMemberID() == memberID; });
    if (it != members.end()) {
        members.erase(it, members.end());
        cout << "Member unregistered with ID: " << memberID << endl;
    } else {
        cout << "Member not found with ID: " << memberID << endl;
    }
}

void Librarian::checkOutBook(Member* member, BookItem* bookItem) {
    if (bookItem->checkAvailability()) {
        member->checkOutBook(bookItem);
        cout << "Checked out successfully!" << endl;
    } else {
        cout << "Book is currently unavailable." << endl;
    }
}

void Librarian::returnBook(Member* member, BookItem* bookItem) {
    member->returnBook(bookItem);
}

void Librarian::reserveBook(Member* member, BookItem* bookItem) {
    member->reserveBook(bookItem);
}

void Librarian::collectFine(Member* member, double fineAmount) {
    member->payFines(fineAmount);
}

void Librarian::displayAllBooks() const {
    for (const auto& book : books) {
        book->displayBookInfo();
    }
}

void Librarian::displayAllMembers() const {
    for (const auto& member : members) {
        member->displayMemberInfo();
    }
}

