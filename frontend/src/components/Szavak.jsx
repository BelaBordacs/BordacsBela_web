import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';
import './Szavak.css';
import useApiContext from '../context/ApiContext';

const Szavak = () => {
    const [valasztott, setValasztott] = useState();
    const {szavak} = useApiContext();
    
    const handleClick = (szavak) => {
        console.log(szavak)
    }

  return (
    <ListGroup>
      <ListGroup.Item>
        <Table striped bordered hover>
            <thead>
                <th onClick={(szavak) => handleClick(szavak)}>ANGOL</th>
                <th>MAGYAR</th>
                <th>visszajelzes</th>
            </thead>
            <tbody>
{
                        szavak.length > 0 ? (
                            szavak.map((e)=>{
                                <tr>
                                    <td>{e.angol}</td>
                                    <td>{e.magyar}</td>
                                    <td>
                                        {
                                            //props.magyar === "valami" ? (✅) : (❌)
                                        }
                                    </td>
                                    <td></td>
                                </tr>
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