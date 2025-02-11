CC = g++
CFLAGS = -std=c++11 -Wall

SRC = main.cpp \
      services/UserService.cpp services/HotelService.cpp services/RoomService.cpp \
      services/BookingService.cpp services/FeedbackService.cpp services/PaymentService.cpp \
      services/AdminService.cpp services/BaseService.cpp\
      db/HotelManagementDB.cpp \
      data/User.cpp data/Hotel.cpp data/Room.cpp data/Booking.cpp data/Feedback.cpp data/Payment.cpp \
      webApp/HotelManagementWeb.cpp

TARGET = hotelSystem

all:
	$(CC) $(CFLAGS) $(SRC) -o $(TARGET)
clean:
	rm -f $(TARGET)