import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

const IndexPage = () => {
  return (
    <div className="container">
      <h1 className="text-center mt-5">My Next App</h1>
      <div className="d-flex flex-column align-items-center">
        <Link className="btn btn-primary mt-3" href="/about">
          About
        </Link>
        <Link className="btn btn-primary mt-3" href="/movies">
          Movies
        </Link>
        <Link className="btn btn-primary mt-3" href="/product">
          Product
        </Link>
      </div>
    </div>
  );
};

export default IndexPage;