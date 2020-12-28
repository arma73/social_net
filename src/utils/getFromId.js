function getFromId(id, query) {
    const result = query.find(item => item.id === String(id));
    return result;
}

export default getFromId;
