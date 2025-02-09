#ifndef CONTACT_H
#define CONTACT_H

#include <string>
using namespace std;

class Contact {
public:
    int contactID;
    string name;
    string phone;

    Contact(int id, string n, string p);
};

#endif
