// Write a function that reverses characters in (possibly nested) parentheses in the input string.

// Input strings will always be well-formed with matching ()s.

// Recursion was needed

function reverseInParentheses(inputString) {
    if (inputString.includes("(")) {
        return reverseInParentheses(reverseOnce(inputString));
    } 
    else {     
        return inputString;
    }
}

function reverseOnce(inputString) {
    // Looks for characters between "(" and ")"
    const regex = /\(([^()]*)\)/i;
    
    // Executes regular expression on string
    let subStr = regex.exec(inputString)[1]; 
    subStr = subStr.split("").reverse().join("");
    
    // Replaces original characters between "(" and ") and parentheises with new substring
    return inputString.replace(regex, subStr);
}
