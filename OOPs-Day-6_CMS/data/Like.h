#ifndef LIKE_H
#define LIKE_H

class Like {
public:
    int likeID;
    int videoID;
    int userID;

    Like(int lID, int vID, int uID)
        : likeID(lID), videoID(vID), userID(uID) {}
};

#endif // LIKE_H
