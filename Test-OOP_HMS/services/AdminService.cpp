#include "AdminService.h"

bool AdminService::approveHotel(int hotelID)
{
    for (Hotel &hotel : db->getHotels())
    { // Directly using db
        if (hotel.getHotelID() == hotelID)
        {
            hotel.approvedByAdmin = true;
            return true;
        }
    }
    return false;
}

bool AdminService::deleteUser(int userID)
{
    for (auto it = db->getUsers().begin(); it != db->getUsers().end(); ++it)
    {
        if (it->getUserID() == userID)
        {
            db->getUsers().erase(it);
            return true;
        }
    }
    return false;
}

bool AdminService::deleteHotel(int hotelID)
{
    for (auto it = db->getHotels().begin(); it != db->getHotels().end(); ++it)
    {
        if (it->getHotelID() == hotelID)
        {
            db->getHotels().erase(it);
            return true;
        }
    }
    return false;
}
