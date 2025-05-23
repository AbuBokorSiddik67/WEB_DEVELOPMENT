const getStoreBook = () => {

    const storedBookSTR = localStorage.getItem("readList");
    if (storedBookSTR) {
        const storedBookData = JSON.parse(storedBookSTR);
        return storedBookData;
    } else {
        return []
    }
}

const addToStoreBD = (id) => {
    const storedBookData = getStoreBook();
    if (storedBookData.includes(id)) {
        alert("Data already exist..")
    }
    else {
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem("readList", data);
    }
}

export { addToStoreBD,getStoreBook };