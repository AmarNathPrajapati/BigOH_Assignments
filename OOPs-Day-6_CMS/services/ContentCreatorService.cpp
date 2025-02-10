#include "ContentCreatorService.h"
#include "../utils/Utils.h"
int ContentCreatorService::uploadVideo(int userID, string title, string desc, string category)
{
    int videoID = Db::getInstance().getAllVideos().size() + 1;
    string uploadDate = Utils::getCurrentDate();
    Video *newVideo = nullptr;
    newVideo = new Video(videoID, title, category, desc, uploadDate, userID);
    if (AuthenticationService::isValidUser(userID))
    {
        Db::getInstance().addVideo(newVideo);
    }
    return videoID;
}

void ContentCreatorService::editVideo(int userID, int videoID, Video *newDetails)
{
    Video *video = Db::getInstance().getVideo(videoID);
    if (video && video->ownerID == userID)
    {
        *video = *newDetails;
    }
}

void ContentCreatorService::deleteVideo(int userID, int videoID)
{
    Video *video = Db::getInstance().getVideo(videoID);
    if (video && video->ownerID == userID)
    {
        video->title = "[Deleted]";
    }
}

void ContentCreatorService::viewAnalytics(int userID, int videoID)
{
    Video *video = Db::getInstance().getVideo(videoID);
    if (video && video->ownerID == userID)
    {
        cout << "Views: " << video->views << ", Likes: " << video->likes << endl;
    }
}

void ContentCreatorService::enableMonetization(int userID, int videoID)
{
    Video *video = Db::getInstance().getVideo(videoID);
    if (video && video->ownerID == userID)
    {
        cout << "Monetization Enabled for Video ID: " << videoID << endl;
    }
}
