#include "WhatsAppApp.h"
#include <iostream>

WhatsAppApp::WhatsAppApp(User* user) {
    if (WhatsAppServer::getInstance()->getUserByID(user->userID)) {
        currentUser = user;
    } else {
        std::cout << "User not registered on WhatsApp Server.\n";
        currentUser = nullptr;
    }
}

void WhatsAppApp::addContact(Contact contact) {
    contacts.push_back(contact);
    std::cout << "Contact added: " << contact.name << std::endl;
}

std::vector<Contact> WhatsAppApp::getContacts() {
    return contacts;
}

void WhatsAppApp::sendMessage(Message* msg) {
    if (!currentUser) {
        std::cout << "You are not a registered user.\n";
        return;
    }
    messages.push_back(msg);
    std::cout << "Message sent from " << msg->senderID << " to " << msg->receiverID << std::endl;
}

void WhatsAppApp::editMessage(int messageID, const std::string& newContent) {
    for (auto& msg : messages) {
        if (msg->messageID == messageID) {
            if (TextMessage* textMsg = dynamic_cast<TextMessage*>(msg)) {
                textMsg->text = newContent;
                std::cout << "Message edited successfully.\n";
            } else {
                std::cout << "Only text messages can be edited.\n";
            }
            return;
        }
    }
    std::cout << "Message ID not found.\n";
}

void WhatsAppApp::deleteMessage(int messageID) {
    for (auto it = messages.begin(); it != messages.end(); ++it) {
        if ((*it)->messageID == messageID) {
            delete *it;
            messages.erase(it);
            std::cout << "Message deleted successfully.\n";
            return;
        }
    }
    std::cout << "Message ID not found.\n";
}

std::vector<Message*> WhatsAppApp::getMessages(int senderID, int receiverID) {
    std::vector<Message*> userMessages;
    for (auto& msg : messages) {
        if ((msg->senderID == senderID && msg->receiverID == receiverID) ||
            (msg->senderID == receiverID && msg->receiverID == senderID)) {
            userMessages.push_back(msg);
        }
    }
    return userMessages;
}

void WhatsAppApp::postStatus(Status* status) {
    if (!currentUser) {
        std::cout << "You are not a registered user.\n";
        return;
    }
    statuses.push_back(status);
    std::cout << "Status posted by user: " << status->userID << std::endl;
}

std::vector<Status*> WhatsAppApp::getStatus() {
    return statuses;
}

void WhatsAppApp::deleteStatus(int statusID) {
    for (auto it = statuses.begin(); it != statuses.end(); ++it) {
        if ((*it)->statusID == statusID) {
            delete *it;
            statuses.erase(it);
            std::cout << "Status deleted successfully.\n";
            return;
        }
    }
    std::cout << "Status ID not found.\n";
}
