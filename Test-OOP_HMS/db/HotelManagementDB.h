#ifndef HOTELMANAGEMENTDB_H
#define HOTELMANAGEMENTDB_H

#include <vector>
using namespace std;

// Data classes include
#include "../data/User.h"
#include "../data/Hotel.h"
#include "../data/Room.h"
#include "../data/Booking.h"
#include "../data/Feedback.h"
#include "../data/Payment.h"

class HotelManagementDB {
private:
    // Private Constructor to prevent direct instantiation
    HotelManagementDB();

    // Delete Copy Constructor & Assignment Operator
    HotelManagementDB(const HotelManagementDB&) = delete;
    HotelManagementDB& operator=(const HotelManagementDB&) = delete;

    // Static Singleton Instance
    static HotelManagementDB* instance;

    // Data storage
    vector<User> users;
    vector<Hotel> hotels;
    vector<Room> rooms;
    vector<Booking> bookings;
    vector<Feedback> feedbacks;
    vector<Payment> payments;

public:
    // Static Method to get Singleton Instance
    static HotelManagementDB* getInstance();

    // Getter & Adder for Data
    vector<User>& getUsers();
    vector<Hotel>& getHotels();
    vector<Room>& getRooms();
    vector<Booking>& getBookings();
    vector<Feedback>& getFeedbacks();
    vector<Payment>& getPayments();

    void addUser(const User& user);
    void addHotel(const Hotel& hotel);
    void addRoom(const Room& room);
    void addBooking(const Booking& booking);
    void addFeedback(const Feedback& feedback);
    void addPayment(const Payment& payment);
};

#endif // HOTELMANAGEMENTDB_H
