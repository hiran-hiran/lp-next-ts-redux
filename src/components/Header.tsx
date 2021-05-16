import Link from 'next/link';
import { useState, VFC } from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from 'src/features/car/carSlice';
import { useSelector } from 'react-redux';

const Header: VFC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const cars = useSelector(selectCars);

  console.log('cars', cars);

  return (
    <Container>
      <a href="/">LOGO</a>
      <Menu>
        {cars &&
          cars.map((car, i) => (
            <Link href={`/#${car}`} key={i}>
              {car}
            </Link>
          ))}
      </Menu>
      <RightMenu>
        <Link href="/#">Shop</Link>
        <CustomMenu onClick={() => setIsNavOpen(true)} />
      </RightMenu>
      <BurgerMenu show={isNavOpen}>
        <CloseWrapper>
          <CustomClose onClick={() => setIsNavOpen(false)} />
        </CloseWrapper>
        <ul>
          {cars &&
            cars.map((car, i) => (
              <li key={i}>
                <a href={`/#${car}`}>{car}</a>
              </li>
            ))}
        </ul>
      </BurgerMenu>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
`;
const Menu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerMenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
  background-color: #fff;
  width: 300px;
  z-index: 100;
  transform: ${(props) => (props.show ? 'translateX(0)' : 'translateX(100%)')};
  transition: all 0.3s ease-in-out;
  li {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    list-style: none;
  }
  a {
    display: inline-block;
    padding: 15px 0;
    font-weight: 600;
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
