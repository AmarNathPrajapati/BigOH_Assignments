#ifndef LIBRARYSYSTEM_H
#define LIBRARYSYSTEM_H

#include <iostream>
#include "BookService.h"
#include "MemberService.h"
#include "LibrarianService.h"
#include "TransactionService.h"
#include "FineService.h"
#include "NotificationService.h"

class LibrarySystem {
private:
    BookService bookService;
    MemberService memberService;
    LibrarianService librarianService;
    TransactionService transactionService;
    FineService fineService;
    NotificationService notificationService;

public:
    LibrarySystem();

    void displayMainMenu();
    void addBook();
    void addMember();
    void checkOutBook();
    void returnBook();
    void reserveBook();
    void collectFine();
    void displayAllBooks();
    void displayAllMembers();
    void displayAllTransactions();
    void displayAllFines();
    void sendNotifications();
    void run();
};

#endif
