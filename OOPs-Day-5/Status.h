#ifndef STATUS_H
#define STATUS_H

#include <string>

class Status {
public:
    int statusID;
    int userID;
    std::string timestamp;
    std::string statusType;
    std::string statusContent;

    Status(int id, int user, std::string type, std::string content);
};

#endif
