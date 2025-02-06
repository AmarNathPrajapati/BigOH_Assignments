#ifndef CONTACT_H
#define CONTACT_H

#include <string>

class Contact {
public:
    int contactID;
    std::string name;
    std::string phoneNumber;
    std::string profilePicture;
    std::string statusMessage;

    Contact(int id, std::string name, std::string phone);
};

#endif
