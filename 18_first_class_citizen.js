
function message() {
    console.log("Inside message function");
    return function(){
        console.log("Inside inner function");
    }
}
message()();