app.service('DataStructuresService', [function () {
    // TODO: place this in the Mongo db for safekeeping and fetch at runtime into service
    this.data_structures = [
      {
        id: 'single_linked_list',
        title: 'Singly (Unidirectional) Linked List',
        // The description may contain markup if needed:
        description: "Singly linked lists contain nodes which have a data field as well as a 'next' field, which points to the next node in line of nodes. Operations that can be performed on singly linked lists include insertion, deletion and traversal. ~ Wikipedia",
        files: [
          {
            // The target language is used by JSHighlight to highlight the source:
            target_language: 'C++',
            source: [
              {
                title: 'Linked List Header',
                uri: '../../templates/src/data_structures/linked_list/llist.cpp'
              }
            ],
            text: ''
          }
        ],
        // Object array consisting of functions associated with the data structure: 
        // fname: function name
        // fdesc: function description
        // avg: Average Big-Oh complexity time
        // worst: Worst Big-Oh complexity time
        functions: [
          {
            fname: 'Retrieve',
            fdesc: 'Given the index of the node in the list return the node at that location.',
            avg: 'n',
            worst: 'n'
          },
          {
            fname: 'Search',
            fdesc: 'Given a search value (key), search each node in the list and return the node if it is present, else return -1.',
            avg: 'n',
            worst: 'n'
          },
          {
            fname: 'Insert',
            fdesc: 'Given a position (p) and value, insert the node at the position. If the position is above the maximum number of nodes, push onto tail of list. If position is zero or less than one, push onto beginning of list.',
            avg: '1',
            worst: '1'
          },
          {
            fname: 'Remove',
            fdesc: 'Given a position (p) remove the node at that position. If the position is above the maximum number of nodes, remove the last node in the list (pop). If position is zero or less than one, remove the first node in the list.',
            avg: '1',
            worst: '1'
          }
        ]
      }
    ];

  }
]);