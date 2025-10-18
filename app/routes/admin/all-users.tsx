import { Header } from '../../../components';

const AllUsers = () => {
  const user = { name: 'Tevin Barrios' }
  
  return (
    <main className = 'dashboard wrapper'>
      <Header 
        title = "All Users"
        description = "Manage and view all registered users in the system and see our current users in real time."
      />

      all user page contents
    </main>
  )
}

export default AllUsers
