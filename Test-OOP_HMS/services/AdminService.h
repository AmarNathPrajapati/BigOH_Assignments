#ifndef ADMINSERVICE_H
#define ADMINSERVICE_H

#include "../db/HotelManagementDB.h"

class AdminService {
public:
    static bool approveHotel(int hotelID);
    static bool deleteUser(int userID);
    static bool deleteHotel(int hotelID);
};

#endif
