#include <iostream>
using namespace std;

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

    Node * root;
    int size;

    // Add a node (private)

    void addNode(Node* leaf, int value) {
        if (value <= leaf->getValue()) {
            if (leaf->getLeft() != NULL)
                addNode(leaf->getLeft(), value);
            else {
                Node * node = new Node(value);
                leaf->setLeft(node);
            }
        } else {
            if (leaf->getRight() != NULL)
                addNode(leaf->getRight(), value);
            else {
                Node * node = new Node(value);
                leaf->setRight(node);
            }
        }
    }

public:

    BST() {
        root = NULL;
        size = 0;
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
        return size;
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
        }            // Else add a new node.
        else {
            cout << "add other node ... " << value << endl;
            addNode(root, value);
        }
    }

    bool remove(Node * root, int val) {

    }

    Node * search(int value) {
        if (size == 0 || (root->getValue() == value)) {
            return root;
        }

        // Node * leftChild = get(root, val);
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
};

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
    tree->inorder(tree->getRoot());
    cout << endl;
    delete tree;
}
