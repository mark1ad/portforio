import React, { Component } from 'react';
import './css/style.css';
import Project from './js/Project';
import Header from './js/Header';

class App extends Component {

  projects() {
    return (
      <div className="projects">
        <div className="inner-projects">

          <Project title="Art From Light" href="https://art-from-light.herokuapp.com/">
            <p>
              A site where photographers can share their work.
            </p>
            <p>
              Ruby on Rails, postgresql, AngularJS, Express.js, JavaScript, Postgresql and CSS/SASS. Photos are stored on
               { /* <a href="http://cloudinary.com" target="_blank"> Cloudinary</a>. */ }
                { /* <a href="https://github.com/mark1ad/art_from_light_frontend" target="_blank">Client GitHub repository</a> and <a href="https://github.com/mark1ad/art_from_light_api" target="_blank">Server GitHub respository</a>. */ }
            </p>
          </ Project>

          <Project title="Open Highway" href="https://open-highway.herokuapp.com/">
            <p>
              Plan the ultimate roadtrip!
            </p>

            <p>
              Ruby on Rails, postgresql, AngularJS, Express.js, JavaScript, Postgresql and CSS/SASS.
              { /* <a href="https://github.com/mark1ad/roadtrip_app_frontend" target="_blank">Client GitHub respository</a> and <a href="https://github.com/mark1ad/roadtrip_app_api" target="_blank">Server GitHub respository</a>. */ }
            </p>
          </Project>

          <Project title="Civilized Coffee" href="https://infinite-shelf-28534.herokuapp.com/">
            <p>
              Manage your own chain of coffee shops.
            </p>
            <p>
              Node.js, Mongoose, Mongo, Express, EJS and Bootstrap.
              { /* <a href="https://github.com/mark1ad/coffeeshop" target="_blank">GitHub repository</a>. */ }
            </p>
          </Project>

        </div>
      </div>
  )

  }

  render() {
    return (
      <div className="App">
        <Header />

        <div className="container">
          <div className="inner-container">

            <div className="desc">
              During my career as a software engineer I&rsquo;ve worked on projects for IC layout design, GIS applications for utility companies, and full stack web development. My skills include Ruby on Rails, JavaScript, SQL, CSS/SASS, HTML5, AngularJS, C#, and .Net.
            </div>

            <div className="projhead">
              Projects
            </div>

            { this.projects() }

          </div>
        </div>
      </div>
    );
  }
}

export default App;
