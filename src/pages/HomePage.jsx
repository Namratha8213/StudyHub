import React from 'react';

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
          <img src="../images/svg1" alt="Front Image" />
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
    </div>
  );
}

export default HomePage;
