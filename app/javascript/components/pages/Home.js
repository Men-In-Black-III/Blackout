import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  Button,
  CardBody,
  Row,
  Col,
  NavLink,
  Container,
} from "reactstrap";
import "../../../assets/stylesheets/home.scss";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 3,
    };
  }

  loadMore = () => {
    this.setState((prev) => ({ count: prev.count + 3 }));
  };
  render() {
    let { drinks } = this.props;
    return (
      <>
        <h1 className="homeTitle">Blackout</h1>

        <br/>

        <div>
        <CardGroup className="card-group-size">
          <Row className="card-group-size">
          {drinks &&
            drinks.slice(0, this.state.count).map((drink) => {
              return (
                <Col className="card-group-size" key={drink._id} sm="4" className="mb-6">
                <Card style={{ width: '18rem', height: '18rem' }}>
                  <CardImg
                    top
                    width="100%"
                    style={{height:'50%'}}
                    src={drink.drinkThumb}
                    alt="Card image cap"
                  />
                  <CardBody style={{  backgroundColor: "black", height:'50%' }}>
                    <NavLink href={`/DrinkShow/${drink._id}`} style={{color:'whitesmoke', textAlign:'center'}}>
                    <CardTitle
                      tag="h5"
                    >
                      {drink.drinkName}
                    </CardTitle>
                    </NavLink>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                    </CardSubtitle>
                    <CardText>
                    </CardText>
                    <div className="showMore-homeButton">
                    <Button href={`/DrinkShow/${drink._id}`}>Show More</Button>
                    </div>
                  </CardBody>
                </Card>
                </Col>
              );
            })}
            </Row>
        </CardGroup>
        </div>

        <div className="loadMore-homeCards">
          <Button onClick={this.loadMore}>
            Load More
          </Button>
        </div>
      </>
    );
  }
}

//         <Container>
//           <Row>
//             {drinks &&
//               drinks.slice(0, this.state.count).map((drink) => {
//                 return (
//                   <Col key={drink._id} sm="4" className="mb-6">
//                     <Card style={{backgroundColor:'black'}}>
//                       <NavLink href={`/DrinkShow/${drink._id}`} style={{color:'whitesmoke', textAlign:'center'}}>
//                         <CardTitle tag="h5">{drink.drinkName}</CardTitle>
//                       </NavLink>
//                       <CardTitle>
//                         <img
//                           style={{ width: "250px", height: "250px", alignItems:'center'}}
//                           src={drink.drinkThumb}
//                           alt="drink img"
//                         />
//                       </CardTitle>
//                       <NavLink href={`/DrinkShow/${drink._id}`}>
//                         <Button>Show More</Button>
//                       </NavLink>
//                     </Card>
//                   </Col>
//   );
// })}
//           </Row>
//         </Container>

        // <Button color="secondary" onClick={this.loadMore}>
        //   Load More
        // </Button>
//         </div>
//     );
//   }
// }

export default Home;
