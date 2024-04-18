import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'; // Import your CSS file
import UploadPage from './pages/Upload';
import ThirdSemesterPage from './pages/Third';
import FourthSemesterPage from './pages/Fourth';
import FifthSemesterPage from './pages/Fifth';

function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="nav_bar">
          <div className="logo"><i className="fas fa-book-open"></i>STUDY HUB</div>
          <nav>
            <a href="#home"><i className="fa fa-home"></i>Home</a>
            <a href="/upload"><i className="fa fa-cloud-upload"></i>Upload</a>
            <a href="#study-material"><i className="fa fa-graduation-cap"></i>Study Material</a>
            <a href="#contact"><i className="fa fa-users"></i>Contact</a>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/third" element={<ThirdSemesterPage />} />
          <Route path="/fourth" element={<FourthSemesterPage />} />
          <Route path="/fifth" element={<FifthSemesterPage />} />
        </Routes>
        <hr />
        <section className="study_sec" id="study-material">
          <div className="studymaterial">
            <h1 className="study_heading">Study Material</h1>
            <p>We try to provide the students with the latest and detailed notes for the purpose of examination and knowledge recap.</p>
            <div className="sem">
              <div className="sem_sec">
                <a href="/third">3rd sem</a>
              </div>
              <div className="sem_sec">
                <a href="/fourth">4th sem</a>
              </div>
              <div className="sem_sec">
                <a href="/fifth">5th sem</a>
              </div>
              <div className="sem_sec">
                <a href="">6th sem</a>
              </div>
              <div className="sem_sec">
                <a href="">7th sem</a>
              </div>
              <div className="sem_sec">
                <a href="">8th sem</a>
              </div>
            </div>
          </div>
        </section>
        {/* Remaining sections and footer */}
        <hr />
        <footer>
          <div className="logo1">ST<i className="fas fa-book-open"></i>DY HUB</div>
          <div className="social_media">
            <a href="#"><i className="fab fa-github-square"></i></a>
            <a href="#"><i className="fab fa-linkedin-square"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
          <p>copyright &copy;2024</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function HomePage() {
  return (
    <div>
      <div className="Front_view" id="home">
        <div className="content">
          <div className="main">
            <h1>Welcome to Our Website</h1>
            <p>Contains Notes, Textbooks, Software Installation Files, Video Tutorials and pretty much everything</p>
          </div>
        </div>
        <div className="image">
          <img src="images/svg1.jpg" alt="Front Image" />
        </div>
      </div>
      <hr />
      <section className="about_sec">
        <div className="about_box">
          <h1 id="about" className="about_heading">About US!</h1>
          <p className="about_para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias vero ut reiciendis, cumque at earum quisquam mollitia iusto ullam, similique recusandae! Dolor labore fuga exercitationem. Distinctio, similique possimus? Pariatur, magnam.
            Ad alias quas in iste quod veniam consequatur asperiores tempora obcaecati, numquam unde nisi voluptates labore id, deserunt omnis eaque odit accusantium, aut nam vel consectetur. Quibusdam molestiae blanditiis rem?
            Nesciunt quidem ipsa repudiandae ut sunt cumque sequi dolorum id accusamus neque aliquam corrupti tempore facere, nulla asperiores provident libero. Soluta dolorum eum obcaecati assumenda, eos quisquam laudantium corporis quaerat?
          </p>
        </div>
      </section>
      <hr />
      <footer>
        <div className="logo1">ST<i className="fas fa-book-open"></i>DY HUB</div>
        <div className="social_media">
          <a href="#"><i className="fab fa-github-square"></i></a>
          <a href="#"><i className="fab fa-linkedin-square"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
        <p>copyright &copy;2024</p>
      </footer>
    </div>
  );
}


export default App;
