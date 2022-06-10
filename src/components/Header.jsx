import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { IoMoonOutline, IoMoon } from 'react-icons/io5'

import { Container } from './Container'

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`

const Wrapper = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 800;
  font-size: 14px;
`

const Title = styled.a.attrs({
  href: '/',
})`
  color: var(--colors-text);
  text-decoration: none;
`

const ModeSwitcher = styled.div`
  cursor: pointer;
`

const Header = () => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])
  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Where is the world?</Title>
          <ModeSwitcher onClick={toggleTheme}>
            {theme === 'dark' ? (
              <>
                <IoMoonOutline size='14px' className="v-centered mx-min" />
                Light mode
              </>
            ) : (
              <>
                <IoMoon size='14px' className="v-centered mx-min" />
                Dark mode
              </>
            )}
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  )
}

export default Header
