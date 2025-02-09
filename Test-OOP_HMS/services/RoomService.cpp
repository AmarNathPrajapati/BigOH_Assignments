#include "RoomService.h"

Room RoomService::addRoom(int userID, int hotelID, RoomType roomType, double price){
    if(!UserService::isAdmin(userID) && !UserService::isAgent(userID)){
        cout<<"Only Admin and Agent can add a Room!";
        return Room();
    }
    int newRoomID = HotelManagementDB::rooms.size() + 1;
    Room newRoom(newRoomID,hotelID, roomType, price);
    HotelManagementDB::rooms.push_back(newRoom);
    return newRoom;
}

bool RoomService::updateRoom(int userID, int roomID, Room updatedDetails){
    if(!UserService::isAdmin(userID) && !UserService::isAgent(userID)){
        cout<<"Only Admin and Agent can update a Room!";
        return false;
    }
    for(Room &room : HotelManagementDB::rooms){
        if(room.getRoomID()==roomID){
            room = updatedDetails;
            return true;
        }
    }
    return false;
}

vector<Room> RoomService::getAllRooms(int userID){
    return HotelManagementDB::rooms;
}

bool RoomService::updateAvailability(int userID, int roomID, bool status){
    for(Room &room : HotelManagementDB::rooms){
        if(room.getRoomID()==roomID){
            room.setAvailability(status);
            return true;
        }
    }
    return false;
}