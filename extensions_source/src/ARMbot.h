/*
Class for Stembot platform
an open source STEM robotics for kids
http://stembot.vn
*/
#ifndef ARMbot_H_
#define ARMbot_H_

#if ARDUINO >= 100
  #include "Arduino.h"
#else
  #include "WProgram.h"
#endif

#include <Servo.h>
#define PowSV 11
#define pin_sv1 5
#define pin_sv2 6
#define pin_sv3 9
#define pin_sv4 10

#define Pot1 A6
#define Pot2 A7
#define Pot3 A0
#define Pot4 A1
#define speaker 2
#define led1 4
#define led2 3
#define led3 7
#define led4 8
#define led5 12
#define BT1 A2
#define BT2 A3

class ARMbot
{
public:
	ARMbot();

	void init();
	void enable_rc();
	void disable_rc();
	void begin();
	void bip(int n, int time_);
	void blinks(int n, int time_);
	void led_off();
	void led_on();
	void setLed(bool l1, bool l2, bool l3, bool l4, bool l5);
	void readPot();
	void setPosition(int pos1, int pos2, int pos3, int pos4);
	void checkValue();
	bool servoControl(int thePos, Servo _theServo);
	void ParallelControl(int t, int steps);
	void start();
	/////function for Scratch programming
	void setBase(int pos,int speed);
	void setShoulder(int pos, int speed);
	void setElbow(int pos, int speed);
	void setGrip(int pos, int speed);
	void moveArm(int Base_pos,int Shoulder_pos,int Elbow_pos,int Grip_pos,int speed);//move parallel servo to target
	bool readButton1();
  bool readButton2();

private:
	Servo _sv1;
	Servo _sv2;
	Servo _sv3;
	Servo _sv4;

	bool _button1_ = 1;
	bool _button2_= _button2;
	bool _button1;
	bool _button2;
	int _val1;
	int _val2;
	int _val3;
	int _val4;
	int _lastval1 = _val1;
	int _lastval2 = _val2;
	int _lastval3 = _val3;
	int _lastval4 = _val4;
	int _count = 0;
	int _Position1[5] = {90, 90, 90, 90, 90};
	int _Position2[5] = {90, 90, 90, 90, 90};
	int _Position3[5] = {90, 90, 90, 90, 90};
	int _Position4[5] = {90, 90, 90, 90, 90};
};

#endif
