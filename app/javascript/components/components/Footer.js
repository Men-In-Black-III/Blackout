import React from 'react'
import { Card, Button, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';
  
  const Footer = (props) => {
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle tag="h5">Footer Title</CardTitle>
            <CardText>Created by Men In Black.</CardText>
            <Button>Button</Button>
          </CardBody>
          <CardFooter className="text-muted">Footer</CardFooter>
        </Card>
      </div>
    );
  };
  
  export default Footer;