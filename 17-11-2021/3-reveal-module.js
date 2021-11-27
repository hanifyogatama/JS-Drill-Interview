
//creating private and public functions/variables
// turn this object literal into a module that only exposes the render method

let myModule = (function(){

    let _data = [];
    let _render = function(){
        // click listener for _add and remove
    };

    let _add = function(){
        _data.push("aadad");
    };

    let _remove = function() {
        _data.pop();
    }
    return {
        render: _render
    }
})();

myModule.render();
myModule._data; //this will fail
myModule._add; // this will fail