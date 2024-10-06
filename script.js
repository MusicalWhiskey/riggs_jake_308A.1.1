console.log('ALAB 308A.1.1');


/**
 * 1)
 */

let globalCounter = 0;
function recursiveFunction() {
    // Increment the globalCounter
    globalCounter++;  
    recursiveFunction();
}
try {
    // Start Recursion
    recursiveFunction();  
} catch (error) {
    // Logging Stack Overflow Error
    console.error('Stack Overflow Error:', error.message);  
    // Log The Recursion Amount
    console.log('Recursion Count At Overflow:', globalCounter);  
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

// Change Recursive Function For Tramp
const flattenArrayTramp = (arr, result = []) => {
    // Start After Array Processes
    if (arr.length === 0) return result;  
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

/**
 * 3)
 */

document.addEventListener('DOMContentLoaded', () => {
    const primeContainer = document.getElementById('prime number');

    // Check for Prime Number
    const isPrime = (num) => {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    // Find/Show Prime Numbers
    const showPrimes = (n) => {
        // Store Primes
        let primes = [];  

        const renderPrime = (i) => {
            if (i > n) {
                // Finish Calculation Alert
                alert('Finished Calculation');
                return;
            }

            if (isPrime(i)) {
                primes.push(i);  // Add Prime to Array

                // Create New Div For Prime
                const primeElement = document.createElement('div');
                primeElement.textContent = i;
                // Append To Container
                primeContainer.appendChild(primeElement);  
            }

            // Defer To Next Calculation
            setTimeout(() => renderPrime(i + 1), 0);
        };
        // Start Recursive Function
        renderPrime(1);  
    };

    // Start the calculation with n = 10000
    showPrimes(10000);
});

