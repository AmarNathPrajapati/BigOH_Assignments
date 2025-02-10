#include "Library.h"
#include <algorithm>
#include <ctime>

Library::Library() {}

Library::~Library() {
    for (auto book : books) delete book;
    for (auto item : bookItems) delete item;
    for (auto member : members) delete member;
    for (auto librarian : librarians) delete librarian;
}

std::vector<Book*> Library::searchByTitle(const std::string& title) {
    std::vector<Book*> result;
    for (auto book : books) {
        if (book->getTitle().find(title) != std::string::npos) {
            result.push_back(book);
        }
    }
    return result;
}

std::vector<Book*> Library::searchByAuthor(const std::string& author) {
    std::vector<Book*> result;
    for (auto book : books) {
        if (book->getAuthor().find(author) != std::string::npos) {
            result.push_back(book);
        }
    }
    return result;
}

std::vector<Book*> Library::searchBySubject(const std::string& subject) {
    std::vector<Book*> result;
    for (auto book : books) {
        if (book->getSubject().find(subject) != std::string::npos) {
            result.push_back(book);
        }
    }
    return result;
}

std::vector<Book*> Library::searchByPublicationDate(const std::string& date) {
    std::vector<Book*> result;
    for (auto book : books) {
        if (book->getPublicationDate() == date) {
            result.push_back(book);
        }
    }
    return result;
}

bool Library::addMember(Member* member) {
    if (std::find(members.begin(), members.end(), member) != members.end()) {
        return false;
    }
    members.push_back(member);
    return true;
}

bool Library::cancelMembership(Member* member) {
    auto it = std::find(members.begin(), members.end(), member);
    if (it == members.end()) {
        return false;
    }
    members.erase(it);
    return true;
}

bool Library::issueFine(Member* member, double amount) {
    // In a real implementation, this would interface with a payment system
    sendNotification(member, "Fine issued: $" + std::to_string(amount));
    return true;
}

void Library::sendNotification(Member* member, const std::string& message) {
    // In a real implementation, this would send emails or SMS
    // For now, we'll just print to console
    std::cout << "Notification to " << member->getName() << ": " << message << std::endl;
}

void Library::checkAndUpdateOverdueItems() {
    for (auto item : bookItems) {
        if (item->getStatus() == LOANED && item->checkOverdue()) {
            double fine = item->calculateFine();
            if (fine > 0) {
                // Find member by borrowerId and issue fine
                for (auto member : members) {
                    if (member->getMemberId() == item->getBorrowerId()) {
                        issueFine(member, fine);
                        sendNotification(member, "Book overdue! Fine issued: $" + std::to_string(fine));
                    }
                }
            }
        }
    }
}

void Library::notifyDueDate() {
    for (auto item : bookItems) {
        if (item->getStatus() == LOANED) {
            for (auto member : members) {
                if (member->getMemberId() == item->getBorrowerId()) {
                    if (item->isNearDueDate()) {
                        sendNotification(member, "Reminder: Book '" + item->getTitle() + 
                                      "' is due on " + item->getDueDate());
                    }
                }
            }
        }
    }
}

void Library::processReservations(BookItem* book) {
    if (book->getStatus() == AVAILABLE) {
        auto it = bookReservations.find(book->getISBN());
        if (it != bookReservations.end() && !it->second.empty()) {
            Member* member = it->second.front();
            notifyReservationAvailable(member, book);
            it->second.erase(it->second.begin());
        }
    }
}

double Library::calculateFine(const std::string& memberId) {
    double totalFine = 0.0;
    for (auto item : bookItems) {
        if (item->getStatus() == LOANED && 
            item->getBorrowerId() == memberId && 
            item->checkOverdue()) {
            totalFine += item->calculateFine();
        }
    }
    return totalFine;
}

bool Library::addBook(Book* book) {
    if (std::find(books.begin(), books.end(), book) == books.end()) {
        books.push_back(book);
        return true;
    }
    return false;
}

bool Library::addBookItem(BookItem* bookItem) {
    bookItems.push_back(bookItem);
    return true;
}
