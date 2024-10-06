import React from "react";
import {Link} from "react-router-dom";


 function Navlinks (props) {
  
    const LoggedIn = localStorage.getItem('LoggedIn')
    const Role = localStorage.getItem('Role')

    
    const Links = [
        {name: "Home",
         link : "/"
        },
        
        LoggedIn === null ?
        {name: "Login",
         link : "/Login"
        }
         : 
        {
            name:"UserProfile",
            link:"/userprofile"
        } ,
        
        LoggedIn === null ?
        {name: "SignUp",
         link : "/signin"
        }
         : 
        {
            name:"",
            link:""
        } ,
       
        Role === "Admin" ?
        {name: "Dashboard",
         link : "/Dashboard"
        }
         : 
        {
            name:"",
            link:""
        } ,
       

        
       
    ]
    return(
        <>
       
            {
                Links.map((link,i) => (
                     
                     <div key={i}>
                          <li key={i} className={`"font-semibold font-montserat md:hover:border-b-2 hover:border-[#182c25] hover:border-b-2   pb-1 sm:pb-2  tracking-wide
                           ${props.alternative ? "" :"" }`} onClick={props.handleClick} >
                       <Link to={link.link} onClick={props.handleClick} >{link.name} </Link>
                          </li>

                    </div>

                    
                ))
            }
             
        </> 
    )
 }

  export default Navlinks