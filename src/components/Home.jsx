import React, { useEffect, useState } from 'react'
import Coin from './Product';
import Loader from './Loader';
import axios from 'axios';
import '../style/App.css'


const Home = () => {

  const [coins,setCoins] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(() =>{
    
    const fetchAllcoins = async() => {

      try {
        const {data} = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&per_page=100");

      setCoins(data);
      setLoading(false);
    } catch (error) {
      setLoading(false); 
      alert("not working");     
      }
      
    };

    fetchAllcoins();
  },[]);

  return (
    <div className="allcoin">
    {
        loading ? (<Loader/>) : (coins.map((i) => (
          <Coin name={i.name} imgSrc={i.image} symbol={i.symbol} key={i.id} price={i.current_price}/>)
        ))
      }
    </div>
  );
};

export default Home
