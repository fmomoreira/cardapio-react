import Navbar from '../Navbar';
import styles from './PaginaPadrao.module.css';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';

export default function PaginaPadrao() {
  return (
    <div>
      <Navbar lassName={styles.navbar_color}/>
      <div >
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}