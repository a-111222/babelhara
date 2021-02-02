import React from 'react'
import Disc from './Disc';
import Home from './Home';
import Menue from './Menue';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Navstyle.css";
import Sandawitch from './Sandawitch';
import Manaesh from './Manaesh';
import Pizza from './Pizza';
import Shwrma from './Shwrma';
import Checken from './Checken';
import ArabianCorner from './ArabianCorner';
import Salat from './Salat';
import Meals from './Meals';
import Mshawy from './Mshawy';
import Frid from './Frid';

import {
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import { HashRouter } from 'react-router-dom';


export default function Nav() {
    return (
        <HashRouter >
            <div>
<Container className="Links">
    
    <Row>      
<Col className="Col">  <Link to="/home" className="Active">الرئيسية</Link> </Col>
<Col className="Col">  <Link to="/menue">قائمة الطعام</Link>  </Col>
<Col className="Col">  <Link to="/disc">العروض</Link>  </Col>    
    </Row>

    
</Container>

        <Switch>
            <Route exact path="/home"><Home/></Route>
            <Route path="/menue"> <Menue/></Route>
            <Route path="/disc"><Disc/></Route>
            <Route path="/sandawitch"><Sandawitch/></Route>
            <Route path="/meals"><Meals/></Route>
            <Route path="/manaesh"><Manaesh/></Route>
            <Route path="/pizza"><Pizza/></Route>
            <Route path="/shwrma"><Shwrma/></Route>
            <Route path="/checken"><Checken/></Route>
            <Route path="/arabianCorner"><ArabianCorner/></Route>
            <Route path="/salat"><Salat/></Route>
            <Route path="/mshawy"><Mshawy/></Route>
            <Route path="/frid"><Frid/></Route>
            

        </Switch>
          </div>
          </HashRouter> 

    );
}
