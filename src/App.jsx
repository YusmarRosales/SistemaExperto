import React from 'react'
import './App.css'
import { useState } from 'react';
import { Button } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function App() {

  //hook
  const [btnstate, setBtnState] = useState(false);

  const handleClickBtn = () => {
    console.log('click btn');

    setBtnState(true);
  }

  if (btnstate) {
    setTimeout(() => {
      window.location.replace('/registry')
    }, 1000)
  }

  return (
    <>
      <div className='App'>
        <header className='App-header'>
          <img src='intamujer.png' className="logo" alt="logo" />

          <h4>
            El siguiente sistema es una herramienta diseñada para brindar apoyo
            y orientación <br />
            psicologica y/o legal. El mismo utiliza el conocimiento y la experiencia de expertos <br />
            en psicología y derecho para ofrecer asesoramiento y recomendaciones.<br />
            De igual manera, puede ayudar a comprender y resolver conflictos. Por otro lado, <br />
            este sistema puede realizar evaluaciones basadas en respuestas proporcionadas por el usuario y ofrecer consejos.
          </h4>

          <Button
            onClick={handleClickBtn}
            variant='contained'
            color='primary'
            size='large'
          >
            <span id='text-btn'>
              {
                btnstate == false
                  ? 'CONTINUAR'
                  : <Box sx={{ display: 'flex' }}>
                    <CircularProgress color="inherit" />
                  </Box>
              }
            </span>
          </Button>

        </header>
      </div>
    </>
  )
}

export default App