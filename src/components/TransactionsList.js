import React from 'react'

class TransactionsList extends React.Component {

  render(){

    return (
      <div key={Math.random()}>
      {this.props.data.map((transaction) => {
                            return(
                                
      <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              {transaction.posted_at}
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              {transaction.description}
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              {transaction.category}
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              {transaction.amount}
            </h3>
          </th>
        </tr>
      </tbody>
    </table>
                            )
                        })}
    </div>
    )

  }
}

export default TransactionsList
