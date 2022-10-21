const map = new map();
map.set('one', 1);
map.set('2', 'two');
if (map.has('two')){
    console.log("two");
}else{
    console.log(map.get('one'));
}



const foo = (() => {
    return new Promise ((resolve, reject) => {
        let result = getSomeResult();
        if(result)
        resolve("success");
        else
        reject("something went wrong");
    })
})
foo();
console.log(foo);