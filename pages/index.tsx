import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

const IndexPage = () => {
  return (
    <div className="container">
      <h1 className="text-center mt-5">My Next App</h1>
      <div className="d-flex flex-column align-items-center">
        <Link href="/about">
          <a className="btn btn-primary mt-3">About</a>
        </Link>
        <Link href="/movies">
          <a className="btn btn-primary mt-3">Movies</a>
        </Link>
        <Link href="/product">
          <a className="btn btn-primary mt-3">Product</a>
        </Link>
      </div>
    </div>
  );
};

export default IndexPage;