/**
 * converts an array of objects into groups of subarrays with the passed length.
 * @param {array} arr               Array of objects.
 * @param {number} length           Group length range.
 * 
 * @returns {array} 
 */
const convertObjectToGroups = (arr, length) => {
    const group = [];

    arr.forEach((item, index, arr) => {
        (!(index % length) || index === 0) && group.push([]);

        // change toString for keys
        const itemClone = {...item};
        itemClone[Symbol.toPrimitive] = function () {
            let presentObject = "";
            for (let key in this) {
                presentObject += this[key];
            }
            return presentObject;
        };

        group[group.length - 1].push(itemClone);

        if (!(arr[index + 1]) && (group[group.length - 1].length < 3)) {
            group[group.length - 1] = 
                new Array(3)
                    .fill(null, 0, group[group.length - 1].length)
                    .fill({ "id": Math.random(), "empty": true }, group[group.length - 1].length)
                    .map((item, index) => item === null ? group[group.length - 1][index] : item);
        }
    });
    
    return group;
};

export default convertObjectToGroups;
