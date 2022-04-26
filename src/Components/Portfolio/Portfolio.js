import { React, useEffect, useState } from "react";
import { useAuth } from "../../firebase/AuthContext";

import ShowPortfolio from "./ShowPortfolio";
import AddPortfolio from "./AddPortfolio";

import "./StyleSheets/Portfolio.css";

export default function Portfolio(props) {
    const [portfolio, setPortfolio] = useState([]);
    const [loading, setLoading] = useState(false);

    const { currentUser } = useAuth();

    const axios = require('axios');
    useEffect(() => {
        
        axios.get('http://localhost:4000/portfolio?email=' + currentUser.email)
            .then(res => {
                setPortfolio(res.data.stockHoldings);
            })
            .catch(err => {
                console.log(err);
            });
    }, [currentUser]);

    return (
        loading ? <h1>Loading...</h1> :
        <div className="portfolio">
          {
              portfolio.length > 0 ? (<ShowPortfolio portfolio={portfolio}/>) : <AddPortfolio portfolio={portfolio} user={currentUser}/>
          }
        </div>
  );
}