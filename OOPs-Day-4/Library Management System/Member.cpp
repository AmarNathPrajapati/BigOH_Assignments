#include "Member.h"
#include "Constants.h"

Member::Member(string name, string id) : name(name), memberId(id) {}

string Member::getMemberId() const {  
    return memberId;  
}

void Member::borrowBook(Book* book) {
    if (borrowedBooks.size() < MAX_BORROW_LIMIT && book->checkAvailability()) {
        borrowedBooks.push_back({book, Utils::getCurrentDate()});
        book->setAvailability(false);
        cout << name << " borrowed: " << book->getISBN() << endl;
    } else {
        cout << "Cannot borrow more books or book unavailable!" << endl;
    }
}
 
void Member::returnBook(string isbn) {
    int currentDate = Utils::getCurrentDate();
    for (auto it = borrowedBooks.begin(); it != borrowedBooks.end(); ++it) {
        if (it->first->getISBN() == isbn) {
            int overdueDays = Utils::calculateDaysBetween(it->second, currentDate) - MAX_BORROW_DAYS;
            if (overdueDays > 0) {
                cout << "Fine due: Rs. " << FineService::calculateFine(overdueDays) << endl;
            }
            it->first->setAvailability(true);
            borrowedBooks.erase(it);
            cout << name << " returned book: " << isbn << endl;
            return;
        }
    }
    cout << "Book not found in borrowed list!" << endl;
}
