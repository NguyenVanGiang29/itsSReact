import { useState } from 'react'

function CustomHooks(){

    const [index, setIndex] = useState(0);

    const nextPage = () => {

        var index1;
        index1 = index + 1

        if (index1 < 4) {
            setIndex(index1);
        } else {
            setIndex(index1 - 4);
        }

    }

    const backPage = () => {
        var index1;
        index1 = index - 1;
        if (index1 >= 0) {
            setIndex(index1);
        } else {
            setIndex(index1 + 4);
        }
    }

    return [index, setIndex, nextPage, backPage];
}

export default CustomHooks;
