#ifndef UTILS_H
#define UTILS_H

#include <iostream>
#include <ctime>
using namespace std;

class Utils {
public:
    static int getCurrentDate();
    static int calculateDaysBetween(int issueDate, int returnDate);
};

#endif
