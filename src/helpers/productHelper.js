const checkItemExist = (items, id) => {
    return items.find(y => y.id === id);
}
const cartAndWishlistHandler = (id, items, setItemState, setSnackbarText, product, setOpenMsg, type) => {
    if (checkItemExist(items, +id)) {
        setItemState(items.filter(c => c.id !== product.id));
        if (type === "cart") {
            setSnackbarText(`${product.title} is removed from cart!`);
        } else {
            setSnackbarText(`${product.title} is removed from wishlist!`);
        }
    } else {
        setItemState([...items, product])
        if (type === "cart") {
            setSnackbarText(`${product.title} is added in cart!`);
        } else {
            setSnackbarText(`${product.title} is added in wishlist!`);
        }
    }
    setOpenMsg(true);
}

const quantityHandler = (id, items, setItemsState, type) => {
    const updatedItems = items.map(x => {
        if (x.id === +id) {
            if (x.quantity === 1 && type === "sub") {
                return x;
            }
            return { ...x, quantity: type === "add" ? ++x.quantity : --x.quantity }
        } else {
            return x;
        }
    })
    setItemsState(updatedItems);
}

export {
    checkItemExist,
    cartAndWishlistHandler,
    quantityHandler
}