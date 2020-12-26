function random(min, max, query) {
    if (!query) {
        return Math.floor(min + Math.random() * (max + 1 - min));
    }
    
    if (max > (query.length - 1)) 
        throw new Error(`max value ${max} is greater than query length ${query.length}`);
    if (min < 0) 
        throw new Error("min is less than zero");
    
    const rand = Math.floor(min + Math.random() * (max + 1 - min));
    return query[rand];
}

export default random;
