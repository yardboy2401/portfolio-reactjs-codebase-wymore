import JeffSnowPic from './assets/JeffSnowPic.jpg'

const Header = () => {
    return ( 
        <div className="container about">
        <a id="about"></a>
        <div className="row">
          <div className="col-sm-2 aboutMeTitle">
            <img
              src={JeffSnowPic}
              className="img-fluid rounded-circle"
              alt="Responsive image"
            />
            <h4>About Me</h4>
          </div>
          <div className="col-sm-10 aboutMeParagraph">
            <p>
              Hi! I am a full stack web developer working remotely from
              Wenatchee, WA. I am a prior field service engineer with many years
              of tech experience, but now I work with code. I'm passionate about
              HTML/CSS/Javascript and I love being active with outdoor
              activities in my spare time. I recently earned a certificate in
              full-stack development from the University of Washington, with
              newly developed skills in HTML, CSS, React.js, JavaScript, jQuery,
              Node.js, agile methodology, database theory, MongoDB, MySQL, Git
              and much more. I am trusted as an expert problem solver passionate
              about developing apps, with a strong focus on mobile-ready design
              and development. I am very passionate about approaching development
              challenges from many different angles and excelling in
              collaboration with others to create sought-after web applications.
            </p>
          </div>
        </div>
      </div>
     );
}
 
export default Header;