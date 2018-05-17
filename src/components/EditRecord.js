import React from "react"
import GlobalMetadata from '../global_metadata'

class EditRecord extends React.Component {
  render () {
    return (
      GlobalMetadata[this.props.collection_name].columns.map(function(column){
        return (<tr>
          <td>{this.props.record[column]}</td>
          <a href="/todo_lists/{this.props.record.id}/edit">Edit</a>
        </tr>)
      }.bind(this))

    );
  }
};
export default EditRecord;
