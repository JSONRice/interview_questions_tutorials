#include <iostream>
using namespace std;

class Node {
public:

    Node() {

    }

    Node(int value) {
        this->value = value;
    }

    ~Node() {
        if (right != NULL) {
            delete right;
        }
        if (left != NULL) {
            delete left;
        }
        value = 0;
    }

    int getValue() {
        return value;
    }

    Node * getRight() {
        return right;
    }

    Node * getLeft() {
        return left;
    }

    void setRight(Node * node) {
        this->right = node;
    }

    void setLeft(Node * node) {
        this->left = node;
    }

private:
    int value;
    Node * right;
    Node * left;
};

// Binary Search Tree:

/***
 * Note:
 * if the level order of the tree is: 1//2 3//4 5 6 7// 8 9 10 11 12;
 * 
 * Then the following is true:
 * preorder:  1  2  3  8  9   5  10  11  3   6   12  7
 * inorder:   8  4  9  2  10  5  11  1   12  6   3   7
 * postorder: 8  9  4  10 11  5  2   12  6   7   3   1
 */

class BST {
private:
    Node * root;
    int size;

    // Add a node (private)
    void insert(Node* leaf, int value) {
        if (value <= leaf->getValue()) {
            if (leaf->getLeft() != NULL)
                insert(leaf->getLeft(), value);
            else {
                Node * node = new Node(value);
                leaf->setLeft(node);
            }
        } else {
            if (leaf->getRight() != NULL)
                insert(leaf->getRight(), value);
            else {
                Node * node = new Node(value);
                leaf->setRight(node);
            }
        }
    }
    
    const int getSize(Node * subtreeRoot) {
        if (subtreeRoot == NULL) {
            return 0;
        } else {
            //Add the size of the left and right trees, then add 1 (which is the current node)
            return getSize(subtreeRoot->getLeft()) + getSize(subtreeRoot->getRight()) + 1;
        }
    }    
    
    bool remove(Node * root, int val) {
        if (root == NULL) {
            return false;
        }
    }
    
    /**
     * Return the node if it is found in the tree, else return NULL.
     * See:
     * ADTs, Data Structures, and Problem Solving with C++ 
     * - Larry Nyhoff 
     * Pg. 674     
     **/
    Node * search(Node * subtreeRoot, int value) {
        // base cases
        if (subtreeRoot == NULL || subtreeRoot->getValue() == value) {
            return subtreeRoot;
        }

        // inductive cases
        if (value < subtreeRoot->getValue()) {
            return search(subtreeRoot->getLeft(), value);
        } else if (subtreeRoot->getValue() < value) {
            return search(subtreeRoot->getRight(), value);
        }
    }
    
    /*********************************************************************
     * INORDER TRAVERSAL (LVR)
     *
     * L - left
     * V - visit
     * R - right 
     *
     *
     * To traverse a non-empty binary search tree in in-order (symmetric),
     * starting at the root location (this may be a subtree root) and 
     * perform the following operations recursively at each node:
     * 1. Traverse the left sub-tree.
     * 2. Visit the root.
     * 3. Traverse the right sub-tree.     
     *******************************************************************/
    void inorder(Node * node) {
        if (node) {
            inorder(node->getLeft());
            cout << node->getValue() << " ";
            inorder(node->getRight());
        }
    }

public:

    BST() {
        root = NULL;
    }

    ~BST() {

    }

    bool isEmpty() {
        if ((!root) || (root->getLeft() == NULL
          && root->getRight() == NULL)) {
            return true;
        }
        return false;
    }

    const int getSize() {
        return getSize(this->getRoot());
    }

    Node * getRoot() {
        return root;
    }

    // Add a node
    void insert(int value) {
        // No elements. Add the root
        if (root == NULL) {
            cout << "add root node ... " << value << endl;
            Node * node = new Node(value);
            root = node;
        }// Else add a new node.
        else {
            cout << "add other node ... " << value << endl;
            insert(root, value);
        }
    }

    bool remove(int val) {
        return remove(this->getRoot(), val);
    }

    Node * search(int value) {
        cout << "\nSearch for " << value << " in BST:\n";
        return search(this->getRoot(), value);
    }
    
    void inorder() {
      inorder(this->getRoot());
    }
};

void resultOfSearch(Node * node) {
    if (node == NULL) {
        cout << "\nSearch turned up empty." << endl;
    } else {
        cout << "\nSearch was successful. Node contains value: " << node->getValue() << endl;
        cout << "The nodes children are as follows:\n";
        if (node->getLeft() == NULL) {
            cout << "Left child == NULL\n";
        } else {
            cout << "Left child == " << node->getLeft()->getValue() << endl;
        }

        if (node->getRight() == NULL) {
            cout << "Right child == NULL\n";
        } else {
            cout << "Right child == " << node->getRight()->getValue() << endl;
        }
    }
}

/**
 * See:
 * ADTs, Data Structures, and Problem Solving with C++ 
 * - Larry Nyhoff 
 * Pg. 667
 * 
 * The first tree example is modeled after the tree found in the book on page 667:
 * 
 *               46
 *             /    \
 *           17      63
 *             \    /  \
 *             25  55  97
 * 
 */
int main() {
    BST * tree = new BST();
    cout << "Tree size before insert is: " << tree->getSize() << endl;
    tree->insert(46);
    tree->insert(17);
    tree->insert(63);
    tree->insert(25);
    tree->insert(97);
    tree->insert(55);
    cout << "Tree size after insert is: " << tree->getSize() << endl;
    cout << "Display nodes INORDER:\n";
    tree->inorder();

    Node * searchOne = tree->search(97);
    resultOfSearch(searchOne);

    Node * searchTwo = tree->search(32);
    resultOfSearch(searchTwo);

    Node * searchThree = tree->search(63);
    resultOfSearch(searchThree);
    delete tree;
}
