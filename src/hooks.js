import { useState } from 'react';
import axios from 'axios';
import { v4 as uuid } from 'uuid';

const useFlip = (initialState = true) => {
    const [isFacingUp, setIsFacingUp] = useState(initialState);

    const flipCard = () => {
        setIsFacingUp(isUp => !isUp);
    }
    return [isFacingUp, flipCard];
}

const useAxios = (baseUrl) => {
    const [data, setData] = useState([]);

    const addData = async (urlEnd = '') => {
        const response = await axios.get(`${baseUrl}${urlEnd}`);
        setData(data => [...data, { ...response.data, id: uuid() }]);
    }
    return [data, addData];
}


export { useFlip, useAxios };