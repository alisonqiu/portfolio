import React from 'react'
import "./resumeStyle.css"

export default function Resume() {
  return (
    <main>
    <article class="box">
        <h1>Alison Qiu</h1>
        <div><a id="resume" href="mailto:alison.qiu@rice.edu">alison.qiu@rice.edu</a></div>
        
        <section class="box">
            <h2>
                <i class="fa fa-bullhorn" aria-hidden="true"></i>
                Social media
            </h2>
            <ul>
                <li><a id="resume" href="https://github.com/alisonqiu">github</a></li>
                <li><a id="resume" href="https://www.linkedin.com/in/alison-qiu/">linkedin</a></li>
                <li><a id="resume" href="https://www.instagram.com/alisonqiu4/">instagram</a></li>
            </ul>    
        </section>
        
        <section class="box">
            <div class="education">
                <h2>
                    <i class="fa fa-certificate" aria-hidden="true"></i>
                    Rice University
                </h2>
                <h3>Major</h3>
                <li>Computer Science (BS)</li>
                 <li>GPA: 4.0</li>
            </div>
        </section>

        <section class="box">
            <h2>
                <i class="fa fa-check" aria-hidden="true"></i>
                Skills
            </h2>
            <ul>
                <li>CSS</li>
                <li>HTML</li>
                <li>JavaScript</li>
                <li>Git</li>
                <li>Visual Studio Code</li>
            </ul>
        </section>
    </article>
    <article class="box">
        <section class="box">
        <h1>Professional Experiences</h1>
            <h2>
                <i class="fa fa-building" aria-hidden="true"></i>
                Full Stack Developer
            </h2>

            <h3>Rice University Center for Research Computing</h3>
            <ul>
                <li>Developed a computer adaptive test web app and merged collected user data into a centralized MS SQL database</li>
                <li>Maintained site reliability by debugging 10+ issues and performing quality assurance testing</li>
                <li>Cleaned up the codebase by removing excess code and adding documentation to increase team efficiency</li>
                <li>Tools used include SQL, React, NodeJS, JavaScript</li>
            </ul>
            <br/>
            <h2>
                <i class="fa fa-building" aria-hidden="true"></i>
                Software Programmer
            </h2>

            <h3>Knobull</h3>
            <ul>
                <li>Upgrade site frontend design and manage the server to improve UI, increasing the website traffic by about 20%</li>
                <li>Expedite the launch of Knobull research engine using CSS, HTML and JavaScript </li>
            </ul>
            <br/>
            <h2>
                <i class="fa fa-building" aria-hidden="true"></i>
                ML Research Assistant
            </h2>

            <h3>Department of Computer and Electrical Engineering</h3>
            <ul>
                <li>Train neural network models to predict patients' depression levels based on social ambiance </li>
                <li>Convert iPhone audio and raw audio by extracting features and integrate device simulation into the LibriMix scripts </li>
                <li>Machine learning tools used include python (PyTorch), Pandas, NumPy, Keras, TensorFlow, Matplotlib</li>
            </ul>
        </section>
        <section class="box">
            <h2>
                <i class="fa fa-cubes" aria-hidden="true"></i>
                Projects
            </h2>
            
            <h3>Great hackathon</h3>
            <div>This was a great hack!</div>
            <ul>
                <li>Cool technology used</li>
                <li>Prize won</li>
            </ul>
            <br/>
            <h3>Great hackathon</h3>
            <div>This was a great hack!</div>
            <ul>
                <li>Cool technology used</li>
                <li>Prize won</li>
            </ul>
            <br/>
            <h3>Great hackathon</h3>
            <div>This was a great hack!</div>
            <ul>
                <li>Cool technology used</li>
                <li>Prize won</li>
            </ul>
            <br/>
        </section>
        <section class="box">
            <h1>Leadership Experiences</h1>
            <h2>
                <i class="fa fa-briefcase" aria-hidden="true"></i>
                Experience
            </h2>
            <h3>Microsoft Learn Student Ambassador</h3>
            <ul>
                <li>Some skill</li>
                <li>Another skill</li>
            </ul>
        </section>
    </article>

</main>
  )
}
