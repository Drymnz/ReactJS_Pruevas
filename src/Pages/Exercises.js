import React from 'react'
import ExerciseList from '../Components/ExerciseList'
import AddButtom from '../Components/AddButton'
import Welcome from '../Components/Welcome'

class Exercises extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          title: "Technique Guides",
          description: "Learn amazing street workout and calisthenics",
          img: "",
          leftColor: "#A74CF2",
          rightColor: "#617BFB",
        },
        {
          id: 2,
          title: "Skills Training",
          description: "Learn the secrets of bodyweight techniques",
          img: "",
          leftColor: "#17EAD9",
          rightColor: "#6078EA",
        },
        {
          id: 3,
          title: "Strength Training",
          description: "Train anytime, everywere and become a superhero!",
          img: "",
          leftColor: "#FAD961",
          rightColor: "#F76B1C",
        },
      ],
    };
  }
  render(){
    return(
        <div>
            <Welcome 
                username="Raúl"
            />
            <ExerciseList 
                exercises={this.state.data}
            />
            <AddButtom />
        </div>
    )
}
}

export default Exercises;
