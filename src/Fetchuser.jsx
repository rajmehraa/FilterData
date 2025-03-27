import React, { useEffect, useState } from 'react';

export default function Hello() {
  const [count, setCount] = useState(null); // Initializing with `null` or 0

  useEffect(() => {
    const getUserdata = async () => {
      const url = 'https://dummyjson.com/products';
      let response = await fetch(url);
      let data = await response.json();
      console.log(data);
      setCount(data); // Now you can safely set the data once it's fetched
    };

    getUserdata(); // Call the async function inside useEffect

  }, []); // Empty dependency array ensures it only runs once, when the component mounts.

  return (
    <div>
      <h1>{count ? JSON.stringify(count) : 'Loading...'}</h1> {/* Display data or loading message */}
    </div>
  );
}
