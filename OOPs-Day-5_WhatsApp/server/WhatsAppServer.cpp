#include "WhatsAppServer.h"

WhatsAppServer* WhatsAppServer::instance = nullptr;

WhatsAppServer* WhatsAppServer::getInstance() {
    if (instance == nullptr) {
        instance = new WhatsAppServer();
    }
    return instance;
}

void WhatsAppServer::registerUser(User user) {
    users.push_back(user);
}

User* WhatsAppServer::getUserByID(int userID) {
    for (auto& user : users) {
        if (user.userID == userID)
            return &user;
    }
    return nullptr;
}
