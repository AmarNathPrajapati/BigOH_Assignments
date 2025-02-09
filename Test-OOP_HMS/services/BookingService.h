#ifndef BOOKINGSERVICE_H
#define BOOKINGSERVICE_H

#include "../data/Booking.h"
#include "../db/HotelManagementDB.h"

using namespace std;

class BookingService
{
public:
    static Booking createBooking(int userID, int hotelID, int roomID, string checkIn, string checkOut);
    static bool cancelBooking(int userID, int bookingID);
    static vector<Booking> getUserBookings(int userID);
    static Booking getBookingDetails(int bookingID);
};

#endif
