function foo (){
    var bar;
    function zip(){
        var quux;
        bar = true;
        console.log('l2',quux);
    };
    quux = 5;
    return zip();
};
//var toto = foo();
//zip();
//toto();
foo();
//console.log('l3',toto);
console.log('l1',quux);