import React, { FC } from 'react'
import { useQuery, useApolloClient } from '@apollo/client'

import { IS_LOGGED_IN } from '@/graphql/queries/isUserLoggedIn'
import { BaseHeaderProps, INavList } from './Header.types'
import { navList } from './mock/navList'
import SwitchTheme from '@/components/SwitchTheme'
import Container from '@/components/Container'
import Button from '@/components/Button'
import { isLoggedInVar } from '@/graphql/config/apollo-local-cache'
import {
  HeaderWrapper,
  HeaderContent,
  NavItem,
  activeClassName,
  HeaderList,
} from './Header.styled'
import Brand from '@/components/Brand'

const Header: FC<BaseHeaderProps> = () => {
  const { data } = useQuery(IS_LOGGED_IN)
  const isLoggedIn = data.isLoggedIn

  const client = useApolloClient()

  const handleLogout = () => {
    // Evict and garbage-collect the cached user object
    // client.cache.evict({ fieldName: 'me' })
    client.cache.gc()

    // Remove user details from localStorage
    localStorage.removeItem('token')
    localStorage.removeItem('userId')

    // Set the logged-in status to false
    isLoggedInVar(false)
  }

  const navListRender = navList.map((item: INavList) => (
    <NavItem
      key={item.id}
      to={item.link}
      exact={item.exact}
      activeClassName={activeClassName}
    >
      {item.label}
    </NavItem>
  ))

  return (
    <HeaderWrapper>
      <Container>
        <HeaderContent>
          <HeaderList>
            <Brand mr="8px" />
            {isLoggedIn && <HeaderList>{navListRender}</HeaderList>}
          </HeaderList>
          <HeaderList>
            <SwitchTheme mr="8px" />
            {isLoggedIn ? (
              <Button
                ml="8px"
                backgroundColor="transparent"
                cursor="pointer"
                onClick={handleLogout}
              >
                Logout
              </Button>
            ) : (
              <>
                <NavItem to={'/login'} exact activeClassName={activeClassName}>
                  Login
                </NavItem>
                <NavItem to={'/signup'} exact activeClassName={activeClassName}>
                  Signup
                </NavItem>
              </>
            )}
          </HeaderList>
        </HeaderContent>
      </Container>
    </HeaderWrapper>
  )
}

export default React.memo(Header)
