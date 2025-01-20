let userRole = "admin";
let accesslevel;

if(userRole === "admin") {
    accesslevel = "Full Access granted";
}
else if(userRole === "manager") {
    accesslevel = "Limited Access granted";
}   
else{
    accesslevel = "No Access granted";
}

console.log("Access Level:",accesslevel); // Full Access granted

let isLoggedIn = true;
let userMessage;


if(isLoggedIn) {
    if(userRole === "admin") {
        userMessage = "Welcome Admin!";
    }
    else{
        userMessage = "Welcome User!";
    }
    
}
else{
    userMessage = "Please log in to access the system.";
}

console.log("User Message:",userMessage); // Welcome Admin! 

let userType = "subscriber";
let userCategory;

switch(userType) {
    case "admin":
        userCategory = "Admin User";
        break;
    case "manager":
        userCategory = "Manager User";
        break;
    case "subscriber":
        userCategory = "Subscriber User";
        break;
    default:
        userCategory = "Unknown User";
}

console.log("User Category:",userCategory); // Subscriber User

let isAuthenticated = true;

let authenticatedStatus = isAuthenticated ? "User is authenticated and logged in" : "User is not authenticated";

console.log("Authenticated Status:",authenticatedStatus); // User is authenticated and logged in