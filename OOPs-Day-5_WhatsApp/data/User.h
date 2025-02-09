#ifndef USER_H
#define USER_H

#include <string>
using namespace std;
class User {
public:
    int userID;
    string name;
    string phone;
    string email;
    
    User(int id, string n, string p, string e);
};

#endif
