#include <iostream>
#include "./services/UserService.h"
#include "./services/AuthenticationService.h"
#include "./services/ViewerService.h"
#include "./services/ContentCreatorService.h"
#include "./services/AdminService.h"
#include "./services/PlaylistService.h"
#include "./services/VideoService.h"
#include "./services/SubscriptionService.h"
#include "./db/db.h"
#include "./webApp/WebApp.h"
using namespace std;

void seedData()
{
    UserService::registerUser("amit", "amit@example.com", "pass123", "Viewer", "");
    UserService::registerUser("avi", "avi@example.com", "pass456", "Creator", "MyChannel");
    UserService::registerUser("amar", "amar@example.com", "pass789", "Admin", "12011051");
}

int main()
{
    seedData(); // Register users initially
    // Db &db = Db::getInstance();

    cout << "===== Login Section =====" << endl;
    User *user = AuthenticationService::authenticateUser("avi@example.com", "pass456");
    if (!user)
    {
        cout << "Invalid login!" << endl;
        return 0;
    }
    cout << "Welcome " << user->getName() << " (" << user->getRole() << ")" << endl;

    if (user->getRole() == "Creator")
    {
        cout << "\n===== Uploading Video =====" << endl;

        int videoID = ContentCreatorService::uploadVideo(user->getUserID(), "My First Video", "This is a test video", "Technology");
        cout << "Video Uploaded with ID: " << videoID << endl;

        cout << "\n===== Admin Approving Video =====" << endl;
        AdminService::approveVideo(3, videoID); // Assuming amar (Admin) has userID 3

        cout << "\n===== Viewer Searching for Video =====" << endl;
        vector<Video> videos = WebApp::searchVideo("First");
        for (const auto &v : videos)
        {
            cout << "Found Video: " << v.title << " (ID: " << v.videoID << ")" << endl;
        }

        cout << "\n===== Viewer Liking & Commenting on Video =====" << endl;
        ViewerService::likeVideo(1, videoID); // amit (Viewer) likes video
        ViewerService::commentOnVideo(1, videoID, "Great video!");

        cout << "\n===== Viewer Creating Playlist and Adding Video =====" << endl;
        int playlistID = PlaylistService::createPlaylist(1, "My Favorites");
        if (playlistID == -1)
        {
            cout << "Play list not created" << endl;
        }

        PlaylistService::addVideo(playlistID, videoID);

        cout << "\n===== Viewer Subscribing to Channel =====" << endl;
        ViewerService::subscribeToChannel(1, 2); // amit subscribes to avi

        cout << "\n===== Fetching Video Comments =====" << endl;
        vector<Comment *> comments = VideoService::fetchComments(videoID);
        for (const auto &c : comments)
        {
            cout << "Comment: " << c->text << " by User ID: " << c->userID << endl;
        }
    }

    return 0;
}
