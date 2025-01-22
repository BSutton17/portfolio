import React, { useEffect, useState } from 'react';
import ProjectTile from './Components/ProjectTile';
import Modal from './Components/Modal';
import './App.css';
import Dropdown from './Components/DropDown';
import Alphabetical from './Filter/Alphabetical';
import Complex from './Filter/Complex';
import New from './Filter/New'
import Old from './Filter/Old';
import { useAppContext }  from './Components/Context'

function App() {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    message: '',
    link: '',
    img: '',
  });

  const [view, setView] = useState(false)
  const [showDescName, setShowDescName] = useState(false);
  const [showDescCS, setShowDescCS] = useState(false);
  const { selectedValue, tiles, setTiles } = useAppContext();

  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    console.log("Selected Value:", selectedValue); // Log the selected value
    const selectedTiles = dropdownSelected(selectedValue);
    console.log("Selected Tiles Component:", selectedTiles); // Log the selected component or tiles
  }, [tiles, selectedValue]);
  

  if (modal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  const viewModal = (message, link, img) => {
    toggleModal();
    setModalContent({ message, link, img });
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const dropdownSelected = (choice) => {
      switch (choice) {
        case "1":
         setTiles(<Alphabetical />);
          break;
        case "2":
         setTiles(<New />);
          break;
        case "3":
         setTiles(<Old />);
          break;
        case "4":
         setTiles(<Complex />);
          break;
      }
    };

  return (
    <div className="App">
      <header id="welcome-section">
        {/* Dropdown */}
        <Dropdown />
        <nav id="navbar">
          <ul> 
            <a href="#about">
              <li>About</li>
            </a>
            <a href="#projects">
              <li>Projects</li>
            </a>
            <a href="#spacing">
              <li>Contact Me</li>
            </a>
          </ul>
        </nav>
      </header>
      <main>
        <section
          onClick={() => {
            if (showDescName) {
              setShowDescName(!showDescName);
            }
            if (showDescCS) {
              setShowDescCS(!showDescCS);
            }
          }}
          id="about"
        >
          <div className="welcome-section">
            <h1 onClick={()=>setShowDescName(!showDescName)}>Hello, my name is Bryson</h1>
            <div onMouseLeave={() => setShowDescName(false)} className={showDescName ? 'desc' : 'none'}>
              <div className='desc-pic'></div>
              <div className={'desc-txt'} id='intro-txt'>
                Hi, I'm Bryson Sutton. I am a sophomore Computer Science Major currently attending Oklahoma State University. I love all things Computer Science, Software Engineering, and Technology, and I want to be one of the top contributors as we build the next generation of software. Javascript and Java are my top languages, and I know this is only the beginning of my journey to being the best programmer I can be. 
              </div>
            </div>
            <p className="caption">
              <i onClick={()=>setShowDescCS(!showDescCS)} >and I am a software engineer</i>
              <div onMouseLeave={() => setShowDescCS(false)} className={showDescCS ? 'desc' : 'none'}>
                <div className='desc-cs-pic'></div>
                <div className='desc-txt'>
                  I have been coding for over three years. So far, I have developed over twenty personal projects; below are a few of my personal favorites. In addition, I helped develop an internal front-end application for Liberty Mutual Insurance as part of their 2024 Tech Support Internship program. I am happy to say I will be returning to Liberty Mutual in 2025 as part of their TechStart Internship program. Thank you for taking the time to visit my portfolio page! I can't wait to get out there.
                </div>
              </div>
            </p>
          </div>
        </section>
        <section onClick={() => {
            if (showDescName) {
              setShowDescName(!showDescName);
            }
            if (showDescCS) {
              setShowDescCS(!showDescCS);
            }
          }}id="projects">
          <h2>Here are some of my projects</h2>
          <div className="hover-block">
            <h3 className="language">JavaScript Projects</h3>
            {/* <span className="hover-text">
              Below are the projects I have coded in JavaScript. These projects were developed using Vite, React, TypeScript, and, of course, JavaScript. They have been deployed using Netlify and GitHub so clicking on them should redirect you to their respective website.
            </span> */}
          </div>
          <div className="project-container">
              {tiles && <div key={selectedValue}>{tiles}</div>}
          </div>
          <div className="hover-block">
            <h3 className="language"><u>Java Projects</u></h3>
            <span className="hover-text">
              Below are the projects I have coded in Java. Because these projects are applications, they will require you to have Java downloaded onto your computer. You can download Java <a href="https://www.java.com/en/" target="_blank" rel="noopener noreferrer">here</a>. In addition, they use a mixture of JFrames and JPanels and, as a result, you will need to download the projects themselves onto your computer. Click the project you wish to view, and the download will begin momentarily.
            </span>
          </div>
          <div className="project-container">
          {modal && (
                <Modal
                  message={modalContent.message}
                  link={modalContent.link}
                  img={modalContent.img}
                  onClose={closeModal}
                />
              )}
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
