toneloke = (function() {
  return {
    libraryMethod: function() {return 'Cache $, Raiders, JS, MongoDB and tacos rule!'},

    each: function (list, iteratee, context) {
      if (Array.isArray(list)) {
        for (let i = 0, l = list.length; i < l; i++) {
          const element = list[i];
          iteratee(element, i, list);
        }
      } else if (typeof list === 'object') {
          for (const key in list) {
            const value = list[key];
            iteratee(value, key, list)
          }
        }
        return list
      },

    map: function (list, iteratee, context) {
      let newArray = []
      if (Array.isArray(list)) {
        for (let i = 0, l = list.length; i < l; i++) {
          const element = list[i];
          newArray.push(iteratee(element, i, list))
        }
      } else if (typeof list === 'object') {
          for (const key in list) {
            const value = list[key];
            newArray.push(iteratee(value, key, list))
          }
        }
        return newArray
      },

      reduce: function (list, iteratee, memo, context) {
        let count = 0
        for (var i = 0; i < list.length; i++) {
          const element = list[i]
          if(!memo) {
            memo = list[0]
            continue
          }
          memo = iteratee(memo, element, i, list)
        }
        return memo
      },

      find: function (list, predicate, context) {
        for (let i = 0; i < list.length; i++) {
          const element = list[i]
          if (predicate(element)) {
            return element
          }
        }
      },

      filter: function (list, predicate, context) {
        var newArray = []
        for (var i = 0; i < list.length; i++) {
          const element = list[i]
          if (predicate(element)) {
            newArray.push(element)
          }
        }
        return newArray
      },

  //     sortBy: function (list, iteratee, context) {
  //    let results = list.slice()
  //    if (typeof iteratee === ‘string’) {
  //      results.sort(function (a, b) {
  //        if (a[iteratee] < b[iteratee]) {
  //          return -1
  //        } else {
  //          return 1
  //        }
  //      })
  //    } else {
  //      results.sort(iteratee)
  //    }
  //    return results
  //  },

      size: function (list) {
        return Object.keys(list).length
      },

      first: function(array, n) {
        if(!n) {n = 1}
        return array.slice(0,n)
      },

      last: function(array, n) {
        if(!n) {n = -1}
        return array.slice(n)
      },

      compact: function (array) {
        newArray = []
        for (var i = 0; i < array.length; i++) {
          if (array[i]) {
            newArray.push(array[i])
          }
        }
        return newArray
      },



      uniq: function (array, isSorted, iteratee) {
        newArray = []
        if(isSorted) {
          for (var i = 0; i < array.length; i++) {
            if ((newArray.length-1) !== array[i]) {
                newArray.push(array[i])
            }
          }
        } else {
          for (var i = 0; i < array.length; i++) {
            if (!newArray.includes(array[i])) {
              newArray.push(array[i])
            }
          }
        }
        return newArray
      },

      keys: function (object) {
        newArray = []
        for (let key in object) {
          newArray.push(key)
        }
          return newArray
      },

      values: function (object) {
        return Object.values(object)
      },

      flatten: function(array, shallow) {
      
        let current = array
        let next = []

        newArray=[]

        while(current) {
          if(!isNaN(current[0])) {
            newArray.push(current[0])
          }

          if(Array.isArray(current)) {
            for (let i = 0; i < current.length; i++) {
              next.push(current[i])
            }
          }
          current = next.shift()
        }
        return newArray
      }

    }
})()
