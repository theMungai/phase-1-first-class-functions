function receivesAFunction(callback){
    return callback()
}

function sayHello(){
    console.log("Hello World");
    
}
receivesAFunction(sayHello)

function returnsANamedFunction(){
    const namedFunction = function(){
        console.log(namedFunction)
    }

    return namedFunction
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log("Anonymous function")
    }
}