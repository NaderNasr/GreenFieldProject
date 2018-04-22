import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import SignUpForm from './components/signup.jsx';
import JobsForm from './components/jobsForm.jsx';
import './styles/styles.scss'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }

  // componentDidMount() {
  //   $.ajax({
  //     url: '/items', 
  //     success: (data) => {
  //       this.setState({
  //         items: data
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  // }

  render () {
    return (
      <div>
      <div>
      <SignUpForm/>
      </div>
      <br/>
      <div>
      <JobsForm/>
      </div>
    </div>
    
      
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));