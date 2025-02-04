#include "Library.h"
#include "Librarian.h"
#include "NotificationService.h"

int main() {
    Library lib;
    Librarian librarian;
    NotificationService notificationService;

    // Adding Books
    Book* book1 = new Book("C++ Basics", "Bjarne Stroustrup", "Programming", "1998", "12345", 1);
    Book* book2 = new Book("Python 101", "Guido van Rossum", "Programming", "2000", "67890", 2);
    lib.addBook(book1);
    lib.addBook(book2);

    // Register Members
    Member* member1 = new Member("Alice", "M001");
    Member* member2 = new Member("Bob", "M002");
    lib.registerMember(member1);
    lib.registerMember(member2);

    // Librarian subscribes to notifications
    notificationService.subscribe(&librarian);

    // Borrow Books
    member1->borrowBook(book1);
    member2->borrowBook(book2);

    // Show All Books
    lib.showAllBooks();

    // Return Books (Simulate overdue)
    member1->returnBook("12345");

    // Notify overdue book return
    notificationService.notify("Overdue book returned!");

    return 0;
}
