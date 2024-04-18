import React, { useState } from 'react';

const UploadPage = () => {
    const [selectedSemester, setSelectedSemester] = useState('');
    const [selectedSubject, setSelectedSubject] = useState('');
    const [isUploadDisabled, setIsUploadDisabled] = useState(true);

    const handleSemesterChange = (event) => {
        const semester = event.target.value;
        setSelectedSemester(semester);
        setSelectedSubject('');
        setIsUploadDisabled(true);
    };

    const handleSubjectChange = (event) => {
        const subject = event.target.value;
        setSelectedSubject(subject);
        setIsUploadDisabled(subject === '');
    };

    return (
        <div>
            <div className="nav_bar">
                <div className="logo"><i className="fas fa-book-open"></i>STUDY HUB </div>
                <nav>
                    <a href="index.html"><i className="fa fa-home"></i>Home</a>
                    <a href="#upload"><i className="fa fa-cloud-upload"></i>Upload</a>
                    <a href="index.html#study-material"><i className="fa fa-graduation-cap"></i>Study Material</a>
                    <a href="index.html#contact"><i className="fa fa-users"></i>Contact</a>
                </nav>
            </div>
        
            <section className="study_sec" id="upload">
                <div className="studymaterial">
                    <h1 className="study_heading">Upload Study Material</h1>
                    <p>Please select the semester and subject before uploading the file.</p>
                    <form action="upload.php" method="post" encType="multipart/form-data">
                        <div className="form-group">
                            <label htmlFor="semester">Semester:</label>
                            <select id="semester" name="semester" value={selectedSemester} onChange={handleSemesterChange}>
                                <option value="">--Select Semester--</option>
                                <option value="3">3rd Semester</option>
                                <option value="4">4th Semester</option>
                                <option value="5">5th Semester</option>
                                <option value="6">6th Semester</option>
                                <option value="7">7th Semester</option>
                                <option value="8">8th Semester</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject:</label>
                            <select id="subject" name="subject" value={selectedSubject} onChange={handleSubjectChange}>
                                <option value="">--Select Subject--</option>
                                {/* You can dynamically generate options based on selected semester */}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="file">File:</label>
                            <input type="file" id="file" name="file" accept=".pdf, .doc, .docx, .jpg, .jpeg, .png,.ppt,.pptx" />
                        </div>
                        <button type="submit" id="upload-btn" className="submit-btn" disabled={isUploadDisabled}>Upload</button>
                    </form>
                </div>
            </section>
            <hr />
            <footer>
                &copy;2024 ISE B
            </footer>
        </div>
    );
};

export default UploadPage;
