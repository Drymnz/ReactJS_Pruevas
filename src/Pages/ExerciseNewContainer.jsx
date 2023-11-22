import React, { useState } from 'react'
import Loading from '../Components/Loading'
import FatalError from './500'
import ExerciseNew from './ExerciseNew'

const ExerciseNewContainer = ({history}) => {
  const [ form, setForm ] = useState({title: '',
                              description: '',
                              img: '',
                              leftColor: '',
                              rightColor: ''
                          })
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState(null)

  const handleChange = e => {
      setForm({
          ...form,
          [e.target.name]: e.target.value
      })
  }

  const handleSubmit = async e => {
      setLoading(true)
      e.preventDefault()
      try {
          let config = {
              method: 'POST',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(form)
          }
         // await fetch(`${url}/exercises`, config)
          setLoading(false)
          history.push('/exercise')
      } catch (error) {
          setLoading(false)
          setError(error)
      }
  }

  if(loading)
      return <Loading />

  if(error)
      return <FatalError />

  return <ExerciseNew 
      form={form}
      onChange={handleChange}
      onSubmit={handleSubmit}
  />
}

/* 
class ExerciseNewContainer extends React.Component {
  
  state = {
    form: {
      title: "",
      description: "",
      //https://img.freepik.com/vector-gratis/ilustracion-plana-dia-nacional-deporte_23-2149009863.jpg?w=740&t=st=1699994914~exp=1699995514~hmac=0b6f788a0120eabed4a76a6cf5e118334a5d28b3c575b82c80805be415eec0d0
      img: "",
      leftColor: "",
      rightColor: "",
    },
    loading: false,
    error: null,
  };

  handleSubmit = async (e) => {
    e.preventDefault(); // Eliminar la reactualizacion
    this.setState({ loading: true });
    try {
      // mandar datos de metodo post
      let config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state.form),
      };

      // nesesario tener el async
      // let res = await fetch('',config)
      //let json = await res.json()
      //console.log(json) 
      this.setState({ loading: false });
      console.log(config.body);
      //por el uso de react router
      //regresar al anterior
      //this.props.history.push('/');
      // return this.props.history.push('/');
      // return <Link to="/"/> 
      // const location = useLocation();
      //location.push('/')
      let navegar = useNavigate();
      navegar("/");
    } catch (error) {
      console.log(error);
      this.setState({ loading: false, error });
    }
  };

  handleChange = (e) => {
    //simplificado
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
    // console.log(e.target.name+':'+e.target.value)
    //Crea un objeto
    let partialState = {}
    // teniendo los atributos con el nombre  y sus valor
    partialState[e.target.name] = e.target.value
    //apuntas hacia el estado
    //this.setState(partialState)
  };

  render() {
    return (
      
      <React.Fragment>
        <ExerciseNew
          form={this.state.form}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
      </React.Fragment>
    );
  }
} */

export default ExerciseNewContainer;
