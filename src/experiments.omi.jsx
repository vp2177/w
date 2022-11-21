import  {h, WeElement, defineElement , tag} from "omi";


export class OmiCounter extends WeElement {
    n = 0
    _handleAdd = ( ) => {
        this.n ++;
        this.update()
    }

    render(props) {
        
        return <var  onClick={this._handleAdd}>
            {this.n}
        </var>;

    }
}
defineElement("omi-counter",OmiCounter,)
