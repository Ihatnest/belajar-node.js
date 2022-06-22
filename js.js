let items = ['JS', 'PHP', 'RUBY'];

let replacedItem = items.splice(items.indexOf('JS'), 1, 'PYTHON')

console.log(replacedItem) //['RUBY']
console.log(items) //['JS', 'PHP', 'PYTHON']