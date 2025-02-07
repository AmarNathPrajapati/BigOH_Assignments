#include "Member.h"
#include <iostream>
#include <algorithm>

void Member::checkOutBook(BookItem &bookItem)
{
    if (checkedOutBooks.size() < 5)
    {
        checkedOutBooks.push_back(&bookItem);
        bookItem.setAvailability(false);
        std::cout << "Book checked out successfully." << std::endl;
    }
    else
    {
        std::cout << "You cannot check out more than 5 books." << std::endl;
    }
}

void Member::returnBook(BookItem &bookItem)
{
    auto it = std::find(checkedOutBooks.begin(), checkedOutBooks.end(), &bookItem);
    if (it != checkedOutBooks.end())
    {
        checkedOutBooks.erase(it);
        bookItem.setAvailability(true);
        std::cout << "Book returned successfully." << std::endl;
    }
    else
    {
        std::cout << "You haven't checked out this book." << std::endl;
    }
}

void Member::reserveBook(Book &book)
{
    std::cout << "Book has been reserved for you." << std::endl;
}

bool Member::hasOverdueBooks() const
{
    return fineAmount > 0;
}

void Member::addFine(int fine)
{
    fineAmount += fine;
}

void Member::clearFines()
{
    fineAmount = 0;
}

void Member::renewBook(BookItem &bookItem)
{
    std::cout << "Book renewed." << std::endl;
}

int Member::getFineAmount() const
{
    return fineAmount;
}
