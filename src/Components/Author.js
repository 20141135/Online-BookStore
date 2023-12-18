import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Container from 'react-bootstrap/Container';


const AuthorCarousel = () => {
  const authors = [
    { id: 1, name: 'Arundhati Roy', photo: 'https://d2g9wbak88g7ch.cloudfront.net/authorimages/arundhatistory_647_100316054702.jpg' },
    { id: 2, name: 'Shashi Tharoor', photo: 'https://d2g9wbak88g7ch.cloudfront.net/authorimages/dr-shashi-tharoor-2.jpg' },
    { id: 3, name: 'Stephen Coonts', photo: 'https://d2g9wbak88g7ch.cloudfront.net/authorimages/stephan-coonts.jpg' },
    { id: 4, name: 'Gillian Flynn', photo: 'https://d2g9wbak88g7ch.cloudfront.net/authorimages/dillian.jpg' },
    { id: 5, name: 'Stephen King', photo: 'https://d2g9wbak88g7ch.cloudfront.net/authorimages/stephen-edwin-king.jpg' },
    { id: 6, name: 'William Worlds', photo: 'https://d2g9wbak88g7ch.cloudfront.net/authorimages/william-wordsworth-8.jpg' },
    { id: 7, name: 'Erich Segal', photo: 'https://d2g9wbak88g7ch.cloudfront.net/authorimages/ma10_milestones_segal.jpg' },
    // Add more authors as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <h2 style={{ textAlign: "center", color: "navy", margin: '3vw' }}>FAMOUS AUTHOR</h2>
      <Container style={{marginLeft: '35%'}}>
        <Slider {...settings}>
          {authors.map((author) => (
            <div key={author.id} className="author-slide" styel={{margin:' auto' , padding:'10px'}}>
              <img
                src={author.photo}
                alt={`Author ${author.id}`}
                className="rounded-circle author-image" 
                style={{ width:'7vw', height:'8vw' , marginLeft:'2.5vw', borderRadius:'50%'}}
              />
              <h4 style={{ textAlign: "center", color: "navy" }}>{author.name}</h4>
            </div>
          ))}
        </Slider>
      </Container>
    </>
  );
};

export default AuthorCarousel;
