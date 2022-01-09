#include<iostream>
using namespace std;

bool palindrome(int num)
{
	int n=num;
	int rem;
	int sum=0;
	while(n>0)
	{
		rem=n%10;
		sum=sum*10+rem;
		n=n/10;
	}
	if(sum==num)
		return true;
	else 
		return false;
}

int main()
{
    int n;
    cout << "Enter a number : ";
    cin >> n;
    
    bool t = palindrome(n);
    cout << "Answer = " << t << endl;
    
    return 0;
}
