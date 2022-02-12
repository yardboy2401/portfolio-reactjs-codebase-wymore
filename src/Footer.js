const Footer = () => {
    return ( 
        <div className="container contact" id="contact">
        <a id="contact"></a>
        <div className="row contacts">
          <div className="col-sm-3 s4 m4 contactTitle">
            <h4>Contact</h4>
          </div>
          <div className="col phone">
            <a href="tel:14257729869" target="_blank"
              ><i className="small material-icons">phone</i></a
            >
          </div>
          <div className="col email">
            <a
              href="mailto:jeffwymore78@gmail.com?subject=Contact JW"
              target="_blank"
              ><i className="small material-icons">email</i></a
            >
          </div>
          <div className="col github">
            <a href="https://github.com/yardboy2401" target="_blank"
              ><i className="fab fa-github fa-2x"></i
            ></a>
          </div>
          <div className="col linkedIn">
            <a
              href="https://www.linkedin.com/in/jeff-wymore-jw78?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2FdwabtC1QrO8zz3PnbXq4g%3D%3D"
              target="_blank"
              ><i className="fab fa-linkedin-in fa-2x"></i
            ></a>
          </div>
        </div>
      </div>
     );
}
 
export default Footer;