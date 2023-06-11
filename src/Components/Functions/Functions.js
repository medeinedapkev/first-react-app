export function firstLetterUpperCase(element) {
    const firstLetter = element.charAt(0).toUpperCase();
    const lastOfStr = element.slice(1, element.length);
    const newElement = firstLetter + lastOfStr;

    return newElement;
}

export function deleteHandler(setFunction, index) {
    setFunction(prevState => {
        const newState = [...prevState];
        newState.splice(index, 1);
        return newState;
    })
}

export function deleteAllHandler(setFunction) {
    setFunction(prevState => {
        const newState = [...prevState]
        newState.splice(0, newState.length)

        return newState;
    })
}