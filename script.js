console.log('ALAB 308A.1.1');

let globalCounter = 0;
function recursiveFunction() {
    globalCounter++;  // Increment the globalCounter for each call
    recursiveFunction();  // Recursive call
}
try {
    recursiveFunction();  // Start the recursion
} catch (error) {
    console.error('Stack overflow error:', error.message);  // Log the stack overflow error
    console.log('Recursion depth before overflow:', globalCounter);  // Log the recursion depth
}