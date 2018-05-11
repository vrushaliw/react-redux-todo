import React from "react"
import GlobalMetadata from '../global_metadata'

class EditRecord extends React.Component {
  render () {
    return (
      GlobalMetadata[this.props.collection_name].columns.map(function(column){
        return <div>
          <form onSubmit={e => {
            e.preventDefault()
            if (!input.value.trim()) {
              return
            }
            dispatch(addTodo(input.value, "sdjkfhsdjkf"))
            input.value = ''
          }}>
            <input ref={node => input = node} />
            <button type="submit">
              Add Todo
            </button>
          </form>
        </div>

      }.bind(this))

    );
  }
};
export {EditRecord};
