// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('mongo_aggregation');

// Create a new document in the collection.
db.getCollection('books').aggregate(
    [
      {
        $lookup: {
          from: "authors",
          localField: "author_id",
          foreignField: "_id",
          as: "author_details"
        }
      },
      {
        $addFields: {
          author_details: {
            $arrayElemAt: ["$author_details", 0]
          }
        }
      },
      {
        $project: {
          _id: 0,
          title: 1,
          author_name: "$author_details.name",
          genre: 1,
          birth_year: "$author_details.birth_year"
        }
      },
    //   {
    //     $group: {
    //       _id: "$genre",
    //       count: {
    //         $sum: 1
    //       }
    //     }
    //   }

    ]
);
