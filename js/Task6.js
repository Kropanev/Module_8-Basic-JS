let array = ['2', 'ad', '1']
let check = true

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        if (array[i] != array[j]) check = false
    }   
}
console.log(check)