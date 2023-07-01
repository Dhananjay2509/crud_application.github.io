import React from 'react'
import AppShell from '../components/AppShell'
import EmployeeList from '../components/EmployeeList'

function Home(props) {
  return (
    <>
    <AppShell>
      <EmployeeList/>
    </AppShell>
    </>
  )
}

export default Home
