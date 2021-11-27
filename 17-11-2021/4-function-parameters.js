let func = function (a,b) {
    if(arguments.length == func.length) {
        console.log("we have a match");
    } else {
        console.log("no match");
    }
}

func(1);
func(1,3);
func(1,4,6);

/*
result

no match
we have a match
no match

*/