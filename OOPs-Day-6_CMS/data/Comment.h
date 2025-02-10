#ifndef COMMENT_H
#define COMMENT_H

#include <string>
using namespace std;

class Comment {
public:
    int commentID;
    int videoID;
    int userID;
    string text;
    string timestamp;

    Comment(int cID, int vID, int uID, string txt, string time)
        : commentID(cID), videoID(vID), userID(uID), text(txt), timestamp(time) {}
};

#endif // COMMENT_H
