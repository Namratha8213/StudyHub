import React from 'react';

const FourthSemesterPage = () => {
    return (
        <div>
            <div className="nav_bar">
                <div className="logo"><i className="fas fa-book-open"></i>STUDY HUB </div>
                <nav>
                    <a href="index.html"><i className="fa fa-home"></i>Home</a>
                    <a href="upload.html"><i className="fa fa-cloud-upload"></i>Upload</a>
                    <a href="#study-guide"><i className="fa fa-laptop"></i>Study Guide</a>
                    <a href="index.html#contact"><i className="fa fa-users"></i>Contact</a>
                </nav>
            </div>
            <div className="main">
                <div className="box-container">
                    {/* Repeat this structure for each subject */}
                </div>
            </div>
            <div className="change">
                <button id="nextpage">
                    <p>Next <i className="fa fa-angle-double-right"></i></p>
                </button>
                <button id="previous" style={{ float: 'left' }}>
                    <p><i className="fa fa-angle-double-left"></i>Previous</p>
                </button>
                <script>
                    {`
                    document.getElementById("nextpage").onclick = function () {
                        window.location.href = "fifth.html";
                    };
                    document.getElementById("previous").onclick = function () {
                        window.location.href = "third.html";
                    };
                    `}
                </script>
            </div>
        </div>
    );
};

export default FourthSemesterPage;
