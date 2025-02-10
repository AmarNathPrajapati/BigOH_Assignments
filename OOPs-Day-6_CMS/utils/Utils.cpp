#include "Utils.h"

string Utils::getCurrentDate()
{
    // Get current time
    time_t t = time(nullptr);
    tm *now = localtime(&t);

    // Format date as dd-mm-yyyy
    ostringstream dateStream;
    dateStream << setw(2) << setfill('0') << now->tm_mday << "-"
               << setw(2) << setfill('0') << (now->tm_mon + 1) << "-"
               << (now->tm_year + 1900);

    return dateStream.str();
}

string Utils::getCurrentTime()
{
    time_t t = time(nullptr);
    tm *now = localtime(&t);

    ostringstream timeStream;
    timeStream << setw(2) << setfill('0') << now->tm_hour << ":"
               << setw(2) << setfill('0') << now->tm_min << ":"
               << setw(2) << setfill('0') << now->tm_sec;
    return timeStream.str();
}