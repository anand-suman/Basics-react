/*
  dekho dost baat ye hai ki ye jo file creat hua hai react app se,
  ye jo hai matlab jada tym leta hai creat karne me or yehi mai methoed hai creat karne ka but or v easy methord hai file creat karne ka but uss me kuchh restruction hai creat karte tym ka 
  idhar koi restrciton nhi hai tu samja 

  jaise for example:-

  yha jo file creat hua usa nam . js kar ke rakh diy hu but vite me nhi chale ga ye udhar .jsx hona chahiye samjh tu

  or 1st latter captal hi hon chahiye
  okay 

  baki tu khud dekh le

*/

import React from 'react'; // idhar hum log react packes ko import kara hai
import ReactDOM from 'react-dom/client'; // react-dom web pe run karne ke liye resposible hota hai

import App from './App'; // idhar humne jo App banaya tha usko import kara hai
import KyaBhai from './Try'; // idhar try ko import kara hai


const root = ReactDOM.createRoot(document.getElementById('root'));// react va pana khud ka dom try bana tha hai issliye ReactDom.creatRoot
root.render( // ye randar karwane ke liye
  <React.StrictMode>
    <KyaBhai />
    <App />
    
  </React.StrictMode>
);

