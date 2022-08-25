
import './styles.css';
import {GridOne} from '../../components/primary'
import { GridTwo } from '../../components/secundary';
import { GridThree } from '../../components/third';
import { GridFour } from '../../components/four';


export const Home = () =>{
return (<div className='page'>
  <GridOne />
  <GridTwo />
  <GridThree />
  <GridFour/>
  </div>
);
}
