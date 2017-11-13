function foo (){
    var bar;
    function zip(){
        var quux;
        bar = true;
    };
    quux = 5;
    return zip;
};