function receivesAFunction(callback){
    callback()
};


function returnsANamedFunction(){
    const fn = function () {
        console.log("Yet more razzling");
    }
return fn
}

function returnsAnAnonymousFunction(){
    return function(a){}
};