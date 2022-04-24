import {React,useState,useEffect} from "react";
import axios from "axios"

import {Link} from 'react-router-dom'
function Products() {
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
  const imageURL="https://source.unsplash.com/random/?noodles"
  return (
    <>
    <div className="container">
    <p className="fs-1 my-4">Products</p>
    {/* error handling */}
    {loading && <div><p style={{ fontSize: "14px", color: "red", fontFamily: "fantasy", textAlign: "center" }}>A moment please...</p></div>}
        {error && (
          <div><p style={{ fontSize: "20px", color: "red", fontFamily: "monospace", fontWeight: "900", textAlign: "center" }}>Oh! our data delivery boy on holiday !!SORRY!!</p></div>
        )}



<div className="row row-cols-1 row-cols-md-3 g-4">
  {data &&
              data.map(({  Brand,Variety,Country,Stars }) => (<div className="col">
    <div className="card h-100">
<img src={imageURL} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{Brand}</h5>
    <div className="card-text"> 
    <p>{Country}</p>
      <p className="Brand Variety">{Variety}</p>
      <p className="Stars">{Stars}</p>
    </div>
    <a href="#" className="btn btn-primary">Add To Cart</a>
  </div>
</div>
</div>))}
</div>
    </div>
    </>
  )}

  export default Products