#ifndef USER_SERVICE_H
#define USER_SERVICE_H

#include "../db/HotelManagementDB.h"
#include "../data/User.h"
#include "../data/Hotel.h"
#include <vector>

using namespace std;
class UserService
{
public:
    static User registerUser(string name, string email, string password, Role role);
    static bool isAuthenticated(int userID);
    static bool isAdmin(int userID);
    static bool isAgent(int userID);
    static bool updateProfile(int userID, User updatedDetails);
    static bool deleteUser(int userID);
    static vector<Hotel> searchHotels(string criteria);
};
#endif