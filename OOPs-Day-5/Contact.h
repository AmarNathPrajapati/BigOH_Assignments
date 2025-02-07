#ifndef CONTACT_H
#define CONTACT_H

#include <string>

class Contact {
public:
    int contactID;
    std::string name;
    std::string phone;

    Contact(int id, std::string n, std::string p);
};

#endif
