import './App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Form from './Form'
import { motion } from "framer-motion";

/* SIDE BAR COMPONENT STAAAAAARTS */


/*class SideBar extends React.Component {
  render() {
    return (
    )
  }
}*/

/*function Note({ name }) {
  if (haveNotes) {
    return <li id="note">
            <button className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               HERE SHOULD BE THE NOTE NAME
            </button>
         </li> ;
  }
  return <h3 className="noSaved">You have no saved notes</h3>;   if theres no saaved notes: 
} */




/* SIDE BAR COMPONENT EEEEEEEEEENDS */


/* TOOOOOOL BOX COMPONENT STARTS */
class ToolBar extends React.Component{
  render() {
    return(
     
      <div className="tool-box rounded-full">
        <ul>
          <li>
            <button id="highlight" onClick={highlight}>
              <i className="icon lni lni-highlight-alt rounded-full"></i>
            </button>
            
          </li>
          <li>
            <button id="save">
              <i className="icon lni lni-bookmark rounded-full"></i>
            </button>
          </li>
          <li>
            <button id="delete">
             <i className="icon lni lni-trash-can rounded-full"></i>
            </button>
          </li>
          <li>
            <button id="export">
             <i className="icon lni lni-save rounded-full"></i>
            </button>
          </li>
          <li>
            <button id="settings" onClick={CloseSettings}>
              <i className="icon lni lni-user rounded-full"></i>
            </button>
          </li>
        </ul>
      </div>
      
    )
  }
}



      /* HIGHLIGHTER FUNCTION */
      function highlight(){
          if (document.getSelection)
            //let highlightText = document.getSelection();
            highlightText.style.textDecoration = "underline";
            
      return document.getSelection();
          }

/* TOOOOOOL BOX COMPONENT EEEENDS */

function CloseSettings(){
  const close = document.getElementById("userSettings")
  if(close.style.display == "none"){
    close.style.display = "flex"
  } else {
    close.style.display = "none"
  }
  
}



export default function Dashboard() {
  
  return (
      <html>
        <head>
        </head>
        <body>
          <ToolBar/>
          <div id="userSettings" className="rounded-lg drop-shadow-xl">
            <h2>Settings</h2>
            <i className="close lni lni-close" onClick={CloseSettings}></i>
            <div class="setting-quest">
              <p className="mr-5 ml-2"><b>Reading</b></p>
              <input type="radio" value="bionic" name="reading" id="bionic" />
              <label htmlFor="bionic" className="border-2 border-black rounded-full">
                <b>Bio</b>nic
              </label>

              <input type="radio" value="nonbionic" name="reading" id="nobionic" />
              <label htmlFor="nobionic" className="border-2 border-black rounded-full">
                Standard
              </label>
            </div>
           
            
          </div>

        </body>
      </html >
  );
}



