#ifndef USER_H
#define USER_H

#include <iostream>
#include <vector>
using namespace std;

enum class Role { 
    ADMIN, AGENT, NORMAL
};

class User{
    private:
        int userID;
        string name;
        string email;
        string password;
        Role role;
        vector<int> bookings;
    public:
        User(int id, string n, string e, string p, Role r);
        int getUserID();
        Role getRole();
        string getName();
};
#endif