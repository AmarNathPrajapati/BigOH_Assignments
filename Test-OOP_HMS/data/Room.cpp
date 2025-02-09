 #include "Room.h"
 Room::Room(){};
 Room::Room(int id, int hid, RoomType type, double price):roomID(id), hotelID(hid), roomType(type), pricePerNight(price), availability(true){} 
 int Room::getRoomID(){
    return roomID;
 }
 void Room::setAvailability(bool s){
    availability = s;
 }
 int Room::getPrice(){
   return pricePerNight;
 }