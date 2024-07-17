import React, { useEffect, useState } from 'react';
import printersData from '../printers.json'; 
import "./list.css";

const List = () => {
  const [printers, setPrinters] = useState([]);

  useEffect(() => {
    setPrinters(printersData);
  }, []);

  return (
    <div>
      <ul>
        {printers.map(printer => (
          <li key={printer.id}>{printer.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
