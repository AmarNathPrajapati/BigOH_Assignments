#ifndef BOOKITEM_H
#define BOOKITEM_H

#include <string>

class BookItem {
private:
    int itemID;
    bool isAvailable; // Availability of this specific book item
    std::string rackNumber;

public:
    BookItem(int id, const std::string& rack) : itemID(id), isAvailable(true), rackNumber(rack) {}

    int getItemID() const { return itemID; }
    bool isItemAvailable() const { return isAvailable; }
    std::string getRackNumber() const { return rackNumber; }

    void setAvailability(bool availability) { isAvailable = availability; }
};
#endif
