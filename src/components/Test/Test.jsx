import { Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:1337/api/cars')
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <Box>
            <h1>Car Data:</h1>
            <ul>
                {data.map((car) => (
                    <li key={car.id}>{car.name}</li>
                ))}
            </ul>
        </Box>
    );
};

export default Test;
