import React from "react";
import circlesImg from "../images/circles.png";
import "./styles/Card.css";
import EmptyImg from '../images/empty.png'

const Card = ({ title, description, img, leftColor, rightColor }) => (
    
  <div className="card mx-auto Fitness-Card"
  style={{
      backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor || '#56CCF2'}  , ${rightColor|| '#2F80ED'}) `
  }}
  >
      <div className="card-body">
          <div className="row center">
              <div className="col-6">
                  <img src={img || EmptyImg} className="float-right" alt="exercise"/>
              </div> 
              <div className="col-6 Fitness-Card-Info">
                  <h1>{title}</h1>
                  <p>{description}</p>
              </div>
          </div>
      </div>
  </div>
)

//class Card extends React.Component {
//  render() {
//    const { title, description, img, leftColor, rightColor } = this.props;
//    return (
//      <div
//        className="card mx-auto Fitness-Card"
//        style={{
//          backgroundImage: `url(${circlesImg}),  linear-gradient(to right, ${leftColor|| '#56CCF2'}, ${rightColor||'#2F80ED'})`,
//        }}
//      >
//        <div className="card-body">
//          <div className="row center">
//            <div className="col-6">
//              {/* agregar el una opcion si la imagen no existe */}
//              <img src={img || EmptyImg} className="img-card" alt="exercise" />
//            </div>
//            <div className="col-6 Fitness-Card-Info">
//              {/* Una forma de insertar atributos mediante Destructuring */}
//              <h1>{title}</h1>
//              {/* Mediantes props directos */}
//              {/* <p>{this.props.description}</p> */}
//              <p>{description}</p>
//            </div>
//          </div>
//        </div>
//      </div>
//    );
//  }
//  /* constructor(props)
//    { */
//  /*  super(props) */
//  /* Estdos que estaran cambiando el en tiempo */
//  /* this.state =
//        { */
//  /* image: 'https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/bulbasaur.png?alt=media&token=567caf19-af47-414e-a9d4-3854ab24c7dc' */
//  /*  } */
//  /*  } */
//
//  /*  componentDidMount()
//    {
//        setTimeout(()=>{
//            this.setState({ */
//  /* image: 'https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06' */
//  /*    }) */
//  /* Esto no se hace
//            this.state.img=""; 
//            */
//  /*       },5000);
//    }
// */
//}

export default Card;
