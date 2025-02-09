#ifndef BOOKING_H
#define BOOKING_H

#include<iostream>
using namespace std;

enum class BookingStatus{
    PENDING, CONFIRMED, CANCELLED
};
class Booking{ 
    private:
        int bookingID;
        int userID;
        int hotelID;
        int roomID;
        string checkInDate;
        string checkOutDate;
        BookingStatus status;
    public:
        Booking();
        Booking(int id, int uID, int hID, int rID, string checkIn, string checkOut);
        int getBookingID() const;
        int getUserID() const;
        int getHotelID() const;
        int getRoomID() const;

};
#endif