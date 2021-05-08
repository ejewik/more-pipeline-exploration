function unreachableStatement(a, b) {
    // testing unreachable code for linter
    let result = a + b;
    return result;
    console.log("This is unreachable");
}

function redundantElseIf(a, b) {
    // testing redunant else if for linter
    if(a > b) {
        return a;
    } else if(a > b) {
        return b;
    } else {
        return b;
    }
}

function unusedVars() {
    // testing unused variable for linter
    let str = "This is unused.";
}

function mixedSpacesAndTabs() {
    // testing tabs vs. spaces for linter
    let str1 = "This is indented by tab.";
    let str2 = "This is indented by spaces.";
    return str1;
}