import { Row, Col } from "react-bootstrap"


function Header(){
    return(
        <>
            <Row>
                <Col sm='12' className="justify-content-center text-center">
                    <h3 className="title">Meals List</h3>
                    <div className="d-flex justify-content-center">
                        <div className='underline'> </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Header;