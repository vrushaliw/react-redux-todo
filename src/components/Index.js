import React from 'react';
import {SmallItem} from './SmallItem'
import GlobalMetadata from '../global_metadata'
import { store } from '../App'
import {fetchRecords} from '../actions/default'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      records: [],
      collection_name: ""
    }

  }
  componentDidMount() {
    var collection_name = "";
    if(typeof this.props.location !== "undefined"){
      collection_name = this.props.location.pathname.replace("/", "")
    }
    if(collection_name !== ""){
      this.setState({collection_name: collection_name})
      store.dispatch(fetchRecords(GlobalMetadata[collection_name].url)).then(() => {
        this.setState(store.getState())
      })

    }
  }

  render () {
    var rows = []
    if(typeof(GlobalMetadata[this.state.collection_name]) !== "undefined"){
      rows = [<thead><tr>
          {GlobalMetadata[this.state.collection_name].columns.map(function(column){
            return <td>{column}</td>
          })}
          <td>Actions</td>
        </tr></thead>]
      rows = [...rows, <tbody>{this.state.records.map(function(record, i) {
        return <SmallItem record={record} collection_name={this.state.collection_name} key={record.id}/>;
      }.bind(this))}</tbody>];
    }
    return <table>{rows}</table>;
  };
};
Index.defaultProps = {
  records: [],
  collection_name: ""
}
export default Index
