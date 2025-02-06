#ifndef USER_H
#define USER_H

#include <string>
#include <vector>
#include "Contact.h"

class User {
public:
    int userID;
    std::string name;
    std::string phoneNumber;
    std::string email;
    std::string profilePicture;
    std::string statusMessage;
    std::vector<Contact> contactsList;
    User() {}  // Default constructor
    User(int id, std::string name, std::string phone, std::string email = "");
};

#endif
