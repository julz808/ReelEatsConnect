import { Navbar } from '@/components/layout/navbar'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { mockRestaurants, mockConnections } from '@/lib/mock-data'
import { TrendingUp, Users, Heart, ArrowRight, Sparkles } from 'lucide-react'
import Image from 'next/image'

export default function CreatorDashboard() {
  // Mock data - in real app this would come from the database
  const creatorName = 'Sarah Chen'
  const creatorImage = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400'
  const currentUserId = 'creator-1'

  // Get connections involving this creator
  const userConnections = mockConnections.filter(
    conn => conn.from_user_id === currentUserId || conn.to_user_id === currentUserId
  )

  // Get mutual matches
  const mutualMatches = userConnections.filter(conn => conn.is_mutual)

  // Get some featured restaurants
  const featuredRestaurants = mockRestaurants.slice(0, 3)

  return (
    <div className="min-h-screen bg-white">
      <Navbar userType="creator" userName={creatorName} userImage={creatorImage} />

      <div className="container mx-auto px-6 lg:px-8 py-12 max-w-7xl">
        {/* Welcome Section */}
        <div className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Creator Dashboard</span>
          </div>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Welcome back, <span className="text-primary">{creatorName}</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Track your connections and discover new collaboration opportunities
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          <div className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Users className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">{mockRestaurants.length}</div>
            <p className="text-sm text-gray-600 font-medium">Available Venues</p>
            <p className="text-xs text-gray-500 mt-1">Ready to collaborate</p>
          </div>

          <div className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Heart className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">{userConnections.length}</div>
            <p className="text-sm text-gray-600 font-medium">Total Connections</p>
            <p className="text-xs text-gray-500 mt-1">{mutualMatches.length} mutual matches</p>
          </div>

          <div className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">127</div>
            <p className="text-sm text-gray-600 font-medium">Profile Views</p>
            <p className="text-xs text-gray-500 mt-1">Last 30 days</p>
          </div>
        </div>

        {/* Recent Connections */}
        <div className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-heading text-3xl font-bold mb-2">Recent Connections</h2>
              <p className="text-gray-600">Your latest venue connections</p>
            </div>
            <Link href="/creator/connections">
              <Button variant="ghost" className="group transition-all hover:scale-105">
                View All
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {userConnections.length > 0 ? (
            <div className="space-y-4">
              {userConnections.slice(0, 3).map((connection, index) => {
                const restaurantId = connection.from_user_id === currentUserId
                  ? connection.to_user_id
                  : connection.from_user_id
                const restaurant = mockRestaurants.find(r => r.user_id === restaurantId)
                if (!restaurant) return null

                return (
                  <div
                    key={connection.id}
                    className="group flex items-start gap-6 p-6 bg-white border border-gray-100 rounded-3xl hover:border-primary/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-in fade-in slide-in-from-left duration-500"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <Image
                        src={restaurant.profile_image_url || '/placeholder-avatar.png'}
                        alt={restaurant.venue_name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div>
                          <h4 className="font-heading font-bold text-xl flex items-center gap-2 mb-1">
                            {restaurant.venue_name}
                            {connection.is_mutual && (
                              <Heart className="h-5 w-5 text-primary fill-primary animate-in zoom-in duration-300" />
                            )}
                          </h4>
                          <p className="text-sm text-gray-600">{restaurant.location_suburb}</p>
                        </div>
                        <Badge
                          variant={connection.is_mutual ? 'default' : 'secondary'}
                          className={`${connection.is_mutual ? 'bg-green-500 hover:bg-green-600' : ''} px-4 py-1 rounded-full`}
                        >
                          {connection.is_mutual ? 'Match!' : 'Pending'}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                        {connection.is_mutual
                          ? 'You both expressed interest! Time to connect and collaborate.'
                          : 'You expressed interest. Waiting for their response.'}
                      </p>
                      <Link href="/creator/connections">
                        <Button variant="link" className="h-auto p-0 text-primary font-semibold group/link" size="sm">
                          View Details
                          <ArrowRight className="ml-1 h-3 w-3 group-hover/link:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="text-center py-20 bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-100">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Heart className="h-10 w-10 text-primary/40" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">No connections yet</h3>
              <p className="text-gray-600 mb-6">Browse venues to start making connections!</p>
              <Link href="/creator/browse-restaurants">
                <Button size="lg" className="rounded-full px-8">
                  Browse Venues
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          )}
        </div>

        {/* Featured Restaurants */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-heading text-3xl font-bold mb-2">Featured Venues</h2>
              <p className="text-gray-600">Recently joined venues looking for creators</p>
            </div>
            <Link href="/creator/browse-restaurants">
              <Button variant="ghost" className="group transition-all hover:scale-105">
                Browse All
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredRestaurants.map((restaurant, index) => (
              <Link
                key={restaurant.id}
                href="/creator/browse-restaurants"
                className="group animate-in fade-in slide-in-from-bottom-4 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden hover:border-primary/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={restaurant.profile_image_url || '/placeholder-avatar.png'}
                      alt={restaurant.venue_name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-heading font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                      {restaurant.venue_name}
                    </h4>
                    <p className="text-sm text-gray-600 mb-4">
                      {restaurant.location_suburb}
                    </p>
                    <Badge variant="secondary" className="capitalize rounded-full px-3 py-1">
                      {restaurant.venue_category}
                    </Badge>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
