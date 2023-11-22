import React from 'react'
import Card from './Card'

const ExerciseList = ({exercises}) => (
    <div>
        { exercises.map((exercise) => (
            <Card 
                key={exercise.id}
                title={exercise.title}
                description={exercise.description}
                img={exercise.img}
                leftColor={exercise.leftColor}
                rightColor={exercise.rightColor}
            />
        ))}
    </div>    
)

/* function ExerciseList(props) {
    return(
        props.exercise.map((exercise) => (<Card 
            key={exercise.id}
            title={exercise.title}
            description={exercise.description}
            img={exercise.img}
            leftColor={exercise.leftColor}
            rightColor={exercise.rightColor}
        />))
    )
}
 */
export default ExerciseList