/**
 * Name: Palindrome
 * Author: Jason Rice
 * Date: 9/8/2016
 * Desc:
 *   String iterations and parsing to determine if a string is a palindrome or not.
 * Efficiency: O(n)
 */
#include <string>
#include <iostream>
using namespace std;

bool palindrome(string candidate) {
  if (candidate.length() <= 2) {
    return true;
  }
  
  for (int i = 0; i < candidate.length()/2; ++i) {
    if (candidate[i] != candidate[candidate.length() - i - 1]) {
      return false;
    }
  }
  
  return true;  
}

int main(int argc, char * argv[]) {
  if (argc < 2) {
    cout << "Usage: " << argv[0] << " <string>\n";
    return 1;
  }
  
  string candidate = argv[1];
  
  if (palindrome(candidate)) {
    cout << "The string '" << candidate << "' is a palindrome\n";
  }
  else {
    cout << "The string '" << candidate << "' is not a palindrome.\n";
  }
  
  return 0;
}