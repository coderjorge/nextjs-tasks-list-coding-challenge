import { useGetTrashTasks } from 'queries'
import React from 'react'
import styled from 'styled-components'

const TrashMenu: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  const { data: traskTasks } = useGetTrashTasks()
  return <a onClick={onClick}>Trash ({traskTasks?.length || 0})</a>
}

export default TrashMenu
