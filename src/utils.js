export const sortData = ((data) => {
    let sortedData = [...data].sort((a, b) => a > b ? 1 : -1);
    return sortedData
})