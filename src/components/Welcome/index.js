// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  onClickSubscribeButton = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  render() {
    const {isSubscribed} = this.state
    return (
      <div className="welcome-app-container">
        <h1 className="welcome-app-heading">Welcome</h1>
        <p className="welcome-app-description">Thank you! Happy Learning</p>
        <button
          className="welcome-app-button"
          onClick={this.onClickSubscribeButton}
          type="button"
        >
          {isSubscribed ? 'Subscribed' : 'Subscribe'}
        </button>
      </div>
    )
  }
}

export default Welcome
