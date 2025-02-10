#include "db.h"
#include <iostream>
#include <algorithm>
// Get Single Instance of Database
Db &Db::getInstance()
{
    static Db instance;
    return instance;
}

// User Operations
void Db::addUser(User *user)
{
    users.push_back(user);
}

User *Db::getUser(int userID)
{
    for (User *user : users)
    {
        if (user->userID == userID)
        {
            return user;
        }
    }
    return nullptr;
}

vector<User *> Db::getAllUsers()
{
    return users;
}

// Video Operations
void Db::addVideo(Video *video)
{
    videos.push_back(video);
}

Video *Db::getVideo(int videoID)
{
    for (Video *video : videos)
    {
        if (video->videoID == videoID)
        {
            return video;
        }
    }
    return nullptr;
}

void Db::deleteVideo(int videoID)
{
    auto &videos = getInstance().videos;
    videos.erase(remove_if(videos.begin(), videos.end(),
                           [videoID](Video *video)
                           {
                               if (video->videoID == videoID)
                               {
                                   delete video; // Memory free करना जरूरी है
                                   return true;  // Remove condition
                               }
                               return false;
                           }),
                 videos.end());
}
vector<Comment *> Db::getCommentsByVideo(int videoID)
{
    vector<Comment *> result;
    for (Comment *comment : comments)
    {
        if (comment->videoID == videoID)
        {
            result.push_back(comment); // Dereference करके `Comment` object store किया
        }
    }
    return result;
}

vector<Video *> Db::getAllVideos()
{
    return videos;
}

// Comment Operations
void Db::addComment(Comment *comment)
{
    comments.push_back(comment);
}
void Db::removeComment(int commentID)
{
    auto &comments = this->comments; // Assuming comments is a vector or map

    auto it = std::remove_if(comments.begin(), comments.end(),
                             [commentID](const Comment *c)
                             { return c->commentID == commentID; });
    comments.erase(it, comments.end());

    if (it != comments.end())
    {
        comments.erase(it, comments.end());
        cout << "Comment ID " << commentID << " removed successfully.\n";
    }
    else
    {
        cout << "Comment ID " << commentID << " not found.\n";
    }
}

Comment *Db::getComment(int commentID)
{
    for (Comment *comment : comments)
    {
        if (comment->commentID == commentID)
        {
            return comment;
        }
    }
    return nullptr;
}

vector<Comment *> Db::getAllComments()
{
    return comments;
}

// 🔹 Playlist Operations
void Db::addPlaylist(Playlist *playlist)
{
    playlists.push_back(playlist);
}
void Db::removePlaylist(int playlistID)
{
    auto &playlists = getInstance().playlists;

    playlists.erase(
        std::remove_if(playlists.begin(), playlists.end(),
                       [playlistID](Playlist *playlist)
                       {
                           return playlist->playlistID == playlistID;
                       }),
        playlists.end());
}

Playlist *Db::getPlaylist(int playlistID)
{
    for (Playlist *playlist : playlists)
    {
        if (playlist->playlistID == playlistID)
        {
            return playlist;
        }
    }
    return nullptr;
}

vector<Playlist *> Db::getAllPlaylists()
{
    return playlists;
}

// Subscription Operations
void Db::addSubscription(Subscription *sub)
{
    subscriptions.push_back(sub);
}

void Db::removeSubscription(int subscriberID, int creatorID)
{
    auto &subs = this->subscriptions; // Assuming subscriptions is a vector or list

    auto it = std::remove_if(subs.begin(), subs.end(),
                             [subscriberID, creatorID](const Subscription *sub)
                             {
                                 return sub->subscriberID == subscriberID && sub->creatorID == creatorID;
                             });
    subs.erase(it, subs.end());

    if (it != subs.end())
    {
        subs.erase(it, subs.end());
        cout << "Subscription removed: Subscriber " << subscriberID
             << " -> Creator " << creatorID << endl;
    }
    else
    {
        cout << "Subscription not found for Subscriber " << subscriberID
             << " and Creator " << creatorID << endl;
    }
}
vector<int> Db::getSubscribers(int creatorID)
{
    vector<int> subscribersList;

    for (const auto &sub : subscriptions)
    {
        if (sub->creatorID == creatorID)
        {
            subscribersList.push_back(sub->subscriberID);
        }
    }

    if (subscribersList.empty())
    {
        cout << "No subscribers found for Creator ID: " << creatorID << endl;
    }

    return subscribersList;
}

Subscription *Db::getSubscription(int subID)
{
    for (Subscription *sub : subscriptions)
    {
        if (sub->subscriptionID == subID)
        {
            return sub;
        }
    }
    return nullptr;
}

vector<Subscription *> Db::getAllSubscriptions()
{
    return subscriptions;
}

// Like Operations
void Db::addLike(Like *like)
{
    likes.push_back(like);
}

Like *Db::getLike(int likeID)
{
    for (Like *like : likes)
    {
        if (like->likeID == likeID)
        {
            return like;
        }
    }
    return nullptr;
}

vector<Like *> Db::getAllLikes()
{
    return likes;
}
