import NoTasks from 'components/NoTasks'
import TaskItem from 'components/TaskItem'
import { useEmptyTrash, useGetTrashTasks } from 'queries'
import styled from 'styled-components'

const Modal = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  display: ${props => (props.isOpen ? 'block' : 'none')};
`

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background: rgba(0, 0, 0, 0.4);
`

const ModalBody = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 3;
  transform: translate(-50%, -50%);
  display: inline-block;
  width: 90%;
  max-width: 600px;
  height: auto;
  min-height: 200px;
  background: white;
  border-radius: 8px;
  padding: 32px;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
`

const TaskList = styled.div`
  display: grid;
  gap: 0.5rem;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`

const Title = styled.h1`
  margin: 0;
  font-size: xlarge;
  font-weight: bold;
  padding: 0.5rem;
`

const EmptyButton = styled.button`
  height: 40px;
  font-weight: 600;
  color: var(--color-black-400);
  padding: 0.5rem 1rem;
  background: white;
  border-radius: 4px;
  border: 1px solid var(--color-black-200);
  margin-left: 8px;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.4);
`

const TrashModal: React.FC<{
  isOpen: boolean
  onClose: () => void
}> = ({ isOpen, onClose }) => {
  const { data: tasks } = useGetTrashTasks()
  const { mutateAsync: emptyTrash } = useEmptyTrash()

  return (
    <Modal isOpen={isOpen}>
      <ModalOverlay onClick={onClose} />
      <ModalBody>
        <Header>
          <Title>Trash</Title>
          <EmptyButton onClick={() => emptyTrash()}>Empty</EmptyButton>
        </Header>
        <TaskList>
          {tasks?.length && tasks.length > 0 ? (
            tasks.map(task => <TaskItem key={task.id} {...task} />)
          ) : (
            <NoTasks emoji='🗑️' text="There's nothing here..." />
          )}
        </TaskList>
      </ModalBody>
    </Modal>
  )
}

export default TrashModal
