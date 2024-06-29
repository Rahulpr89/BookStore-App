import React, { useState, useEffect } from 'react';
import Cards from './Cards';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Course = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get('http://localhost:4000/book');
        // console.log(res.data);
        setBook(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getBook();
  }, []);

  return (
    <div>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl'>
            We're delighted to have you <span className='text-pink-500'>here! :)</span>
          </h1>
          <p className='mt-12'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente mollitia vel eveniet minima in aliquam ipsum, et soluta voluptas ipsa dolores omnis, similique laboriosam assumenda neque officiis fugiat iure quod facilis odit. Nihil earum harum cum aliquam magnam quasi ipsam?
          </p>
          <Link to="/">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6">
              Back
            </button>
          </Link>
        </div>

        <div className='mt-4 grid grid-cols-1 md:grid-cols-3'>
          {book.map((item) => (
            <Cards key={item._id} item={item}></Cards>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
