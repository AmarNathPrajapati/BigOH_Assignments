#include "BookItem.h"

BookItem::BookItem(int id, const std::string& rack) : itemID(id), isAvailable(true), rackNumber(rack) {}

int BookItem::getItemID() const {
    return itemID;
}

bool BookItem::isItemAvailable() const {
    return isAvailable;
}

std::string BookItem::getRackNumber() const {
    return rackNumber;
}

void BookItem::setAvailability(bool availability) {
    isAvailable = availability;
}
