#ifndef VIDEO_H
#define VIDEO_H

#include <string>
#include <vector>
using namespace std;

class Video {
public:
    int videoID;
    string title;
    string category;
    string description;
    string uploadDate;
    int views;
    int likes;
    vector<int> comments;  // Stores comment IDs
    int ownerID;  // Content Creator ID
    bool approved;

    Video(int id, string t, string c, string d, string date, int owner)
        : videoID(id), title(t), category(c), description(d), uploadDate(date), views(0), likes(0), ownerID(owner), approved(false) {}
    
    
};

#endif // VIDEO_H
