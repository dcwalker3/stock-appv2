import { React, useState } from 'react'
import { render } from 'react-dom';
import { Table, Button, Form } from 'react-bootstrap'
import axios from 'axios';

export default function AddPortfolio(props) {

    function handleClick(e) {
        e.preventDefault();
        render(<AddPortfolioForm user={props.user} holdings={props.portfolio}/>, document.getElementById('add-portfolio'));
    }


    return (
    <div id="add-portfolio" className='add-portfolio-container text-center w-50 m-auto mt-5'>
        <h1>Add Portfolio</h1>
        <Button className='add-portfolio-button mt-2 mb-4' onClick={handleClick}>Add Positions</Button>
        <Table striped bordered hover variant='dark'>
            <thead>
                <tr>
                    <th>Stock Ticker</th>
                    <th>Shares Owned</th>
                    <th>Value of Position</th>
                    <th>Stock Price</th>
                    <th>Daily Change</th>
                    <th>Daily Change %</th>
                </tr>
            </thead>
            <tbody>
                {props.portfolio.map((stock, index) => {
                    return (
                            <tr key={index}>
                                <td>{stock.stockTicker}</td>
                                <td>{stock.sharesOwned}</td>
                                <td>${stock.sharesOwned * stock.stockPrice}</td>
                                <td>${stock.stockPrice}</td>
                                <td>${stock.dailyChange}</td>
                                <td>{stock.dailyChangePercent}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    </div>
  )
}

function AddPortfolioForm(props){
    const [positions, setPositions] = useState(props.holdings);

    function handleClick(e){
        const ticker = document.getElementById('stockTicker').value;
        const sharesOwned = document.getElementById('sharesOwned').value;

        const position = {
            stockTicker: ticker,
            sharesOwned: sharesOwned,
        };

        let previousPositions = [...positions];
        previousPositions.push(position);
        setPositions(previousPositions);
    }


    function handleSubmit(e){
        e.preventDefault();
        axios.put("http://localhost:4000/portfolio",
        {
            email: props.user.email,
            stockHoldings: positions
        })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return(
        <>
            <h3>Positions To Add: </h3>  
            <Table bordered hover variant='dark' className='mb-5'>
                <thead>
                    <tr>
                        <th>Stock Ticker</th>
                        <th>Shares Owned</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        positions.map((position, index) => {
                            return(
                                <tr key={index}>
                                    <td>{position.stockTicker}</td>
                                    <td>{position.sharesOwned}</td>
                                </tr>
                            )        
                        })
                    }
                </tbody>
            </Table>
            <Form>
                <h4>Add Stock Positions</h4>
                <Form.Group className='mb-3'>
                    <Form.Label>Stock Ticker</Form.Label>
                    <Form.Control type="text" id="stockTicker" placeholder="Enter Stock Ticker" required/>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Shares Owned</Form.Label>
                    <Form.Control type="number" id="sharesOwned" placeholder="Enter Shares Owned" required/>
                </Form.Group>
                <Button className='add-portfolio-button mt-2 mb-4' onClick={handleClick}>Add Position</Button>
                <Button className="add-portfolio-button mt-2 mb-4" onClick={handleSubmit}>Submit</Button>
            </Form>
        </>
    )
}
