/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('mongo_aggregation');

// Search for documents in the current collection.
db.getCollection('users')
  .aggregate(
    [
      // Total documents.
      // {
      //   $group: {
      //     _id: null,
      //     count: {$sum: 1}
      //   }
      // },

      //  -------------------- *** ----------------------

      // What is average age of all users?
      // {
      //     $group: {
      //       _id: "$gender",     // _id: "$gender"
      //       averageAge: { 
      //         $avg: "$age"
      //       }
      //     }
      // },

      //  -------------------- *** ----------------------

      // List top 2 most common favorite fruit among users. 
      // {
      //    $group: {
      //      _id: "$favoriteFruit",
      //      count: { $sum: 1 }
      //    }, 
      // },
      // {
      //   $sort: {
      //     count: -1
      //   }
      // },
      // {
      //   $limit: 2
      // }

      //  -------------------- *** ----------------------

      // Find total number of males and females. 
      // {
      //   $group: {
      //     _id: "$gender",
      //     genderCount: {
      //       $sum: 1
      //     }
      //   }
      // },

      //  -------------------- *** ----------------------

      // Which country has the highest number of registered users? 
      // {
      //   $group: {
      //     _id: "$company.location.country",
      //     userCount: {
      //       $sum: 1
      //     }
      //   }
      // },
      // {
      //   $sort: {
      //     userCount: -1
      //   }
      // },
      // {
      //   $limit: 1
      // },
      // {
      //   $project: {
      //     _id: 1
      //   }
      // }, 

      //  -------------------- *** ----------------------

      // What is the average number of tags per user?
      // 1.
      // {
      //   $unwind: "$tags"
      // },
      // {
      //   $group: {
      //     _id: "$_id",
      //     numberOfTags: {
      //       $sum: 1
      //     }
      //   },
      // },
      // {
      //   $group: {
      //     _id: null,
      //     averageNumberOfTags: {
      //       $avg: "$numberOfTags"
      //     }
      //   }
      // },

      // 2.
      // {
      //   $addFields: {
      //     numberOfTags: {
      //       $size: {
      //         $ifNull: ["$tags", []]
      //       }
      //     },
      //   }
      // }, 
      // {
      //   $group: {
      //     _id: null,
      //     agerageNumberOfTags: {
      //       $avg: "$numberOfTags"
      //     }
      //   }
      // },

      //  -------------------- *** ----------------------

      // How many user have 'enim' as one of thier tags? 
      // {
      //   $match: {
      //     tags: "enim"
      //   }
      // },
      // {
      //   $count: "userWithenimTag"
      // },

      //  -------------------- *** ----------------------

      // What are the names and age of users who are inactive and have 'velit' as a tag?
      // {
      //   $match: {
      //     tags: "velit",
      //     isActive: false
      //   }
      // },
      // {
      //   $project: {
      //     _id: 0,
      //     name: 1,
      //     age: 1
      //   }
      // },

      //  -------------------- *** ----------------------

      // How many users have a phone number starting with '+1 (940)'
      {
        $match: {
          "company.phone": /^\+1 \(940\)/
        }
      }, 
      {
        $count: "usersWithPhoneStartingWith940"
      }







    ]
  )
