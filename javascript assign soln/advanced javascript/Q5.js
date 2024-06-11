/*Create a simple polyfill for the Array.includes method by the name of customIncludes.*/

if (!Array.prototype.customIncludes) {
    Array.prototype.customIncludes = function(element, fromIndex) {
        fromIndex = fromIndex || 0;
        if (fromIndex < 0) {
            fromIndex = this.length + fromIndex;
            if (fromIndex < 0) {
                fromIndex = 0;
            }
        }
        for (let i = fromIndex; i < this.length; i++) {
            if (this[i] === element) {
                return true;
            }
        }
        return false;
    };
}
const array = [1, 2, 3, 4, 5];
console.log(array.customIncludes(3));       
console.log(array.customIncludes(6));       
console.log(array.customIncludes(2, 2));    
console.log(array.customIncludes(2, -4));   
