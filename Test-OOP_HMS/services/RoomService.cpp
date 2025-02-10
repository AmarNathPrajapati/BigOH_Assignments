#include "RoomService.h"

Room RoomService::addRoom(int userID, int hotelID, RoomType roomType, double price){
    if(!UserService::isAdmin(userID) && !UserService::isAgent(userID)){
        cout<<"Only Admin and Agent can add a Room!";
        return Room();
    }
    int newRoomID = db->getRooms().size() + 1;
    Room newRoom(newRoomID,hotelID, roomType, price);
    db->addRoom(newRoom);
    return newRoom;
}

bool RoomService::updateRoom(int userID, int roomID, Room updatedDetails){
    if(!UserService::isAdmin(userID) && !UserService::isAgent(userID)){
        cout<<"Only Admin and Agent can update a Room!";
        return false;
    }
    for(Room &room : db->getRooms()){
        if(room.getRoomID()==roomID){
            room = updatedDetails;
            return true;
        }
    }
    return false;
}

vector<Room> RoomService::getAllRooms(int userID){
    return db->getRooms();
}

bool RoomService::updateAvailability(int userID, int roomID, bool status){
    for(Room &room : db->getRooms()){
        if(room.getRoomID()==roomID){
            room.setAvailability(status);
            return true;
        }
    }
    return false;
}