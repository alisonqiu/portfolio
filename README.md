I designed, built, and deployed my portfolio website using JavaScript, React, GitHub, Material UI, Azure, EmailJS. The majority of the styling was originally done with Material UI v4 and migrated to v5. I implemented responsive design for different screen sizes(are both desktop and mobile screen).

## To start
After installing dependencies, run `npm start`

## Demo
![ezgif com-gif-maker](https://user-images.githubusercontent.com/90943803/169675441-6cbbda3c-e48d-4043-8a29-1ec11874c22a.gif)

## Features
### my resume integrated into the website, which you can pull up and close by clicking on a button 
I embedded the resume component I created inside a swipable drawer, which is handled by a function when I click on the quote or click to see my resume" button. 
### The "About Me" section
To avoid repeating the code, I mapped my four areas of skills to the same template component. Styling was a bit difficult for me because I couldn't use "\n" to create new lines in JSX. However, I eventually resolved this issue and gained more understanding of styling with CSS and React.  
### Picture and links to my GitHub repositories
I created a single React component and map the data of different repositories to this component to be displayed on the website. This way, I can add new repositories to show easily 
### a contact form which you can send me an email 
The API I call to send email is EmailJS.
### Icons with direct links to my Github, LinkedIn, and Instagram accounts 


## Credit
@adrianhajdin for his portfolio for inspiring my design. His GitHub repo can be found at https://github.com/adrianhajdin/portfolio_website.git. 
