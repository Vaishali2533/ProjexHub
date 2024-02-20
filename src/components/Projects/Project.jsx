import React from 'react';
import Header from '../header/Header';
import './Project.css';
import Footer from '../footer/Footer';

const Project = () => {
  return (
    <>
    <Header />
    <nav style={{backgroundColor: 'gray'}}>
        <ul>
            <li><a href="#mac-learn">Machine Learning & AI</a></li>
            <li><a href="#Home_Automation">Home Automation</a></li>
            <li><a href="#iot">IoT</a></li>
        </ul>
    </nav>
    <main>
        <section id="mac-learn">
            <h2>Machine Learning & AI</h2>
            <div className="project-box">
              <div className="project-profile">
                <h3><a href="#home" className="project_links">Interactive Animatronic GLaDOS</a></h3>
                <a href="#home" className="project_links"><img src="https://hackster.imgix.net/uploads/attachments/1674496/_EXD6BQ3SYl.blob?auto=compress%2Cformat&w=900&h=675&fit=min" alt="Interactive Animatronic GLaDOS" /></a>
                <p><a href="#home" className="project_links"><b>Description:</b></a> Speech-recognition, LLM and text-to-speech and a 6-axis manipulator combine to make a fully-interactive GLaDOS from Portal!</p>
                <p style={{color: 'gray'}}>Dave Niewinski</p>
              </div> 
                <div className="project-profile">
                  <h3><a href="#home" className="project_links">Lumina - AI Art Generator for Your TV</a></h3>
                  <a href="#home" className="project_links"><img src="https://hackster.imgix.net/uploads/attachments/1680915/_8BXfeCIitb.blob?auto=compress%2Cformat&w=900&h=675&fit=min" alt="Lumina - AI Art Generator for Your TV" /></a>
                  <p><a href="#home" className="project_links"><b>Description:</b></a> Lumina makes it easy to create and display stunning artwork on your TV. Just connect Lumina to your TV via HDMI. It's voice controlled.</p>
                  <p style={{color: 'gray'}}>DevMiser</p>
              </div>  
                <div className="project-profile">
                  <h3><a href="#home" className="project_links"> ChatGPT: Transforming the Way We Learn Robotics</a></h3>
                  <a href="#home" className="project_links"><img src="https://hackster.imgix.net/uploads/attachments/1677939/126-_1__2__OigCCNitSP.gif?auto=format%2Ccompress&gifq=35&w=900&h=675&fit=min&fm=mp4" alt="ChatGPT: Transforming the Way We Learn Robotics" /></a>
                  <p><a href="#home" className="project_links"><b>Description:</b></a> A student explores using ChatGPT for robotics learning, mastering the mechArm 270 with AI assistance, from basics to advanced controls.</p>
                  <p style={{color: 'gray'}}>YYrui, Elephant Robotics</p>
                </div>
                <div className="project-profile">
                  <h3><a href="#home" className="project_links">Practical AI - Local LLM and machine learning for plant care</a></h3>
                  <a href="#home" className="project_links"><img src="https://hackster.imgix.net/uploads/attachments/1684250/_JCiIYeknB7.blob?auto=compress%2Cformat&w=900&h=675&fit=min" alt="Practical AI - Local LLM and machine learning for plant care" /></a>
                  <p><a href="#home" className="project_links"><b>Description:</b></a>Create a custom AI assistant with local data security and no usage charges in less than 50 lines of code</p>
                  <p style={{color: 'gray'}}>Matt Vella</p>
              </div>
              <div className="project-profile">
                  <h3><a href="#home" className="project_links"> Hand Gestures as the Remote: Controlling myCobot 320
                  </a></h3>
                  <a href="#home" className="project_links"><img src="https://hackster.imgix.net/uploads/attachments/1675969/119-_1__kS8KHCyCDN.gif?auto=format%2Ccompress&gifq=35&w=900&h=675&fit=min&fm=mp4" alt="Hand Gestures as the Remote: Controlling myCobot 320
                  " /></a>
                  <p><a href="#home" className="project_links"><b>Description:</b></a> Exploring the cutting-edge interface of human-robot interaction, delves into the innovative use of gesture recognition for controlling</p>
                  <p style={{color: 'gray'}}>Gary, Elephant Robotics</p>
              </div>
              <div className="project-profile">
                  <h3><a href="#home" className="project_links">FaceController</a></h3>
                  <a href="#home" className="project_links"><img src="https://hackster.imgix.net/uploads/attachments/1673585/_x3nLqeQHBS.blob?auto=compress%2Cformat&w=900&h=675&fit=min" alt="FaceController" /></a>
                  <p><a href="#home" className="project_links"><b>Description:</b></a> Reimagine gaming as we know it. Forget clunky controllers and static interfaces. Your face is now the ultimate game controller.</p>
                  <p style={{color: 'gray'}}>kennedy saine Banda</p>
              </div>
                <div className="project-profile">
                  <h3><a href="#home" className="project_links">Retail Store Analytics powegray by CamOS</a></h3>
                  <a href="#home" className="project_links"><img src="https://hackster.imgix.net/uploads/attachments/1674325/_LeVORbZoeQ.blob?auto=compress%2Cformat&w=900&h=675&fit=min" alt="Retail Store Analytics powegray by CamOS" /></a>
                  <p><a href="#home" className="project_links"><b>Description:</b></a>Video analytics is a game-changer for retail stores, helping businesses overcome operational hurdles and identify improvement opportunities.</p>
                  <p style={{color: 'gray'}}>Tan Do</p>
              </div>
                <div className="project-profile">
                  <h3><a href="#home" className="project_links"> Farmaid: Plant Disease Detection Robot</a></h3>
                  <a href="#home" className="project_links"><img src="https://hackster.imgix.net/uploads/attachments/636811/farmaidbot_in_a_greenhouse_oeV5grcAUE.jpg?auto=compress%2Cformat&w=900&h=675&fit=min" alt="Farmaid: Plant Disease Detection Robot" /></a>
                  <p><a href="#home" className="project_links"><b>Discrption:</b></a>Robot that drives around autonomously in greenhouse environment and identifies diseases.</p>
                  <p style={{color: 'gray'}}>Teamato: Sohaib Arif, Alex Polonsky, Juanito Yu-Co, David W</p>
              </div> 
          </div>
        </section>
        <section id="Home_Automation">
          <h2>Home Automation</h2>
          {/* <p style={{color: 'gray'}}>Smart homes, connected homes... If it's home, it's here.</p> */}
          <div className="project-box">
            <div className="project-profile">
              <h3><a href="#home" className="project_links">Flair smart vent controlled through AWS Lambda and Alexa</a></h3>
              <a href="#home" className="project_links"><img src="https://hackster.imgix.net/uploads/attachments/1684559/_cYggj3wadv.blob?auto=compress%2Cformat&w=900&h=675&fit=min" alt="Flair smart vent controlled through AWS Lambda and Alexa" /></a>
              <p><a href="#home" className="project_links"><b>Description:</b></a>Take full control of the Flair smart vent</p>
              <p style={{color: 'gray'}}>Waldemar Sakalus</p>
            </div> 
              <div className="project-profile">
                <h3><a href="#home" className="project_links">Touchless Doorbell</a></h3>
                <a href="#home" className="project_links"><img src="https://hackster.imgix.net/uploads/attachments/1111579/_eJLIHzCAku.blob?auto=compress%2Cformat&w=900&h=675&fit=min" alt="Touchless Doorbell" /></a>
                <p><a href="#home" className="project_links"><b>Description:</b></a>This doorbell can operate without touch the switch.</p>
                <p style={{color: 'gray'}}>Akshay Joseph</p>
            </div>  
              <div className="project-profile">
                <h3><a href="#home" className="project_links"> Smart Doorbell / Video Intercom System</a></h3>
                <a href="#home" className="project_links"><img src="https://hackster.imgix.net/uploads/attachments/1091410/_NSrKaCKrOr.blob?auto=compress%2Cformat&w=900&h=675&fit=min" alt="Smart Doorbell / Video Intercom System" /></a>
                <p><a href="#home" className="project_links"><b>Description:</b></a> Raspberry Pi-powegray hardware that notifies you when guests arrive and lets you talk to them on your phone through internet calls.</p>
                <p style={{color: 'gray'}}>Hacker Shack</p>
              </div>
              <div className="project-profile">
                <h3><a href="#home" className="project_links">Practical AI - Local LLM and machine learning for plant care</a></h3>
                <a href="#home" className="project_links"><img src="https://hackster.imgix.net/uploads/attachments/1684250/_JCiIYeknB7.blob?auto=compress%2Cformat&w=900&h=675&fit=min" alt="Practical AI - Local LLM and machine learning for plant care" /></a>
                <p><a href="#home" className="project_links"><b>Description:</b></a>Create a custom AI assistant with local data security and no usage charges in less than 50 lines of code</p>
                <p style={{color: 'gray'}}>Matt Vella</p>
            </div>
            <div className="project-profile">
              <h3><a href="#home" className="project_links">Live TEMP Meter with XIAO and AHT10</a></h3>
              <a href="#home" className="project_links"><img src="https://hackster.imgix.net/uploads/attachments/1684585/27_PnCqWtQMEB.gif?auto=format%2Ccompress&gifq=35&w=900&h=675&fit=min&fm=mp4" alt="Live TEMP Meter with XIAO and AHT10" /></a>
              <p><a href="#home" className="project_links"><b>Description:</b></a> TEMP meter was created and installed on a motorcycle to show the temperature and humidity in real time in the vicinity.</p>
              <p style={{color: 'gray'}}>Arnov Sharma</p>
          </div>
            <div className="project-profile">
                <h3><a href="#home" className="project_links">FaceController</a></h3>
                <a href="#home" className="project_links"><img src="https://hackster.imgix.net/uploads/attachments/1673585/_x3nLqeQHBS.blob?auto=compress%2Cformat&w=900&h=675&fit=min" alt="FaceController" /></a>
                <p><a href="#home" className="project_links"><b>Description:</b></a> Reimagine gaming as we know it. Forget clunky controllers and static interfaces. Your face is now the ultimate game controller.</p>
                <p style={{color: 'gray'}}>kennedy saine Banda</p>
            </div>
              <div className="project-profile">
                <h3><a href="#home" className="project_links">Retail Store Analytics powegray by CamOS</a></h3>
                <a href="#home" className="project_links"><img src="https://hackster.imgix.net/uploads/attachments/1674325/_LeVORbZoeQ.blob?auto=compress%2Cformat&w=900&h=675&fit=min" alt="Retail Store Analytics powegray by CamOS" /></a>
                <p><a href="#home" className="project_links"><b>Description:</b></a>Video analytics is a game-changer for retail stores, helping businesses overcome operational hurdles and identify improvement opportunities.</p>
                <p style={{color: 'gray'}}>Tan Do</p>
            </div>
              <div className="project-profile">
                <h3><a href="#home" className="project_links"> Farmaid: Plant Disease Detection Robot</a></h3>
                <a href="#home" className="project_links"><img src="https://hackster.imgix.net/uploads/attachments/636811/farmaidbot_in_a_greenhouse_oeV5grcAUE.jpg?auto=compress%2Cformat&w=900&h=675&fit=min" alt="Farmaid: Plant Disease Detection Robot" /></a>
                <p><a href="#home" className="project_links"><b>Discrption:</b></a>Robot that drives around autonomously in greenhouse environment and identifies diseases.</p>
                <p style={{color: 'gray'}}>Teamato: Sohaib Arif, Alex Polonsky, Juanito Yu-Co, David W</p>
            </div> 
        </div>
        </section>
        <section id="iot">
            <h2>IoT Projects</h2>
            <div className="project-box">
                <div className="project-profile">
                  <h3><a href="#home" className="project_links">Pipeline Clog Detection with a Flowmeter and TinyML</a></h3>
                  <a href="#home" className="project_links"><img src="https://hackster.imgix.net/uploads/attachments/1564027/_gw3ZMZpFV3.blob?auto=compress%2Cformat&w=900&h=675&fit=min" alt="Pipeline Clog Detection with a Flowmeter and TinyML" /></a>
                  <p><a href="#home" className="project_links"><b>Description:</b></a> Measure the flow rate through a pipe and use machine learning to determine if a clog has formed.</p>
                  <p style={{color: 'gray'}}>Team CodersCafe: Shebin Jose Jacob, Nekhil</p>
                </div> 
                  <div className="project-profile">
                    <h3><a href="#home" className="project_links">IoT Based Server Room Monitoring System</a></h3>
                    <a href="#home" className="project_links"><img src="https://hackster.imgix.net/uploads/attachments/1421221/_BZXhnuGR5i.blob?auto=compress%2Cformat&w=900&h=675&fit=min" alt="IoT Based Server Room Monitoring System" /></a>
                    <p><a href="#home" className="project_links"><b>Description:</b></a> We will monitor key parameters like Temperature, Humidity, Power Failure, Fire Detection, Smoke Detection on Arduino IoT dashboard.</p>
                    <p style={{color: 'gray'}}>maheshyadav216</p>
                </div>               
                  <div className="project-profile">
                    <h3><a href="#home" className="project_links">Power Monitoring System Using Pzem-004t and Bharath Pi</a></h3>
                    <a href="#home" className="project_links"><img src="https://hackster.imgix.net/uploads/attachments/1685629/_r3EA78ScKs.blob?auto=compress%2Cformat&w=900&h=675&fit=min" alt="Power Monitoring System Using Pzem-004t and Bharath Pi" /></a>
                    <p><a href="#home" className="project_links"><b>Description:</b></a> Building a power monitoring system using a Pzem-004t sensor and a Bharath Pi is a great DIY project for anyone interested in understanding it</p>
                    <p style={{color: 'gray'}}>Deepak, Bharat Pi</p>
                </div>
                  <div className="project-profile">
                    <h3><a href="#home" className="project_links"> One Touch</a></h3>
                    <a href="#home" className="project_links"><img src="https://hackster.imgix.net/uploads/attachments/1156594/_EUOfk3Wbd0.blob?auto=compress%2Cformat&w=900&h=675&fit=min" alt="One Touch" /></a>
                    <p><a href="#home" className="project_links"><b>Description:</b></a> A remote biometric lock.</p>
                    <p style={{color: 'gray'}}>Team CodersCafe: Shebin Jose Jacob, Nekhil</p>
                </div>
                <div className="project-profile">
                    <h3><a href="#home" className="project_links"> One Touch</a></h3>
                    <a href="#home" className="project_links"><img src="https://hackster.imgix.net/uploads/attachments/1156594/_EUOfk3Wbd0.blob?auto=compress%2Cformat&w=900&h=675&fit=min" alt="One Touch" /></a>
                    <p><a href="#home" className="project_links"><b>Description:</b></a> A remote biometric lock.</p>
                    <p style={{color: 'gray'}}>Team CodersCafe: Shebin Jose Jacob, Nekhil</p>
                </div>
                <div className="project-profile">
                    <h3><a href="#home" className="project_links">Live TEMP Meter with XIAO and AHT10</a></h3>
                    <a href="#home" className="project_links"><img src="https://hackster.imgix.net/uploads/attachments/1684585/27_PnCqWtQMEB.gif?auto=format%2Ccompress&gifq=35&w=900&h=675&fit=min&fm=mp4" alt="Live TEMP Meter with XIAO and AHT10" /></a>
                    <p><a href="#home" className="project_links"><b>Description:</b></a> TEMP meter was created and installed on a motorcycle to show the temperature and humidity in real time in the vicinity.</p>
                    <p style={{color: 'gray'}}>Arnov Sharma</p>
                </div>
                  <div className="project-profile">
                    <h3><a href="#home" className="project_links">A BUZZER MODULE (PIEZO SPEAKER) USING ARDUINO UNO</a></h3>
                    <a href="#home" className="project_links"><img src="https://hackster.imgix.net/uploads/attachments/495698/FII0D11IAP6UG5A.png?auto=compress%2Cformat&w=900&h=675&fit=min" alt="A BUZZER MODULE (PIEZO SPEAKER) USING ARDUINO UNO" /></a>
                    <p><a href="#home" className="project_links"><b>Description:</b></a> This project is based  on the alarms and beeps using buzzers Security</p>
                    <p style={{color: 'gray'}}>SURYATEJA</p>
                </div>
                  <div className="project-profile">
                    <h3><a href="#home" className="project_links"> Windows Remote Arduino</a></h3>
                    <a href="#home" className="project_links"><img src="https://hackster.imgix.net/uploads/cover_image/file/45069/final.jpg?auto=compress%2Cformat&w=900&h=675&fit=min" alt="Windows Remote Arduino"  /></a>
                    <p><a href="#home" className="project_links"><b>Description:</b></a>Turn an LED on and off using Windows Remote Arduino.</p>
                    <p style={{color: 'gray'}} >Team Windows IoT</p>
                </div>

            </div>
        </section>
    </main>
    <Footer />
    </>
  );
};

export default Project;
