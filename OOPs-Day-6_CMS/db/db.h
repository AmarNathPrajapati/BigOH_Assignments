#ifndef DB_H
#define DB_H

#include <vector>
#include <unordered_map>

//user defined data structure
#include "../data/User.h"
#include "../data/Viewer.h"
#include "../data/ContentCreator.h"
#include "../data/Administrator.h"
#include "../data/Video.h"
#include "../data/Comment.h"
#include "../data/Playlist.h"
#include "../data/Subscription.h"
#include "../data/Like.h"

using namespace std;

class Db {
public:
    static Db& getInstance();  // Singleton Pattern (Only One Database Object)

    // Users
    void addUser(User* user);
    User* getUser(int userID);
    vector<User*> getAllUsers();

    // Videos
    void addVideo(Video* video);
    void deleteVideo(int videoID);
    vector<Comment*>getCommentsByVideo(int videoID);
    Video* getVideo(int videoID);
    vector<Video*> getAllVideos();


    // Comments
    void addComment(Comment* comment);
    void removeComment(int commentID);
    Comment* getComment(int commentID);
    vector<Comment*> getAllComments();

    // Playlists
    void addPlaylist(Playlist* playlist);
    void removePlaylist(int playListID);
    Playlist* getPlaylist(int playlistID);
    vector<Playlist*> getAllPlaylists();

    // Subscriptions
    void addSubscription(Subscription* sub);
    void removeSubscription(int subscriberID, int creatorID); 
    vector<int> getSubscribers(int creatorID);
    Subscription* getSubscription(int subID);
    vector<Subscription*> getAllSubscriptions();

    // Likes
    void addLike(Like* like);
    Like* getLike(int likeID);
    vector<Like*> getAllLikes();

private:
    Db() {}  // Private Constructor for Singleton Pattern
    Db(const Db&) = delete;
    Db& operator=(const Db&) = delete;

    vector<User*> users;
    vector<Video*> videos;
    vector<Comment*> comments;
    vector<Playlist*> playlists;
    vector<Subscription*> subscriptions;
    vector<Like*> likes;
};

#endif // DB_H
