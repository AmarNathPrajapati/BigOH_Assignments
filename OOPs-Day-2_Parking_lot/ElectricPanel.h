#ifndef ELECTRIC_PANEL_H
#define ELECTRIC_PANEL_H

class ElectricPanel
{
private:
    double chargingRate; // $ per hour
    bool isCharging;
    double currentCharge;

public:
    ElectricPanel() : chargingRate(2.0), isCharging(false), currentCharge(0.0) {}

    void startCharging()
    {
        isCharging = true;
    }

    void stopCharging()
    {
        isCharging = false;
    }

    double calculateChargingFee(int duration)
    {
        return duration * chargingRate;
    }

    bool isInUse() const { return isCharging; }
};

#endif