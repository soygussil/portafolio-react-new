import React from 'react'
import {Container,Row, Col} from 'react-bootstrap'

const Banner = () => {
  return (
    <section className='banner' id='inicio'>
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                <span className='tagline'>Bienvenidos a mi Portafolio</span>
                    <h1>{`Soy Desarrollador Frontend Jr`} <span className='wrap'>Web Developer</span></h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, officia ab? Consequuntur quidem qui id cumque! Eveniet impedit quo unde fuga, optio tempora totam ullam aperiam velit repudiandae adipisci nobis?</p>
                    <button onClick={()=>console.log('Connect')}>¡Contactame!</button>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner