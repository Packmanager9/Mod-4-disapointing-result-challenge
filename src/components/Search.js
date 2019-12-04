import React from 'react'

class Search extends React.Component {


render(){

  return (
    <div onKeyDown={this.props.keymethod} className="ui huge fluid icon input">
      <input id="search"
        type="text"
        placeholder={"Search your Recent Transactions"}
      />
      <i className="circular search link icon"></i>
    </div>
  )

}
}

export default Search
