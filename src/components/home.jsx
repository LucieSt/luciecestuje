import { useContext } from "react";
import { AuthContext } from "../authContext";
import './../styles/home.sass';
import './../App.sass';

const Home = () => {
  const { loading } = useContext(AuthContext);

  if (loading) {
    // Render a loading state if the authentication state is still being fetched
    return <div>Loading...</div>;
  }

  return (
    <div className="home-wrapper">
      <div className="home-banner banner"></div>

      <p>blabla fhbjdsjh<br />bsdjsdfh sf <br />hjksfghdfndf   fdf gfh jkfh sfj k f<br />sjh fkj  dgdgg df d gdfgsfbksfb f<br />bfsd bfsfb<br />s bfsd f</p>
      <p>blabla fhbjdsjh<br />bsdjsdfh sf <br />hjksfghdfndf   fdf gfh jkfh sfj k f<br />sjh fkj  dgdgg df d gdfgsfbksfb f<br />bfsd bfsfb<br />s bfsd f</p>
      <p>blabla fhbjdsjh<br />bsdjsdfh sf <br />hjksfghdfndf   fdf gfh jkfh sfj k f<br />sjh fkj  dgdgg df d gdfgsfbksfb f<br />bfsd bfsfb<br />s bfsd f</p>
      <p>blabla fhbjdsjh<br />bsdjsdfh sf <br />hjksfghdfndf   fdf gfh jkfh sfj k f<br />sjh fkj  dgdgg df d gdfgsfbksfb f<br />bfsd bfsfb<br />s bfsd f</p>
      <p>blabla fhbjdsjh<br />bsdjsdfh sf <br />hjksfghdfndf   fdf gfh jkfh sfj k f<br />sjh fkj  dgdgg df d gdfgsfbksfb f<br />bfsd bfsfb<br />s bfsd f</p>
      <p>blabla fhbjdsjh<br />bsdjsdfh sf <br />hjksfghdfndf   fdf gfh jkfh sfj k f<br />sjh fkj  dgdgg df d gdfgsfbksfb f<br />bfsd bfsfb<br />s bfsd f</p>
      <p>blabla fhbjdsjh<br />bsdjsdfh sf <br />hjksfghdfndf   fdf gfh jkfh sfj k f<br />sjh fkj  dgdgg df d gdfgsfbksfb f<br />bfsd bfsfb<br />s bfsd f</p>
    </div>
  );
};

export default Home;