console.log('ALAB 308A.1.1');


/**
 * 1)
 */

let globalCounter = 0;
function recursiveFunction() {
    globalCounter++;  // Increment the globalCounter for each call
    recursiveFunction();  // Recursive call
}
try {
    recursiveFunction();  // Start Recursion
} catch (error) {
    console.error('Stack overflow error:', error.message);  // Logging Stack Overflow Error
    console.log('Recursion depth before overflow:', globalCounter);  // Log The Recursion Amount
}

/**
 * 2)
 */

// Recursive Function Flattening Array
const flattenArray = (arr) => {
    return arr.reduce((acc, val) => {
        return Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val);
    }, []);
}

// Change Recursive Function For Trampolining
const flattenArrayTramp = (arr, result = []) => {
    if (arr.length === 0) return result;  // Base case: when array is fully processed
    const [first, ...rest] = arr;

    if (Array.isArray(first)) {
        return () => flattenArrayTramp(first.concat(rest), result);
    } else {
        return () => flattenArrayTramp(rest, result.concat(first));
    }
}

// Tramp Function
const trampLine = (fn, ...args) => {
    let result = fn(...args);
    while (typeof result === "function") {
        result = result();
    }
    return result;
}

// Testing
const nestedArray = [1, [2, [3, [4, [5, [6, [7, [8, [9, [10]]]]]]]]]];
console.log(trampLine(flattenArrayTramp, nestedArray));