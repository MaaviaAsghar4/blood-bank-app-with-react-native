import 'react-native-gesture-handler';
import React from 'react';
import {
  Container,
  Button,
  Text,
  Header,
  Title,
  Left,
  Body,
  Right,
  Icon,
  Content,
  Footer,
  FooterTab,
} from 'native-base';
import {StyleSheet} from 'react-native';

const App = () => {
  return (
    <Container>
      <Header style={styles.red}>
        <Left>
          <Button transparent>
            <Icon name="add" />
          </Button>
        </Left>
        <Body>
          <Title>App</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <Text>Hello</Text>
      </Content>
      <Footer>
        <FooterTab>
          <Button full style={styles.red}>
            <Text>Footer</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

export default App;

const styles = StyleSheet.create({
  red: {
    backgroundColor: 'red',
  },
});
