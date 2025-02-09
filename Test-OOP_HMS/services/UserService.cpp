#include "UserService.h"

User UserService::registerUser(string name, string email, string password, Role role){
    int newUserID = HotelManagementDB::users.size() + 1;
    User newUser(newUserID, name, email, password, role);
    HotelManagementDB::users.push_back(newUser);
    return newUser;
}

bool UserService::isAuthenticated(int userID){
    for(User &user: HotelManagementDB::users){
        if(user.getUserID()==userID){
            return true;
        }
    }
    return false;
}
//??
bool UserService::isAdmin(int userID){
    for(User &user: HotelManagementDB::users){
        if(user.getUserID()== userID && user.getRole()==Role::ADMIN){
            return true;
        }
    }
    return false;
}
//??
bool UserService::isAgent(int userID){
    for(User &user: HotelManagementDB::users){
        if(user.getUserID()== userID && user.getRole()==Role::AGENT){
            return true;
        }
    }
    return false;
}

bool UserService::updateProfile(int userID, User updatedDetails){
    for(User &user: HotelManagementDB::users){
        if(user.getUserID() == userID){
            user = updatedDetails;
            return true;
        }
    }
    return false;
}

bool UserService::deleteUser(int userID){
    for(auto it = HotelManagementDB::users.begin(); it != HotelManagementDB::users.end(); ++it){
        if(it->getUserID()==userID){
            HotelManagementDB::users.erase(it);
            return true;
        }
    }
    return false;
}

vector<Hotel> UserService::searchHotels(string criteria){
    vector<Hotel> result;
    for(Hotel &hotel: HotelManagementDB::hotels){
        if(hotel.getApprovedStatus()){
            if (hotel.getName().find(criteria) != string::npos && hotel.getLocation().find(criteria) != string::npos){
                result.push_back(hotel);
            }
        }
    }
    return result;
}