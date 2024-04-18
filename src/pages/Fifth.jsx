import React from 'react';

const FifthSemesterPage = () => {
    return (
        <div>
            <div className="nav_bar">
                <div className="logo"><i className="fas fa-book-open"></i>STUDY HUB  </div>
                <nav>
                    <a href="index.html"><i className="fa fa-home"></i>Home</a>
                    <a href="#upload"><i className="fa fa-cloud-upload"></i>Upload</a>
                    <a href="#study-guide"><i className="fa fa-laptop"></i>Study Guide</a>
                    <a href="index.html#contact"><i className="fa fa-users"></i>Contact</a>
                </nav>
            </div>
            <div className="main">
                <div className="box-container">
                    <a href="">
                        <img src="images/cs.jpg" alt="Image" className="box" />
                        <div className="overlay"> 
                            <p>Data communication and networking </p>
                            <p className="overlay_p">CN</p>
                        </div>
                    </a>
                    <p className="box-p">CN</p>
                </div>
                <div className="box-container">
                    <a href="">
                        <img src="images/ml.jpg" alt="Image" className="box" />
                        <div className="overlay"> 
                            <p>Machine learning foundation</p>
                            <p className="overlay_p">ML</p>
                        </div>
                    </a>
                    <p className="box-p">ML</p>
                </div>
                <div className="box-container">
                    <a href="">
                        <img src="images/dcc.png" alt="Image" className="box" />
                        <div className="overlay"> 
                            <p>Operating System Fundamentals</p>
                            <p className="overlay_p">OS</p>
                        </div>
                    </a>
                    <p className="box-p">OS</p>
                </div>
                <div className="box-container">
                    <a href="">
                        <img src="images/iwp.jpg" alt="Image" className="box" />
                        <div className="overlay"> 
                            <p>Mobile application development</p>
                            <p className="overlay_p">MAD</p>
                        </div>
                    </a>
                    <p className="box-p">MAD</p>
                </div>
                <div className="box-container">
                    <a href="">
                        <img src="images/pyq.jpg" alt="Image" className="box" />
                        <div className="overlay"> 
                            <p>Previous year paper</p>
                            <p className="overlay_p">PYQ</p>
                        </div>
                    </a>
                    <p className="box-p">PYQ</p>
                </div>
            </div>
        </div>
    );
};

export default FifthSemesterPage;
