#include "WhatsApp.h"
#include <iostream>

bool WhatsApp::registerUser(int userID, std::string name, std::string phone, std::string email) {
    if (users.find(userID) != users.end()) return false;
    users[userID] = User(userID, name, phone, email);
    return true;
}

bool WhatsApp::validateUser(int userID) {
    return users.find(userID) != users.end();
}

bool WhatsApp::addContact(int userID, int contactID) {
    if (!validateUser(userID) || !validateUser(contactID)) return false;
    users[userID].contactsList.push_back(Contact(contactID, users[contactID].name, users[contactID].phoneNumber));
    return true;
}

bool WhatsApp::sendMessage(int senderID, int receiverID, std::string type, std::string content) {
    if (!validateUser(senderID) || !validateUser(receiverID)) return false;
    messages.push_back(Message(messages.size() + 1, senderID, receiverID, type, content));
    return true;
}

bool WhatsApp::editMessage(int userID, int messageID, std::string newContent) {
    for (auto& msg : messages) {
        if (msg.messageID == messageID && msg.senderID == userID) {
            msg.messageContent = newContent;
            return true;
        }
    }
    return false;
}

bool WhatsApp::deleteMessage(int userID, int messageID) {
    for (auto it = messages.begin(); it != messages.end(); ++it) {
        if (it->messageID == messageID && it->senderID == userID) {
            messages.erase(it);
            return true;
        }
    }
    return false;
}

std::vector<Message> WhatsApp::getMessages(int userID, int contactID) {
    std::vector<Message> userMessages;
    for (const auto& msg : messages) {
        if ((msg.senderID == userID && msg.receiverID == contactID) ||
            (msg.senderID == contactID && msg.receiverID == userID)) {
            userMessages.push_back(msg);
        }
    }
    return userMessages;
}

bool WhatsApp::postStatus(int userID, std::string type, std::string content) {
    if (!validateUser(userID)) return false;
    statuses.push_back(Status(statuses.size() + 1, userID, type, content));
    return true;
}

std::vector<Status> WhatsApp::getStatus(int userID) {
    std::vector<Status> userStatuses;
    for (const auto& status : statuses) {
        if (status.userID == userID) userStatuses.push_back(status);
    }
    return userStatuses;
}

bool WhatsApp::deleteStatus(int userID, int statusID) {
    for (auto it = statuses.begin(); it != statuses.end(); ++it) {
        if (it->statusID == statusID && it->userID == userID) {
            statuses.erase(it);
            return true;
        }
    }
    return false;
}
