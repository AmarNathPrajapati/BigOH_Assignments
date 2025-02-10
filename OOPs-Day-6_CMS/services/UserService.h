#ifndef USERSERVICE_H
#define USERSERVICE_H
#include <string>
#include <iostream>
#include "../utils/Utils.h"
#include "../db/db.h"
#include "AuthenticationService.h"
using namespace std;

class UserService
{
public:
    static void registerUser(string name, string email, string pass, string role, string extra);
    static User *getUserProfile(int userID);
    static void updateUserProfile(int userID, User *newDetails);
};

#endif // USERSERVICE_H
