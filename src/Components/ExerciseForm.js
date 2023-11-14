import React from "react";

const ExerciseForm = ({ form , onSubmit ,onChange }) => {

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="title"
              name="title"
              onChange={onChange}
              //para que no ocupe dos espacios en memoria
              //Tiene que tener una variable Idealización
              value={form.title}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="description"
              name="description"
              onChange={onChange}
              //para que no ocupe dos espacios en memoria
              //Tiene que tener una variable idealizada
              value={form.description}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="img"
              name="img"
              onChange={onChange}
              //para que no ocupe dos espacios en memoria
              //Tiene que tener una variable Idealización
              value={form.img}
            />
          </div>
          <div className="form-row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="leftColor"
                name="leftColor"
                onChange={onChange}
                //para que no ocupe dos espacios en memoria
                //Tiene que tener una variable Idealización
                value={form.leftColor}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="rightColor"
                name="rightColor"
                onChange={onChange}
                //para que no ocupe dos espacios en memoria
                //Tiene que tener una variable Idealización
                value={form.rightColor}
              />
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

/* con  */
/*  handleClickOne = () => {
    console.log(this);
  }; */
/* la forma adecuada
  constructor(props) {
    super(props);
    this.handleClickOne = this.handleClickOne.bind(this);
  }
  handleClickOne() {
    console.log(this);
  } */
/* render() {
    return <button onClick={this.handleClickOne}>Enviar</button>;
  } */

export default ExerciseForm;
