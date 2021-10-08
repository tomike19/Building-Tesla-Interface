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
          title="Model X "
          description="Order Online for   Touchless Delivery"
          backgroundImg="model-x.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing inventory"
        />
        <Section
          title="Lowest Cost Solar Panels in America"
          description="Money-back guarantee"
          backgroundImg="solar-panel.jpg"
          leftBtnText="Order now"
          rightBtnText="Learn More"
        />
        <Section
          title="Solar for New Roof"
          description="Solar Roof Costs Less Than a New Roof"
          backgroundImg="solar-roof.jpg"
          leftBtnText="Order now"
          rightBtnText="Learn more"
        />
        <Section
          title="Accessories"
          description="Solar Roof Costs Less Than a New Roof"
          backgroundImg="accessories.jpg"
          leftBtnText="Shop now"
        />
      </Container>
    </div>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
`;
 