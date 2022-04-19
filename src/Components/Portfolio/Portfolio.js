import { React, useEffect, useState } from "react";
import { useAuth } from "../../firebase/AuthContext";


export default function Portfolio(props) {
    const [portfolio, setPortfolio] = useState([]);
    const [loading, setLoading] = useState(false);

    const { currentUser } = useAuth();

    const axios = require('axios');
    useEffect(() => {
        
        axios.get('http://localhost:4000/portfolio?email=' + currentUser.email)
            .then(res => {
                setPortfolio(res.data.data.stockHoldings);
            })
            .catch(err => {
                console.log(err);
            });
    }, [currentUser]);

    return (
        <div className="portfolio">
          <h1>Portfolio</h1>
          <div className="portfolio-container">
            
          </div>
        </div>
  );
}