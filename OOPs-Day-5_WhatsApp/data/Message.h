#ifndef MESSAGE_H
#define MESSAGE_H

#include <string>
#include <ctime>
using namespace std;
class Message {
public:
    int messageID;
    int senderID;
    int receiverID;
    time_t timestamp;
    
    Message(int msgID, int sender, int receiver);
    virtual ~Message() = default;
    virtual string getMessageType() = 0;
};

class TextMessage : public Message {
public:
    string text;
    TextMessage(int msgID, int sender, int receiver, string txt);
    string getMessageType() override;
};

class AudioMessage : public Message {
public:
    string audioFilePath;
    AudioMessage(int msgID, int sender, int receiver, string filePath);
    string getMessageType() override;
};

class VideoMessage : public Message {
public:
    string videoFilePath;
    VideoMessage(int msgID, int sender, int receiver, string filePath);
    string getMessageType() override;
};

#endif
