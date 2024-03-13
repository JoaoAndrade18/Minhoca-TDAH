import { useState } from 'react'
import AppAside from './components/App-aside'
import AppHeader from './components/App-header'
import AppFooter from './components/App-footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-yellow-900 min-h-screen m-5 p-1'>
      <AppHeader/>
      <AppAside/>
      <AppFooter/>
    </div>
  );
} 

export default App;
