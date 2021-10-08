import React from "react";
import styled from "styled-components";
import Section from "./Section";

const Home = () => {
  return (
    <div>
      <Container>
        <Section
          title="Model S"
          description="Order Online for   Touchless Delivery"
          backgroundImg="model.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing inventory"
        />
        <Section
          title="Model Y"
          description="Order Online for   Touchless Delivery"
          backgroundImg="model-y.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing inventory"
        />
        <Section
          title="Model 3"
          description="Order Online for   Touchless Delivery"
          backgroundImg="model-x.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing inventory"
        />
      </Container>
    </div>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
`;
 