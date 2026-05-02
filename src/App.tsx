import { useState } from 'react'
import './App.css'

function App() {
  const [result, setResult] = useState<number>(0)
  const [broj1, setBroj1] = useState<number>(0)
  const [broj2, setBroj2] = useState<number>(0)
  const calculate = (z?:string) => {
    if(z === '+')
    {
      setResult(broj1 + broj2);
    }
    else if( z === '-')
    {
      setResult(broj1 - broj2);
    }
    else if( z === '*')
    {
      setResult(broj1 * broj2);
    }
    else if( z === '/')
    {
      setResult(broj1 / broj2);
    }
  };

  return (
    <>
    <div className='wrapper'>
      <table>
        <thead>
        <tr>
          <th colSpan={4}>Kalkulator</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td colSpan={2}>
            <input type='text' value={broj1} onChange={(e) => {
              const value = e.target.value
              if (value ==='') {
                setBroj1(0)} 
                else {
                  const broj = Number(value)
                  setBroj1(broj)
                }
              }}></input>
          </td>
          <td colSpan={2}>
            <input type='textbox' value={broj2} onChange={(e) => {
              const value = e.target.value
              if (value ==='') {
                setBroj2(0)
              } 
              else {
                  const broj = Number(value)
                  setBroj2(broj)
              }
              }}></input>
          </td>
        </tr>
        <tr>
          <td>
            <button onClick={() => calculate('+')}>+</button>
          </td>
          <td>
            <button onClick={() => calculate('-')}>-</button>
          </td>
          <td>
            <button onClick={() => calculate('*')}>&times;</button>
          </td>
          <td>
            <button onClick={() => calculate('/')}>&divide;</button>
          </td>
        </tr>
        <tr>
          <td colSpan={4}>
            <label className='result'>Rezultat je: {result}</label>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    </>
  )
}

export default App
