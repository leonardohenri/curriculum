
import './styles.css';
import {GridOne} from '../../components/primary'
import { GridTwo } from '../../components/secundary';
import { GridThree } from '../../components/third';
import { GridFour } from '../../components/four';


export const Home = () =>{
return (<div className='page'>
  <div className='styles-grid'>
  <GridOne />
  <GridTwo />
  <GridThree />
  <GridFour/>
  </div>
  </div>
);
}
