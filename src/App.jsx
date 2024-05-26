
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <div className='app'>
      <h1 className='app__title'>Hola Mundo!</h1>
      <div className='app__container'>
        <Card
          color='dodgerblue'
          text='Primary'
        />
        <Card
          color='green'
          text='Secondary'
        />
        <Card
        color='red'
        text='Danger'
        />
      </div>
      
    </div>
  )
}

export default App
