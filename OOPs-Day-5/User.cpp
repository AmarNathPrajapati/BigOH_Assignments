#include "User.h"

User::User(int id, std::string name, std::string phone, std::string email) 
    : userID(id), name(name), phoneNumber(phone), email(email), profilePicture("default.jpg"), statusMessage("Hey there!") {}
