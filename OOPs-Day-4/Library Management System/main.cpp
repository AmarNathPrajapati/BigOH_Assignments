#include <iostream>
#include "Book.h"
#include "BookItem.h"
#include "Member.h"
#include "Librarian.h"
#include "NotificationSystem.h"

int main() {
    // Create Books
    Book book1(1, "Book Title 1", "Author 1", "Subject 1", 2020);
    Book book2(2, "Book Title 2", "Author 2", "Subject 2", 2021);
    
    // Add Book Items to Books
    BookItem bookItem1(1, "Rack 1");
    BookItem bookItem2(2, "Rack 2");
    
    book1.addBookItem(bookItem1);
    book2.addBookItem(bookItem2);
    
    // Create Member
    Member member(1, "John Doe");
    
    // Librarian actions
    Librarian librarian;
    librarian.addBook(book1);
    librarian.addBook(book2);
    
    librarian.issueBook(member, bookItem1);
    member.checkOutBook(bookItem1);
    
    // Send notification
    NotificationSystem notificationSystem;
    notificationSystem.sendNotification("A new book has been issued to you!");
    
    // Return Book
    librarian.returnBook(member, bookItem1);
    
    return 0;
}
