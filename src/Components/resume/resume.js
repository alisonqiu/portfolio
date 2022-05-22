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
                <li>React</li>
                <li>nodeJS</li>
                <li>JavaScript</li>
                <li>Git</li>
                <li>SQL</li>
                <li>Python</li>
                <li>REST APIs</li>
                <li>Java</li>
                <li>Docker</li>
                <li>CSS</li>
                <li>HTML</li>
                <li>Material UI</li>
                <li>PyTorch</li>
                <li>Azure</li>
                <li>Figma</li>
                <li>Pandas</li>
                <li>C</li>
                <li>Matplotlib</li>
                <li>NextJS</li>
                <li>Shell scripting</li>
            </ul>
        </section>
        <section class="box">
            <h2>
                <i class="fa fa-check" aria-hidden="true"></i>
                Awards
            </h2>
            <h3>Summer Undergraduate Research Fellowships</h3>
            <ul>
                <li>Selected as one of ... fellows for paid summer research</li>
            </ul>
            <h3>Rice Engineering Alumni Award</h3>
            <ul>
                <li>Selected as the winner of Leadership Excellence Award</li>
            </ul>
            <h3>President’s Honor Roll</h3>
            <ul>
                <li>Selected as one among the top 30 percent of all undergraduates for achieving an extraordinary GPA</li>
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
            
            <h3>Wordle</h3>
            <ul>
                <li>Coded the complete functionality of the game Wordle using React for frontend and NodeJS for backend 
Designed and implemented the UI for extra features like automatically triggered confetti and light/dark mode
</li>
                <li>Designed and implemented the UI for extra features like automatically triggered confetti and light/dark mode
</li>
                <li>Tools used include ReactJS, Material UI, nodeJS, express, Rapid API</li>
            </ul>
            <br/>
            <h3>My Portfolio</h3>
            <ul>
                <li>designed, built, and deployed my portfolio website</li>
                <li></li>
                <li>Tools used include JavaScript, React, GitHub, Material UI, Azure, EmailJS</li>
            </ul>
            <br/>
            <h3>Sport Analytics</h3>
            <ul>
                <li>Analyzed baseball statistics over several seasons to generate a predictive model for future game outcomes
</li>
                <li>Extracted past data from a txt file and used linear algebra for model training and testing in Python
</li>
            </ul>
            <br/>
            <h3>Stock Market Prediction</h3>
            <ul>
                <li>Built a behavioral model of stocks in Python using performance data from the past two years</li>
                <li>Simulated a prediction to stock’s prices of DJIA, GOOG, FSLR for several days in the future, using Markov chains</li>
            </ul>
        </section>
        <section class="box">
            <h1>Leadership Experiences</h1>
            <h2>
                <i class="fa fa-briefcase" aria-hidden="true"></i>
                CSters (Society for Women in Computer Science)
            </h2>
            <h3>Social Coordinator</h3>
            <ul>
                <li>Recruited 10+  new members to join the organization by helping them with coding </li>
                <li>Planned events like monthly lunches and study breaks that involved 30 participants to help women and build connections and support each other
</li>
            </ul>
            <br/>
            <h2>
                <i class="fa fa-briefcase" aria-hidden="true"></i>
                Rice University Student Association
            </h2>
            <h3>College Senator</h3>
            <ul>
                <li>Strengthened Rice's academic policies by researching and drafting a resolution for undergraduate curriculum change</li>
                <li>Arranged meetings with the faculty senate to present and advocate for academic support for mental health reasons
</li>
            </ul>
            <br/>
            <h2>
                <i class="fa fa-briefcase" aria-hidden="true"></i>
                CandleX
            </h2>
            <h3>Project Manager</h3>
            <ul>
                <li>Founded Teen Support Group for a non-profit mental health organization supporting 2000 people in Beijing
</li>
                <li>Managed and innovated CandleX’s website and social media accounts
</li>
            </ul>
        </section>
    </article>

</main>
  )
}
