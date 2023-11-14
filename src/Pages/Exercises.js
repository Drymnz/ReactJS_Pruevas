import React from "react";
import ExerciseList from "../Components/ExerciseList";
import AddButtom from "../Components/AddButton";
import Welcome from "../Components/Welcome";
import Loading from "../Components/Loading";

class Exercises extends React.Component {
  /* constructor(props) {
    super(props); */
  state = {
    data: [
      {
        id: 1,
        title: "Technique Guides",
        description: "Learn amazing street workout and calisthenics",
        img: "https://img.freepik.com/vector-gratis/ilustracion-plana-dia-nacional-deporte_23-2149009863.jpg?w=740&t=st=1699994591~exp=1699995191~hmac=f4ff3d2af45b54bc5e6e6fb2fb4b43f3bbf4c464f2193de0b9331e30781fb37d",
        leftColor: "#A74CF2",
        rightColor: "#617BFB",
      },
      {
        id: 2,
        title: "Skills Training",
        description: "Learn the secrets of bodyweight techniques",
        img: "https://img.freepik.com/vector-gratis/ilustracion-plana-dia-nacional-deporte_23-2149009864.jpg?w=740&t=st=1699994836~exp=1699995436~hmac=52bba5a914b47872f12b83b84ca1a27c8a3e825771214bb97e0f649b989a9792",
        leftColor: "#17EAD9",
        rightColor: "#6078EA",
      },
      {
        id: 3,
        title: "Strength Training",
        description: "Train anytime, everywere and become a superhero!",
        img: "https://img.freepik.com/vector-gratis/ilustracion-dia-deporte-nacional-degradado_23-2148991147.jpg?w=740&t=st=1699994838~exp=1699995438~hmac=612ccf08bb173a7b5f1cd597ad55cbcafd860cd264ffa5d0edc3340bf1195c50",
        leftColor: "#FAD961",
        rightColor: "#F76B1C",
      },
    ],
    loadgin: true,
    error: null,
  };

  /* //para la respuestas de un API
  //sincronizacion
  async componentDidMount() {
    await this.fetchExercises();
  }

  fetchExercises = async () => {
    try {
      //la peticion
      let res = await fetch("http://localhost:8000/api/exercises");
      //convertir a json
      let data = await res.json();

      this.setState({
        data,
        loading: false,
      });
    } catch (error) {
      this.setState({
        //control de error
        loading: false,
        error,
      });
    }
  };
 */
  render() {
    if (this.state.loadgin) {
      return (
        <div>
          <Welcome username="Benjamin" />
          <ExerciseList exercises={this.state.data} />
          <AddButtom />
        </div>
      );
    } else {
      return (
        <div>
          <Welcome username="Benjamin" />
          <Loading></Loading>;
          <AddButtom />
        </div>
      );
    }
  }
}

export default Exercises;
