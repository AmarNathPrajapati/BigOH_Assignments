#include "BookingService.h"
#include <iostream>


Booking BookingService::createBooking(int userID, int hotelID, int roomID, string checkIn, string checkOut) {
    int newBookingID = db->getBookings().size() + 1;
    Booking newBooking(newBookingID, userID, hotelID, roomID, checkIn, checkOut);
    db->addBooking(newBooking); 
    return newBooking;
}

bool BookingService::cancelBooking(int userID, int bookingID) {
    vector<Booking>& bookings = db->getBookings();
    for (auto it = bookings.begin(); it != bookings.end(); ++it) {
        if (it->getBookingID() == bookingID && it->getUserID() == userID) {
            bookings.erase(it);
            return true;
        }
    }
    return false;
}

vector<Booking> BookingService::getUserBookings(int userID) {
    vector<Booking> userBookings;
    for (const Booking& booking : db->getBookings()) {
        if (booking.getUserID() == userID) {
            userBookings.push_back(booking);
        }
    }
    return userBookings;
}

Booking BookingService::getBookingDetails(int bookingID) {
    for (const Booking& booking : db->getBookings()) {
        if (booking.getBookingID() == bookingID) {
            return booking;
        }
    }
    return Booking();  // Return empty booking if not found
}
