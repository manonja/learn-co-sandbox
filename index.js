function clean(item){
  console.log(`I just cleaned a ${item}`)
}

var nails = ['rusty nail', 'rusty nail', 'bent nail', 'clean nail']

for (var i = 0; i < nails.length; i++){
  clean(nails[i])
}

var planks = ['splitered plank', 'straight plank', 'bent plank']

for (let i = 0; i < planks.length; i++){
  clean(planks[i])
}

console.log('done!')


