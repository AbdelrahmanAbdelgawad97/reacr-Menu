import { Row, Col } from "react-bootstrap"
import React from 'react'
import items from '../data'
import { Roll } from "react-reveal"
const Categ = ({filterByCategory, allCategory}) => {

  // to filter bu category
  const findItem=(cat) => {
    filterByCategory(cat)
  }

  return (
    <Row className="my-2 mb-5">
      <Col sm="12" className="d-flex justify-content-center">
      <Roll>
        {allCategory.length ? allCategory.map(i=>{
          return (
            <div key={i.id}>
                <button onClick={()=>findItem(i)} style={{border: "1px solid #b45b35"}} className="btn mx-2">{i}</button>
            </div>
          )
        }) : <h3>There Are No Categories</h3>}
      </Roll>
      </Col>
    </Row>
  )
}

export default Categ;
