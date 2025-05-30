import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';
import './Szavak.css';
import useApiContext from '../context/ApiContext';

const Szavak = () => {
    const [valasztott, setValasztott] = useState();
    const {szavak} = useApiContext();
    

  return (
    <ListGroup>
      <ListGroup.Item>
        <Table striped bordered hover>
            <thead>
                <th>ANGOL</th>
                <th>MAGYAR</th>
                <th>visszajelzes</th>
            </thead>
            <tbody>
                    {
                        szavak.length > 0 ? (
                            szavak.map((szo)=>{
                                return(
<tr>
                                    <td>{szo.angol}</td>
                                    <td>{szo.magyar}</td>
                                    <td>
                                        {
                                            //props.magyar === "valami" ? (✅) : (❌)
                                        }
                                    </td>
                                    <td></td>
                                </tr>
                                )
                                
                            })
                        ) : <td>Nincsenek adatok</td>
                    }
            </tbody>
        </Table>
      </ListGroup.Item>
    </ListGroup>
  )
}

export default Szavak