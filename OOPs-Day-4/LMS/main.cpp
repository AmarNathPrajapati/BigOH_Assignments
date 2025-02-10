#include "Library.h"
#include <iostream>
#include <limits>

void displayMenu() {
    std::cout << "\n=== Library Management System ===\n"
              << "1. Add New Book\n"
              << "2. Add New Member\n"
              << "3. Check Out Book\n"
              << "4. Return Book\n"
              << "5. Search Books\n"
              << "6. View Member Details\n"
              << "7. Calculate Fines\n"
              << "8. Exit\n"
              << "Enter your choice: ";
}

void searchSubmenu(Library& library) {
    std::string searchTerm;
    int choice;
    
    std::cout << "\nSearch by:\n"
              << "1. Title\n"
              << "2. Author\n"
              << "3. Subject\n"
              << "Choice: ";
    std::cin >> choice;
    std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');
    
    std::cout << "Enter search term: ";
    std::getline(std::cin, searchTerm);
    
    std::vector<Book*> results;
    switch(choice) {
        case 1: results = library.searchByTitle(searchTerm); break;
        case 2: results = library.searchByAuthor(searchTerm); break;
        case 3: results = library.searchBySubject(searchTerm); break;
        default: std::cout << "Invalid choice\n"; return;
    }
    
    if(results.empty()) {
        std::cout << "No books found.\n";
        return;
    }
    
    std::cout << "\nSearch Results:\n";
    for(auto book : results) {
        std::cout << "Title: " << book->getTitle() 
                  << ", Author: " << book->getAuthor() << "\n";
    }
}

int main() {
    Library library;
    
    // Add some initial data
    Librarian* librarian = new Librarian("Admin", "admin@library.com", "LIB001");
    
    // Demo books
    Book* book1 = new Book("ISBN001", "C++ Programming", "John Smith");
    Book* book2 = new Book("ISBN002", "Data Structures", "Jane Doe");
    BookItem* bookItem1 = new BookItem(*book1, "BAR001");
    BookItem* bookItem2 = new BookItem(*book2, "BAR002");
    
    library.addBook(book1);
    library.addBook(book2);
    library.addBookItem(bookItem1);
    library.addBookItem(bookItem2);
    
    int choice;
    std::string input;
    
    while(true) {
        displayMenu();
        std::cin >> choice;
        std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');
        
        switch(choice) {
            case 1: {
                std::string isbn, title, author;
                std::cout << "Enter ISBN: ";
                std::getline(std::cin, isbn);
                std::cout << "Enter Title: ";
                std::getline(std::cin, title);
                std::cout << "Enter Author: ";
                std::getline(std::cin, author);
                
                Book* newBook = new Book(isbn, title, author);
                BookItem* newItem = new BookItem(*newBook, "BAR" + isbn);
                library.addBook(newBook);
                library.addBookItem(newItem);
                std::cout << "Book added successfully!\n";
                break;
            }
            case 2: {
                std::string name, email, memberId;
                std::cout << "Enter Name: ";
                std::getline(std::cin, name);
                std::cout << "Enter Email: ";
                std::getline(std::cin, email);
                std::cout << "Enter Member ID: ";
                std::getline(std::cin, memberId);
                
                Member* newMember = new Member(name, email, memberId);
                library.addMember(newMember);
                std::cout << "Member added successfully!\n";
                break;
            }
            case 3:
                // Implement checkout logic
                std::cout << "Checkout feature - To be implemented\n";
                break;
            case 4:
                // Implement return logic
                std::cout << "Return feature - To be implemented\n";
                break;
            case 5:
                searchSubmenu(library);
                break;
            case 6:
                std::cout << "Member details feature - To be implemented\n";
                break;
            case 7:
                std::cout << "Fine calculation feature - To be implemented\n";
                break;
            case 8:
                std::cout << "Thank you for using the Library Management System!\n";
                return 0;
            default:
                std::cout << "Invalid choice. Please try again.\n";
        }
    }
    
    return 0;
}
