import React, { useState } from 'react';
import ProjectTile from '../Components/ProjectTile'
import '../App.css';
import Modal from '../Components/Modal';
import { useAppContext } from '../Components/Context';
import { MdPhonelinkErase } from "react-icons/md";
function Old() {
  const { modal, setModal} = useAppContext();
      const [modalContent, setModalContent] = useState({
        message: '',
        link: '',
        img: '',
        phone: false
      });
    
      const toggleModal = () => {
        setModal(!modal);
      };
    
      if (modal) {
        document.body.classList.add('active-modal');
      } else {
        document.body.classList.remove('active-modal');
      }
    
      const viewModal = (message, link, img, phone) => {
        toggleModal();
        setModalContent({ message, link, img, phone });
        setModal(true);
      };
    
      const closeModal = () => {
        setModal(false);
      };
  
return (
  <>
  <div className='testing'>
            {modal && (
              <Modal
                message={modalContent.message}
                link={modalContent.link}
                img={modalContent.img}
                onClose={closeModal}
                phone={modalContent.phone}
              />
            )}
         <ProjectTile
              title="Example Product Promotion Page"
              imageSrc="https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/6622e76ceb040a0008ca7f58/screenshot_2024-04-19-21-52-13-0000.webp&fit=cover&h=500&w=800"
              imageAlt="Example Product Promotion Page"
              onClick={() => viewModal(
                "We all gotta start somewhere.",
                "https://brysons-eppp.netlify.app/",
                "https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/6622e76ceb040a0008ca7f58/screenshot_2024-04-19-21-52-13-0000.webp&fit=cover&h=500&w=800",
                true
              )}
            />
            <ProjectTile
              title="Markdown Previewer"
              imageSrc="https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/64d037b6b773de0008898238/screenshot_2023-08-07-00-16-59-0000.png&fit=cover&h=500&w=800"
              imageAlt="Markdown Previewer"
              onClick={() => viewModal(
                "Apart of the Free Code Camp curriculum. It's a coding language inside of a coding language!",
                "https://brysons-markdown-previewer.netlify.app/",
                "https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/64d037b6b773de0008898238/screenshot_2023-08-07-00-16-59-0000.png&fit=cover&h=500&w=800"
              )}
            />
            <ProjectTile
              title="Fun Fact Generator"
              imageSrc="https://i.ibb.co/QjKF4J2/Fun-Fact-Gen-jpg.png"
              imageAlt="Fun Fact Generator"
              onClick={() => viewModal(
                "One of my favorite projects to date. Simple, fun to create and fun to use. This was my first exposure to dealing with objects in react, and the project turned out well!",
                "https://bryson-fun-facts.netlify.app/",
                "https://i.ibb.co/QjKF4J2/Fun-Fact-Gen-jpg.png"
              )}
            />
            <ProjectTile
              title="Measurement Converter"
              imageSrc="https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/65272af720ab8c00083a63cf/screenshot_2023-10-11-23-08-55-0000.png&fit=cover&h=500&w=800"
              imageAlt="Measurement Converter"
              onClick={() => viewModal(
                "The first project I made with no outside resources or help. Simple, but fun to use and a monumentous goal checked off.",
                "https://brysons-measurement-converter.netlify.app/",
                "https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/65272af720ab8c00083a63cf/screenshot_2023-10-11-23-08-55-0000.png&fit=cover&h=500&w=800"
              )}
            />
            <ProjectTile
              title="Drum Machine"
              imageSrc="https://i.ibb.co/K5fwG87/Drum-Machine.png"
              imageAlt="Drum Machine"
              onClick={() => viewModal(
                "Dealing with mp3 files was challenging and fun to work with. For some reason I spent the most time working on the volume of all things. See what kind of beats you can make! ",
                "https://brysons-drum-machine.netlify.app/",
                "https://i.ibb.co/K5fwG87/Drum-Machine.png"
              )}
            />
            <ProjectTile
              title="Calculator"
              imageSrc="https://d33wubrfki0l68.cloudfront.net/64d464db0ca29b000892c827/screenshot_2023-08-10-04-18-53-0000.png"
              imageAlt="Calculator"
              onClick={() => viewModal(
                "A project every good programmer should have under their belt. This was one of the more time consuming and difficult personal projects I ever coded in React. After this project, I really began to feel like a software engineer.",
                "https://brysons-calculator.netlify.app/",
                "https://d33wubrfki0l68.cloudfront.net/64d464db0ca29b000892c827/screenshot_2023-08-10-04-18-53-0000.png"
              )}
            />
            <ProjectTile
              title="Tic-Tac-Toe"
              imageSrc="https://i.ibb.co/v4Bcdt5/tic-tac-toe.png"
              imageAlt="Tic-Tac-Toe"
              onClick={() => viewModal(
                "The first game I ever created as a software engineer using the terminal has finally come to life in a user friendly setting. Play against a rather forgiving AI, or challenge your friends!",
                "https://brysons-tic-tac-toe.netlify.app/",
                "https://i.ibb.co/v4Bcdt5/tic-tac-toe.png"
              )}
            />
            <ProjectTile
              title="Online Game: Overlord"
              imageSrc="https://i.ibb.co/7nPYdwY/overloard-pfp.jpg"
              imageAlt="Overlord"
              onClick={() => viewModal(
                "Why make another chess clone when you can do something even cooler: make your own game. That is exactly what I did. Introducing Overlord, a strategy-based tabletop game. The best part is you can play with anyone, all over the world.",
                "https://overlordgame.netlify.app/",
                "https://i.ibb.co/7nPYdwY/overloard-pfp.jpg",
                true
              )}
            />
            </div>
    </>
  );
}

export default Old;
