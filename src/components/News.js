import React from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody
} from 'reactstrap';


const News = (props) => {
    return (
        <div>
            <CardGroup style={{ margin: 10, padding: 10}}>
            <Card  style={{ margin: 10, padding: 10}}>
                <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
            <Card  style={{ margin: 10, padding: 10}}>
                <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
            <Card  style={{ margin: 10, padding: 10}}>
                <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        </CardGroup>
            </div>
   
    );
};

export default News;