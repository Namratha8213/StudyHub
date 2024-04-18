import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'; // Import your CSS file
import UploadPage from './pages/Upload';
import ThirdSemesterPage from './pages/Third';
import FourthSemesterPage from './pages/Fourth';
import FifthSemesterPage from './pages/Fifth';
import HomePage from './pages/HomePage';
import ContactForm from './components/ContactForm';
import MarqueeLink from './components/MarqeeLink';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="nav_bar">
          <div className="logo"><i className="fas fa-book-open"></i>STUDY HUB</div>
          <nav>
            <Link to="/"><i className="fa fa-home"></i>Home</Link>
            <Link to="/upload"><i className="fa fa-cloud-upload"></i>Upload</Link>
            <Link to="#study-material"><i className="fa fa-graduation-cap"></i>Study Material</Link>
            <Link to="#contact"><i className="fa fa-users"></i>Contact</Link> {/* Updated to Link */}
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
                <Link to="/third">3rd sem</Link>
              </div>
              <div className="sem_sec">
                <Link to="/fourth">4th sem</Link>
              </div>
              <div className="sem_sec">
                <Link to="/fifth">5th sem</Link>
              </div>
              <div className="sem_sec">
                <Link to="">6th sem</Link>
              </div>
              <div className="sem_sec">
                <Link to="">7th sem</Link>
              </div>
              <div className="sem_sec">
                <Link to="">8th sem</Link>
              </div>
            </div>
          </div>
        </section>
        {/* Remaining sections and footer */}
        <hr />
      </div>
      <section className="contact" id="contact">
      <div className="form">
        <div className="container">
          <h2 className="heading">Get in Touch</h2>
          <form action="contact.php" method="post">
            <div className="row">
              <div className="form-group">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" name="first-name" placeholder="First name" required />
              </div>
              <div className="form-group">
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" name="last-name" placeholder="Last name" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone-number">Phone Number</label>
                <input type="tel" id="phone-number" name="phone-number" placeholder="Phone number" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Email Address" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4" placeholder="Message"></textarea>
              </div>
              <button type="submit" className="submit-btn" id="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div className="form_img">
        <img src="./images/contact.gif" alt="contact" />
      </div>
    </section>
      <MarqueeLink/>
      <AboutSection/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
