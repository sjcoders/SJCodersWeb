import React from "react";
import styled from "styled-components";
import { Card, CardBody, Badge, Button } from "reactstrap";
import { MdComputer } from "react-icons/md";

const Wrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 70%;
`;

const OutsideWrap = styled("div")`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const CustCard = styled(Card)`
  width: 31%;
`;

const ComputerIcon = styled(MdComputer)`
  color: #2643e9;
`;

export default class CoverCards extends React.Component {
  render() {
    return (
      <>
        <OutsideWrap>
          <Wrapper>
            <CustCard className="card-lift--hover shadow border-0">
              <CardBody className="py-5">
                <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                  <i className="ni ni-check-bold" />
                </div>
                <h6 className="text-primary text-uppercase">Sign up</h6>
                <p className="description mt-3">
                  We offer courses in Spring, Summer, and Winter that cover a
                  range of topics, from introductions to web design.
                </p>
                <div>
                  <Badge color="primary" pill className="mr-1">
                    design
                  </Badge>
                  <Badge color="primary" pill className="mr-1">
                    system
                  </Badge>
                  <Badge color="primary" pill className="mr-1">
                    creative
                  </Badge>
                </div>
                <Button
                  className="mt-4"
                  color="primary"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  Learn more
                </Button>
              </CardBody>
            </CustCard>
            <CustCard className="card-lift--hover shadow border-0">
              <CardBody className="py-5">
                <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                  <i className="ni ni-check-bold" />
                </div>
                <h6 className="text-primary text-uppercase">Attend class</h6>
                <p className="description mt-3">
                  SJ Coders offers in-person mentoring with specialized lectures
                  to make sure you learn the material in depth.
                </p>
                <div>
                  <Badge color="primary" pill className="mr-1">
                    design
                  </Badge>
                  <Badge color="primary" pill className="mr-1">
                    system
                  </Badge>
                  <Badge color="primary" pill className="mr-1">
                    creative
                  </Badge>
                </div>
                <Button
                  className="mt-4"
                  color="primary"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  Learn more
                </Button>
              </CardBody>
            </CustCard>
            <CustCard className="card-lift--hover shadow border-0">
              <CardBody className="py-5">
                <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                  <ComputerIcon></ComputerIcon>
                  {/* <i className="ni ni-check-bold" /> */}
                </div>
                <h6 className="text-primary text-uppercase">Apply knowledge</h6>
                <p className="description mt-3">
                  Work on projects inspired from top universities that
                  translates into industry knowledge.
                </p>
                <div>
                  <Badge color="primary" pill className="mr-1">
                    design
                  </Badge>
                  <Badge color="primary" pill className="mr-1">
                    system
                  </Badge>
                  <Badge color="primary" pill className="mr-1">
                    creative
                  </Badge>
                </div>
                <Button
                  className="mt-4"
                  color="primary"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  Learn more
                </Button>
              </CardBody>
            </CustCard>
          </Wrapper>
        </OutsideWrap>
      </>
    );
  }
}
