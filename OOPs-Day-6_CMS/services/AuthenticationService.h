#ifndef AUTHENTICATIONSERVICE_H
#define AUTHENTICATIONSERVICE_H

#include "../db/db.h"
#include <string>
using namespace std;

class AuthenticationService
{
public:
    static User *authenticateUser(string email, string pass);
    static bool isValidUser(int userID);
    static bool isAdmin(int adminID);
};

#endif // AUTHENTICATIONSERVICE_H
