/*******************************************************************************
 * Description: Header file for Binary Search Tree class.
 * 
 * Date: 7/27/2016
 * Version: 1.0
 ******************************************************************************/

#include <string>

class BST {
public:
  BST();
  /**
   * Node represents a vertex in the tree graph structure.
   */
  struct Node {
    std::string item; // The data in this node.
    int key; // The position or order of the item in the tree.
    Node *left;
    Node *right;
  };
  
  void retrieve(int key);
  void insert(Node node);
  void delete(int key);
private:
  Node root;
};