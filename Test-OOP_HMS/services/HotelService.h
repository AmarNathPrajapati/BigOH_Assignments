#ifndef HOTEL_SERVICE_H
#define HOTEL_SERVICE_H

#include "../data/Hotel.h"
#include "UserService.h"
#include "BaseService.h"
#include <vector>

using namespace std;
class HotelService : public BaseService
{

public:
    static Hotel addHotel(int userID, string name, string location, vector<string> facalities);
    static bool updateHotel(int userID, int hotelID, Hotel updateDetails);
    static vector<Hotel> getHotels();
    static Hotel getHotelDetails(int hotelID);
};

#endif