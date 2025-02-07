#ifndef MESSAGE_H
#define MESSAGE_H

#include <string>
#include <ctime>

class Message {
public:
    int messageID;
    int senderID;
    int receiverID;
    std::time_t timestamp;
    
    Message(int msgID, int sender, int receiver);
    virtual ~Message() = default;
    virtual std::string getMessageType() = 0;
};

class TextMessage : public Message {
public:
    std::string text;
    TextMessage(int msgID, int sender, int receiver, std::string txt);
    std::string getMessageType() override;
};

class AudioMessage : public Message {
public:
    std::string audioFilePath;
    AudioMessage(int msgID, int sender, int receiver, std::string filePath);
    std::string getMessageType() override;
};

class VideoMessage : public Message {
public:
    std::string videoFilePath;
    VideoMessage(int msgID, int sender, int receiver, std::string filePath);
    std::string getMessageType() override;
};

#endif
