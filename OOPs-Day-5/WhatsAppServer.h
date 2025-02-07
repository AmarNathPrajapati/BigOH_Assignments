#ifndef WHATSAPPSERVER_H
#define WHATSAPPSERVER_H

#include <vector>
#include "User.h"

class WhatsAppServer {
private:
    static WhatsAppServer* instance;
    std::vector<User> users;
    WhatsAppServer() {}

public:
    static WhatsAppServer* getInstance();
    void registerUser(User user);
    User* getUserByID(int userID);
};

#endif
