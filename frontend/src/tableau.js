import React, { Component } from 'react';
import './App.css';

class Tableau extends React.Component{
    constructor(props){
        super(props);
        this.state={
            artiste1:{
                name:"Kid Cudi",
                morceaux:"Mr Rager",
                nb_ecoute:6300,
                genre: "Rap",
                img:"mrrager_kidcudi.jpg"
            },
            artiste2:{
                name:"France Gall",
                morceaux:"Il jouait du piano debout",
                nb_ecoute:5200,
                genre: "Pop",
                img:"franceg_p.jpg"
            },
            artiste3:{
                name:"Rihanna",
                morceaux:"Rude Boy",
                nb_ecoute:4800,
                genre: "Rnb",
                img:"rudeboy_rihanna.jpg"
            },
            artiste4:{
                name:"Damso",
                morceaux:"Ipséité",
                nb_ecoute:4200,
                genre: "Rap",
                img:"ispeite_damso.jpg"
            },
            artiste5:{
                name:"Ray Charles",
                morceaux:"Hit That Road Jack",
                nb_ecoute:3800,
                genre: "Jazz",
                img:"raycharles_hit.jpg"
            }
        };
    }



    render(){
        return(
            <div className="tableau_cont">
                  <h4 className="text-center">
                        Artistes de la semaine
                    </h4> <br></br>
                <table className="table table-bordered table-striped table-sm table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th>#</th>
                        <th>Nom</th>
                        <th>Morceau</th>
                        <th>Nombre d'écoute</th>
                        <th>Genre</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                    <td className="text-center">1</td>
                    <td className="text-center">{this.state.artiste1.name}</td>
                    <td className="text-center">{this.state.artiste1.morceaux}</td>
                    <td className="text-center">{this.state.artiste1.nb_ecoute}</td>
                    <td className="text-center">{this.state.artiste1.genre}</td>
                    <td>
                        <img src={this.state.artiste1.img} width="70" height="70"></img>
                    </td>
                    </tr>

                    <tr>
                    <td className="text-center">2</td>
                    <td className="text-center">{this.state.artiste2.name}</td>
                    <td className="text-center">{this.state.artiste2.morceaux}</td>
                    <td className="text-center">{this.state.artiste2.nb_ecoute}</td>
                    <td className="text-center">{this.state.artiste2.genre}</td>
                    <td>
                        <img src={this.state.artiste2.img} width="70" height="70"></img>
                    </td>
                    </tr>

                    <tr>
                    <td className="text-center">3</td>
                    <td className="text-center">{this.state.artiste3.name}</td>
                    <td className="text-center">{this.state.artiste3.morceaux}</td>
                    <td className="text-center">{this.state.artiste3.nb_ecoute}</td>
                    <td className="text-center">{this.state.artiste3.genre}</td>
                    <td>
                        <img src={this.state.artiste3.img} width="70" height="70"></img>
                    </td>
                    </tr>

                    <tr>
                    <td className="text-center">4</td>
                    <td className="text-center">{this.state.artiste4.name}</td>
                    <td className="text-center">{this.state.artiste4.morceaux}</td>
                    <td className="text-center">{this.state.artiste4.nb_ecoute}</td>
                    <td className="text-center">{this.state.artiste4.genre}</td>
                    <td>
                        <img src={this.state.artiste4.img} width="70" height="70"></img>
                    </td>
                    </tr>

                    <tr>
                    <td className="text-center">5</td>
                    <td className="text-center">{this.state.artiste5.name}</td>
                    <td className="text-center">{this.state.artiste5.morceaux}</td>
                    <td className="text-center">{this.state.artiste5.nb_ecoute}</td>
                    <td className="text-center">{this.state.artiste5.genre}</td>
                    <td>
                        <img src={this.state.artiste5.img} width="70" height="70"></img>
                    </td>
                    </tr>

                </tbody>

                </table>
            </div>

        )
    }
}

export default Tableau;