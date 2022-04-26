import React from 'react'
import { Table, Button, Form } from 'react-bootstrap';

export default function ShowPortfolio(props) {
  return (
    <div className='portfolio-container'>
        <h1>Portfolio</h1>
        <Table striped bordered hover variant='dark'>
            <thead>
                <tr>
                    <th>Stock Ticker</th>
                    <th>Shares Owned</th>
                </tr>
            </thead>
            <tbody>
                {props.portfolio.map((stock, index) => {
                    return (
                        <tr key={index}>
                            <td>{stock.stockTicker}</td>
                            <td>{stock.sharesOwned}</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    </div>
  )
}
