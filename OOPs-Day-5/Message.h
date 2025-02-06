#ifndef MESSAGE_H
#define MESSAGE_H

#include <string>

class Message {
public:
    int messageID;
    int senderID;
    int receiverID;
    std::string timestamp;
    std::string messageType;
    std::string messageContent;

    Message(int msgID, int sender, int receiver, std::string type, std::string content);
};

#endif
