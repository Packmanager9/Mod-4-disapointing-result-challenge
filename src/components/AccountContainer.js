import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()
    this.updateStateFunc = this.updateStateFunc.bind(this);
    this.onKeyPressedMine = this.onKeyPressedMine.bind(this);
    this.state = {
      data: [],
    }

    // get a default state working with the data imported from TransactionsData (check)
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  }

    
    fetchAbstraction(){
      fetch('https://boiling-brook-94902.herokuapp.com/transactions')
      .then(response => {
        console.log(response)
        return response.json()
      })
      .then(data => {
        this.setState({ data: data  })
        console.log(data)
        console.log(this.state)
      })
    }

    fetchAbstractionReturn(){
      fetch('https://boiling-brook-94902.herokuapp.com/transactions')
      .then(response => {
        console.log(response)
        return response.json()
  
      })
      .then(data => {
        return data
      })
    }


  componentDidMount(){
    this.fetchAbstraction()
  }


  handleChange(event) {
    // your code here (what code? -cole)
  }

   updateStateFunc = (tx) => {
    let protostate = [...this.state]
    protostate.push(tx)
    this.setState({data: protostate})
  }



  onKeyPressedMine=()=>{
    
    console.log(this.updateStateFunc)
    let stateIsUndefined = 0
    if(typeof this.state == "undefined") {

       stateIsUndefined = this.fetchAbstractionReturn()

    }


    setTimeout(function(){ 


      let searchbar = document.getElementById("search");
      console.log(searchbar.value)
      console.log(this.state )
    

      let dataprototype = []
      
    if(typeof this.state == "undefined") {

        dataprototype = [...stateIsUndefined]

      }else{

        dataprototype = [...this.state.data]

      }
    //god forgive me, I'm using a for loop because filter is not working well
    let tester =''
    let output = []
      for(let l; l < dataprototype.length; l++){
  
        tester =  dataprototype[l].toString()
        console.log(dataprototype[l].toString())
  
        if(tester.toString().includes(searchbar.value.toString()) == true){
          console.log("here")
  
          output.push(dataprototype[l])
        }
  
  
      }
  
  
  
     this.updateStateFunc(stateIsUndefined)


    // let protostate = [...stateIsUndefined]
    // this.setState({data: protostate})
  
       if(searchbar.value == ''){
        this.fetchAbstraction()
       }

      
     }, 50);
     
    }

  render() {

    return (
      <div>
        <Search data={this.state.data} method={this.updateStateFunc} keymethod={this.onKeyPressedMine} />
        <TransactionsList data={this.state.data} method={this.updateStateFunc} />
      </div>
    )
  }
}

export default AccountContainer
