#include<iostream>

using namespace std;
template <typename T>
class Simple {
public:
	Simple(T v) :val(v){}			// headers only
	T getVal(){return val;}

	void setVal(T v){val=v;}
	void print(){cout<<getVal();}
private:
	T val;						// data members are part of class declaration
};
