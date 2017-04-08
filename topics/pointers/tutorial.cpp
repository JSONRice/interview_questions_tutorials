#include <iostream>
#include <string.h>
using namespace std;

int add(int *val1, int *val2) {
  return *val1 + *val2;
}

const int total(int numbers[], const int length, int *candidate) {
  cout << "The chosen one is: " << *candidate << endl;
  int total = 0;
  numbers[1] = 100010;
  // cout << sizeof(numbers) << endl;
  // cout << sizeof(&numbers) << endl;
  // cout << sizeof(int) << endl;
  // cout << "numbers[0] = " << numbers[0] << endl;
  // const int numElements = sizeof(numbers) / sizeof(numbers[0]);
  for(int i = 0; i < length; i++) {
    cout << (numbers + i) << " -> " << *(numbers + i) << endl;
    total += *(numbers + i); // Two ways to dereference. The *(somearray)
                             // is the old approach and [] is simplified.
  }
  
  return total;
}

int main() {
  int v1 = 6;
  int v2 = 7;
  int array[9] = {1,1,2,3,5,8,13,21,34}; // Fibonacci sequence
  char string[] = {'h','e','l','l','o',' ','w','o','r','l','d'};
  int returnVal = add(&v1, &v2);
  cout << v1 << " + " << v2 << " = " << returnVal << endl;
  cout << "The length of string is: " << strlen(string) << endl;
  cout << "Value of string[30]: " << string << endl;
  cout << "In main array is: " << array << endl;
  cout << "The total of the array is: " << total(array, (sizeof(array)/ sizeof(array[0])), &array[5]) << endl;
  return 0;
}
