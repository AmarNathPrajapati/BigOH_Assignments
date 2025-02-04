#include "Utils.h"

int Utils::getCurrentDate() {
    time_t now = time(0);
    tm *ltm = localtime(&now);
    return ltm->tm_yday; // Returns current day of the year
}

int Utils::calculateDaysBetween(int issueDate, int returnDate) {
    return returnDate - issueDate;
}
