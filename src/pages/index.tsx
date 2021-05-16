import type { VFC } from 'react';
import Layout from 'src/components/layout/layout';
import Section from 'src/components/Section';
import styled from 'styled-components';

const Home: VFC = () => {
  return (
    <Layout>
      <Container>
        <Section
          id="lorem01"
          title="Lorem Ipsum"
          description="Order Online Touchless Delivery"
          backgroundImg="https://cdn.pixabay.com/photo/2017/03/28/12/11/chairs-2181960_1280.jpg"
          leftBtntext="CUSTOM ORDER"
          rightBtntext="EXISTING INVENTORY"
        />
        <Section
          id="lorem02"
          title="Lorem Ipsum"
          description="Order Online Touchless Delivery"
          backgroundImg="https://cdn.pixabay.com/photo/2018/07/31/14/09/hot-3575167_1280.jpg"
          leftBtntext="CUSTOM ORDER"
          rightBtntext="EXISTING INVENTORY"
        />
        <Section
          id="lorem03"
          title="Lorem Ipsum"
          description="Order Online Touchless Delivery"
          backgroundImg="https://cdn.pixabay.com/photo/2021/04/26/15/27/flowers-6209247_1280.jpg"
          leftBtntext="CUSTOM ORDER"
          rightBtntext="EXISTING INVENTORY"
        />
        <Section
          id="lorem04"
          title="Lorem Ipsum"
          description="Order Online Touchless Delivery"
          backgroundImg="https://cdn.pixabay.com/photo/2021/05/05/20/51/mosque-6231915_1280.jpg"
          leftBtntext="CUSTOM ORDER"
          rightBtntext="EXISTING INVENTORY"
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
