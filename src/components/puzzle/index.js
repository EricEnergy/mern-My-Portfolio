import React, { useState, useEffect, Fragment } from "react";
import { Modal, Container, Row, Button } from "react-bootstrap";
import arrayShuffle from "array-shuffle";
import "./style.css";

function Puzzle() {
  const [show, setShow] = useState(true);
  const [boxColors, setBoxeColors] = useState(
    arrayShuffle(["Blue", "Green", "Yellow", "Red"])
  );
  const [array, setArray] = useState(
    arrayShuffle(["G", "B", "Y", "R", "G", "Y"])
  );
  const [answer, setAnswer] = useState([]);
  const [pass, setPass] = useState(false);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("passed")) {
      setShow(false);
    }

    if (number < 10 && pass) {
      function timer() {
        setTimeout(() => {
          setBoxeColors(arrayShuffle(["Yellow", "Blue", "Green", "Red"]));
          setNumber(number + 1);
        }, 100);
      }
      timer();
    }

    if (number === 10) {
      localStorage.setItem("passed", true);
      setShow(false);
    }
  }, [boxColors]);

  const handleClose = () => setShow(false);

  const handleClick = (e) => {
    if (answer.length < 6) {
      let acronym = e.target.className
        .split(/\s/)
        .reduce((response, word) => (response += word.slice(0, 1)), "");
      var newArray = [...answer, acronym];
      setAnswer(newArray);
    }
  };

  const handleSubmit = () => {
    if (answer.length === 6 && array.join("") === answer.join("")) {
      setBoxeColors(arrayShuffle(["Blue", "Green", "Yellow", "Red"]));
      setPass(true);
    } else {
      setAnswer([]);
    }
  };

  return (
    <Fragment>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Container>
          <Row>
            <h3 class="passwordText">
              Complete Puzzle <br />
              {array}
            </h3>
          </Row>
          <Row>
            <div className="passAnswer">
              <h3 class="answer">{answer}</h3>
            </div>
            <Button onClick={handleSubmit} className="buttonSub">
              Submit
            </Button>
          </Row>
          <Row>
            <div onClick={handleClick} class={boxColors[0]}></div>
            <div onClick={handleClick} class={boxColors[1]}></div>
          </Row>
          <Row>
            <div onClick={handleClick} class={boxColors[2]}></div>
            <div onClick={handleClick} class={boxColors[3]}></div>
          </Row>
        </Container>
      </Modal>
    </Fragment>
  );
}

export default Puzzle;
