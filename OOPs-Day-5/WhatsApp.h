#ifndef WHATSAPP_H
#define WHATSAPP_H

#include <unordered_map>
#include <vector>
#include "User.h"
#include "Message.h"
#include "Status.h"

class WhatsApp {
private:
    std::unordered_map<int, User> users;
    std::vector<Message> messages;
    std::vector<Status> statuses;

public:
    bool registerUser(int userID, std::string name, std::string phone, std::string email);
    bool validateUser(int userID);
    bool addContact(int userID, int contactID);
    bool sendMessage(int senderID, int receiverID, std::string type, std::string content);
    bool editMessage(int userID, int messageID, std::string newContent);
    bool deleteMessage(int userID, int messageID);
    std::vector<Message> getMessages(int userID, int contactID);
    bool postStatus(int userID, std::string type, std::string content);
    std::vector<Status> getStatus(int userID);
    bool deleteStatus(int userID, int statusID);
};

#endif
