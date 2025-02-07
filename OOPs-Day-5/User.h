#ifndef USER_H
#define USER_H

#include <string>

class User {
public:
    int userID;
    std::string name;
    std::string phone;
    std::string email;
    
    User(int id, std::string n, std::string p, std::string e);
};

#endif
