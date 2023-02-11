import React, { useEffect } from 'react'

/**
 * what is UseMemo?
 * UseMemo is a hook that is used to memorize the value of a function
 * so that the function is not called every time the component is re-rendered
 * 
 * What happend if we use UseMemo everywhere ?
 * It will increase the appllication memory size because the value of the function is memorized
 * 
 * So when to use UseMemo?
 * Use UseMemo when the function is slow and the value of the function is not changing frequently
 */

function useMemoExample() {
    const [number, setNumber] = React.useState(0)
    const [dark, setDark] = React.useState(false)
    // problem: the slowFunction is called every time the component is re-rendered
    // Thus making the application slow
    const doubleNumber = slowFunction(number)

    // Solution: useMemo
    const doubleNumber1 = React.useMemo(() => {
        return slowFunction(number)
    }, [number])
    // now the slowFunction is called only when the number changes

    const themeStyles = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }

    useEffect(() => {
        console.log('Theme Changed')
    }, [themeStyles])

  return (
    <div>
        <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
        <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
        <div style={themeStyles}>{doubleNumber}</div>
    </div>
  )
}

const slowFunction = (num) => {
    console.log('Calling Slow Function')
    for(let i = 0; i <= 1000000000; i++) {}
    return num * 2
}


export default useMemoExample