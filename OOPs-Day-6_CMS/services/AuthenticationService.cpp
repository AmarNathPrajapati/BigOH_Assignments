#include "AuthenticationService.h"

User* AuthenticationService::authenticateUser(string email, string pass) {
    vector<User*> users = Db::getInstance().getAllUsers(); 

    for (User* user : users) {
        if (user->email == email && user->password == pass) {
            return user;
        }
    }

    return nullptr;
}

bool AuthenticationService::isValidUser(int userID) {
    return Db::getInstance().getUser(userID) != nullptr;
}

bool AuthenticationService::isAdmin(int adminID) {
    User* user = Db::getInstance().getUser(adminID);
    return user && user->role == "Admin";
}
