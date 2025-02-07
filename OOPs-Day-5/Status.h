#ifndef STATUS_H
#define STATUS_H

#include <string>
#include <ctime>

class Status {
public:
    int statusID;
    int userID;
    std::time_t timestamp;
    virtual ~Status() = default;
    virtual std::string getStatusType() = 0;
};

class TextStatus : public Status {
public:
    std::string text;
    TextStatus(int id, int user, std::string txt);
    std::string getStatusType() override;
};

class ImageStatus : public Status {
public:
    std::string imagePath;
    ImageStatus(int id, int user, std::string imgPath);
    std::string getStatusType() override;
};

#endif
