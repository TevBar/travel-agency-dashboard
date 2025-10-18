import { Header } from '../../../components';

const AITrips = () => {
  const user = { name: 'Tevin Barrios' }
  
  return (
    <main className = 'dashboard wrapper'>
      <Header 
        title = "AI Trips"
        description = "Manage AI-generated trips and view intelligent travel recommendations."
      />

      AI trips page contents
    </main>
  )
}

export default AITrips
