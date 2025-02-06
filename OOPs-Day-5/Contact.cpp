#include "Contact.h"

Contact::Contact(int id, std::string name, std::string phone) 
    : contactID(id), name(name), phoneNumber(phone), profilePicture("default.jpg"), statusMessage("Hey there!") {}
