
Object.prototype.flatten = function (separator = '_') {
    const result = {};

    function recurse(current, currentKey) {
    for (const key in current) {
        const newKey = currentKey + separator + key;

        if (typeof current[key] === 'object') {
        recurse(current[key], newKey);
        } else {
        result[newKey] = current[key];
        }
      }
    }

    recurse(this, '');

    return result;
};


// Example usage:
const nestedObject = {
    a: {
        b: {
        c: 1,
        d: 2
        },
        e: 3
    },
    f: 4
};

const flattenedObject = nestedObject.flatten();
console.log(flattenedObject);
