#include "Booking.h"
Booking::Booking(){}
Booking::Booking(int id, int uID, int hID, int rID,  string checkIn, string checkOut) : bookingID(id), userID(uID), hotelID(hID), roomID(rID), checkInDate(checkIn),checkOutDate(checkOut), status(BookingStatus::CONFIRMED) {}

int Booking::getBookingID() const{
    return bookingID;
}
int Booking::getUserID() const{
    return userID;
}
int Booking::getHotelID() const{
    return hotelID;
}
int Booking::getRoomID() const{
    return roomID;
}
