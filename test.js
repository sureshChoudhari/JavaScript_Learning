
function fabo(myNumber){
    if (myNumber == 0) {
        return 0;
    }
    if (myNumber == 1) {
        return 1;
    }
    let fN = 0; sN = 1; nextN = fN + sN;

    for (let index = 0; index < myNumber; index++) {
        fN = sN;
        sN = nextN;
        nextN = fN = sN;
        console.log(nextN);
    }
}
fabo(5);