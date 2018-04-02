import React from 'react'
class ConceptoList extends React.Component {
    
    render() { 
      if( this.props.listado.length>0){
      return (
        <div>     
        {
            this.props.listado.map((concepto) => {
              return <li><div key={concepto.idConcepto}>
              {concepto.a+ '-' +concepto.b}
              <input
                className="clase_concepto"
                name={concepto.idConcepto}
                type="checkbox" />
            </div></li>
            })
          }
        </div>
      )}
      else{
        return <p className="text-center">Cargando conceptos</p>
      }
    }
  }
  export default ConceptoList;