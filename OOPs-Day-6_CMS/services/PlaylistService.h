#ifndef PLAYLISTSERVICE_H
#define PLAYLISTSERVICE_H

#include "../db/db.h"
#include "AuthenticationService.h"
using namespace std;

class PlaylistService
{
public:
    static int createPlaylist(int userID, string name);
    static void addVideo(int playlistID, int videoID);
    static void removeVideo(int playlistID, int videoID);
    static void deletePlaylist(int playlistID, int userID);
};

#endif // PLAYLISTSERVICE_H
