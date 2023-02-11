import React from 'react'

function UnesseryUseEffect() {
    const [ firstName, setFirstName ] = React.useState('')
    const [ lastName, setLastName ] = React.useState('')
    const [fullName, setFullName] = React.useState('')

    // wrong : This is an unessery use of UseEffect because it is reduldant causing another re-rendering
    React.useEffect(() => {
        setFullName(`${firstName} ${lastName}`)
    }, [firstName, lastName])

    // since the whole application is doing a full re-render we can store it in a variable
    const FullName = `${firstName} ${lastName}`


    /**
     * You don't always need useEffect to change or update some value.
     */

  return (
    <div>
        <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
        <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
        <h1>{fullName}</h1>
    </div>
  )
}

export default UnesseryUseEffect