import { VFC } from 'react';
import styled from 'styled-components';

type Props = {
  id?: string;
  title: string;
  description: string;
  backgroundImg: string;
  leftBtntext: string;
  rightBtntext?: string;
};

const Section: VFC<Props> = (props) => {
  return (
    <Wrap bgImg={props.backgroundImg} id={props.id}>
      <ItemText>
        <h1 className="text-6xl font-bold">{props.title}</h1>
        <p className="text-xl mt-2">{props.description}</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>{props.leftBtntext}</LeftButton>
          {props.rightBtntext && <RightButton>{props.rightBtntext}</RightButton>}
        </ButtonGroup>
        <DownArrow src="/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
};

export default Section;

const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: url('') center no-repeat;
  background-size: cover;
  scroll-snap-align: start;
  background-image: ${(props: any) => `url("${props.bgImg}")`};
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  opacity: 0.8;
  font-size: 13px;
  cursor: pointer;
  margin: 8px;
`;
const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
  margin: 0 auto;
`;

const Buttons = styled.div``;
