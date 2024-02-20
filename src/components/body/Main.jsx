import React from "react";

const Main = () => {
  return (
    <div className="main">
      <div className="banner">
        <h1>Welcome to ProjexHub</h1>
        <p>Where you can find the best projects and hackathons</p>
        <a href="/project" className="banner-btn">
          Projects
        </a>
      </div>

      <div className="feat-proj">
        <div className="featured-proj">
          <table>
            <tr>
              <td>
                <h1>Featured Projects</h1>
              </td>
              <td>
                <a href="#view" className="featured-view">
                  View all
                </a>
              </td>
            </tr>
          </table>
        </div>
        <div className="container">
          <div className="box">
            <a href="">
              <img src="/photos/proj1.avif" alt="proj1" className="img" />
              <div className="overlay">
                <span>Click here to explore...</span>
              </div>
            </a>
            <a href="" className="text">
              Building a LoRaWAN, Wi-Fi <br /> Cellular Fallback IoT device
            </a>
            <a href="" className="author">
                Rob Lauer
            </a>
            <p><hr /></p>
          </div>
          <div className="box">
            <a href="">
              <img src="/photos/proj2.avif" alt="proj2" className="img" />
              <div className="overlay">
                <span>Click here to explore...</span>
              </div>
            </a>
            <a href="" className="text">
              AI-Powered application for the <br /> Blind and Visually Impaired
            </a>
            <a href="" className="author">
            Nurgaliyev Shakhizat
            </a>
            <p><hr /></p>
          </div>
          <div className="box">
            <a href="">
              <img src="/photos/proj3.avif" alt="proj3" className="img" />
              <div className="overlay">
                <span>Click here to explore...</span>
              </div>
            </a>
            <a href="" className="text">
              Designing PCBs for the Kria <br /> KV260 on the Kria KV260
            </a>
            <a href="" className="author">
            Whitney Knitter
            </a>
            <p><hr /></p>
          </div>
          <div className="box">
            <a href="">
              <img src="/photos/proj4.avif" alt="proj4" className="img" />
              <div className="overlay">
                <span>Click here to explore...</span>  
              </div>
            </a>
            <a href="" className="text">
              NVIDIA TAO Object Detection <br /> ML models on Arm-based devices    
            </a>
            <a href="" className="author">
            Sandeep Mistry
            </a>
            <p><hr /></p>
          </div>
        </div>
      </div>

      <div className="topics">
        <div className="topic">
          <table>
            <tr>
              <td>
                <h1>Topics</h1>
              </td>
              <td>
                <a href="#view" className="topic-view">
                  View all
                </a>
              </td>
            </tr>
          </table>
        </div>
        <div className="container2">
          <div className="box2">
            <a href="">
              <img src="/photos/topic1.avif" alt="topic1" className="img2" />
            </a>
            <h3 ><a className="topic-h3" href="">Sensors</a></h3>
          </div>
          <div className="box2">
            <a href="">
              <img src="/photos/topic2.avif" alt="topic2" className="img2" />
            </a>
            <h3 ><a className="topic-h3" href="">Home Automation</a></h3 >
          </div>
          <div className="box2">
            <a href="">
              <img src="/photos/topic3.avif" alt="topic3" className="img2" />
            </a>
            <h3 ><a className="topic-h3" href="">Robotics</a></h3 >
          </div>
          <div className="box2">
            <a href="">
              <img src="/photos/topic4.avif" alt="topic4" className="img2" />
            </a>
            <h3 ><a className="topic-h3" href="">Internet of Things</a></h3 >
          </div>
          <div className="box2">
            <a href="">
              <img src="/photos/topic5.avif" alt="topic5" className="img2" />
            </a>
            <h3 ><a className="topic-h3" href="">Machine Learning</a></h3 >
          </div>
          <div className="box2">
            <a href="">
              <img src="/photos/topic6.avif" alt="topic6" className="img2" />
            </a>
            <h3 ><a className="topic-h3" href="">Environmental Sensing</a></h3 >
          </div>
          <div className="box2">
            <a href="">
              <img src="/photos/topic7.avif" alt="topic7" className="img2" />
            </a>
            <h3><a className="topic-h3" href="">Drones</a></h3 >
          </div>
        </div>
      </div>

      <div className="proj-video">
        <div className="project-video">
          <table>
            <tr>
              <td>
                <h1>ProjexHub Videos</h1>
              </td>
              <td>
                <a href="#view" className="project-view">
                  View all
                </a>
              </td>
            </tr>
          </table>
        </div>
        <div className="container1">
          <div className="box1">
              <iframe className="video" src="https://www.youtube.com/embed/LzBUm31Vn3k?si=uuioMz-d_L5qUkFA" title="💙 A robotic Valentine from Hackster to you!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <a href="" className="text">
            A robotic Valentine from <br /> Projecxhub to you
            </a>
            <p className="lines">
            Projecxhub in the Wild
            </p>
            <p className="days">31 views • 2 days ago</p>
          </div>
          <div className="box1">
            <iframe className="video" src="https://www.youtube.com/embed/yDb2I04FLrU?si=p49Gl0np-svZt1GA" title="Stacey Higginbotham // Hackster Café" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <a href="" className="text">
            Stacey Higginbotham // <br /> Projexhub Café
            </a>
            <p className="lines">
            Interviews
            </p>
            <p className="days">20 views • 3 days ago</p>
          </div>
          <div className="box1">
            <iframe className="video" src="https://www.youtube.com/embed/VjAn4g88CPY?si=qqT-bdAf8cexotF5" title="Paul Amadeus Lane on #Gaming, #AssistiveTechnology, and #ScienceFiction // #CES2024" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <a href="" className="text">
            Paul Amadeus Lane: Gaming,<br /> Assistive Tech, & SciFi // CES
            </a>
            <p className="lines">
            Projexhub in the Wild
            </p>
            <p className="days">46 views • 8 days ago</p>
          </div>
          <div className="box1">
            <iframe className="video" src="https://www.youtube.com/embed/gizihSJ63o4?si=ct4WmrE_zSqGT5of" title="Avnet ZUBoard 1CG: Unboxing &amp; Getting Started // Tech Highlight" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <a href="" className="text">
            Avnet ZUBoard 1CG: Unbox & Get <br /> Started // Tech Highlight 
            </a>
            <p className="lines">
            Tech Highlight
            </p>
            <p className="days">641 views • 16 days ago</p>
          </div>
        </div>
      </div>

      
      
    </div>
  );
};

export default Main;
