import { Header } from '../../../components';
import { TripCard } from '../../../components';
import { StatsCard } from '../../../components';
import { allTrips } from '../../constants';


const Dashboard = () => {

  const user = { name: 'Tevin Barrios' }

  const dashboardStats = {
    totalUsers: 1200,
    totalTrips: 350,
    tripsCreated: { currentMonth: 150, lastMonth: 130 },
    userRole: { total :62, currentMonth: 25, lastMonth: 20 },
    popularDestination: 'Paris',
    monthlyRevenue: '$25,000',
    usersJoined: { currentMonth: 218, lastMonth: 200 },
    completedTrips: 2980,
    pendingTrips: 230,
    revenue: { currentMonth: '$8,500', lastMonth: '$7,200' },
  }

   const { totalUsers, usersJoined, totalTrips, tripsCreated, userRole } = dashboardStats;

  return (
    <main className = 'dashboard wrapper'>
      <Header 
        title = { `Welcome back, ${user?.name ?? 'Guest'}` }
        description = "Track activity, trends, and popular destinations in real time."
      />
      <section className ='flex flex-col md:flex-row gap-4 my-6'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 w-full'>
          <StatsCard 
            headerTitle = "Total Trips"
            total = {totalTrips}
            currentMonthCount= {tripsCreated.currentMonth}
            lastMonthCount = {tripsCreated.lastMonth}
            iconSrc = "/assets/icons/itinerary.svg"
            iconAlt = "trips"
            trend = "+15.2%"
            trendType = "increase"
          />
          <StatsCard 
            headerTitle = "Total Users"
            total = {totalUsers}
            currentMonthCount= {usersJoined.currentMonth}
            lastMonthCount = {usersJoined.lastMonth}
            iconSrc = "/assets/icons/users.svg"
            iconAlt = "users"
            trend = "+9.7%"
            trendType = "increase"
          />
          <StatsCard 
            headerTitle = "Active Users Today"
            total = {userRole.total}
            currentMonthCount= {userRole.currentMonth}
            lastMonthCount = {userRole.lastMonth}
            iconSrc = "/assets/icons/star.svg"
            iconAlt = "active users"
            trend = "+23.4%"
            trendType = "increase"
          />
        </div>
      </section>
      
      {/* Featured Trips Section */}
      <section className="my-8">
        <div className="mb-6">
          <h2 className="p-24-semibold text-dark-100 mb-2">Featured Trips</h2>
          <p className="text-gray-500">Explore our most popular destinations</p>
        </div>
        <div className="trip-grid">
          {allTrips.slice(0, 4).map((trip) => (
            <TripCard
              key={trip.id}
              id={trip.id}
              name={trip.name}
              imageUrls={trip.imageUrls}
              itinerary={trip.itinerary}
              tags={trip.tags}
              travelStyle={trip.travelStyle}
              estimatedPrice={trip.estimatedPrice}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Dashboard
