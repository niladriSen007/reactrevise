const Footer = () =>{
  const today = new Date();
    return(
      <footer className="container p-3">
          <div className="row justify-content-center mt-3 mb-4">
            <div className="col-8">
                  <h5>Team member allocation app : {today.getFullYear()}</h5>
            </div>
          </div>
      </footer>
    )
  }
  
  export default Footer;