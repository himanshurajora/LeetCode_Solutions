#include<iostream>
using namespace std;

void fun(int nums[],int k,int n)
{
	int add;
	for(int i=0;i<n;i++)
	{
		for(int j=1;j<n;j++)
		{
			add=nums[i]+nums[j];
			if(add==k)
			{
				cout << "[" << i << " , " << j << "]" << endl;
				return;
			}
		}
	}
}

int main()
{
    int n,k;
    cout << "Number of elements : ";
    cin >> n;
    int nums[n];
    cout << "Enter elements in an array : ";
    for(int i=0;i<n;i++)
    {
        cin >> nums[i];
    }
    cout << "Target : ";
    cin >> k;
    fun(nums,k,n);
    
    return 0;
}
