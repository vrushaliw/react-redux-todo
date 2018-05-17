import React from "react"
import GlobalMetadata from '../global_metadata'

class SmallItem extends React.Component {
  render () {
    return (
      GlobalMetadata[this.props.collection_name].columns.map(function(column){
        return (<tr key={this.props.record.id}>
          <td>{this.props.record[column]}</td>
          <td><a href="/todo_lists/{this.props.record.id}/edit">Edit</a></td>
        </tr>)
      }.bind(this))

    );
  }
};
export {SmallItem};
