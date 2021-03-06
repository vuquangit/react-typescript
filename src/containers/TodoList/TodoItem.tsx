import React, { Component, FC, useState } from 'react'
import TodoTextInput from './TodoTextInput'
import { Todo } from '@/graphql/models/Todos'
import styled, { css } from 'styled-components'
import { ifProp } from 'styled-tools'

interface TotoItemWrapperProps {
  editing: boolean
}

interface LabelInputProps {
  completed: boolean
}

const TotoItemWrapper = styled('li')<TotoItemWrapperProps>`
  position: relative;
  font-size: 24px;
  border-bottom: 1px dashed #ededed;

  &:last-child {
    border-bottom: 0;
  }

  ${ifProp(
    'editing',
    css`
      border-bottom: 0;
      padding: 0;
    `
  )}
`

const LabelInput = styled('label')<LabelInputProps>`
  background-image: url(data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E);
  background-repeat: no-repeat;
  background-position: center left;

  word-break: break-all;
  padding: 15px 15px 15px 60px;
  display: block;
  line-height: 1.2;
  transition: color 0.4s;
  font-weight: 400;
  color: #bdf18e;

  ${ifProp(
    'completed',
    css`
      color: #cdcdcd;
      text-decoration: line-through;
    `
  )}
`

const InputView = styled('input')`
  height: 40px;
  background: none;
  opacity: 0;

  ext-align: center;
  width: 40px;
  // height: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  border: none;
  appearance: none;

  &:checked + ${LabelInput} {
    background-image: url(data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E);
  }
`

const ButtonRemove = styled('button')`
  display: none;
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  width: 40px;
  height: 40px;
  margin: auto 0;
  font-size: 30px;
  color: #cc9a9a;
  margin-bottom: 11px;
  transition: color 0.2s ease-out;
  background: transparent;
  border: 0;
  cursor: pointer;

  &:after {
    content: '×';
  }

  ${TotoItemWrapper}:hover & {
    display: block;
  }
`

type Props = {
  todo: Todo
  editTodo: (id: number, text: string) => any
  deleteTodo: (id: number) => any
  completeTodo: (id: number) => any
}

const TodoItem: FC<Props> = ({ todo, completeTodo, editTodo, deleteTodo }) => {
  const [editing, setEditing] = useState(false)

  const handleDoubleClick = () => setEditing(true)

  const handleSave = (id: number, text: string) => {
    if (text.length === 0) {
      deleteTodo(id)
    } else {
      editTodo(id, text)
    }

    setEditing(false)
  }

  return (
    <TotoItemWrapper editing={editing}>
      {editing ? (
        <TodoTextInput
          text={todo.text}
          editing={editing}
          onSave={(text: string) => handleSave(todo.id, text)}
        />
      ) : (
        <div className="view">
          <InputView
            className="toggle"
            type="checkbox"
            checked={todo.completed}
            onChange={() => {
              completeTodo(todo.id)
            }}
          />
          <LabelInput
            completed={todo.completed}
            onDoubleClick={handleDoubleClick}
          >
            {todo.text}
          </LabelInput>
          <ButtonRemove
            className="destroy"
            onClick={() => deleteTodo(todo.id)}
          />
        </div>
      )}
    </TotoItemWrapper>
  )
}

export default TodoItem
