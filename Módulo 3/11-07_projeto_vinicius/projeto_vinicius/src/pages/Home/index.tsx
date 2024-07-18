import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link><br/>
        <hr />
        <Link to="contact">Contact</Link><br />
        <Link to="/contact/director">Contact Director</Link><br />
        <Link to="/contact/rh">Contact RH</Link>
  </div>
  )
};

export default Home;