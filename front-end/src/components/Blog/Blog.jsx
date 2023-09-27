import "./Blog.css"
import React, { useRef, useState,useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';


// register();
const Blog = () => {

  const [blogs,setBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/blogs")
      .then((response) =>response.json())
      .then((blogs)=> setBlogs(blogs))
  },[]);

  // const listRef = useRef();

  // const [currentIndex,setCurrentIndex] = useState(0);
  // useEffect(() => {
  //   const listNode = listRef.current;
  //   const imgNode = listNode.querySelectorAll(" li ")[currentIndex];

  //   if (imgNode) {
  //     imgNode.scrollIntoView({
  //       behavior:"smooth"
  //     });
  //   }

  // },[currentIndex]);


  // const scrollToImage = (direction) => {
  //   if (direction === 'prev') {
  //     setCurrentIndex(curr => {
  //       const isFirstSlide = currentIndex === 0;
  //       return isFirstSlide ? 0 : curr - 1;
  //     })
  //   } else {
  //     const isLastSlide = currentIndex === blogs.length - 1;
  //     if (!isLastSlide) {
  //       setCurrentIndex(curr => curr + 1);
  //     }
  //   }
  // }

  // const swiperElRef = useRef(null);

  // useEffect(() => {
  //   // listen for Swiper events using addEventListener
  //   swiperElRef.current.addEventListener('progress', (e) => {
  //     const [swiper, progress] = e.detail;
  //     console.log(progress);
  //   });

  //   swiperElRef.current.addEventListener('slidechange', (e) => {
  //     console.log('slide changed');
  //   });
  // }, []);





  return (
    <section className=" blogSection">
      <div className="header-container">
      <h1 className='header-blog'>Blog #Transformate</h1>
      </div>
      <div className='blogs'>
        <h2 className="blogs-articulosRecientes"> Artículos recientes</h2>
        <div className='mySwiper'>
          {blogs.length > 0 ?
          <Swiper 
          slidesPerView={2}
          spaceBetween={30}
          loop={true}
          pagination={{
          clickable: true,}}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper-Swiper">
            {
              blogs.map((item) =>
              
              <SwiperSlide>
                <div className="contenedor-tarjeta">
                  <div className="contenedor-tarjeta-imagen"> 
                    <img src={item.urlImagen} className="tarjeta-img"/>
                  </div>
                  <p className="tarjeta-descripcion">{item.descripcion} | {item.categoria}</p>
                  <h1 className="tarjeta-titulo">{item.nombreBlog}</h1>
                  <a href={item.urlPost} className="tarjeta-boton">Leer más</a>


                </div>
              </SwiperSlide>
              
              
              
              )
            }
                
                
            </Swiper>
            :
            <h1> No blogs disponibles</h1>
          }

          
          
            





            
            {/* </ul> */}
          </div>


              
            
            
            
            
      </div>
      {/* </div> */}
      {/* // </div> */}









    </section>
  )
}

export default Blog