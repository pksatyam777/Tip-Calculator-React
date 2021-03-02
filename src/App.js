import React from "react";
import "./App.css";
import { Button, Table } from 'react-bootstrap';

var year = new Date();
var current = year.getFullYear();//VARIABLE YEAR ON FOOTER//


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state ={
    custData:[],
    ammountData : [],
      tempData : '',
      AtempData : '',
      total:[],

    service:'',
    len:""



    }

  }


handleClick = () => {

  this.setState({custData:[...this.state.custData,{tempData:this.state.tempData,
    tip:(this.state.AtempData)*(this.state.service)}]
  , AtempData: '' , tempData: '' })

}
handlecal=(evt) =>{
  this.setState({len:[this.state.custData.length]})

  var tl=this.state.custData.map(item =>item.tip).reduce((a,b) => a+b,0)
  this.setState({total:tl})

}


  render() {


    return (
      <div>
        <div className="outer-div">
          <header>
            <div className="form-div">
              <form class="">
                <h1 className="form-header"> TIP CALCULATOR</h1>
                <br />
                <label className="e-b"> Enter your bill amount</label>
                <br />
                <br />
                <input className="ent-amt" type="number"  value= {this.state.AtempData}
                 onChange={(evt) =>
                   {this.setState({ AtempData: evt.target.value })}}  required />
                <br />
                <br />
                <hr />
                <br />
                <br />
                <label className="h-s">How was the service</label>
                <select name="service" className="opt" required value ={this.state.service}
                onChange={(evt) =>
                   {this.setState({ service: evt.target.value })}}>
                  <option> --Select-- </option>
                  <option value="0.2">Excellent - 20% </option>
                  <option value="0.1">Medium - 10% </option>
                  <option value="0.05">Not so good - 5%</option>
                </select>
                <input
                  className="cstm-inp"
                  value= {this.state.tempData} onChange={(evt) =>
                     {this.setState({ tempData: evt.target.value })}}
                  type="text"
                  placeholder="Customer Name"
                />
                <input
                  className="add-btn"
                  onClick={() => {this.handleClick() }}
                  type="button"
                  value="Add Customer"
                 />
                <br />
                <br />
                <h3> Customer List </h3>
                <div id="out1">
                <ul>

  {this.state.custData.map(item =>
  <li> {`${item.tempData} offering tip of ${item.tip} rupees.`} </li>)}



  </ul>
                </div>
                <input
                  className="f-submit"
                  type="Button"
                  value="Calculate Tip & Customer"
                  onClick={() => {this.handlecal() }}
                />
                <Table striped bordered hover>
  <thead>
    <tr>

      <th>TOTAL PERSON</th>
      <th>TOTAL AMOUNT</th>

    </tr>
  </thead>
  <tbody>
    <tr>

      <td>{this.state.len} </td>
      <td>{this.state.total}</td>

    </tr>


  </tbody>
</Table>

                <div className="foot">
                  <h5> ©{current} TIP-CALCULATOR . All Rights Reserved </h5>
                </div>
              </form>
            </div>
          </header>
        </div>
      </div>
    );
  }
}

export default App;
