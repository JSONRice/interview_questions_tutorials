#include <iostream>
using namespace std;

class List {

public:
    List() {
        head = NULL;
    }

    // This prepends a new value at the beginning of the list
    void push(int val) {
        Node *n = new Node(); // create new Node
        n->x = val; // set value
        n->next = head; // make the node point to the next node.
        //  If the list is empty, this is NULL, so the end of the list --> OK
        head = n; // last but not least, make the head point at the new node.
    }

    // returns the first element in the list and deletes the Node.
    // caution, no error-checking here!
    int pop() {
        Node *n = head;
        int ret = n->x;

        head = head->next;
        delete n;
        return ret;
    }

private:
    struct Node {
        int x;
        Node *next;
    };    
    
    Node *head;
};

/**
 * Example of using a single-linked list from a source file.
 * @return 
 */
int main() {
    List list;

    list.push(5);
    list.push(10);
    list.push(20);

    cout << list.pop() << endl;
    cout << list.pop() << endl;
    cout << list.pop() << endl;
    
    return 0;
}