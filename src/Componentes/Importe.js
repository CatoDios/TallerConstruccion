import React from 'react'

class Importe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.CalcularImporte = this.CalcularImporte.bind(this);
      }
     CalcularImporte(){
        let pagos= this.props.pagos;
        let importe= 0;
        for (var indice in pagos) {
            importe = importe +pagos[indice].importe;
        }
        this.setState({ value: importe });
     }
      
      render() {
        return(
          <div>
            <button className="importe waves-effect waves-light btn " onClick={this.CalcularImporte}>Importe<i className="large material-icons left">attach_money</i></button>
            <input value={this.state.value} type="text" placeholder="Importe" />
          </div>
        )
      }
}
export default Importe;