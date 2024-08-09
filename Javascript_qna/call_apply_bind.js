// // Example of bind method 
var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
  };

  var pokemonName = function(snack, hobby) {
    console.log(this.getPokeName() + 'I choose you!');
    console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
  };

//   var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now

//   logPokemon('sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms



// // Exmaple of call and apply menthod 
// var pokemon = {
//     firstname: 'Pika',
//     lastname: 'Chu ',
//     getPokeName: function() {
//         var fullname = this.firstname + ' ' + this.lastname;
//         return fullname;
//     }
// };

// var pokemonName = function(snack, hobby) {
//     console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
// };

// pokemonName.call(pokemon,'sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms
// pokemonName.apply(pokemon,['sushi', 'algorithms']); // Pika Chu  loves sushi and algorithms



let dish = {
    dish1: "dosa",
    dish2: "samosa",
    dish3: "dhokla",
    dish4: "pavBhaji"
}

let print = {
    dishName: function (dish5, dish6) {
        return `I like ${dish5} and ${dish6} as well ${this.dish1} and ${this.dish2}.`
    }
}

let khana = print.dishName.call(dish, 'vada', 'chole');
let khanaPina = print.dishName.apply(dish, ['vada', 'chole']);
console.log(khana)
console.log(khanaPina)