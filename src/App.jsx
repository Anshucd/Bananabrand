import React,{useEffect,useState} from 'react';
import Navbar from './components/Navbar';
import BrandMarquee from './components/BrandMarquee';
import CallbackForm from './components/CallbackForm';
import Footer from './components/Footer';
import MeetTheTeam from './components/MeetTheTeam';
import {Hero,Services,Why,Work,FinalCta} from './components/Sections';
import {brands,services,reasons,projects} from './data/content';
import './styles/global.css';

export default function App(){
 const [menuOpen,setMenuOpen]=useState(false);
 const [path,setPath]=useState(window.location.pathname);
 useEffect(()=>{
   const onPop=()=>setPath(window.location.pathname);
   window.addEventListener('popstate',onPop);
   document.body.classList.toggle('menu-open',menuOpen);
   return()=>{window.removeEventListener('popstate',onPop);document.body.classList.remove('menu-open')};
 },[menuOpen]);
 const navigate=(url)=>{
   if(url.startsWith('/')){
     window.history.pushState({},'',url);
     setPath(window.location.pathname);
     const hash=url.includes('#') ? url.slice(url.indexOf('#')) : '';
     setTimeout(()=>{
       if(hash){ document.querySelector(hash)?.scrollIntoView({behavior:'smooth',block:'start'}); }
       else window.scrollTo({top:0,behavior:'smooth'});
     },40);
   }
   setMenuOpen(false);
 };
 if(path==='/meet-the-team') return <div className="site"><Navbar open={menuOpen} setOpen={setMenuOpen} path={path} navigate={navigate}/><main><MeetTheTeam/></main><Footer/></div>;
 return <div className="site"><Navbar open={menuOpen} setOpen={setMenuOpen} path={path} navigate={navigate}/><main><Hero/><Services services={services}/><BrandMarquee brands={brands}/><Why reasons={reasons}/><Work projects={projects}/><CallbackForm/><FinalCta/></main><Footer/></div>;
}
