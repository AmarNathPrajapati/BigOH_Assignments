#include "FineService.h"

double FineService::calculateFine(int overdueDays) {
    return overdueDays * 5.0; // Rs. 5 per day fine
}
