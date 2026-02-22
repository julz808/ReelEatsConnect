import { Navbar } from '@/components/layout/navbar'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { mockCreators, mockConnections } from '@/lib/mock-data'
import { TrendingUp, Users, Heart, ArrowRight, Building2 } from 'lucide-react'
import Image from 'next/image'

export default function RestaurantDashboard() {
  // Mock data
  const venueName = 'The Golden Spoon'
  const venueImage = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400'
  const currentUserId = 'restaurant-1'

  // Get connections involving this restaurant
  const userConnections = mockConnections.filter(
    conn => conn.from_user_id === currentUserId || conn.to_user_id === currentUserId
  )

  // Get mutual matches
  const mutualMatches = userConnections.filter(conn => conn.is_mutual)

  // Get featured creators
  const featuredCreators = mockCreators.slice(0, 3)

  return (
    <div className="min-h-screen bg-white">
      <Navbar userType="restaurant" userName={venueName} userImage={venueImage} />

      <div className="container mx-auto px-6 lg:px-8 py-12 max-w-7xl">
        {/* Welcome Section */}
        <div className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex items-center gap-2 mb-4">
            <Building2 className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Venue Dashboard</span>
          </div>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Welcome back, <span className="text-primary">{venueName}</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Track your creator connections and discover new content opportunities
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
            <div className="text-4xl font-bold text-gray-900 mb-2">{mockCreators.length}</div>
            <p className="text-sm text-gray-600 font-medium">Available Creators</p>
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
            <div className="text-4xl font-bold text-gray-900 mb-2">89</div>
            <p className="text-sm text-gray-600 font-medium">Profile Views</p>
            <p className="text-xs text-gray-500 mt-1">Last 30 days</p>
          </div>
        </div>

        {/* Recent Connections */}
        <div className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-heading text-3xl font-bold mb-2">Recent Connections</h2>
              <p className="text-gray-600">Your latest creator connections</p>
            </div>
            <Link href="/restaurant/connections">
              <Button variant="ghost" className="group transition-all hover:scale-105">
                View All
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {userConnections.length > 0 ? (
            <div className="space-y-4">
              {userConnections.slice(0, 3).map((connection, index) => {
                const creatorId = connection.from_user_id === currentUserId
                  ? connection.to_user_id
                  : connection.from_user_id
                const creator = mockCreators.find(c => c.user_id === creatorId)
                if (!creator) return null

                return (
                  <div
                    key={connection.id}
                    className="group flex items-start gap-6 p-6 bg-white border border-gray-100 rounded-3xl hover:border-primary/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-in fade-in slide-in-from-left duration-500"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <Image
                        src={creator.profile_image_url || '/placeholder-avatar.png'}
                        alt={creator.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div>
                          <h4 className="font-heading font-bold text-xl flex items-center gap-2 mb-1">
                            {creator.name}
                            {connection.is_mutual && (
                              <Heart className="h-5 w-5 text-primary fill-primary animate-in zoom-in duration-300" />
                            )}
                          </h4>
                          <p className="text-sm text-gray-600 mb-2">{creator.city_suburb}</p>
                          <div className="flex flex-wrap gap-1">
                            {creator.content_niches?.slice(0, 2).map(niche => (
                              <Badge key={niche} variant="secondary" className="text-xs rounded-full">{niche}</Badge>
                            ))}
                          </div>
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
                      <Link href="/restaurant/connections">
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
              <p className="text-gray-600 mb-6">Browse creators to start making connections!</p>
              <Link href="/restaurant/browse-creators">
                <Button size="lg" className="rounded-full px-8">
                  Browse Creators
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          )}
        </div>

        {/* Featured Creators */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-heading text-3xl font-bold mb-2">Featured Creators</h2>
              <p className="text-gray-600">Recently joined creators looking for opportunities</p>
            </div>
            <Link href="/restaurant/browse-creators">
              <Button variant="ghost" className="group transition-all hover:scale-105">
                Browse All
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredCreators.map((creator, index) => (
              <Link
                key={creator.id}
                href="/restaurant/browse-creators"
                className="group animate-in fade-in slide-in-from-bottom-4 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden hover:border-primary/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={creator.profile_image_url || '/placeholder-avatar.png'}
                      alt={creator.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-heading font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                      {creator.name}
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      {creator.city_suburb}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {creator.content_niches?.slice(0, 2).map(niche => (
                        <Badge key={niche} variant="secondary" className="text-xs rounded-full">
                          {niche}
                        </Badge>
                      ))}
                    </div>
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
