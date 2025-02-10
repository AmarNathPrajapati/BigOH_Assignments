#ifndef ADMINISTRATOR_H
#define ADMINISTRATOR_H

#include "User.h"
using namespace std;

class Administrator : public User {
public:
    int adminID;

    Administrator(int id, string n, string e, string p, string date, int admin_id)
        : User(id, n, e, p, "Admin", date), adminID(admin_id) {}
};

#endif // ADMINISTRATOR_H
