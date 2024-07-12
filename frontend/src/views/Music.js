import React, { useState, useEffect } from "react";
// reactstrap components
import { Button, Container, Row, Col, Table } from "reactstrap";

import axios from "axios";
import { Circles } from "react-loader-spinner";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function Music() {
  const [data, setdata] = useState(null);

  useEffect(() => {
    axios.get("https://fastapi-j672.onrender.com/tracks/",{
      withCredentials: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': 'Origin',
      },
    }).then(resp=>{
      setdata(resp.data)
    })

  }, [])

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://fastapi-j672.onrender.com/track/${id}`,{
        headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': 'Origin',
        },
      }); 
      setdata(data.filter(item => item.ID !== id)); // Update state to remove the deleted item
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  

  return (
    <div
      className="section section-download"
      data-background-color="black"
      id="download-section"
    >
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      <Container>
        <Row className="justify-content-md-center">
          <Col className="text-center" lg="8" md="12">
            <h2 className="title">Music Page</h2>
          </Col>
        </Row>
      </Container>

      <TableMusic data={data} handleDelete={handleDelete} />

    </div>
  );
}


const TableMusic = ({data, handleDelete})=>{
  

    if(!data){
        return <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass="d-flex justify-content-center"
        visible={true}
      />
    }

    return (
        <Table responsive>
    <thead>
        <tr>
            <th className="text-center">ID</th>
            <th>Track Name</th>
            <th>CID</th>
            <th> Action </th>
        </tr>
    </thead>
    <tbody>
        {
            data.map((item,index)=>(
                <tr key={index}>
                <td className="text-center">{item.ID}</td>
                <td>{item.filename} </td>
                <td>
                <AudioPlayer
                            autoPlay={false}
                            showJumpControls={false}
                            src={`https://ipfs.filebase.io/ipfs/${item.CID}`}
                            onPlay={e => console.log("onPlay")}
                        />
                </td>
                <td> <Button onClick={()=>handleDelete(item.ID)} className="btn-link" color="danger"> Delete </Button></td>
                </tr>
            ))
        }
    </tbody>
</Table>
    )
}
