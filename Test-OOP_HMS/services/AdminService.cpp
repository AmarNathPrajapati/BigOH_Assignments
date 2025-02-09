#include "AdminService.h"
#include <iostream>

bool AdminService::approveHotel(int hotelID) {
    for (Hotel& hotel : HotelManagementDB::hotels) {
        if (hotel.getHotelID() == hotelID) {
            hotel.approvedByAdmin = true;
            return true;
        }
    }
    return false;
}

bool AdminService::deleteUser(int userID) {
    for (auto it = HotelManagementDB::users.begin(); it != HotelManagementDB::users.end(); ++it) {
        if (it->getUserID() == userID) {
            HotelManagementDB::users.erase(it);
            return true;
        }
    }
    return false;
}

bool AdminService::deleteHotel(int hotelID) {
    for (auto it = HotelManagementDB::hotels.begin(); it != HotelManagementDB::hotels.end(); ++it) {
        if (it->getHotelID() == hotelID) {
            HotelManagementDB::hotels.erase(it);
            return true;
        }
    }
    return false;
}

