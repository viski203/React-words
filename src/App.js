import React from 'react';
import HeaderBlock from './components/HeaderBlock';
import Header from './components/Header';
import Paragraph from './components/Paragraph';
import { ReactComponent as ReactLogoSvg } from './logo.svg';
import Menu from './components/Menu';
import MenuItem from './components/Menu/MenuComponents';
import Card from './components/Card';
import wordsList from './components/Card/wordsList';
import Wrapper from './components/Wrapper';
import FooterItem from './components/Footer';
const App = () => {
  return (
  <>
       <Menu>
          <MenuItem>Home</MenuItem>
          <MenuItem>Page</MenuItem>
          <MenuItem>About Us</MenuItem>
          <MenuItem>Contacts</MenuItem>
        </Menu>
      <HeaderBlock hideBackground>
       
      <Header>Learn Words Online</Header>
        <Paragraph>Memorize faster</Paragraph>
      </HeaderBlock>
      <Wrapper>
        { wordsList.map(({eng, rus}, idx) => <Card key={idx} eng={eng} rus={rus}/>) }
      </Wrapper>
      <HeaderBlock>
        <Header>Учите слова онлайн</Header>
        <Paragraph>Запоминайте все быстро</Paragraph>
        <ReactLogoSvg/>
        </HeaderBlock>
        <Wrapper>
          <FooterItem>Created By Ivan Borodkin</FooterItem>
          <FooterItem>All Rights Reserved &copy;</FooterItem>
        </Wrapper>
  </>
  )
}

export default App;
