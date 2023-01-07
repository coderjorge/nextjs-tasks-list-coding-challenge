import styled from 'styled-components'

const Empty = styled.div`
  display: grid;
  grid-template-columns: min-content auto;
  gap: 0.75rem;
  align-items: center;

  span {
    font-size: xx-large;
    padding-left: 0.25rem;
  }

  h1 {
    color: var(--color-black-300);
    font-size: x-large;
    font-style: italic;
    margin: 0;
  }
`

const NoTasks: React.FC<{ emoji: string; text: string }> = ({
  emoji,
  text
}) => {
  return (
    <Empty>
      <span>{emoji}</span>
      <h1>{text}</h1>
    </Empty>
  )
}

export default NoTasks
