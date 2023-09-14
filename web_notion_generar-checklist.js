numbers = ['3973816', '4591122', '5057494']

let number_list = [];
for (let i = 0; i < numbers.length; i++) {
  number_list.push("- [ ]  " + numbers[i]);
}

console.log((number_list).join('\n'));
