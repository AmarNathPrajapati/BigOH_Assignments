#include "Librarian.h"
#include <iostream>

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
    std::cout << "Book details for " << book.getTitle() << " modified." << std::endl;
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
