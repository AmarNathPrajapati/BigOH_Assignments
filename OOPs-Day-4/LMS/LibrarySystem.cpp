#include "LibrarySystem.h"

LibrarySystem::LibrarySystem() {}

void LibrarySystem::displayMainMenu() {
    cout << "\n========== Library Management System ==========" << endl;
    cout << "1. Add Book" << endl;
    cout << "2. Add Member" << endl;
    cout << "3. Check Out Book" << endl;
    cout << "4. Return Book" << endl;
    cout << "5. Reserve Book" << endl;
    cout << "6. Collect Fine" << endl;
    cout << "7. Display All Books" << endl;
    cout << "8. Display All Members" << endl;
    cout << "9. Display All Transactions" << endl;
    cout << "10. Display All Fines" << endl;
    cout << "11. Send Notifications" << endl;
    cout << "12. Exit" << endl;
    cout << "Enter your choice: ";
}

void LibrarySystem::addBook() {
    string title, author, subject, pubDate, isbn;
    cout << "\nEnter Book Title: ";
    cin.ignore();
    getline(cin, title);
    cout << "Enter Author: ";
    getline(cin, author);
    cout << "Enter Subject: ";
    getline(cin, subject);
    cout << "Enter Publication Date: ";
    getline(cin, pubDate);
    cout << "Enter ISBN: ";
    getline(cin, isbn);

    bookService.addBook(title, author, subject, pubDate, isbn);
    cout << "Book added successfully!" << endl;
}

void LibrarySystem::addMember() {
    int memberID;
    string name, email;
    cout << "\nEnter Member ID: ";
    cin >> memberID;
    cout << "Enter Name: ";
    cin.ignore();
    getline(cin, name);
    cout << "Enter Email: ";
    getline(cin, email);

    memberService.registerMember(memberID, name, email);
    cout << "Member registered successfully!" << endl;
}

void LibrarySystem::checkOutBook() {
    int memberID;
    string isbn;
    cout << "\nEnter Member ID: ";
    cin >> memberID;
    cout << "Enter Book ISBN: ";
    cin >> isbn;

    if (!memberService.canMemberCheckout(memberID)) {
        cout << "Member has pending fines or reached checkout limit!" << endl;
        return;
    }

    vector<BookItem*> availableBooks = bookService.searchBooksByTitle(isbn);
    if (availableBooks.empty()) {
        cout << "Book is not available!" << endl;
        return;
    }

    BookItem* bookItem = availableBooks.front();
    Member* member = memberService.searchMemberByID(memberID);

    if (bookItem && member) {
        member->checkOutBook(bookItem);
        transactionService.createTransaction("TXN" + to_string(rand()), member, bookItem, "2025-02-05");
        cout << "Book checked out successfully!" << endl;
    } else {
        cout << "Invalid details provided!" << endl;
    }
}

void LibrarySystem::returnBook() {
    int memberID;
    string transactionID;
    cout << "\nEnter Member ID: ";
    cin >> memberID;
    cout << "Enter Transaction ID: ";
    cin >> transactionID;

    transactionService.markAsReturned(transactionID);
    cout << "Book returned successfully!" << endl;
}

void LibrarySystem::reserveBook() {
    int memberID;
    string isbn;
    cout << "\nEnter Member ID: ";
    cin >> memberID;
    cout << "Enter Book ISBN: ";
    cin >> isbn;

    vector<BookItem*> availableBooks = bookService.searchBooksByTitle(isbn);
    if (!availableBooks.empty()) {
        cout << "Book is available, no need to reserve!" << endl;
        return;
    }

    Member* member = memberService.searchMemberByID(memberID);
    if (member) {
        // Assuming reservation logic is inside Member class
        member->reserveBook(nullptr);
        cout << "Book reserved successfully!" << endl;
    } else {
        cout << "Member not found!" << endl;
    }
}

void LibrarySystem::collectFine() {
    int memberID;
    double amount;
    cout << "\nEnter Member ID: ";
    cin >> memberID;
    cout << "Enter Fine Amount: ";
    cin >> amount;

    fineService.applyFine(memberID, amount, "2025-02-05");
    cout << "Fine collected successfully!" << endl;
}

void LibrarySystem::displayAllBooks() {
    cout << "\n===== Library Books =====" << endl;
    bookService.displayAllBooks();
}

void LibrarySystem::displayAllMembers() {
    cout << "\n===== Library Members =====" << endl;
    memberService.displayAllMembers();
}

void LibrarySystem::displayAllTransactions() {
    cout << "\n===== Transactions =====" << endl;
    transactionService.displayAllTransactions();
}

void LibrarySystem::displayAllFines() {
    cout << "\n===== Fines =====" << endl;
    fineService.displayAllFines();
}

void LibrarySystem::sendNotifications() {
    cout << "\n===== Sending Notifications =====" << endl;
    for (int i = 1; i <= 10; i++) { // Assuming max 10 members
        Member* member = memberService.searchMemberByID(i);
        if (member) {
            notificationService.sendGeneralNotification(member, "Reminder: Please return or renew your books.");
        }
    }
    cout << "Notifications sent!" << endl;
}

void LibrarySystem::run() {
    while (true) {
        displayMainMenu();
        int choice;
        cin >> choice;

        switch (choice) {
            case 1: addBook(); break;
            case 2: addMember(); break;
            case 3: checkOutBook(); break;
            case 4: returnBook(); break;
            case 5: reserveBook(); break;
            case 6: collectFine(); break;
            case 7: displayAllBooks(); break;
            case 8: displayAllMembers(); break;
            case 9: displayAllTransactions(); break;
            case 10: displayAllFines(); break;
            case 11: sendNotifications(); break;
            case 12: cout << "Exiting Library System..." << endl; return;
            default: cout << "Invalid choice! Try again." << endl;
        }
    }
}
