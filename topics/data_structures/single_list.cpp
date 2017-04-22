#include <time.h>
#include <string>
#include <iostream>
#include <stdlib.h> // c library
using namespace std;

class LinkedList {

  public:
    LinkedList() {
      head = NULL;
      tail = NULL;
    }

    // This prepends a new value at the beginning of the list
    void push(int val) {
      Node * node = new Node();
      node->data = val;
      node->next = head;
      head = node;
    }

    // Returns the first element in the list and deletes the node from the list.
    // Returns a zero if the list is empty since zero is synonymous with null.
    int pop() {
      if (head == NULL) return 0;
      Node *node = head;
      int data = node->data;

      head = head->next;
      delete node;
      return data;
    }

    /**
     * Return the length of the list.
     */
    int length() {
      if (this->head == NULL) {
        return 0;
      }
      int ret = 0;
      Node * itr = this->head;
      while (itr != tail) {
        ret++;
        itr = itr->next;
      }
      return ret;
    }

    /**
     * Delete a node in the list at the position. If 
     * the position is less then zero default to the zero position.
     * If the position is greater than the length set it to the length
     * minus one to maintain the array behavior or elements starting
     * at zero.
     *
     * @return true if the deletion succeeded else false.
     */
    bool remove(int position) {
      if (this->head == NULL) {
        return false;
      }

      if (position < 0) {
        position = 0;
      }

      // Delete the first element
      if (position == 0) {
        // single element in list
        if (this->head->next == NULL) {
	  delete this->head;
  	  this->head = NULL;
          return true;
        }
        // multiple elements in list 
        else {
          Node * copy = this->head->next;
          delete this->head;
          this->head = copy;
          return true;
        }
      }


      Node * before = this->head;
      // Find the previous node of the node to be removed.
      for (int i = 0; before != NULL && (i < position - 1);i++) {
        before = before->next;
      }

      // Make sure that the target node is after the previous node.
      if (before == NULL || before->next == NULL) {
        return false;
      }

      // Now get the node after the target node.
      Node * after = before->next->next;
    
      // Make sure the after node exists.
      if (after == NULL) {
        return false;
      }

      // Delete the target node.
      delete before->next;

      // Re-link the list.
      before->next = after;
    }

    void print(string msg = "\n*** List ***\n") {
      cout << msg;
      if (this->head == NULL) {
        cout << "Nothing to print. This list is empty.\n";
      }
      Node * itr = this->head;
      while (itr != NULL) {
        cout << itr->data << endl;
        itr = itr->next;
      }
    }

  private:
   /**
    +---------+
    |  data   | -----> variable stored in node
    +---------+
    |  next   | -----> pointer to the next node
    +---------+
    */
    struct Node {
      int data;
      Node *next;
    };
    
    Node *head;
    Node *tail;
};

/**
 * Example of using a double (bidirectional) linked list.
 */
int main() {
  LinkedList list;
  cout << "Push on some numbers.\n";
  list.push(5);
  list.push(10);
  list.push(20);

  cout << "Pop the numbers off.\n";
  cout << list.pop() << endl;
  cout << list.pop() << endl;
  cout << list.pop() << endl;

  srand (time(NULL));
  const int MAX = 10;
  const int FACTOR = MAX*MAX;
  for (int i = 0; i < MAX; i++) {
    list.push(rand()%(MAX*FACTOR));
  }
  list.print();

  cout << "Remove first element:\n";
  list.remove(0);
  list.print("Modified list:\n");
  return 0;
}
