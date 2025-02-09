#include <iostream>
#include "./services/UserService.h"
#include "./services/HotelService.h"
#include "./services/RoomService.h"
#include "./services/BookingService.h"
#include "./services/FeedbackService.h"
#include "./services/AdminService.h"
#include "./services/PaymentService.h"
#include "./webApp/HotelManagementWeb.h"

using namespace std;
int main()
{
    // Create Users
    User user1 = UserService::registerUser("Amar", "admin@bigohtech.com", "password", Role::ADMIN);
    User user2 = UserService::registerUser("Amit", "amit@bigohtech.com", "securepass", Role::NORMAL);

    cout << "Users Registered:\n";
    cout << "User ID: " << user1.getUserID() << " Name: " << user1.getName() << endl;
    cout << "User ID: " << user2.getUserID() << " Name: " << user2.getName() << endl;

    // Add Hotels (Admin)
    vector<string> hotel1Facilities = {"Free Wi-Fi", "Swimming Pool", "Fitness Center", "Spa", "Restaurant", "Bar", "Room Service", "24/7 Front Desk", "Laundry Service", "Pet-Friendly", "Concierge Service"};

    vector<string> hotel2Facilities = {"Free Wi-Fi", "Swimming Pool", "Fitness Center", "Spa", "Restaurant", "Bar", "Room Service", "Parking", "Business Center", "Pet-Friendly", "Concierge Service"};

    Hotel hotel1 = HotelService::addHotel(1, "Taj Mahal Palace", "Mumbai", hotel1Facilities);
    Hotel hotel2 = HotelService::addHotel(1, "The Oberoi", "Delhi", hotel2Facilities);

    cout << "\nHotels Added (Not Approved Yet):\n";
    cout << "Hotel ID: " << hotel1.getHotelID() << " Name: " << hotel1.getName() << endl;
    cout << "Hotel ID: " << hotel2.getHotelID() << " Name: " << hotel2.getName() << endl;

    // Approve Hotels
    AdminService::approveHotel(hotel1.getHotelID());
    AdminService::approveHotel(hotel2.getHotelID());

    cout << "\nHotels Approved!\n";

    // Add Rooms to Hotels
    Room room1 = RoomService::addRoom(1, hotel1.getHotelID(), RoomType::SINGLE, 5000);
    Room room2 = RoomService::addRoom(1, hotel2.getHotelID(), RoomType::DOUBLE, 10000);

    cout << "\nRooms Added:\n";
    cout << "Room ID: " << room1.getRoomID() << " in Hotel: " << hotel1.getName() << " Price: " << room1.getPrice() << endl;
    cout << "Room ID: " << room2.getRoomID() << " in Hotel: " << hotel2.getName() << " Price: " << room2.getPrice() << endl;

    // Display Approved Hotels
    vector<Hotel> approvedHotels = HotelManagementWeb::displayApprovedHotels();
    cout << "\nApproved Hotels:\n";
    for (const auto &hotel : approvedHotels)
    {
        cout << "Hotel ID: " << hotel.getHotelID() << " Name: " << hotel.getName() << " City: " << hotel.getLocation() << endl;
    }

    // Booking a Room
    Booking booking = BookingService::createBooking(user1.getUserID(), hotel1.getHotelID(), room1.getRoomID(), "2025-02-10", "2025-02-15");
    cout << "\nBooking Created!\n";
    cout << "Booking ID: " << booking.getBookingID() << " for User ID: " << booking.getUserID() << endl;

    // Add Feedback for Hotel
    FeedbackService::addFeedback(user1.getUserID(), hotel1.getHotelID(), 5, "Amazing experience!");

    cout << "\nFeedback Added for Hotel ID: " << hotel1.getHotelID() << endl;

    // //Process Payment
    Payment payment = PaymentService::processPayment(user1.getUserID(), booking.getBookingID(), room1.getPrice());
    cout << "\nPayment Processed: Payment ID " << payment.getPaymentID() << " Amount: " << payment.getAmount() << endl;

    // Display User's Bookings
    vector<Booking> userBookings = BookingService::getUserBookings(user1.getUserID());
    cout << "\nUser's Bookings:\n";
    for (const auto &b : userBookings)
    {
        cout << "Booking ID: " << b.getBookingID() << " Hotel ID: " << b.getHotelID() << " Room ID: " << b.getRoomID() << endl;
    }

    return 0;
}
