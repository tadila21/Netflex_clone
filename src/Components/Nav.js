import React,{useEffect,useState} from 'react'
import "../Components/Nav.css"
function Nav() {
  const[show, setShow]=useState(false) //always put the default state
  
  function changer(){
      if (window.scrollY>100) {

          setShow(true)
          
      } else {
          setShow(false)
      }
  }
  useEffect(()=>{
      window.addEventListener('scroll', changer)
      return () =>{
          window.removeEventListener('scroll', changer)
      };
  }, [])

return (
  <div className={`nav ${show && "nav_black"}`}>
     <img className='nav_logo' src='https://www.pinclipart.com/picdir/big/2-23236_transparent-netflix-logo-2018-clipart.png' alt='logo'></img>
     < img className='nav_avator' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='avator'></img>
  </div>
)
}
// function Nav (){
//     const [ show, Setshow ] = useState( false );
//     useEffect( () =>
//     {
//         window.addEventListener( "scroll", () =>
//         {
//             if ( window.scrollY > 100 )
//             {
//               Setshow( true );
//             } else Setshow( false )
//         } );
//         return () =>
//         {
//             window.removeEventListener( "scroll" );
//         };
//     },[])
//   return (
//     <div className={`nav ${show && "nav__black"}`}>
//       <img
//         className="nav_logo"
//         src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
//         alt="Netflix Logo"
//       />
//       <img
//         className="nav__avatar"
//         src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
//         alt="Avatar logo"
//       />
//     </div>
//   );
// }

export default Nav











