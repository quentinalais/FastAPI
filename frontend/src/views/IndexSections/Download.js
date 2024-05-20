/*!

=========================================================
* BLK Design System React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, {useState} from "react";
// reactstrap components
import { Button, Container, Row, Col, Progress } from "reactstrap";

import axios from 'axios';

import { Blocks } from "react-loader-spinner";

export default function Download() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showProgress, setshowProgress] = useState(false)
  const [uploadPercentage, setUploadPercentage] = useState(0);
 
  const handleFileInputChange = (e)=>{
    setFile(e.target.files[0])
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append("file",file)
    setshowProgress(true)
    setLoading(true)
    try {
      
      const endpoint = "http://localhost:8000/upload_track/"
      const response = await axios.post(endpoint, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        // Adding event listener to track upload progress
        onUploadProgress: (progressEvent) => {
          console.log(progressEvent)
          const { loaded, total } = progressEvent;
          const percentage = Math.floor((loaded / total) * 100);
          setUploadPercentage(percentage);
        }
      })
      if(response.statusText==="OK"){
        console.log("File uploaded successfully. ")
      }
      else {
        console.log("Failed to upload file.")
      }
      
    }catch(error) {
      console.log(error)
    }
    finally {
      setLoading(false)
    }

  }

  
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
            <h2 className="title">Only few seconds away from eternal glory.</h2>
            <h4 className="description">Now, upload your music !</h4>
          </Col>

          <Col className="text-center" lg="8" md="12">
            <form onSubmit={handleSubmit}>
              <input type="file" onChange={handleFileInputChange}   title=" " />
              <Button
                className="btn-round"
                color="info"
                role="button"
                size="lg"
                type="submit"
              >
                Upload Music
              </Button>
            </form>
            <br />

            { showProgress && 
            <Progress color="success" max="100" value={uploadPercentage}>
            <span className="progress-value">{uploadPercentage}%</span>
          </Progress>

            }
          </Col>
        </Row>
      </Container>
      <Container>
      <Row className="justify-content-md-center">
      {loading?
      <Blocks
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="d-flex justify-content-center"
      visible={true}
      />:''}
      </Row>
      </Container>
      
    </div>
  );
}
