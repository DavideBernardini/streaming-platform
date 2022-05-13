
import React from "react";
import { Container, ListGroup, Col, Dropdown } from "react-bootstrap";

const Question = () => {
    return (
        <Container className="mt-5" style={{height:"800px"}}>
            <h1 className="text-center mb-5">Domande frequenti</h1>

            <Col xs={{ order: 2 }} lg={{ order: 1 }} className="banner-rt_image">

                <ListGroup as="ol" style={{ width: "50%" ,height:"auto"  }} numbered>
                   
                        <Dropdown   style={{height:"auto"}}  ><Dropdown.Toggle style={{height:"auto"}}  className="w-100 mb-3 p-3" variant="success" id="dropdown-basic">
                       <h3>Cos'è GreenStream?</h3> 
                    </Dropdown.Toggle></Dropdown> 
                    <Dropdown   style={{height:"auto"}}  ><Dropdown.Toggle style={{height:"auto"}}  className="w-100 mb-3 p-3" variant="success" id="dropdown-basic">
                       <h3>Quanto costa GreenStream?</h3> 
                    </Dropdown.Toggle></Dropdown> 
                    <Dropdown   style={{height:"auto"}}  ><Dropdown.Toggle style={{height:"auto"}}  className="w-100 mb-3 p-3" variant="success" id="dropdown-basic">
                       <h3>Dove posso guardare GreenStream?</h3> 
                    </Dropdown.Toggle></Dropdown> 
                    <Dropdown   style={{height:"auto"}}  ><Dropdown.Toggle style={{height:"auto"}}  className="w-100 mb-3 p-3" variant="success" id="dropdown-basic">
                       <h3>Come posso disdire GreenStream?</h3> 
                    </Dropdown.Toggle></Dropdown> 
                    <Dropdown   style={{height:"auto"}}  ><Dropdown.Toggle style={{height:"auto"}}  className="w-100 mb-3 p-3" variant="success" id="dropdown-basic">
                       <h3>cosa posso guardare su GreenStream?</h3> 
                    </Dropdown.Toggle></Dropdown> 
                    <Dropdown   style={{height:"auto"}}  ><Dropdown.Toggle style={{height:"auto"}}  className="w-100 mb-3 p-3" variant="success" id="dropdown-basic">
                       <h3>GreenStream è adatto ai bambini?</h3> 
                    </Dropdown.Toggle></Dropdown> 
                        
                        
                    
     
                    
                      
                        

                </ListGroup>
            </Col>



        </Container>
    )
}
export default Question