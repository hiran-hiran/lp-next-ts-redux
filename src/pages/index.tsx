import type { VFC } from 'react';
import Layout from 'src/components/layout/layout';
import Section from 'src/components/Section';
import styled from 'styled-components';

const Home: VFC = () => {
  return (
    <Layout>
      <Container>
        <Section
          title="Model S"
          description="Order Online Touchless Delivery"
          backgroundImg="model-s.jpg"
          leftBtntext="CUSTOM ORDER"
          rightBtntext="EXISTING INVENTORY"
        />
        <Section
          title="Model Y"
          description="Order Online Touchless Delivery"
          backgroundImg="model-y.jpg"
          leftBtntext="CUSTOM ORDER"
          rightBtntext="EXISTING INVENTORY"
        />
        <Section
          title="Model 3"
          description="Order Online Touchless Delivery"
          backgroundImg="model-3.jpg"
          leftBtntext="CUSTOM ORDER"
          rightBtntext="EXISTING INVENTORY"
        />
        <Section
          title="Model X"
          description="Order Online Touchless Delivery"
          backgroundImg="model-x.jpg"
          leftBtntext="CUSTOM ORDER"
          rightBtntext="EXISTING INVENTORY"
        />
        <Section
          title="Lowest Cost Solar Panels in America"
          description="Money-back quarantee"
          backgroundImg="solar-panel.jpg"
          leftBtntext="CUSTOM ORDER"
          rightBtntext="EXISTING INVENTORY"
        />
        <Section
          title="Lowest for New Roofs"
          description="Money-back quarantee"
          backgroundImg="solar-roof.jpg"
          leftBtntext="CUSTOM ORDER"
          // rightBtntext="EXISTING INVENTORY"
        />
      </Container>
    </Layout>
  );
};

export default Home;

const Container = styled.div`
  overflow: auto;
  height: 100vh;
  scroll-snap-type: y mandatory;
`;
