import React from "react";
import { useEffect , useState} from "react";
import Service from "../Service/Service";

const Overview = () => {
    const [overView,setOverView] = useState([])
    useEffect(() =>{
        fetch('./overviewData.json')
        .then(res => res.json())
        .then(data => setOverView(data))
    },[])


    return (
        <div >
            <h2 className = 'text-center mt-5 text-light fw-bold '>Our Services</h2>
            <div class="row row-cols-1 row-cols-md-3 g-4">
              {
               overView.map(data =><Service data ={data} key = {data.id}></Service>)
              }
            </div>
           
        </div>
    );
};

export default Overview;