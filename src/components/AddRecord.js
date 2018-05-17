import React from "react"
import { addRecord } from '../actions/default'
import { store } from '../App'
import { connect } from 'react-redux'

class AddRecord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {content: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({content: event.target.value.toUpperCase()});
  }


  handleSubmit(e){
    e.preventDefault()
    store.dispatch(addRecord(this.state.content))
  }
  render () {
    return <div>
      <form onSubmit={this.handleSubmit} >
        <input type="text" name="content" onChange={this.handleChange} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  }
};
AddRecord = connect()(AddRecord)

export default AddRecord;
