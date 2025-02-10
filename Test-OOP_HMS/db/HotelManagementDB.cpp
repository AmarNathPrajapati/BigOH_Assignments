#include "HotelManagementDB.h"

// Initialize static instance as nullptr
HotelManagementDB* HotelManagementDB::instance = nullptr;

// Private Constructor
HotelManagementDB::HotelManagementDB() {}

// Get Singleton Instance
HotelManagementDB* HotelManagementDB::getInstance() {
    if (instance == nullptr) {
        instance = new HotelManagementDB();
    }
    return instance;
}

// Getters
vector<User>& HotelManagementDB::getUsers() { return users; }
vector<Hotel>& HotelManagementDB::getHotels() { return hotels; }
vector<Room>& HotelManagementDB::getRooms() { return rooms; }
vector<Booking>& HotelManagementDB::getBookings() { return bookings; }
vector<Feedback>& HotelManagementDB::getFeedbacks() { return feedbacks; }
vector<Payment>& HotelManagementDB::getPayments() { return payments; }

// Adders
void HotelManagementDB::addUser(const User& user) { users.push_back(user); }
void HotelManagementDB::addHotel(const Hotel& hotel) { hotels.push_back(hotel); }
void HotelManagementDB::addRoom(const Room& room) { rooms.push_back(room); }
void HotelManagementDB::addBooking(const Booking& booking) { bookings.push_back(booking); }
void HotelManagementDB::addFeedback(const Feedback& feedback) { feedbacks.push_back(feedback); }
void HotelManagementDB::addPayment(const Payment& payment) { payments.push_back(payment); }
