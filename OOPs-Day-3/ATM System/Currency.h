#ifndef CURRENCY_H
#define CURRENCY_H

class Currency {
private:
    int denomination;
    int count;

public:
    Currency(int denom, int cnt) : denomination(denom), count(cnt) {}

    int getDenomination() const { return denomination; }
    int getCount() const { return count; }

    void addNotes(int cnt) { count += cnt; }
    bool deductNotes(int cnt) {
        if (cnt > count) return false;
        count -= cnt;
        return true;
    }
};

#endif
