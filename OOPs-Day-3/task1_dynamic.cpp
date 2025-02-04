#include <iostream>
#include <vector>
#include <map>
#include <algorithm>
#include <limits>

using namespace std;

const int MAX_BRICKS_PER_WALL = 90;

class Brick
{
private:
    string caption;
    string message;
    string owner;
    string dedication;
    bool flagged;
    bool isVisible;
    vector<string> comments;

public:
    Brick(string owner, string caption, string message, string dedication)
        : owner(owner), caption(caption), message(message), dedication(dedication), flagged(false), isVisible(true) {}

    void displayBrick()
    {
        if (isVisible)
        {
            cout << "[Owner: " << owner << " | Caption: " << caption << " | Message: " << message
                 << " | Dedicated to: " << dedication << "]\n";
            if (!comments.empty())
            {
                cout << "  Comments: ";
                for (const string &comment : comments)
                {
                    cout << comment << " | ";
                }
                cout << endl;
            }
        }
        else
        {
            cout << "[This brick is hidden due to multiple flags]\n";
        }
    }

    void flagBrick()
    {
        flagged = true;
    }

    bool isFlagged()
    {
        return flagged;
    }

    void hideBrick()
    {
        isVisible = false;
    }

    string getOwner()
    {
        return owner;
    }

    string getDedication()
    {
        return dedication;
    }

    void editBrick(string newCaption, string newMessage)
    {
        caption = newCaption;
        message = newMessage;
    }

    void addComment(string comment)
    {
        comments.push_back(comment);
    }
};

class Wall
{
private:
    vector<Brick> bricks;

public:
    static int totalWalls;

    Wall() { totalWalls++; }

    bool addBrick(Brick newBrick)
    {
        if (bricks.size() < MAX_BRICKS_PER_WALL)
        {
            bricks.push_back(newBrick);
            return true;
        }
        return false;
    }

    void displayWall()
    {
        cout << "Wall has " << bricks.size() << " bricks:\n";
        for (auto &brick : bricks)
        {
            brick.displayBrick();
        }
    }

    int getBrickCount()
    {
        return bricks.size();
    }

    vector<Brick> &getBricks()
    {
        return bricks;
    }
};
int Wall::totalWalls = 0;

class City
{
private:
    vector<Wall> walls;

public:
    static int totalBricks;

    void addBrickToCity(Brick newBrick)
    {
        if (walls.empty() || walls.back().getBrickCount() >= MAX_BRICKS_PER_WALL)
        {
            walls.push_back(Wall());
        }
        walls.back().addBrick(newBrick);
        totalBricks++;
    }

    void displayCityWalls()
    {
        cout << "City has " << walls.size() << " walls.\n";
        for (auto &wall : walls)
        {
            wall.displayWall();
        }
    }

    vector<Wall> &getWalls()
    {
        return walls;
    }
};
int City::totalBricks = 0;

class Country
{
private:
    map<string, City> cities;

public:
    void addBrick(string cityName, Brick newBrick)
    {
        cities[cityName].addBrickToCity(newBrick);
    }

    void displayCountryWalls()
    {
        for (auto &pair : cities)
        {
            cout << "\n--- City: " << pair.first << " ---\n";
            pair.second.displayCityWalls();
        }
    }

    City &getCity(string cityName)
    {
        return cities[cityName];
    }
};

class User
{
private:
    string name;

public:
    User(string name) : name(name) {}

    void paintBrick(Country &country, string cityName, string caption, string message, string dedication)
    {
        Brick newBrick(name, caption, message, dedication);
        country.addBrick(cityName, newBrick);
        cout << "Brick added successfully by " << name << " in city " << cityName << ".\n";
    }
};

class Admin
{
public:
    void editBrick(Wall &wall, int brickIndex, string newCaption, string newMessage)
    {
        if (brickIndex < 0 || brickIndex >= wall.getBrickCount())
        {
            cout << "Invalid brick index.\n";
            return;
        }
        wall.getBricks()[brickIndex].editBrick(newCaption, newMessage);
        cout << "Admin edited brick " << brickIndex << " on the wall.\n";
    }

    void flagBrick(Brick &brick)
    {
        brick.flagBrick();
    }
};

void findHottestAndColdestUsers(Country &country)
{
    map<string, int> receivedCount;

    for (auto &cityPair : country.getCity("default").getWalls())
    {
        for (auto &brick : cityPair.getBricks())
        {
            receivedCount[brick.getDedication()]++;
        }
    }

    if (receivedCount.empty())
    {
        cout << "\nNo dedications found.\n";
        return;
    }

    string hottestUser = "", coldestUser = "";
    int maxBricks = 0, minBricks = INT_MAX;

    for (auto &entry : receivedCount)
    {
        if (entry.second > maxBricks)
        {
            maxBricks = entry.second;
            hottestUser = entry.first;
        }
        if (entry.second < minBricks)
        {
            minBricks = entry.second;
            coldestUser = entry.first;
        }
    }

    cout << "\nHottest User (Most Dedicated): " << hottestUser << " with " << maxBricks << " bricks.\n";
    cout << "Coldest User (Least Dedicated): " << coldestUser << " with " << minBricks << " bricks.\n";
}

int main()
{
    Country myCountry;
    Admin admin;

    int choice;
    string name, city, caption, message, dedication;

    while (true)
    {
        cout << "\n1. Add Brick\n2. View Walls\n3. View Total Stats\n4. Find Hottest & Coldest User\n5. Add Comment\n6. Admin Edit Brick\n7. Exit\nEnter choice: ";
        cin >> choice;

        switch (choice)
        {
        case 1:
            cout << "Enter your name: ";
            cin >> name;
            cout << "Enter city name: ";
            cin >> city;
            cout << "Enter caption: ";
            cin.ignore();
            getline(cin, caption);
            cout << "Enter message: ";
            getline(cin, message);
            cout << "Enter dedication: ";
            getline(cin, dedication);

            {
                User user(name);
                user.paintBrick(myCountry, city, caption, message, dedication);
            }
            break;

        case 2:
            myCountry.displayCountryWalls();
            break;

        case 3:
            cout << "\nTotal Walls Created: " << Wall::totalWalls;
            cout << "\nTotal Bricks Created: " << City::totalBricks << "\n";
            break;

        case 4:
            findHottestAndColdestUsers(myCountry);
            break;

        // case 5:
        //     cout << "Enter city: ";
        //     cin >> city;
        //     cout << "Enter comment: ";
        //     cin.ignore();
        //     getline(cin, message);
        //     myCountry.getCity(city).getWalls()[0].getBricks()[0].addComment(message);
        //     break;

        // case 6:
        //     cout << "Enter city: ";
        //     cin >> city;
        //     cout << "Enter new caption: ";
        //     cin.ignore();
        //     getline(cin, caption);
        //     cout << "Enter new message: ";
        //     getline(cin, message);
        //     admin.editBrick(myCountry.getCity(city).getWalls()[0], 0, caption, message);
        //     break;

        case 7:
            return 0;

        default:
            cout << "Invalid choice!\n";
        }
    }
}
