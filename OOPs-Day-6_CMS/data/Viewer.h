#ifndef VIEWER_H
#define VIEWER_H

#include "User.h"
#include <vector>
using namespace std;

class Viewer : public User {
public:
    vector<int> watchHistory;
    vector<int> likedVideos;
    vector<int> subscriptions;
    vector<int> playlists;

    Viewer(int id, string n, string e, string p, string date)
        : User(id, n, e, p, "Viewer", date) {}
};

#endif // VIEWER_H
