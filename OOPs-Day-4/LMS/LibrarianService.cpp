#include "LibrarianService.h"

void LibrarianService::addBook(string isbn, string title, string author, string subject, string pubDate) {
    if (books.find(isbn) == books.end()) {
        books[isbn] = new Book(title, author, subject, pubDate, isbn);
        std::cout << "Book added successfully: " << title << std::endl;
    } else {
        std::cout << "Book with ISBN " << isbn << " already exists!" << std::endl;
    }
}

void LibrarianService::removeBook(string isbn) {
    if (books.find(isbn) != books.end()) {
        delete books[isbn];
        books.erase(isbn);
        std::cout << "Book removed successfully with ISBN: " << isbn << std::endl;
    } else {
        std::cout << "Book with ISBN " << isbn << " not found!" << std::endl;
    }
}

void LibrarianService::editBook(string isbn, string newTitle, string newAuthor) {
    if (books.find(isbn) != books.end()) {
        Book* book = books[isbn];
        book = new Book(newTitle, newAuthor, book->getSubject(), book->getPublicationDate(), isbn);
        books[isbn] = book;
        std::cout << "Book updated successfully: " << newTitle << std::endl;
    } else {
        std::cout << "Book with ISBN " << isbn << " not found!" << std::endl;
    }
}

void LibrarianService::registerMember(int memberID, string name, string email) {
    if (members.find(memberID) == members.end()) {
        members[memberID] = new Member(memberID, name, email);
        std::cout << "Member registered successfully: " << name << std::endl;
    } else {
        std::cout << "Member with ID " << memberID << " already exists!" << std::endl;
    }
}

void LibrarianService::unregisterMember(int memberID) {
    if (members.find(memberID) != members.end()) {
        delete members[memberID];
        members.erase(memberID);
        std::cout << "Member removed successfully. ID: " << memberID << std::endl;
    } else {
        std::cout << "Member with ID " << memberID << " not found!" << std::endl;
    }
}

void LibrarianService::displayAllBooks() {
    std::cout << "Library Books:\n";
    for (auto& book : books) {
        book.second->displayBookInfo();
    }
}

void LibrarianService::displayAllMembers() {
    std::cout << "Library Members:\n";
    for (auto& member : members) {
        member.second->displayMemberInfo();
    }
}
