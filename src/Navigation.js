import JWDesignsLogo from './assets/JWDesignsLogo.png'
import resume from './assets/resume.pdf'


const Navigation = (props) => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img src={JWDesignsLogo} height="85px" width="85px" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#header" onClick={() => {props.handleClick('Header')}}
                >About Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#project" onClick={() => {props.handleClick('Project')}}>Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={() => {props.handleClick('Contact')}}>Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={resume}>Resume</a>
            </li>
          </ul>
        </div>
      </nav>
     );
}
 
export default Navigation;