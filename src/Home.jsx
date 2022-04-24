import {React,useState,useEffect} from "react";
import axios from "axios"
import {Filter} from './components/Filter'
import { useParams,Link,BrowserRouter } from 'react-router-dom';
 import Navbar from './components/Navbar'
 import Products from './components/Products'
function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {

    const getData = async () => {
      try {
        const response = await axios.get(
          `https://s3-ap-southeast-1.amazonaws.com/he-public-data/TopRamen8d30951.json`
        );
        setData(response.data);
        
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    }
    getData()
  })
  return (
    <>
    <Navbar/>
    <div className="container">
    <div className="dropdown  float-end my-2">
  <button className="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
   Filter
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li>Brand</li>
    <li>Variety</li>
    <li>Style</li>
    <li>Stars</li>
    <li>Top Ten</li>
  </ul>
</div>
<br/>
<p className="text-start">Search By Country:</p>
{data &&
              data.map(({ Country}) => (<BrowserRouter basename="/"> <Link to={{
                pathname: `/Filter/${Country}`,
                query: { Country: Country } // your data array of objects
              }}><span className="badge rounded-pill bg-info text-dark">{Country}</span></Link></BrowserRouter>
              ))}
{/* product listing */}


<Products/>

</div>
    </>
  )
}

export default Home