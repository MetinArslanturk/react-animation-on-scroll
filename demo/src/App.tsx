import React, { useState } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Card, Col, Container, Navbar, Row } from 'react-bootstrap';
import github from './github.png';

const App = () => {
  const [afterInState, setAfterInState] = useState(0);
  const [afterOutState, setAfterOutState] = useState(0);

  return (
    <>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Navbar.Brand href="#">React Animation On Scroll</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a
              href="https://github.com/MetinArslanturk/react-animation-on-scroll"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} width="30" alt="Github repo" />
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      <h2 className="center margin-top-4r">Keep scroll to see demos</h2>
      <div className="padding-top-5r gray-bg">
        <Container>
          <Row className="padding-bottom-1r">
            <Col>
              <Card className="w-100 gray-bg">
                <Card.Body className="min-95vh center direction-column">
                  <h2>Animate In</h2>
                  <AnimationOnScroll animateIn="animate__tada">
                    <h2>Look what i am doing</h2>
                  </AnimationOnScroll>

                  <AnimationOnScroll animateIn="animate__fadeInLeftBig">
                    <h5>Look me too.</h5>
                  </AnimationOnScroll>
                  <Row>
                    {
                      <code className="code">
                        {`<AnimationOnScroll animateIn="animate__tada">`}
                        <br />
                        &nbsp;&nbsp;
                        {`
                        <h2>Look what i am doing</h2>`}
                        <br />
                        {`
                </AnimationOnScroll>`}
                        <br /> <br />
                        {`<AnimationOnScroll animateIn="animate__fadeInLeftBig">`}
                        <br />
                        &nbsp;&nbsp;
                        {`
                        <h5>Look me too.</h5>`}
                        <br />
                        {`
                </AnimationOnScroll>`}
                      </code>
                    }
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="margin-top-2r padding-top-5r">
        <Container>
          <Row className="padding-bottom-1r">
            <Col>
              <Card className="w-100">
                <Card.Body className="min-95vh center direction-column">
                  <h2>
                    Animate Out{' '}
                    <span className="small-f">
                      (Slowly scroll you will see the animate out)
                    </span>
                  </h2>
                  <AnimationOnScroll
                    animateIn="animate__shakeY"
                    animateOut="animate__bounceOutRight"
                  >
                    <h2>Look what i am doing</h2>
                  </AnimationOnScroll>
                  <Row>
                    {
                      <code className="code">
                        {`<AnimationOnScroll animateIn="animate__shakeY" animateOut="animate__bounceOutRight">`}
                        <br />
                        &nbsp;&nbsp;
                        {`
                        <h2>Look what i am doing</h2>`}
                        <br />
                        {`
                </AnimationOnScroll>`}
                      </code>
                    }
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="padding-top-5r gray-bg">
        <Container>
          <Row className="padding-bottom-1r">
            <Col>
              <Card className="w-100 gray-bg">
                <Card.Body className="min-95vh center direction-column">
                  <h2>Initially Visible</h2>
                  <AnimationOnScroll
                    initiallyVisible={true}
                    animateIn="animate__flip"
                  >
                    <h2>Look what i am doing</h2>
                  </AnimationOnScroll>
                  <Row>
                    {
                      <code className="code">
                        {`<AnimationOnScroll initiallyVisible={true} animateIn="animate__flip">`}
                        <br />
                        &nbsp;&nbsp;
                        {`
                        <h2>Look what i am doing</h2>`}
                        <br />
                        {`
                </AnimationOnScroll>`}
                      </code>
                    }
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="margin-top-2r padding-top-5r">
        <Container>
          <Row className="padding-bottom-1r">
            <Col>
              <Card className="w-100">
                <Card.Body className="min-95vh center direction-column">
                  <h2>Duration</h2>
                  <AnimationOnScroll
                    initiallyVisible={true}
                    duration={5}
                    animateIn="animate__swing"
                  >
                    <h2>Look what i am doing</h2>
                  </AnimationOnScroll>
                  <Row>
                    {
                      <code className="code">
                        {`<AnimationOnScroll initiallyVisible={true} duration={5} animateIn="animate__swing">`}
                        <br />
                        &nbsp;&nbsp;
                        {`
                        <h2>Look what i am doing</h2>`}
                        <br />
                        {`
                </AnimationOnScroll>`}
                      </code>
                    }
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="padding-top-5r gray-bg">
        <Container>
          <Row className="padding-bottom-1r">
            <Col>
              <Card className="w-100 gray-bg">
                <Card.Body className="min-95vh center direction-column">
                  <h2>
                    Delay <span className="small-f">Wait 2 seconds delay</span>
                  </h2>
                  <AnimationOnScroll
                    initiallyVisible={true}
                    delay={2000}
                    animateIn="animate__wobble"
                  >
                    <h2>Look what i am doing</h2>
                  </AnimationOnScroll>
                  <Row>
                    {
                      <code className="code">
                        {`<AnimationOnScroll initiallyVisible={true} delay={2000} animateIn="animate__wobble">`}
                        <br />
                        &nbsp;&nbsp;
                        {`
                        <h2>Look what i am doing</h2>`}
                        <br />
                        {`
                </AnimationOnScroll>`}
                      </code>
                    }
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="margin-top-2r padding-top-5r">
        <Container>
          <Row className="padding-bottom-1r">
            <Col>
              <Card className="w-100">
                <Card.Body className="min-95vh center direction-column">
                  <h2>Animate Once</h2>
                  <AnimationOnScroll
                    animateOnce={true}
                    animateIn="animate__rubberBand"
                  >
                    <h2>Look what i am doing</h2>
                  </AnimationOnScroll>
                  <Row>
                    {
                      <code className="code">
                        {`<AnimationOnScroll animateOnce={true} animateIn="animate__rubberBand">`}
                        <br />
                        &nbsp;&nbsp;
                        {`
                        <h2>Look what i am doing</h2>`}
                        <br />
                        {`
                </AnimationOnScroll>`}
                      </code>
                    }
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="padding-top-5r gray-bg">
        <Container>
          <Row className="padding-bottom-1r">
            <Col>
              <Card className="w-100 gray-bg">
                <Card.Body className="min-95vh center direction-column">
                  <h2>scrollableParentSelector</h2>
                  <div id="parent">
                    <div id="child">
                      <h4>Scroll me</h4>
                      <AnimationOnScroll
                        initiallyVisible={false}
                        animateIn="animate__wobble"
                        scrollableParentSelector="#parent"
                      >
                        <h2>Look what i am doing</h2>
                      </AnimationOnScroll>
                    </div>
                  </div>
                  <Row>
                    {
                      <code className="code">
                        {`<AnimationOnScroll initiallyVisible={false} scrollableParentSelector="#parent" animateIn="animate__wobble">`}
                        <br />
                        &nbsp;&nbsp;
                        {`
                        <h2>Look what i am doing</h2>`}
                        <br />
                        {`
                </AnimationOnScroll>`}
                      </code>
                    }
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="margin-top-2r padding-top-5r">
        <Container>
          <Row className="padding-bottom-1r">
            <Col>
              <Card className="w-100">
                <Card.Body className="min-95vh center direction-column">
                  <h2>afterAnimatedIn Counter: {afterInState}</h2>
                  <span className="small-f">
                    Counter increments with afterAnimatedIn function callback
                  </span>
                  <br />
                  <AnimationOnScroll
                    initiallyVisible={true}
                    animateIn="animate__jello"
                    afterAnimatedIn={() => setAfterInState((c) => c + 1)}
                  >
                    <h2>Look what i am doing</h2>
                  </AnimationOnScroll>
                  <Row>
                    {
                      <code className="code">
                        {`<AnimationOnScroll initiallyVisible={true} animateIn="animate__jello" afterAnimatedIn={() => setAfterInState((c) => c + 1)}>`}
                        <br />
                        &nbsp;&nbsp;
                        {`
                        <h2>Look what i am doing</h2>`}
                        <br />
                        {`
                </AnimationOnScroll>`}
                      </code>
                    }
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="margin-top-2r padding-top-5r gray-bg">
        <Container>
          <Row className="padding-bottom-1r">
            <Col>
              <Card className="w-100 gray-bg">
                <Card.Body className="min-95vh center direction-column">
                  <h2>afterAnimatedOut Counter: {afterOutState}</h2>
                  <span className="small-f">
                    Counter increments with afterAnimatedOut function callback
                  </span>
                  <br />
                  <AnimationOnScroll
                    initiallyVisible={true}
                    animateOut="animate__bounceOutUp"
                    afterAnimatedOut={() => setAfterOutState((c) => c + 1)}
                  >
                    <h2>Look what i am doing</h2>
                  </AnimationOnScroll>
                  <Row>
                    {
                      <code className="code">
                        {`<AnimationOnScroll initiallyVisible={true} animateIn="animate__bounceOutUp" afterAnimatedOut={() => setAfterOutState((c) => c + 1)}>`}
                        <br />
                        &nbsp;&nbsp;
                        {`
                        <h2>Look what i am doing</h2>`}
                        <br />
                        {`
                </AnimationOnScroll>`}
                      </code>
                    }
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="padding-top-5r">
        <Container>
          <Row className="padding-bottom-1r">
            <Col>
              <Card className="w-100">
                <Card.Body className="min-95vh center direction-column">
                  <h2>More</h2>
                  <p>
                    <strong>animatePreScroll:</strong> If your target element in
                    view on load but you don't want to trigger animate
                    immediately. Then with animatePreScroll prop you can set
                    animate trigger only on scrolling like{' '}
                    <b>{'animatePreScroll={false}'}</b>
                  </p>
                  <hr />
                  <p>
                    This library is a react component to animate elements on
                    scroll with{' '}
                    <a
                      href="https://animate.style/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      animate.css
                    </a>
                    . This library is re-implementation of{' '}
                    <a
                      href="https://github.com/dbramwell/react-animate-on-scroll"
                      target="_blank"
                      rel="noreferrer"
                    >
                      dbramwell/react-animate-on-scroll
                    </a>
                    . Re-implemented the old one with react functional
                    components in TypeScript. Also added animate.css@4.0+
                    support. Supports server-side rendering and TypeScript.
                  </p>
                  <strong className="margin-top-0-5r">Install:</strong>
                  <code className="margin-top-0-5r">
                    npm install react-animation-on-scroll --save
                  </code>
                  <p className="margin-top-0-5r">or</p>
                  <code>yarn add react-animation-on-scroll</code>

                  <br />
                  <p>
                    Please check{' '}
                    <a
                      href="https://github.com/MetinArslanturk/react-animation-on-scroll"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>{' '}
                    for full documentation and info.
                  </p>
                  <p>
                    If you have any question, please feel free to contact from{' '}
                    <strong>contact@metinarslanturk.com</strong>
                  </p>
                  <p>Made with Love, Metin Arslantürk @ 2021</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default App;
