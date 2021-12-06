import './App.css';
import {useState,useEffect} from 'react'
import axios from 'axios';

function App() {

  const [alldata, setAlldata] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => { 
    const url = "https://reqres.in/api/users?page=2";
    const axiosReq = async () =>{
      await axios.get(url).then((res)=>{
        setAlldata(res.data.data)  
        setLoading(true);
      })
    }
    axiosReq()
  }, [])
  
  console.log(alldata)
  return (
    <>      
      <div className="App">
        <h1>API call using AXIOS</h1>
        <div className="grid">
        {
          loading ? alldata.map((ele)=>{
            return(
              <>
              <div className="grid-item">    
              <div className="card">
                <img className="card-img" src={ele.avatar} alt={ele.avatar} />
                <div className="card-content">
                  <h1 className="card-header">ID : {ele.id}</h1>
                  <hr align="center" width="50%"/>
                  <h1 className="car-text">
                    Name : {ele.first_name}
                  </h1>
                    </div>
                  </div>
                </div>  
              </>
          )
        }) : null
        }
      </div>
      </div>      
    </>
  );
}

export default App;


