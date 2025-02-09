#ifndef STATUS_H
#define STATUS_H

#include <string>
#include <ctime>
using namespace std;
class Status {
public:
    int statusID;
    int userID;
    time_t timestamp;
    virtual ~Status() = default;
    virtual string getStatusType() = 0;
};

class TextStatus : public Status {
public:
    string text;
    TextStatus(int id, int user, string txt);
    string getStatusType() override;
};

class ImageStatus : public Status {
public:
    string imagePath;
    ImageStatus(int id, int user, string imgPath);
    string getStatusType() override;
};

#endif
