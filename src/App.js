import React, {useState} from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState("")
  const [results, setResults] = useState([])
  // PUuDKzno_jbsWv9KANgG3L5F5TMoiqOeeNOgl7ZRtmw
  const fetchImages = ()=>{
    fetch(`https://api.unsplash.com/search/photos?client_id=PUuDKzno_jbsWv9KANgG3L5F5TMoiqOeeNOgl7ZRtmw&query=${value}&orientation=squarish&per_page=246`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      setResults(data.results)
    })
  }
  return (
    <div className="App">
      <h1 className='title'>GetYourWall</h1>
        <p className='para'>The Most Beautiful Royalty-Free Images You Will Find Here</p> 
      <div className='mydiv'>
        <input className='search-box' type="text" placeholder='search here' value={value} onChange={(e)=>setValue(e.target.value)} />
        <button className='search-btn' onClick={()=>fetchImages()} >Search</button>
      </div>

      <div className='gallery'>
        {
          results.map((item)=>{
            return <img className='item' key={item.id} src={item.urls.regular} />
          })
        }
      </div>
    </div>
  );
}

export default App;
