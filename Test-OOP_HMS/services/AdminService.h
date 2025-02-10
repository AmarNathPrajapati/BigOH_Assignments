#ifndef ADMINSERVICE_H
#define ADMINSERVICE_H

#include "BaseService.h"

class AdminService : public BaseService{
public:
    static bool approveHotel(int hotelID);
    static bool deleteUser(int userID);
    static bool deleteHotel(int hotelID);
};

#endif

