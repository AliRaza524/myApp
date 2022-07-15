import React, { PureComponent } from 'react'

class PureCom extends PureComponent {
  render() {
    console.log("*****Pure Component****")
    return (
      <div>PureComponent {this.props.name}</div>
    )
  }
}

export default PureCom;