#ifndef USER_H
#define USER_H

#include <string>
using namespace std;

class User {
public:
    int userID;
    string name;
    string email;
    string password;
    string role;  // "Viewer", "Creator", "Admin" 
    string joinDate;

    User(int id, string n, string e, string p, string r, string date)
        : userID(id), name(n), email(e), password(p), role(r), joinDate(date) {}
    string getRole() const{
        return role;
    }
    string getName() const{
        return name;
    }
    int getUserID() const{
        return userID;
    }
};

#endif // USER_H
