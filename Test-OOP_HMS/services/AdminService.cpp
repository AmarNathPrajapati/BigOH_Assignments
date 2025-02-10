#include "AdminService.h"

bool AdminService::approveHotel(int hotelID) {
    for (Hotel& hotel : db->hotels) {  // Directly using db
        if (hotel.getHotelID() == hotelID) {
            hotel.approvedByAdmin = true;
            return true;
        }
    }
    return false;
}

bool AdminService::deleteUser(int userID) {
    for (auto it = db->users.begin(); it != db->users.end(); ++it) {
        if (it->getUserID() == userID) {
            db->users.erase(it);
            return true;
        }
    }
    return false;
}

bool AdminService::deleteHotel(int hotelID) {
    for (auto it = db->hotels.begin(); it != db->hotels.end(); ++it) {
        if (it->getHotelID() == hotelID) {
            db->hotels.erase(it);
            return true;
        }
    }
    return false;
}
