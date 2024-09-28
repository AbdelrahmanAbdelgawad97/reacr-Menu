import React from 'react'
import Card from 'react-bootstrap/Card';
import { Row } from 'react-bootstrap'
import Col from 'react-bootstrap/Col';
import { Zoom } from 'react-reveal';
import breakFastPhoto from '../photos/breakfast.jpg'

const Cards = ({itemData}) => {
  return (
    <>
      <Row>
            <Col sm="12">
            <Zoom>
                {itemData.length ? itemData.map(item=>{
                    return (
                    <Card key={item.id} className='d-flex flex-row my-4' style={{backgroundColor: "#f8f8f8;"}}>
                        <Card.Img className='img-item' variant="top" src={item.image} />
                        <Card.Body>
                            <Card.Title className='d-flex justify-content-between'> 
                                <div className='item-title'>
                                    {item.title}
                                </div>

                                <div className='item-title item-price'>
                                    {item.price} $
                                </div>
                                </Card.Title>
                            <Card.Text className='py-2'>
                                <div className='item-description'>
                                {item.description}
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    )
                }) :<h2 className='text-center'>There Are No Meals</h2>}
            </Zoom>
            </Col>
      </Row>
    </>
  )
}

export default Cards
