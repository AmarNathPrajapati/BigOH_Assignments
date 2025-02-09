#ifndef ROOM_H
#define ROOM_H
#include <iostream>
using namespace std;

enum class RoomType{
    SINGLE, DOUBLE, SUITE
};

class Room{
    private:
        int roomID;
        int hotelID;
        RoomType roomType;
        double pricePerNight;
        bool availability;
    public:
        Room();
        Room(int id, int hid, RoomType type, double price);
        int getRoomID();
        void setAvailability(bool status);
        int getPrice();
};
#endif 