import React from "react";
import exerciseImg from '../Imagenes/dino.jpg'
import { Style } from "./styles/Card.css";

class Card extends React.Component {

    constructor(props)
    {
        super(props)
        /* Estdos que estaran cambiando el en tiempo */
        this.state =
        {
            /* image: 'https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/bulbasaur.png?alt=media&token=567caf19-af47-414e-a9d4-3854ab24c7dc' */
        }
    }
    
    componentDidMount()
    {
        setTimeout(()=>{
            this.setState({
                /* image: 'https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06' */
            })
            /* Esto no se hace
            this.state.img=""; 
            */
        },5000);
    }

    render(){
        const {title,description,img,letColor,reghtColor} = this.props
        return (
            <div className="card mx-auto Fitness-Card">
                <div className="card-body">
                    <div className="row center">
                        <div style={{background:letColor}} className="col-6">
                            <img src={exerciseImg} className="profile_picture float-right"/>
                        </div> 
                        <div style={{background:reghtColor}} className="col-6 Fitness-Card-Info">
                            {/* Una forma de insertar atributos mediante Destructuring */}
                            <h1>{title}</h1>
                            {/* Mediantes props directos */}
                            <p>{this.props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card