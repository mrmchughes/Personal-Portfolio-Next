import Head from 'next/head';
import NavBar from '../../components/Navbar';
import Intro from '../../components/Intro';
import Toolbox from '../../components/Toolbox';
import PreviousWork from '../../components/Previous_Work';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <div>
      <NavBar />

      <Intro />

      <Toolbox />

      <PreviousWork />
  
      <Footer />
    </div>  
  )
}
