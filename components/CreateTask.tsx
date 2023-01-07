import { SubmitHandler, useForm } from 'react-hook-form'
import { MdAdd } from 'react-icons/md'
import { useCreateTask } from 'queries'
import styled from 'styled-components'
import { useEffect } from 'react'

const InputGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
`

const Input = styled.input`
  background-color: white;
  border: 1px solid var(--color-black-300);
  font-size: xx-large;
  padding: 0.8rem 3rem 0.8rem 1rem;
  width: 100%;

  grid-column-start: 1;
  grid-row-start: 1;

  &::placeholder {
    color: var(--color-black-300);
  }
  &:focus {
    outline-color: var(--color-brand);
  }
`

const Submit = styled.button`
  background: none;
  border: none;
  padding: 0;
  width: 3rem;

  display: flex;
  align-items: center;
  justify-content: flex-center;

  grid-column-start: 1;
  grid-row-start: 1;
  justify-self: flex-end;

  &:not(:disabled) {
    color: var(--color-brand);
  }
  &:not(:disabled):hover {
    cursor: pointer;
  }
  &:disabled:hover {
    cursor: not-allowed;
  }
`

interface CreateTaskFormValues {
  text: string
}

const CreateTaskForm: React.FC = () => {
  const { mutateAsync: createTask } = useCreateTask()
  const {
    formState: { isValid },
    handleSubmit,
    register,
    reset,
    setFocus
  } = useForm<CreateTaskFormValues>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      text: ''
    }
  })

  const submitHandler: SubmitHandler<CreateTaskFormValues> = async data => {
    await createTask(data)
    reset()
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setFocus('text'), [])

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <InputGrid>
        <Input
          id='taskText'
          placeholder='My new task...'
          {...register('text', { required: true })}
        />
        <Submit aria-label='Create task' disabled={!isValid}>
          <MdAdd fontSize='xx-large' />
        </Submit>
      </InputGrid>
    </form>
  )
}

export default CreateTaskForm
