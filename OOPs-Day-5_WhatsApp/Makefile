CC = g++
CFLAGS = -std=c++11 -Wall

SRC = data/Contact.cpp data/Message.cpp data/Status.cpp data/User.cpp \
      app/WhatsAppApp.cpp server/WhatsAppServer.cpp main.cpp

TARGET = whatsapp

all:
	$(CC) $(CFLAGS) $(SRC) -o $(TARGET)
clean:
	rm -f $(TARGET)