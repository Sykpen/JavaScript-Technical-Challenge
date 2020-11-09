import React, { Component, Fragment } from "react";
import { Card } from "react-bootstrap";
import moment from "moment";
import "./style.css";
import Circle from "../Circle";

class OneRepository extends Component {
  render() {
    const { name, language, isPrivate, updated_at } = this.props;

    return (
      <Fragment>
        <Card
          style={{
            marginTop: "10px",
            marginBottom: "10px",
            border: "1px solid #f8f8f8}",
          }}
        >
          <Card.Body>
            <Card.Text>
              <div>
                <p className="repo">
                  {name}{" "}
                  {isPrivate ? (
                    <span className="private">Private</span>
                  ) : (
                    <span></span>
                  )}
                </p>
              </div>
              <div>
                {language ? (
                  <div className="circle_flex">
                    <Circle language={language} /> {language}
                  </div>
                ) : (
                  <div>Language is not defined</div>
                )}
              </div>
              <div>
                {isPrivate} Updated on{" "}
                {moment(updated_at).format("Do MMMM YYYY")}
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Fragment>
    );
  }
}

export default OneRepository;
