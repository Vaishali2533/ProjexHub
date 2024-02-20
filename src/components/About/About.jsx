import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './About.css';

const About = () => {
  return (
    <>
      <Header />
    {/* <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="#project-description">Our Mission</a></li>
            <li><a href="#project-description">Project Description</a></li>
            <li><a href="#team-members">Team Members</a></li>
        </ul>
    </nav> */}

    <div className="container">
        <section>
            <h2>Our Mission</h2>
            <ul className="project-description">
                <li>At our core, we are driven by the vision of creating an online integrated platform that serves as a dynamic hub for students across diverse academic backgrounds and institutions. Our aim is to provide a comprehensive space where students from various Universities and Colleges can converge, collaborate, and contribute to the collective pursuit of knowledge and innovation.</li>
                <li>Our platform is designed to serve as a catalyst for students embarking on project endeavors, offering them a robust ecosystem of resources, tools, and opportunities for collaboration. Whether it's a research project, a community initiative, a technological innovation, or a creative endeavor, we aspire to provide students with the necessary support and infrastructure to bring their ideas to fruition.</li>
                <li>Through our integrated platform, students have the opportunity to showcase their projects, share their insights, and connect with like-minded peers and mentors. By fostering a vibrant community of learners, thinkers, and creators, we seek to cultivate an environment where ideas are nurtured, challenges are addressed collaboratively, and innovative solutions emerge.</li>
                <li>Furthermore, our platform serves as a bridge between academia and the real world, enabling students to apply their knowledge and skills to real-world problems and challenges. We believe that by empowering students to engage in hands-on, experiential learning experiences, we not only enhance their academic journey but also equip them with the practical skills, critical thinking abilities, and entrepreneurial mindset needed to thrive in today's rapidly evolving landscape.</li>
                <li>Ultimately, our mission is rooted in the belief that every student has the potential to make a meaningful impact in their respective fields and communities. By providing a supportive and inclusive platform for students to explore, experiment, and excel, we aim to empower the next generation of leaders, innovators, and changemakers to shape a better future for themselves and the world at large.</li>
            </ul>
        </section>
        <section>
            <h2>Project Description</h2>
            <ul className="project-description">
                <li>Our project entails the development of an Online Integrated Platform tailored specifically to the needs and aspirations of students from diverse educational backgrounds enrolled in Universities and Colleges worldwide. The platform serves as a multifaceted digital ecosystem, facilitating seamless collaboration, knowledge sharing, and project management among students undertaking various academic endeavors.</li>
                <li>At its core, the platform offers a user-friendly interface that empowers students to initiate, manage, and showcase their projects with ease. Whether it's a research paper, a software application, a community service project, or an artistic endeavor, our platform provides the necessary tools and resources to support students throughout the project lifecycle.</li>
                <li>One of the key features of our platform is its ability to connect students with peers and mentors who share similar interests or possess expertise in relevant fields. Through interactive forums, discussion boards, and networking opportunities, students can engage in meaningful dialogue, seek advice, and forge valuable connections that enhance their learning experience and project outcomes.</li>
                <li>Furthermore, the platform incorporates robust project management tools, allowing students to set goals, track progress, and collaborate effectively with team members. From task assignment and deadline management to document sharing and version control, our platform streamlines project workflows and fosters a culture of accountability and productivity.</li>
                <li>In addition to project-specific functionalities, our platform offers a rich repository of educational resources, including articles, tutorials, webinars, and case studies, to support students in their academic and professional development. Whether it's learning new skills, exploring emerging trends, or staying updated on industry advancements, students have access to a wealth of curated content to enrich their learning journey.</li>
                <li>Moreover, our platform is designed to promote inclusivity and diversity, welcoming students from all backgrounds, disciplines, and levels of expertise. By fostering a collaborative and inclusive environment, we aim to harness the collective wisdom and creativity of students worldwide to address complex challenges and drive meaningful change.</li>
                <li>Overall, our project represents a groundbreaking initiative to empower students with the tools, resources, and community support needed to thrive in their academic pursuits and beyond. By providing a centralized platform for project-based learning and collaboration, we aspire to revolutionize the way students engage with their education, unlock their potential, and make a lasting impact in the world.</li>
            </ul>
        </section>  
        <div  style={{position: 'relative', left: '45%'}}>
            <h2>Our Team</h2>
        </div>
        <section id="team-members">
            <div className="team-member">
                <img className='img10' src="/photos/vivek.jpg" alt="" />
                <h3>Vivek Tiwari</h3>
                <p className="des"><strong>Team leader</strong></p>
            </div>
            <div className="team-member">
                <img src="/photos/sohan.jpeg" alt="Team Member 2" />
                <h3>Sohan lal</h3>
                <p className="des"><strong>Back-end developer</strong></p>
            </div>
            <div className="team-member" >
                <img src="/photos/dave.jpeg" alt="Team Member 2" />
                <h3>Ritik Dawe</h3>
                <p className="des"><strong>front-end developer</strong></p>
            </div>
            <div className="team-member">
                <img src="/photos/me.jpeg" alt="Team Member 2" />
                <h3>Ritik goyal </h3>
                <p className="des"><strong>front-end developer</strong></p>
            </div>
            <div className="team-member">
                <img src="/photos/kangaroo.jpg" alt="Team Member 2" />
                <h3>Vaishali Kumari</h3>
                <p><strong>front-end developer</strong></p>
            </div>
        </section>
    </div>
        <Footer />
    </>
  );
};

export default About;
