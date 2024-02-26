import React from 'react';

export default function FooterList({ title, listItem }) {
  return (
    <div className='container my-5 p-2'>
      <p className='text-uppercase'>{title}</p>
      <ul className='list-unstyled'>
        {listItem.map((element, index) => (
          <li className="my-3"key={index}>{element}</li>
        ))}
      </ul>
    </div>
  );
}
