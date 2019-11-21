import React, { Component } from 'react';
import './App.css';

class Tableau extends React.Component{
    constructor(props){
        super(props);
        this.state={
            artiste1:{
                name:"Kid Cudi",
                morceaux:"Mr Rager",
                nb_ecoute:1200,
                genre: "Rap",
                img:"mrrager_kidcudi"
            },
            artiste2:{
                name:"Kid Cudi",
                morceaux:"Mr Rager",
                nb_ecoute:1200,
                genre: "Rap",
                img:"mrrager_kidcudi"
            },
            artiste3:{
                name:"Kid Cudi",
                morceaux:"Mr Rager",
                nb_ecoute:1200,
                genre: "Rap",
                img:"mrrager_kidcudi"
            },
            artiste4:{
                name:"Kid Cudi",
                morceaux:"Mr Rager",
                nb_ecoute:1200,
                genre: "Rap",
                img:"mrrager_kidcudi"
            },
            artiste5:{
                name:"Kid Cudi",
                morceaux:"Mr Rager",
                nb_ecoute:1200,
                genre: "Rap",
                img:"mrrager_kidcudi"
            }
        };
    }



    render(){
        return(
            <div className="tableau_cont">
                <caption>
                    <h4 className="text-center">
                        Artistes de la semaine
                    </h4>
                </caption>
                <p>Coucou</p>
            </div>

        )
    }
}

export default Tableau;