

export default function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page of our React application.</p>
      <i className="fas fa-info-circle"></i> <button className="btn btn-primary">Learn More</button>
      <i className="fas fa-users"></i> <button className="btn btn-secondary">Our Team</button>
      <i className="fas fa-phone"></i> <button className="btn btn-success">Contact Us</button>
      <i className="fas fa-envelope"></i> <button className="btn btn-danger">Email Us</button>
    </div>
  );
}