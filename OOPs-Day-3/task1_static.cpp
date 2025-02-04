#include <iostream>
#include <vector>
#include <map>
#include <limits>

using namespace std;

const int MAX_BRICKS_PER_WALL = 90;

class Brick {
public:
    string owner, caption, message, dedication;
    vector<string> comments;
    bool flagged, isVisible;

    Brick(string owner, string caption, string message, string dedication)
        : owner(owner), caption(caption), message(message), dedication(dedication), flagged(false), isVisible(true) {}

    void addComment(string comment) {
        comments.push_back(comment);
    }

    void displayBrick() {
        if (!isVisible) {
            cout << "[This brick is hidden due to multiple flags]\n";
            return;
        }
        cout << "[Owner: " << owner << " | Caption: " << caption
             << " | Message: " << message << " | Dedicated to: " << dedication << "]\n";
        for (auto &c : comments) {
            cout << "  - Comment: " << c << "\n";
        }
    }

    void flagBrick() {
        flagged = true;
    }
};

class Wall {
public:
    vector<Brick> bricks;
    static int totalWalls;

    Wall() { totalWalls++; }

    bool addBrick(Brick newBrick) {
        if (bricks.size() < MAX_BRICKS_PER_WALL) {
            bricks.push_back(newBrick);
            return true;
        }
        return false;
    }
};
int Wall::totalWalls = 0;

class City {
public:
    vector<Wall> walls;
    static int totalBricks;

    void addBrickToCity(Brick newBrick) {
        if (walls.empty() || walls.back().bricks.size() >= MAX_BRICKS_PER_WALL)
            walls.push_back(Wall());
        walls.back().addBrick(newBrick);
        totalBricks++;
    }
};
int City::totalBricks = 0;

class Country {
public:
    map<string, City> cities;
    
    void addBrick(string cityName, Brick newBrick) {
        cities[cityName].addBrickToCity(newBrick);
    }
};

class User {
public:
    string name;

    User(string name) : name(name) {}

    void paintBrick(Country &country, string city, string caption, string message, string dedication) {
        country.addBrick(city, Brick(name, caption, message, dedication));
    }
};

class Admin {
public:
    void editBrick(Brick &brick, string newMessage) {
        brick.message = newMessage;
    }
};

void findHottestAndColdestUsers(Country &country) {
    map<string, int> dedicationCount;
    map<string, int> receivedCount;

    for (auto &cityPair : country.cities) {
        for (auto &wall : cityPair.second.walls) {
            for (auto &brick : wall.bricks) {
                dedicationCount[brick.owner]++;
                receivedCount[brick.dedication]++;
            }
        }
    }

    if (receivedCount.empty()) {
        cout << "\nNo dedications found.\n";
        return;
    }

    string hottestUser = "", coldestUser = "";
    int maxBricks = 0, minBricks = INT_MAX;

    for (auto &entry : receivedCount) {
        if (entry.second > maxBricks) {
            maxBricks = entry.second;
            hottestUser = entry.first;
        }
        if (entry.second < minBricks) {
            minBricks = entry.second;
            coldestUser = entry.first;
        }
    }

    cout << "\nHottest User: " << (hottestUser.empty() ? "No one" : hottestUser) << " with " << maxBricks << " bricks.\n";
    cout << "Coldest User: " << (coldestUser.empty() ? "No one" : coldestUser) << " with " << minBricks << " bricks.\n";
}

int main() {
    Country myCountry;
    Admin admin;

    User u1("Rahul"), u2("Pooja"), u3("Amit");
    
    u1.paintBrick(myCountry, "Delhi", "Love Forever", "Happy Valentine's Day!", "Pooja");
    u2.paintBrick(myCountry, "Delhi", "You're the Best", "For all the memories!", "Rahul");
    u3.paintBrick(myCountry, "Mumbai", "Stay Happy", "Wishing you love!", "Pooja");
    // u4.paintBrick(myCountry, "Mumbai", "Forever Together", "Unbreakable bond!", "Amit");
    
    myCountry.cities["Delhi"].walls[0].bricks[0].addComment("Wow, so sweet!");
    myCountry.cities["Mumbai"].walls[0].bricks[1].addComment("Beautiful dedication!");
    
    admin.editBrick(myCountry.cities["Delhi"].walls[0].bricks[0], "Happy Forever!");
    myCountry.cities["Mumbai"].walls[0].bricks[0].flagBrick();
    
    cout << "\nTotal Walls: " << Wall::totalWalls;
    cout << "\nTotal Bricks: " << City::totalBricks << "\n\n";
    
    for (auto &cityPair : myCountry.cities) {
        cout << "City: " << cityPair.first << "\n";
        for (auto &wall : cityPair.second.walls) {
            for (auto &brick : wall.bricks) {
                brick.displayBrick();
            }
        }
    }
    
    findHottestAndColdestUsers(myCountry);
    
    return 0;
}


