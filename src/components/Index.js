import React from 'react';
import {SmallItem} from './SmallItem'
import GlobalMetadata from '../global_metadata'

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
      var xhttp = new XMLHttpRequest();
      var self = this;
      xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
         self.setState({records: JSON.parse(this.responseText)})
        }
      };
      xhttp.open("GET", GlobalMetadata[collection_name].url, true);
      xhttp.send();

    }
  }

  render () {
    var rows = []
    if(typeof(GlobalMetadata[this.state.collection_name]) !== "undefined"){
      rows = [<tr>
          {GlobalMetadata[this.state.collection_name].columns.map(function(column){
            return <td>{column}</td>
          })}
          <td>Actions</td>
        </tr>]
      rows = [...rows, this.state.records.map(function(record, i) {
        return <SmallItem record={record} collection_name={this.state.collection_name} />;
      }.bind(this))];
    }
    debugger
    return <table>{rows}</table>;
  };
};
Index.defaultProps = {
  records: [],
  collection_name: ""
}
export default Index
