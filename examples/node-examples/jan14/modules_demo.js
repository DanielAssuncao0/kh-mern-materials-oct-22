// a vairable with exports
user = 'Alex'; // this can't be imported in another js file

// module which is a simple variable
module.exports.title = 'Node.js tutorial'

// module which is a function
module.exports.greet = function(username) {
    return `Hello ${username}`
}

// module which is an object with 2 functions
module.exports.calculator = {
    add: function(x, y) {
        return (x + y);
    },
    sub: function(x, y) {
        return (x - y);
    }
}
