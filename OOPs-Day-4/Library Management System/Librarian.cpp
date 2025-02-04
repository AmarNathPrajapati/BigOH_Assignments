#include "Librarian.h"

void Librarian::addBook(vector<Book*>& books, Book* newBook) {
    books.push_back(newBook);
    cout << "Book added: " << newBook->getISBN() << endl;
}

void Librarian::removeBook(vector<Book*>& books, string isbn) {
    for (auto it = books.begin(); it != books.end(); ++it) {
        if ((*it)->getISBN() == isbn) {
            cout << "Removing book: " << isbn << endl;
            books.erase(it);
            return;
        }
    }
    cout << "Book not found!" << endl;
}

void Librarian::update(string message) {
    cout << "Librarian received notification: " << message << endl;
}
