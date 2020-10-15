function onFieldCollection(array) {
    if(array.length > 0) {
        return array.filter(function(a) { return a.onField; });
    } else {
        return array
    }
}

function elapsedSeconds(start) {
   return (new Date() - start)/1000;
}