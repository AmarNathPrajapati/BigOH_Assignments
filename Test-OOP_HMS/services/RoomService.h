#ifndef ROOM_SERVICE_H
#define ROOM_SERVICE_H

#include <iostream>
#include <vector>
#include "../data/Room.h"
#include "../db/HotelManagementDB.h"
#include "UserService.h"
using namespace std;

class RoomService
{
public:
    static Room addRoom(int userID, int hotelID, RoomType roomType, double price);
    static bool updateRoom(int userID, int roomID, Room updatedDetails);
    static vector<Room> getAllRooms(int userID);
    static bool updateAvailability(int userID, int roomID, bool Status);
};
#endif