import React from 'react';
// import { useQuery } from 'react-query';
import axios from '../helpers/Axios';

// const fetchData = async () => {
//   const { data } = await axios.get('/data');
//   return data;
// };

const Home = () => {
  // const { data, error, isLoading } = useQuery('fetchData', fetchData);

  // if (isLoading) return <div className="text-center mt-10">Loading...</div>;
  // if (error) return <div className="text-center mt-10 text-red-500">Error: {error.message}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Furniture Shop</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* {data.map(item => ( */}
          <div key={0} className="border p-4 rounded shadow">
            <h2 className="text-xl font-bold">aya</h2>
            <p>ayayayayyayayayayay</p>
            <p className="text-gray-700">15</p>
          </div>
        {/* ))} */}
      </div>
    </div>
  );
};

export default Home;