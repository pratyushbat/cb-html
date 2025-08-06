let arr2=[1,2,3]
for(let val of arr2){
// console.log(val)
}

for(let index in arr2){
// console.log(arr2[index])
}

let notes=["do","re","mi","la","so","la","ti"]
// slice dont change original array
// slice(start,end)
console.log(notes.slice(4,6))
console.log(notes)
// splice changes original array
// splice(start,noofitems,data to be inserted)
console.log(notes.splice(4,2,"aa","bb","cc"))
// console.log(notes.splice(4,2))
console.log(notes)
// concat also dont change original array
console.log(notes.concat('sa','re','ga'))
console.log(notes)

