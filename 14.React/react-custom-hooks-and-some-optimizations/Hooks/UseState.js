import React from 'react'

/**
 * What is UseState?
 *  - UseState is a hook that allows us to add state to functional components.
 * - UseState returns an array with two values.
 * - The first value is the current state.
 * - The second value is a function that allows us to update the state.
 * - UseState is asynchronous.
 * - It does not update the state immediately. The state is updated after the component is re-rendered.
 * - So, if we want to update the state based on the previous state, we should use the function version of UseState.
 * - UseState is used to get the value of the input field without re-rendering the component
 */

function UseStateExample() {
    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(firstName, lastName)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
            <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default UseStateExample