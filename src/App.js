import React, { Component } from 'react'
import Personne from './components/Personne'


export default class App extends Component {
  constructor (props){
super (props)
this.state= {show:true}
  }
  
  render() {
    return (
      <div>
       {this.state.show && <Personne fullName= "Houwaida Ben Nassib" bio= "je m'appelle houwaida ben nassib, j'ai 25ans.. j'ai obtenu mon diplome de licence
       appliqué en génie  mécanique spécialité Mécatronique je posséde une grande aisance relationnelle un sens aigu de l'organisation 
       et de la motivation. je parle couramment le français et j'ai un niveau intermédiaire d'anglais " profession="j'ai une expérience deux ans dans le domaine enseignement et maintenant j'ai rejoindre a GOMYCODE pour découvrir des 
       nouveaux lignes et bien sur je voulais de chercher une autre opportunité même dans un domaine différent." Image="https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.15752-9/270821028_900440450585050_4362922079618930058_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=ae9488&_nc_ohc=l-sX1pkiukEAX9cqkKq&_nc_ht=scontent.fnbe1-2.fna&oh=03_AVJ7hAZfyEfk0kmV5Qjq3u7YMfEcWM9_kV7QmAqe7B1G5Q&oe=620447B2"/>} 
       <button onClick={()=> this.setState({show:!this.state.show})}> show </button>
      </div>
    )
  }
}
