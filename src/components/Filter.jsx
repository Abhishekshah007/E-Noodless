import {React,useState,useEffect} from "react";
import axios from "axios"

import { useParams} from 'react-router-dom';
function Filter() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

   const { Countury } = useParams();
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

   const filteredArray = data.filter(data=> data.Country === { Countury });
  const imageURL="https://source.unsplash.com/random/?noodles"
  return (
    <>
    <div className="container">
    <div className="row row-cols-1 row-cols-md-3 g-4">
  {data &&
              filteredArray.map(({  Brand,Variety,Country,Stars}) => (<div className="col">
    <div className="card h-100">
<img src={imageURL} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{data.Brand}</h5>
    <div className="card-text"> 
    <p>{data.Country}</p>
      <p className="Brand Variety">{data.Variety}</p>
      <p className="Stars">{data.Stars}</p>
    </div>
    <a href="#" className="btn btn-primary">Add To Cart</a>
  </div>
</div>
</div>))}
</div>
      </div>
      </>
  )}
  export default Filter