#include "BookingService.h"
#include <iostream>

Booking BookingService::createBooking(int userID, int hotelID, int roomID, string checkIn, string checkOut) {
    int newBookingID = HotelManagementDB::bookings.size() + 1;
    Booking newBooking(newBookingID, userID, hotelID, roomID, checkIn, checkOut);
    HotelManagementDB::bookings.push_back(newBooking);
    return newBooking;
}

bool BookingService::cancelBooking(int userID, int bookingID) {
    for (auto it = HotelManagementDB::bookings.begin(); it != HotelManagementDB::bookings.end(); ++it) {
        if (it->getBookingID() == bookingID && it->getUserID()== userID) {
            HotelManagementDB::bookings.erase(it);
            return true;
        }
    }
    return false;
}

vector<Booking> BookingService::getUserBookings(int userID) {
    vector<Booking> userBookings;
    for (const Booking& booking : HotelManagementDB::bookings) {
        if (booking.getUserID() == userID) {
            userBookings.push_back(booking);
        }
    }
    return userBookings;
}

Booking BookingService::getBookingDetails(int bookingID) {
    for (const Booking& booking : HotelManagementDB::bookings) {
        if (booking.getBookingID() == bookingID) {
            return booking;
        }
    }
    return Booking(); // Return empty booking if not found
}
