#include "UserService.h" 

void UserService::registerUser(string name, string email, string pass, string role, string extra = "") {
    int userID = Db::getInstance().getAllUsers().size() + 1;
    string currentDate = Utils::getCurrentDate();
    User* newUser = nullptr;

    if (role == "Viewer") {
        newUser = new Viewer(userID, name, email, pass, currentDate);
    } 
    else if (role == "Creator") {
        if (extra.empty()) {
            cout << "Error: ContentCreator must provide a channel name!" << endl;
            return;
        }
        newUser = new ContentCreator(userID, name, email, pass, currentDate, extra);
    } 
    else if (role == "Admin") {
        int adminID = stoi(extra); // Convert string to int
        newUser = new Administrator(userID, name, email, pass, currentDate, adminID);
    } 
    else {
        cout << "Invalid role! Registration failed." << endl;
        return;
    }

    Db::getInstance().addUser(newUser);
}



User* UserService::getUserProfile(int userID) {
    return Db::getInstance().getUser(userID);
}

void UserService::updateUserProfile(int userID, User* newDetails) {
    User* user = Db::getInstance().getUser(userID);
    if (user) {
        *user = *newDetails;  // Copy new details
    }
}
