let cats = ["Milo","Otis","Garfield"] // array

function destructivelyAppendCat(name){
    return cats.push(name)
}
function destructivelyPrependCat(name){
    return cats.unshift(name)
}
function destructivelyRemoveLastCat(){
    return cats.pop()
}
function destructivelyRemoveFirstCat(){
    return cats.shift()
}

function appendCat(name){
    let copycats = [...cats, name]
    return copycats
}
function prependCat(name){
    let postcats = [name, ...cats]
     return postcats
}
function removeLastCat (){
    let removecats = [...cats]
    return removecats.slice(0,removecats.length-1)
}
function removeFirstCat(){
    let removefirstcats = [...cats]
    return removefirstcats.slice(1)
}
