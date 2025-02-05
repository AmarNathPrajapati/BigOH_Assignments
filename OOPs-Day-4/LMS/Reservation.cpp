#include "Reservation.h"
#include <iostream>

Reservation::Reservation(string reservationID, Member* member, BookItem* bookItem, string reservationDate)
    : reservationID(reservationID), member(member), bookItem(bookItem), reservationDate(reservationDate) {}

void Reservation::displayReservationDetails() const {
    cout << "Reservation ID: " << reservationID << ", Member: " << member->getName() << ", Book: ";
    bookItem->displayBookItemInfo();
    cout << "Reservation Date: " << reservationDate << endl;
}

string Reservation::getReservationID() const {
    return reservationID;
}
