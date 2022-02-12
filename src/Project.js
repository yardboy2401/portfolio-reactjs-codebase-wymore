import moviesandcocktails from './assets/moviesandcocktails.PNG';
import pieceofcake from './assets/pieceofcake.PNG';
import codequizgame from './assets/codequizgame.PNG'
import weatherdashboard from './assets/weatherdashboard.PNG'
import mvctechblog from './assets/MVCTechBlog.PNG'
import workdayscheduler from './assets/workdayscheduler.PNG'


const Project = () => {
    return ( 
        <div className="container work">
        <a id="work"></a>
        <div className="row">
          <div className="col-sm-2 workTitle">
            <h4>Work</h4>
          </div>
          {/* <!-- Project1 container with button links to live page and GitHub Repo --> */}
          <section className="col-sm-5 s5 workProject1">
            <img
              src={moviesandcocktails}
              className="img-fluid"
              alt="Responsive image"
            />
            <div className="work-container-title">
              Project 1
              <p>Movies and Cocktails</p>
              <p>
                Search for movie poster and synopsis and obtain drink
                reccomendations
              </p>
              <a
                href="https://jonkhunkle.github.io/Project-1/"
                className="waves-effect waves-light btn-small"
                target="_blank"
                rel="noreferrer"
                >Live Page</a
              >
              <a
                className="waves-effect waves-light btn-small"
                href="https://github.com/JonkHunkle/Project-1"
                target="_blank"
                rel="noreferrer"
                >GH Repo</a
              >
            </div>
          </section>
          <section className="col-sm-5 s5 workProject2">
            <img
              src={pieceofcake}
              className="img-fluid"
              alt="Responsive image"
            />
            <div className="work-container-title">
              Project 2
              <p>Piece of Cake</p>
              <p>
                Online ordering for quick pickup of your favorite bakery items
              </p>
              <a
                className="waves-effect waves-light btn-small"
                href="https://project2-pieceofcake.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
                >Live Page</a
              >
              <a
                className="waves-effect waves-light btn-small"
                href="https://github.com/yardboy2401/project2-pieceofcake"
                target="_blank"
                rel="noreferrer"
                >GH Repo</a
              >
            </div>
          </section>
        </div>
        <div className="row">
          <div className="col-sm-2 s2"></div>
          {/* <!-- code quiz homework container with button links to live page and GitHub Repo --> */}
          <div className="col-sm-5 s5 mvcTechBlog">
            <div className="card-image">
              <img
                src={mvctechblog}
                className="img-fluid"
                alt="Responsive image"
              />
              <p>MVC Tech Blog</p>
              <p>Tech Blog with authentication for Blogs/Comments by User</p>
              <a
                className="waves-effect waves-light btn-small"
                href="https://week14-mvctechblog-wymore.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
                >Live Page</a
              >
              <a
                className="waves-effect waves-light btn-small"
                href="https://github.com/yardboy2401/MVC-TechBlog-Wymore"
                target="_blank"
                rel="noreferrer"
                >GH Repo</a
              >
            </div>
          </div>
          {/* <!-- weather dashboard homework with button links to live page and GitHub Repo --> */}
          <div className="col-sm-5 s5 workdayscheduler">
            <a
              href="https://yardboy2401.github.io/Work-Day-Scheduler-Wymore/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={workdayscheduler}
                className="img-fluid"
                alt="Responsive image"
              />
            </a>
            <div className="work-container-title">
              <p>Workday Scheduler</p>
              <p>Workday scheduler for tasks and comments</p>
              <a
                className="waves-effect waves-light btn-small"
                href="https://yardboy2401.github.io/Work-Day-Scheduler-Wymore/"
                target="_blank"
                rel="noreferrer"
                >Live Page</a
              >
              <a
                className="waves-effect waves-light btn-small"
                href="https://github.com/yardboy2401/Work-Day-Scheduler-Wymore"
                target="_blank"
                rel="noreferrer"
                >GH Repo</a
              >
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2 s2"></div>
          {/* <!-- code quiz homework container with button links to live page and GitHub Repo --> */}
          <div className="col-sm-5 s5 codeQuizGame">
            <div className="card-image">
              <img
                src={codequizgame}
                className="img-fluid"
                alt="Responsive image"
              />
              <p>Code Quiz Game</p>
              <p>Play a fun JavaScript timed quiz and try for high score</p>
              <a
                className="waves-effect waves-light btn-small"
                href="https://yardboy2401.github.io/CodeQuizGame-Wymore/"
                target="_blank"
                rel="noreferrer"
                >Live Page</a
              >
              <a
                className="waves-effect waves-light btn-small"
                href="https://github.com/yardboy2401/CodeQuizGame-Wymore"
                target="_blank"
                rel="noreferrer"
                >GH Repo</a
              >
            </div>
          </div>
          {/* <!-- weather dashboard homework with button links to live page and GitHub Repo --> */}
          <div class="col-sm-5 s5 weatherDashboard">
            <div class="card-image">
              <img
                src={weatherdashboard}
                class="img-fluid"
                alt="Responsive image"
              />
              <p>Weather Dashboard</p>
              <p>Search for Daily/Extended Forecast by City</p>
              <a
                class="waves-effect waves-light btn-small"
                href="https://yardboy2401.github.io/WeatherDashboard-Wymore/"
                target="_blank"
                rel="noreferrer"
                >Live Page</a
              >
              <a
                class="waves-effect waves-light btn-small"
                href="https://github.com/yardboy2401/WeatherDashboard-Wymore"
                target="_blank"
                rel="noreferrer"
                >GH Repo</a
              >
            </div>
          </div>
        </div>
      </div>
     );
}
 
export default Project;