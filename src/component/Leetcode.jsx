import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Leetcode() {
    const data = useLoaderData();  
    console.log(data)
    return (
        <>
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Ranking : {data.ranking}
        <img src={data.avatar} alt="Git picture" width={300} />
        </div>
        </>
    );
}

export default Leetcode;

export const LeetcodeInfo = async () => {
    const response = await fetch('https://alfa-leetcode-api.onrender.com/letsdoit10');
    return response.json();
};
