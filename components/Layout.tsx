import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  background: var(--color-secondary-100);
  padding: 8px 0;
  margin: 0 0 2rem;
`

const Brand = styled.h1`
  display: flex;
  color: var(--color-black-200);
  font-size: x-large;
  margin: 0;

  a {
    background: var(--color-secondary-200);
    border-radius: 6px;
    padding: 0.5rem 1rem;

    &:focus {
      outline-color: var(--color-brand);
    }
  }
`

const Main = styled.main`
  display: grid;
  gap: 2rem;
`

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Header>
        <Container>
          <Brand>
            <Link href='/'>
              <a>🍑 PeachyTask</a>
            </Link>
          </Brand>
        </Container>
      </Header>

      <main>
        <Container>
          <Main>{children}</Main>
        </Container>
      </main>
    </div>
  )
}

export default Layout
