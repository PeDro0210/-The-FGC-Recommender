import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const images = [
    {
        name: "Kazuya",
        image_url: "https://media.discordapp.net/attachments/1239767599986905149/1240321229110378536/Kazuya_1.png?ex=664b68a9&is=664a1729&hm=231ce88c718d40f3961853e91ae2a618f317b1caef676b7b6426dd529fd18ad6&=&format=webp&quality=lossless"
    },
    {
        name: "Heihachi",
        image_url: "https://media.discordapp.net/attachments/1239767599986905149/1240319142851248179/Heihachi.jpg?ex=664b66b7&is=664a1537&hm=ac290febea7a43901f5e4a7c93976283182aacf352886640178b735e0a49e3e7&=&format=webp"
    }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App imageList={images} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
