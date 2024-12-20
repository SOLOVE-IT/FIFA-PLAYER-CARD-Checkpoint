
import React from "react";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

const Player = ({
    name = "Unknown Player",
    team = "Unknown Team",
    nationality = "Unknown",
    jerseyNumber = 0,
    age = 0,
    imageURL = "https://via.placeholder.com/150",
}) => {
    return (
        <Card style={{ width: "18rem", margin: "1rem" }}>
            <Card.Img variant="top" src={imageURL} alt={`${name} image`} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <strong>Team:</strong> {team} <br />
                    <strong>Nationality:</strong> {nationality} <br />
                    <strong>Jersey Number:</strong> {jerseyNumber} <br />
                    <strong>Age:</strong> {age}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

Player.propTypes = {
    name: PropTypes.string,
    team: PropTypes.string,
    nationality: PropTypes.string,
    jerseyNumber: PropTypes.number,
    age: PropTypes.number,
    imageURL: PropTypes.string,
};

export default Player;
