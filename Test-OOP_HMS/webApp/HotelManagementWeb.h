#ifndef HOTELMANAGEMENTWEB_H
#define HOTELMANAGEMENTWEB_H

#include "../data/Hotel.h"
#include "../services/BaseService.h"
#include <vector>

class HotelManagementWeb:public BaseService
{
public:
    static std::vector<Hotel> displayApprovedHotels();
};

#endif
