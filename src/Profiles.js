import React from "react";
import { Container, Card } from "react-bootstrap";

export default function profiles({ Info }) {
  return (
    <div>
      <div className="board-bgimg"></div>
      <Container>
        <Card className="shadow px-4 rounded-5 bg-dark text-white">
          <Card.Body>
            <h2 className="fw-bold mb-2 text-center text-uppercase">
              Leaderboard
            </h2>
            <div id="profile">{Item(Info)}</div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

function Item(data) {
  return (
    <>
      {data.map((value, index) => (
        <div className="flex" key={index}>
          <div className="item">
            {/* <img src={value.img} alt="" /> */}
            <div className="info">
              <h3 className="name text-white">{value.name}</h3>
              <span>{value.location}</span>
            </div>
          </div>
          <div className="item">
            <span>{value.score}</span>
          </div>
        </div>
      ))}
    </>
  );
}
