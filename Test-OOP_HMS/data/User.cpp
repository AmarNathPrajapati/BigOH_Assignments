#include "User.h"
User::User(int id, string n, string e, string p, Role r):userID(id), name(n), email(e), password(p), role(r) {}

int User::getUserID(){
    return userID;
}

Role User::getRole(){
    return role;
}
string User::getName(){
    return name;
}