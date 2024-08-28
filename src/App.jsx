import React, { useState } from 'react';
import ProjectTile from './ProjectTile';
import Modal from './Modal';
import './App.css';

function App() {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    message: '',
    link: '',
    img: '',
  });

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  const viewModal = (message, link, img) => {
    toggleModal()
    setModalContent({ message, link, img });
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="App">
      <header id="welcome-section">
        <nav id="navbar">
          <ul> 
            <a href="#about">
              <li>
              About
              </li>
            </a>
            <a href="#projects">
              <li>
              Projects
              </li>
            </a>
            <a href="#spacing">
              <li>
                Contact Me
              </li>
            </a>
          </ul>
        </nav>
      </header>
      <main>
        <section id="about">
          <div className="welcome-section">
            <h1>Hello, my name is Bryson</h1>
            <p className="caption">
              <i>and I am a software engineer</i>
            </p>
          </div>
        </section>
        <section id="projects">
          <h2>Here are some of my projects</h2>
          <div className="hover-block">
            <h3 className="language">JavaScript Projects</h3>
            <span className="hover-text">
              Below are the projects I have coded in JavaScript. These projects were developed using Vite, React, TypeScript, and, of course, JavaScript. They have been deployed using Netlify and GitHub so clicking on them should redirect you to their respective website.
            </span>
          </div>
          <div className="project-container">
            <div className='testing'>
            {modal && (
              <Modal
                message={modalContent.message}
                link={modalContent.link}
                img={modalContent.img}
                onClose={closeModal}
              />
            )}
            <ProjectTile
              title="Example Product Promotion Page"
              imageSrc="https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/6622e76ceb040a0008ca7f58/screenshot_2024-04-19-21-52-13-0000.webp&fit=cover&h=500&w=800"
              imageAlt="Example Product Promotion Page"
              onClick={() => viewModal(
                "We all gotta start somewhere.",
                "https://brysons-eppp.netlify.app/",
                "https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/6622e76ceb040a0008ca7f58/screenshot_2024-04-19-21-52-13-0000.webp&fit=cover&h=500&w=800"
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
                "A project every good programmer should have under their belt. This is one of the more time consuming and difficult personal projects I ever coded in React. After this project, I really began to feel like a software engineer.",
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
              title="Overloard"
              imageSrc="https://i.ibb.co/7nPYdwY/overloard-pfp.jpg"
              imageAlt="Overloard"
              onClick={() => viewModal(
                "Why make another chess clone when you can do something even cooler: make your own game. That is exactly what I did. Introducing Overloard, a multiplayer, strartegy-based, tabletop game. The best part is you can play with anyone, all over the world.",
                "https://overloardgame.netlify.app/",
                "https://i.ibb.co/7nPYdwY/overloard-pfp.jpg"
              )}
            />
          </div>
          </div>
          <div className="hover-block">
            <h3 className="language">Java Projects</h3>
            <span className="hover-text">
              Below are the projects I have coded in Java. Because these projects are applications, they will require you to have Java downloaded onto your computer. You can download Java <a href="https://www.java.com/en/" target="_blank" rel="noopener noreferrer">here</a>. In addition, they use a mixture of JFrames and JPanels and, as a result, you need will to download the projects themselves onto your computer. Click the project you wish to view, and the download will begin momentarily.
            </span>
          </div>
          <div className="project-container">
            <ProjectTile
              title="MineSweeper"
              imageSrc="https://i.ibb.co/JsqCZ0Z/Mine.png"
              imageAlt="MineSweeper"
              onClick={() => viewModal(
                "My first project in Java is also one of my most integrated and complex. If you find yourself short on time, don't worry, you can always save and come back later. Just make sure you have Java installed and you're good to go!",
                "https://drive.usercontent.google.com/download?id=1_0SxeMJ9m3daOxo8RBZ84bdNm4_yUtFi&export=download&authuser=0&confirm=t&uuid=986423be-2221-406a-a993-7537f34e4429&at=APZUnTVrQeG--VeDOI0uwk1nqubg:1713633850650",
                "https://i.ibb.co/JsqCZ0Z/Mine.png"
              )}
            />
          </div>
        </section> 
      </main>
      <footer>
        <div id="spacing">
          <h2 className="Contact">Contact Me</h2>
          <p id="email" className="contact">Email: Btpitch27@gmail.com</p>
          <p>
            <a className="footer contact" href="https://github.com/BSutton17" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> GitHub
            </a>
          </p>
          <p>
            <a className="footer contact" href="https://www.linkedin.com/in/bryson-sutton-57b99425a/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
