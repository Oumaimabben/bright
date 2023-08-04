import React from 'react';

import Card from './Card';


export default function GridList({ items }) {

  return (

    <div className=" grid grid-cols-4  justify-items-center items-center ">

      {items.map((item, index) => (

        <div key={index} >

          <Card img={item.image} title={item.title} price={item.price} rate={item.rate} description={item.description}/>




        </div>

      ))}

    </div>

  );

}