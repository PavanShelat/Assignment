#include<iostream>
#include<conio.h>
using namespace std;
class temp 
{
 int x, y, q;
 public:
 void input() 
{
 cout << "Enter Two Numbers :";
 cin >> x>>y;
}
friend void swap(temp &t);
void display() 
{
 cout << "After Swap x is :" << x;
 cout << "\nAfter Swap y is :" << y;
}
};
void swap(temp &t) 
{
    t.q = t.x;
    t.x = t.y;
    t.y = t.q;
}
int main() 
{
    temp t1;
    t1.input();
    swap(t1);
    t1.display();
    return 0;
}