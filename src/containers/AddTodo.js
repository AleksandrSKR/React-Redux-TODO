import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import './containers.css';

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input id='input' placeholder="Write your todo" ref={node => {
          input = node
        }} />
        <button id="button" type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo