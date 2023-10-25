if (!Array.prototype.customGroupBy) {
    Array.prototype.customGroupBy = async function (iteratee) {
      const collection = this;
  
      if (!Array.isArray(collection) || !collection.length) {
        return Promise.reject('Invalid input');
      }
  
      const groupKey = (item) => {
        if (typeof iteratee === 'function') {
          return iteratee(item);
        } else if (typeof iteratee === 'string' || typeof iteratee === 'number') {
          return item[iteratee];
        } else if (iteratee instanceof Promise) {
          // Handle a promise as an async operation
          return iteratee.then(result => groupKey(result));
        } else {
          return undefined;
        }
      };
  
      const groupedData = {};
  
      for (const item of collection) {
        const key = groupKey(item);
  
        if (key === undefined) {
          continue;
        }
  
        if (!groupedData[key]) {
          groupedData[key] = [];
        }
  
        groupedData[key].push(item);
      }
  
      // Wrap the result in a Promise for consistency
      return Promise.resolve(groupedData);
    };
  }
  
  // Example usage:
  const data = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
    { name: 'David', age: 30 }
  ];
  
  // Using a string key
  data.customGroupBy('age').then(result => console.log(result));
  
  // Using a function as the iteratee
  data.customGroupBy(item => item.age < 30 ? 'Young' : 'Old').then(result => console.log(result));
  
  // Using a Promise as an iteratee
  const asyncKeyGenerator = new Promise((resolve) => {
    setTimeout(() => resolve('new-key'), 1000);
  });
  
  data.customGroupBy(asyncKeyGenerator).then(result => console.log(result));
  