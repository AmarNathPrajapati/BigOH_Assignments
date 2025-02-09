#ifndef HOTELMANAGEMENTWEB_H
#define HOTELMANAGEMENTWEB_H

#include "../data/Hotel.h"
#include "../db/HotelManagementDB.h"
#include <vector>

class HotelManagementWeb
{
public:
    static std::vector<Hotel> displayApprovedHotels();
};

#endif
