#ifndef HOTELMANAGEMENTDB_H
#define HOTELMANAGEMENTDB_H

#include <vector>
using namespace std;
//defined data classes
#include "../data/User.h"
#include "../data/Hotel.h"
#include "../data/Room.h"
#include "../data/Booking.h"
#include "../data/Feedback.h"
#include "../data/Payment.h"

class HotelManagementDB{
    public:
        static vector<User> users;
        static vector<Hotel> hotels;
        static vector<Room> rooms;
        static vector<Booking> bookings;
        static vector<Feedback> feedbacks;
        static vector<Payment> payments;
};
#endif