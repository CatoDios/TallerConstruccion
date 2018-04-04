import React from 'react'


class Alumno extends React.Component {
  render() {
      return (
        <div className="Alumno">
        <h4 className="center ">Datos personales</h4>
        <div className="center datos">
        <div>
        <i className="material-icons">account_circle</i>
        </div>
        <b>Nombre y Apellidos:</b>
        <div className="negro">
        {this.props.alumno.nombre 
         + ' '+ this.props.alumno.apellido_pat +' '+ this.props.alumno.apellido_mat}
         </div>
         </div>
         
        <div className="center datos">
        <div>
         <i className="material-icons">fingerprint</i>
        </div>
        <b>Código:</b>
        <div className="negro">
        {this.props.alumno.idAlumno}
        </div></div>
        </div>

      )
  }
}

export default Alumno;
