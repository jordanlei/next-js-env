import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/standard.css'

const titleStyle= {
    textAlign: 'center', 
    height: '50vh',
    backgroundImage: 'linear-gradient(rgb(194, 202, 221),  #434d66)',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }

const spanStyle= {
paddingTop: "20vh"
}
  

const SimpleTitle = props => (
  <div style= {titleStyle}>
    <div style= {spanStyle}>
      {props.children}
    </div>
  </div>
)

export default SimpleTitle