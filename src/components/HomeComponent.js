import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle, CardSubtitle } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

const RenderCard = ({item, isLoading, errMess}) => {
    if(isLoading) {
        return(
            <Loading />
        );
    }
    else if(errMess) {
        return(
            <h4>{errMess}</h4>
        );
    }
    else if(item!=null) {
        return(
            <Card>
                <CardImg src={baseUrl + item.image} alt={item.name} />
                <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        );
    }
}

//{item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
//here we mix javascript and js code
//if item.designation is not null then it will render cardsubtitle else it will return null
//functioning -- similar to conditional operater

function Home(props) {
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} 
                        isLoading={props.dishesLoading}
                        errMess={props.dishesErrMess} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion}
                        isLoading={props.promosLoading}
                        errMess={props.promossErrMess} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} />
                </div>
            </div>
        </div>
    );
}
//we use rendercard for all three because they have same properties (check in shared/*.js files)
// and also because they are to be represented in a similar structure
//just leader has some extra properties like abbr
export default Home;