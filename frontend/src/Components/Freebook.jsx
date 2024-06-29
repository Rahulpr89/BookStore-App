import React from 'react'
// import list from "../list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Freebook = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {

    const getBook = async () => {
      try {
        const res = await axios.get('http://localhost:4000/book');
        setBook(res.data.filter((data)=>{
          return data.category ==="Free"
        }));
      } catch (err) {
        console.log(err);
      }
    };
    getBook();
  }, []);



  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };






  // const filterData= list.filter((data)=>{
  //   return data.category ==="Free"
  // });
  
  return (
    <div>
      
   <div className='max-w-screen-2xl  container   mx-auto md:px-20 px-4 '>
    <div className=''>
      <h1 className='font-semibold text-xl pb-2'>
        Free Offered Courses
      </h1>
      <p className=''>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel fugiat tempora quisquam ab, autem nihil!
      </p>
    </div>


      <div>
      <Slider {...settings}>
        {
          book.map((item)=>(
            <Cards item={item} key={item.id}></Cards>
          ))
        }
      </Slider>
      </div>

</div>
    </div>
  )
}

export default Freebook