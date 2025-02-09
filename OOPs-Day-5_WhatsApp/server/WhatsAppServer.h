#ifndef WHATSAPPSERVER_H
#define WHATSAPPSERVER_H

#include <vector>
#include "../data/User.h"
using namespace std;

class WhatsAppServer {
private:
    static WhatsAppServer* instance;
    vector<User> users;
    WhatsAppServer() {}

public:
    static WhatsAppServer* getInstance();
    void registerUser(User user);
    User* getUserByID(int userID);
};

#endif
