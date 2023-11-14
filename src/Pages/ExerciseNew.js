import React from "react";
import ExerciseForm from "../Components/ExerciseForm";
import Card from "../Components/Card";

class ExerciseNew extends React.Component {
  state = {
    form: {
      title: "",
      description: "",
      //https://img.freepik.com/vector-gratis/ilustracion-plana-dia-nacional-deporte_23-2149009863.jpg?w=740&t=st=1699994914~exp=1699995514~hmac=0b6f788a0120eabed4a76a6cf5e118334a5d28b3c575b82c80805be415eec0d0
      img: "",
      leftColor: "",
      rightColor: "",
    },
  };
  handleSubmit = (e) => {
    e.preventDefault(); // Eliminar la reactualizacion
    console.log(this.state) 
  };

  handleChange = (e) => {
    //simplificado
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
    /* console.log(e.target.name+':'+e.target.value)
    //Crea un objeto
    let partialState = {}
    // teniendo los atributos con el nombre  y sus valor
    partialState[e.target.name] = e.target.value
    //apuntas hacia el estado
    this.setState(partialState) */
  };

  render() {
    return (
      <div className="ExerciseNew_Lateral_Spaces row">
        <div className="col-sm ExerciseNew_Card_Space">
          <Card {...this.state.form} />
        </div>
        <div className="col-sm ExerciseNew_Form_Space">
          <ExerciseForm
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            form={this.state.form}
          />
        </div>
      </div>
    );
  }
}

export default ExerciseNew;
