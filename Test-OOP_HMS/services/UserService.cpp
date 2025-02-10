#include "UserService.h"

User UserService::registerUser(string name, string email, string password, Role role){
    int newUserID = db->getUsers().size() + 1;
    User newUser(newUserID, name, email, password, role);
    db->addUser(newUser);
    return newUser;
}

bool UserService::isAuthenticated(int userID){
    for(User &user: db->getUsers()){
        if(user.getUserID()==userID){
            return true;
        }
    }
    return false;
}
//??
bool UserService::isAdmin(int userID){
    for(User &user: db->getUsers()){
        if(user.getUserID()== userID && user.getRole()==Role::ADMIN){
            return true;
        }
    }
    return false;
}
//??
bool UserService::isAgent(int userID){
    for(User &user: db->getUsers()){
        if(user.getUserID()== userID && user.getRole()==Role::AGENT){
            return true;
        }
    }
    return false;
}

bool UserService::updateProfile(int userID, User updatedDetails){
    for(User &user: db->getUsers()){
        if(user.getUserID() == userID){
            user = updatedDetails;
            return true;
        }
    }
    return false;
}

bool UserService::deleteUser(int userID){
    for(auto it = db->getUsers().begin(); it != db->getUsers().end(); ++it){
        if(it->getUserID()==userID){
            db->getUsers().erase(it);
            return true;
        }
    }
    return false;
}

vector<Hotel> UserService::searchHotels(string criteria){
    vector<Hotel> result;
    for(Hotel &hotel: db->getHotels()){
        if(hotel.getApprovedStatus()){
            if (hotel.getName().find(criteria) != string::npos && hotel.getLocation().find(criteria) != string::npos){
                result.push_back(hotel);
            }
        }
    }
    return result;
}