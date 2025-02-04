#include "Library.h"
#include <iostream>

void Library::addBook(Book* book) {
    books.push_back(book);
}

void Library::registerMember(Member* member) {
    members.push_back(member);
}

void Library::showAllBooks() {
    for (Book* book : books) {
        book->displayBookInfo();
    }
}

void Library::showAllMembers() {
    for (Member* member : members) {
        cout << "Member ID: " << member->getMemberId() << endl;
    }
}
