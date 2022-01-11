import React, { Component } from 'react'

export default class Personne extends Component {
    constructor (props){
        super (props)
        this.state= {timer:0}
    }
    componentDidMount(){
        setInterval(()=>this.setState({...this.state,timer:this.state.timer+1}),1000) 
       }
       componentDidUpdate (){
         console.log('componentDidUpdate')
       }
       componentWillUnmount(){
         console.log('componentWillUnmount')
       }
    render() {
        console.log ("rendering")
        return (
            <div>
               <h2 style={{  textAlign: "center" , color:"royalblue"}}> FullName: {this.props.fullName} </h2> 
               <p style={{  textAlign: "justify" , color:"palevioletred" , fontFamily: 'Times New Roman' ,  fontSize: 20}}> Bio: {this.props.bio} </p>
               <img src={this.props.Image} />
               <p style={{  textAlign: "justify" , color:"purple" , fontFamily: 'Times New Roman' ,  fontSize: 20}}> Profession: {this.props.profession} </p>
               <p> {this.state.timer} </p>
            </div>
        )
    }
}
