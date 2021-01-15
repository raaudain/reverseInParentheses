// Write a function that reverses characters in (possibly nested) parentheses in the input string.

// Input strings will always be well-formed with matching ()s.

function reverseInParentheses(inputString) {
    let str = inputString;
    
    while (str) {
        const closing = str.indexOf(")");
        const opening = str.substr(0, closing).indexOf("(");
        
        const start = str.substr(0, opening);
        const middle = str.substr(opening + 1, closing).split("").reverse().join("")
        const end = str.substr(closing + 1, str.length)
        
        if (closing === -1) {
            break;
        }

        str = start + middle + end;
    }
    
    return str;
}
