#include "PlaylistService.h"
#include <algorithm>

int PlaylistService::createPlaylist(int userID, string name) {
    // Playlist(int pID, int uID, string pname)
    //     : playlistID(pID), userID(uID), name(pname) {}

    if (AuthenticationService::isValidUser(userID)) {
        int playListID = Db::getInstance().getAllPlaylists().size()+1;
        Playlist *newPlaylist =new Playlist(playListID, userID, name);
        Db::getInstance().addPlaylist(newPlaylist);
        return playListID;
    }
    return -1;
}

void PlaylistService::addVideo(int playlistID, int videoID) {
    Playlist* playlist = Db::getInstance().getPlaylist(playlistID);
    if (playlist) {
        playlist->videos.push_back(videoID);
    }
}

void PlaylistService::removeVideo(int playlistID, int videoID) {
    Playlist* playlist = Db::getInstance().getPlaylist(playlistID);
    if (playlist) {
        playlist->videos.erase(
            remove(playlist->videos.begin(), playlist->videos.end(), videoID),
            playlist->videos.end()
        );
    }
}


void PlaylistService::deletePlaylist(int playlistID, int userID) {
    Playlist* playlist = Db::getInstance().getPlaylist(playlistID);
    if (playlist && playlist->userID == userID) {
        Db::getInstance().removePlaylist(playlistID);
    }
}
