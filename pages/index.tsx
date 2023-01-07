import { Task } from '@prisma/client'
import axios from 'axios'
import CreateTaskForm from 'components/CreateTask'
import NoTasks from 'components/NoTasks'
import TaskItem from 'components/TaskItem'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useGetDoneTasks, useGetTasks } from 'queries'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

const TaskList = styled.div`
  display: grid;
  gap: 0.5rem;
`
const Title = styled.h1`
  margin: 0 0 1rem;
  color: var(--color-black-300);
  text-transform: uppercase;
  font-size: large;
  font-weight: bold;
  border-top: 1px solid var(--color-black-300);
  border-bottom: 1px solid var(--color-black-300);
  padding: 0.5rem 0;
`

const Home: NextPage = () => {
  const { data: tasks } = useGetTasks()
  const { data: doneTasks } = useGetDoneTasks()

  return (
    <>
      <Head>
        <title>My tasks | PeachyTask</title>
      </Head>

      <CreateTaskForm />

      <section>
        <Title>To-do</Title>
        <TaskList>
          {tasks?.length && tasks.length > 0 ? (
            tasks.map(task => <TaskItem key={task.id} {...task} />)
          ) : (
            <NoTasks emoji='🎉' text="You're all done!" />
          )}
        </TaskList>
      </section>

      <section>
        <Title>Done</Title>
        <TaskList>
          {doneTasks?.length && doneTasks.length > 0 ? (
            doneTasks.map(task => <TaskItem key={task.id} {...task} />)
          ) : (
            <NoTasks emoji='😔' text="There's nothing here..." />
          )}
        </TaskList>
      </section>
    </>
  )
}

export default Home
