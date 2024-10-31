import React from "react";
import axios from 'axios';
import { Button, Header, Input, Form, Grid ,Image } from 'semantic-ui-react'



class App extends React.PureComponent {
  state = {
    email: '',
    response: ''
  }

  clicked = () => {

    axios.get('http://localhost:5000/api', {params: { email: this.state.email}})
    .then(res => {
      this.setState({ response: res.data });
      
    })
    .catch(error => {
      console.log(error);
    });
  }

  handleEmailChange = (e, { value }) => {
    this.setState({ email: value });
}

  render() {
      return (
        <Form style={{ marginLeft: '1%', marginTop: '1%', maxWidth: '42vh'}}>
          <div style={{ backgroundColor: '#ADBCE6' }}>
          <Grid centered columns={3}>
         
          <Grid.Column width={2}></Grid.Column>
            <Grid.Column width={12}>
            <Grid.Row style={{ marginLeft: '5%',marginRight: '5%', marginBottom: '1%', marginTop: '5%'}} >
              <Header as='h1' >
                Your Future Starts Here
              </Header>
            </Grid.Row>
            <Grid.Row style={{marginLeft: '5%', marginRight: '5%',marginBottom: '5%', marginTop: '5%'}} >
              <Header as='h3' >
                Enter your email address
              </Header>
              <Input fluid type="text" onChange={this.handleEmailChange}/>
            </Grid.Row>
            <Grid.Row style={{ marginLeft: '5%', marginRight: '5%',marginBottom: '3%', marginTop: '5%'}} >
            <Button fluid color='purple' onClick={this.clicked}>
              Subscribe
            </Button>
            </Grid.Row>
            <Grid.Row style={{ marginLeft: '5%', marginRight: '5%',marginBottom: '3%', marginTop: '5%'}} >
            <Header as='h3' >
              {this.state.response}
            </Header>
            </Grid.Row>
            <Grid.Row style={{ marginLeft: '5%', marginRight: '5%',marginBottom: '3%', marginTop: '5%'}} >
            <Image floated='right' size='small' src='./dog.png'/>
            </Grid.Row>
            </Grid.Column>
            <Grid.Column width={2}></Grid.Column>
         
        </Grid>
        </div>
        </Form>
          );
  }

}

export default App;