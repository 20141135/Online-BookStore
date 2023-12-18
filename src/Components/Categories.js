import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Modal from './CategoryModal'; // Assuming CategoryModal is in the same directory

const BookCategories = () => {
  const categories = [
    {
      name: 'Adventure stories',
      description: 'Adventure novels are captivating literary journeys that transport readers to faraway lands, immersing them in thrilling and unpredictable experiences. Distinguished from fantasy novels by their rootedness in the real world, adventure stories unfold within the realms of possibility, inviting readers to explore the wonders and challenges of our own universe. With a primary aim of sparking imaginations, these tales of daring escapades and exploration captivate readers with the excitement of discovery and the triumph of human spirit',
      image: 'https://m.media-amazon.com/images/I/813o3E45ASL._SL1456_.jpg',
      author: 'Antoine de Saint-Exupéry, H. Rider Haggard ',
      noBook:'60,000+',
      Avgprice:'£8.99'
               
    },
    {
      name: 'Historical fiction',
      description: 'Books serve as windows into the past, offering readers a poignant glimpse into historical landscapes characterized by great conflict and transformative change. Within the pages of these narratives, readers embark on journeys through bygone eras, encountering the intricacies of societies shaped by tumultuous events. The stories unfold against historical backdrops, weaving tales that illuminate the human experience amid the challenges and shifts that defined different epochs. As readers immerse themselves in these historical fictions, they not only witness the unfolding drama but also gain insights into the cultural, social, and political dynamics that have shaped the course of history.',
      image: 'https://images.unsplash.com/photo-1472173148041-00294f0814a2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGlzdG9yeSUyMGJvb2tzfGVufDB8fDB8fHww',
      author: 'Charles Dickens,  Lew Wallace, Umberto Eco ',
      noBook:'70,000+',
      Avgprice:'£8.99'
    },
    { 
      name: 'Horror',
      description: 'Prepare yourself for a spine-chilling journey into the realm of supernatural terror. This gripping narrative unfolds as a tale that transcends the ordinary, weaving a tapestry of suspense, mystery, and otherworldly phenomena that will send shivers down your spine. As you navigate through the pages, each turn intensifies the sense of foreboding, leaving an indelible mark on your imagination. The haunting narrative is crafted with a mastery that lingers even after the final chapter, ensuring that the spectral echoes of the story continue to resonate in your dreams, creating an unforgettable and unsettling experience that transcends the boundaries of the written word.',
      image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/book/x/y/c/the-horror-story-original-imagzfbwmc2ry7hh.jpeg?q=90',
      author: 'VC Andrews,  Daphne Du Maurier, Peter Benchley ',
      noBook:'70,000+',
      Avgprice:'£8.89'
    },
           {
              name: 'Humour and satire',
              description: 'Embark on a humorous journey through the absurdities of life, as this witty narrative fearlessly navigates the intricacies of human existence. Through a seamless blend of humor and satire, it not only elicits hearty laughter but also encourages contemplation, inviting readers to reflect on the comical and often absurd aspects of the world we inhabit. With irreverent charm, this narrative transforms mundane moments into comedic revelations, creating a literary experience that is both entertaining and thought-provoking.',
             image :'https://m.media-amazon.com/images/I/41CEmQMxQrL._SR290,290_.jpg',
             author: ' George Orwell, Mark Twain, Jaroslav Hašek',
             noBook:'60,000+',
             Avgprice:'£8.89'
            },
            {
              name: 'Mystery',
              description: 'Embark on an enigmatic journey where suspense intertwines with unexpected twists and concealed clues, crafting a narrative that captivates readers and keeps them teetering on the edge of their seats. Throughout the story riveting progression, anticipation builds, creating a literary experience that culminates in a final revelation that promises to unravel the mysteries and leave an indelible mark on the reader imagination. Prepare for a gripping narrative that ensures each page is a step deeper into a realm of intrigue and anticipation.',
              image:'https://publish.purewow.net/wp-content/uploads/sites/2/2021/06/best-mystery-books-michaelides.png?fit=728%2C524',
              author: 'Agatha Christie, Dan Brown',
              noBook:'70,000+',
              Avgprice:'£8.99'
            },
            {
              name: 'Science fiction',
              description: 'Embark on a mind-bending odyssey that transcends the boundaries of the known, delving into futuristic realms where advanced technologies and cosmic wonders unfold in awe-inspiring splendor. This narrative serves as a captivating exploration, challenging the limits of imagination and propelling readers into a speculative future where the possibilities are boundless. With each turn of the page, the story unveils a tapestry of innovation, inviting readers to ponder the potential of a universe where the extraordinary becomes the norm, creating a visionary journey that stretches the horizons of the mind.',
              image:'https://m.media-amazon.com/images/I/41GOn1yvXDL._SY445_SX342_.jpg',
              author: 'George Orwell, Frank Herbert, Douglas Adams ',
              noBook:'60,000+',
              Avgprice:'£8.16'
            },
            {
              name: 'Autobiography and memoir',
              description: 'Delve into a candid and introspective narrative that intimately recounts the authors life journey, offering heartfelt reflections on personal triumphs, navigating through challenges, and embracing transformative experiences. This sincere exploration serves as a literary mirror, reflecting the nuanced tapestry of the authors existence, inviting readers to witness the highs and lows with empathy and understanding. Through the lens of introspection, the narrative unveils a mosaic of resilience, growth, and self-discovery, creating a profoundly human narrative that resonates with the shared complexities of the human experience.',
              image:'https://photomemoirs.co/images/698x600/698x600_image_size4.jpg',
              author: 'Anne Frank,paramahansa Yogananda, Jiang Rong',
              noBook:'70,000+',
              Avgprice:'£9.99'
            },
            {
              name: 'Biography',
              description: 'mmerse yourself in a compelling and meticulously detailed account that unravels the tapestry of a person life. This narrative delves deep into the intricacies of their journey, meticulously exploring the peaks of achievements, navigating the valleys of challenges, and illuminating the profound impact they have left on the world. Through a rich and comprehensive storytelling lens, readers are invited to witness the multifaceted dimensions of the individual experiences, gaining insights into the shaping forces that define a life legacy and contribute to the broader narrative of human history.',
              image:'https://cdn.kobo.com/book-images/de669ae8-aca7-408f-9664-bcc95a8325cc/1200/1200/False/albert-einstein-the-genius-who-failed-school-biography-book-best-sellers-children-s-biography-books.jpg',
              author: 'Irving Stone, Andrew Morton, Jung Chang',
              noBook:'80,000+',
              Avgprice:'£9.99'
            },
    // Add more categories as needed
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleMoreClick = (index) => {
    setSelectedCategory(categories[index]);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <h2 style={{ textAlign: "center", color: "navy" }}>CATEGORIES</h2>

      <Container>
        {categories.map((category, idx) => (
          <Card key={idx} className='mb-3' style={{ backgroundImage: `url(https://png.pngtree.com/thumb_back/fh260/back_our/20190622/ourmid/pngtree-creative-synthesis-simple-book-education-and-training-background-image_219497.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center', color: 'white' }}>
            <Card.Body style={{ color: "black" }}>
              <Card.Title style={{ color: "navy" }}><h3>{category.name}</h3></Card.Title>
              <button type="button" className="btn btn-secondary mt-4 py-4" style={{ background: "navy", color:"white" ,margin:"1vw", padding:'0.5vw'}} onClick={() => handleMoreClick(idx)}>More</button>
            </Card.Body>
          </Card>
        ))}
      </Container>

      <Modal show={showModal} category={selectedCategory} onClose={handleCloseModal} />
    </>
  );
};

export default BookCategories;
