#ifndef PLAYLIST_H
#define PLAYLIST_H

#include <vector>
#include <string>
using namespace std;

class Playlist {
public:
    int playlistID;
    int userID;
    string name;
    vector<int> videos;  // List of video IDs

    Playlist(int pID, int uID, string pname)
        : playlistID(pID), userID(uID), name(pname) {}
};

#endif // PLAYLIST_H
