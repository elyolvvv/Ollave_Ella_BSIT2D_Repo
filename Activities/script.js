function WhatShallWear(temp) {
    if (temp < 60) {
        console.log("Wear a jacket");
    } else if (temp < 70) {
        console.log("Wear a Sweater");
    } else {
        console.log("Wear a t-shirt"); 
    }
}

// Example Calls
WhatShallWear(80); // Output: Wear a t-shirt
WhatShallWear(60); // Output: Wear a t-shirt
WhatShallWear(50); // Output: Wear a Jacket