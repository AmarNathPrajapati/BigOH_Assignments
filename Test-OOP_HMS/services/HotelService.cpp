#include "HotelService.h"

Hotel HotelService::addHotel(int userID, string name, string location, vector<string>facilities){//?? rooms
    if(!UserService::isAdmin(userID) && !UserService::isAgent(userID)){
        cout<<"Only Admin and Agent can add a hotel!";
        return Hotel();
    }
    int newHotelID = HotelManagementDB::hotels.size()+1;
    Hotel newHotel(newHotelID, name, location, facilities);
    HotelManagementDB::hotels.push_back(newHotel);
    return newHotel;
}

bool HotelService::updateHotel(int userID, int hotelID, Hotel updatedDetails){
    if(!UserService::isAdmin(userID) && !UserService::isAgent(userID)){
        cout<<"Only Admin and Agent can add a hotel!";
        return false;
    }
    for(Hotel &hotel:HotelManagementDB::hotels){
        if(hotel.getHotelID()==hotelID){
            hotel = updatedDetails;
            return true;
        }
    }
    return false;
}

vector<Hotel> getHotels(){
    return HotelManagementDB::hotels;
    
}

Hotel HotelService::getHotelDetails(int hotelID){
    for(Hotel &hotel : HotelManagementDB::hotels){
        if(hotel.getHotelID()==hotelID){
            return hotel;
        }
    }
    return Hotel(-1, "","",{});
}