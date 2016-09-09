/**
 * Sources: https://github.com/nickperkinslondon/angular-bootstrap-nav-tree
 */
app.controller('TreeController', [
  '$scope',
  '$timeout',
  'AjaxService',
  function ($scope, $timeout, ajax) {
    var apple_selected;
    var tree;
    var treedata;

    $scope.tree_handler = function (branch) {
      $scope.output = "<h1>" + branch.label + "</h1>";
      if (branch.data) {
        if (branch.data.url) {
          ajax.getTemplate(branch.data.url).then(function (html) {
            $scope.output += html;
          }, function () {
            console.error('Failed to find template at:' + branch.data.url);
          });
        }
      }
    };

// Each node (html file) in the tree must be wrapped in a div and given an id
// that is the same as the file name. This is how the controller identifies
// the node.
treedata = [{
        label: 'Table of Contents',
        data: {
          url: 'templates/tutorials/toc/toc.html'
        },
        children: [
          {
            // WARNING: if you change this label make sure to update the 
            // tree.initial-selection in the home view or the Table of Contents will break.
            label: 'Code World',
            data: {
              url: 'templates/tutorials/toc/codeworld/codeworldIntro.html'
            }
          },
          {
            label: 'Data Structures',
            data: {
              url: '/templates/tutorials/toc/ds/dsIntro.html'
            },
            children: [
              {
                label: 'Array ADT',
                data: {
                  url: '/templates/tutorials/toc/ds/array.html'
                }
              },
              {
                label: 'Binary Search Tree ADT',
                data: {
                  url: '/templates/tutorials/toc/ds/bst.html'
                }
              },              
              {
                label: 'Hash ADT',
                data: {
                  url: '/templates/tutorials/toc/ds/hash.html'
                }
              },
              {
                label: 'Linked List ADT',
                data: {
                  url: '/templates/tutorials/toc/ds/linked_list.html'
                }
              }
            ]
          },
          {
            label: '160 Job Interview Questions',
            data: {
              url: 'templates/tutorials/toc/jobinterview/jobinterviewIntro.html'
            }
          }
        ]
      }
    ];
    $scope.local_data = treedata;

    $scope.local_tree = tree = {};
  }
]);
