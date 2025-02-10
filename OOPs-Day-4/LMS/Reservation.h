#ifndef RESERVATION_H
#define RESERVATION_H

#include "Member.h"
#include "BookItem.h"
#include <iostream>
#include <string>
using namespace std;

class Reservation {
private:
    string reservationID;
    Member* member;
    BookItem* bookItem;
    string reservationDate;

public:
    Reservation(string reservationID, Member* member, BookItem* bookItem, string reservationDate);
    void displayReservationDetails() const;
    string getReservationID() const;
};

#endif
