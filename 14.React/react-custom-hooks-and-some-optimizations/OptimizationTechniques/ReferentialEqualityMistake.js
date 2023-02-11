import React, { useEffect } from 'react'

function ReferentialEqualityMistake() {
    const [age, setAge] = React.useState(20)
    const[name, setName] = React.useState('John')
    const [darkMode, setDarkMode] = React.useState(false)

    const person = {age, name}


    useEffect(() => {
        console.log(person)
        // observation: while changing the name ,age the compeonent is re-rendered (correct)
        // but when we change the darkMode the component is re-rendered (wrong)
        // Reason: Referential Equality: the object is not the same as the previous object
        // the object person is recreated every time the component is re-rendered
        // so the object is not the same as the previous object
        /**
         * Example:
         * let a = {name: 'John', age: 20}
         * let b = {name: 'John', age: 20}
         * a === b // false
         * {} === {} // false
         * let c = a
         * a === c // true
         */
    }, [person])

    // Solution
     const person1 = React.useMemo(() => ({age, name}), [age, name])
    /**
     * useMemo is used to memoize the value of the object
     * so the object is not recreated every time the component is re-rendered
     * Person1 is only going to be recreated when the age or name changes
     */
    
  return (
    <div style={{background: darkMode? '#333' : '#fff' }}>
        Age: 
        <input type="number" value={age} onChange={e => setAge(e.target.value)} />
        <br />
        Name:
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        <br />
        Dark Mode: 
        <input type="checkbox" checked={darkMode} onChange={e => setDarkMode(e.target.checked)} />
    </div>
  )
}

export default ReferentialEqualityMistake