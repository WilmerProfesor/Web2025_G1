import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import CardPersonal from './Components/CardPersonal/CardPersonal'
import AppleIcon from '@mui/icons-material/Apple';

const App = () => {

  const PI = 3.1416;
  const info = [
    {
      img: "https://estaticos.elcolombiano.com/binrepository/846x565/33c0/780d565/none/11101/UJXN/dambin-98_46143042_20240925181621.jpg",
      name: "uno",
      text_img: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque."
    },
    {
      img: "https://lh6.googleusercontent.com/proxy/4u-L8sKA0PWGDkmWGAZ58pnIN0evmTyegc-34NGKw5zRWH2-EjvYfPPm-cwFGW21q4bkwZomzfFz5TTJpiCxZP232GMFwLXMZtkrDRSbesiFDylzoqdXfRQrr31iKYL30w",
      name: "dos",
      text_img: "xxxxx xxxxxx xxxxxx xxxxxx xxxxx."
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC9QAMTdzf8lbM8G2--17eVTeMMYSvPAUt3A&s",
      name: "tres",
      text_img: "Yyyyy yyy yyyyyy yyyyyyy yyyyy."
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC9QAMTdzf8lbM8G2--17eVTeMMYSvPAUt3A&s",
      name: "cuatro",
      text_img: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque."
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC9QAMTdzf8lbM8G2--17eVTeMMYSvPAUt3A&s",
      name: "cinco",
      text_img: "xxxxx xxxxxx xxxxxx xxxxxx xxxxx."
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC9QAMTdzf8lbM8G2--17eVTeMMYSvPAUt3A&s",
      name: "seis",
      text_img: "xzsdsdfwfg regtty rty rty rtutyu tru utyrty ."
    },
  ];

  return (
    <>
      <Header />
      <div className='container'>
      <AppleIcon 
        sx={{fontSize:"5rem"}}
      />
      <h1>Hola mundo {PI}</h1>
        <p style={{ marginBottom: "20px" }}>Esta es mi App v 0.0.001</p>
      </div>
      <div id='App-container-cards'>
        {info.map(
          (pedro) => {
            return (
              <CardPersonal image={pedro.img} name={pedro.name} text={pedro.text_img} />
            )
  
          }          
        )}        
      </div>
    </>
  )
}

export default App
