import { Navbar } from '@/components/layout/navbar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { mockConnections, mockRestaurants } from '@/lib/mock-data'
import { Heart, Mail, MapPin, Instagram, Phone, Sparkles } from 'lucide-react'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'

export default function CreatorConnections() {
  // For now, simulating current user as creator-1 (Sarah Chen)
  const currentUserId = 'creator-1'

  // Get all connections involving this creator
  const userConnections = mockConnections.filter(
    conn => conn.from_user_id === currentUserId || conn.to_user_id === currentUserId
  )

  // Get mutual matches (both expressed interest)
  const mutualMatches = userConnections.filter(conn => conn.is_mutual)

  // Get pending connections (one-sided interest)
  const pendingConnections = userConnections.filter(conn => !conn.is_mutual)

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        userType="creator"
        userName="Sarah Chen"
        userImage="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
      />

      <div className="container mx-auto px-6 lg:px-8 py-12 max-w-7xl">
        <div className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex items-center gap-2 mb-4">
            <Heart className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">My Connections</span>
          </div>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Your <span className="text-primary">Connections</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Manage your venue connections and collaborate on amazing content
          </p>
        </div>

        {/* Mutual Matches Section */}
        {mutualMatches.length > 0 && (
          <div className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-green-500/10 flex items-center justify-center">
                <Heart className="h-5 w-5 text-green-600 fill-green-600" />
              </div>
              <div>
                <h2 className="font-heading text-3xl font-bold">
                  Mutual Matches
                </h2>
                <p className="text-sm text-gray-600">
                  {mutualMatches.length} {mutualMatches.length === 1 ? 'venue is' : 'venues are'} ready to collaborate
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {mutualMatches.map((connection, index) => {
                const restaurantId = connection.from_user_id === currentUserId
                  ? connection.to_user_id
                  : connection.from_user_id
                const restaurant = mockRestaurants.find(r => r.user_id === restaurantId)
                if (!restaurant) return null

                return (
                  <div
                    key={connection.id}
                    className="group bg-white border-2 border-green-100 rounded-3xl overflow-hidden hover:border-green-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-in fade-in slide-in-from-left duration-500"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="p-8">
                      <div className="flex items-start gap-6 mb-6">
                        <div className="relative w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                          <Image
                            src={restaurant.profile_image_url || '/placeholder-avatar.png'}
                            alt={restaurant.venue_name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-2 mb-3">
                            <div>
                              <h3 className="font-heading text-2xl font-bold flex items-center gap-3 mb-2">
                                {restaurant.venue_name}
                                <Heart className="h-5 w-5 text-green-600 fill-green-600 animate-in zoom-in duration-300" />
                              </h3>
                              <div className="flex items-center text-sm text-gray-600 mb-3">
                                <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                                {restaurant.location_suburb}
                              </div>
                              <Badge variant="outline" className="capitalize rounded-full">
                                {restaurant.venue_category}
                              </Badge>
                            </div>
                            <Badge className="bg-green-500 hover:bg-green-600 rounded-full px-4 py-1">
                              It's a Match!
                            </Badge>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-green-50 to-green-100/50 border border-green-200 rounded-2xl p-6 mb-6">
                        <div className="flex items-start gap-3">
                          <Sparkles className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm text-green-800 font-medium mb-1">
                              You both expressed interest! Time to reach out and start planning your collaboration.
                            </p>
                            <p className="text-xs text-green-700">
                              Matched on {formatDate(connection.created_at)}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                        <h4 className="font-heading font-bold text-sm mb-4 text-gray-900">Contact Information</h4>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-600 block mb-1">Contact Name</span>
                            <p className="font-semibold text-gray-900">{restaurant.contact_name}</p>
                          </div>
                          <div>
                            <span className="text-gray-600 block mb-1">Email</span>
                            <a
                              href={`mailto:${restaurant.contact_email}`}
                              className="text-primary hover:underline font-semibold"
                            >
                              {restaurant.contact_email}
                            </a>
                          </div>
                          <div>
                            <span className="text-gray-600 block mb-1">Phone</span>
                            <a
                              href={`tel:${restaurant.contact_number}`}
                              className="text-primary hover:underline font-semibold"
                            >
                              {restaurant.contact_number}
                            </a>
                          </div>
                          {restaurant.instagram_handle && (
                            <div>
                              <span className="text-gray-600 block mb-1">Instagram</span>
                              <a
                                href={`https://instagram.com/${restaurant.instagram_handle.replace('@', '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline flex items-center gap-1 font-semibold"
                              >
                                <Instagram className="h-3 w-3" />
                                {restaurant.instagram_handle}
                              </a>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button className="flex-1 rounded-full h-11 transition-all hover:scale-105 duration-300" asChild>
                          <a href={`mailto:${restaurant.contact_email}`}>
                            <Mail className="h-4 w-4 mr-2" />
                            Send Email
                          </a>
                        </Button>
                        <Button variant="outline" className="flex-1 rounded-full h-11 transition-all hover:scale-105 duration-300" asChild>
                          <a href={`tel:${restaurant.contact_number}`}>
                            <Phone className="h-4 w-4 mr-2" />
                            Call
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Pending Connections Section */}
        {pendingConnections.length > 0 && (
          <div className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-gray-100 flex items-center justify-center">
                <Heart className="h-5 w-5 text-gray-600" />
              </div>
              <div>
                <h2 className="font-heading text-3xl font-bold">
                  Pending Connections
                </h2>
                <p className="text-sm text-gray-600">
                  {pendingConnections.length} {pendingConnections.length === 1 ? 'venue' : 'venues'} you've expressed interest in
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {pendingConnections.map((connection, index) => {
                const restaurantId = connection.from_user_id === currentUserId
                  ? connection.to_user_id
                  : connection.from_user_id
                const restaurant = mockRestaurants.find(r => r.user_id === restaurantId)
                if (!restaurant) return null

                return (
                  <div
                    key={connection.id}
                    className="group bg-white border border-gray-100 rounded-3xl p-6 hover:border-primary/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-in fade-in slide-in-from-left duration-500"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-6">
                      <div className="relative w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                        <Image
                          src={restaurant.profile_image_url || '/placeholder-avatar.png'}
                          alt={restaurant.venue_name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div>
                            <h3 className="font-heading text-xl font-bold mb-1">
                              {restaurant.venue_name}
                            </h3>
                            <div className="flex items-center text-sm text-gray-600 mb-2">
                              <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                              {restaurant.location_suburb}
                            </div>
                            <Badge variant="outline" className="capitalize rounded-full">
                              {restaurant.venue_category}
                            </Badge>
                          </div>
                          <Badge variant="secondary" className="rounded-full px-4 py-1">
                            Interest Sent
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mt-4">
                          You expressed interest on {formatDate(connection.created_at)}.
                          They'll be notified and can express interest back to create a match!
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Empty State */}
        {userConnections.length === 0 && (
          <div className="text-center py-20 bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-100">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Heart className="h-10 w-10 text-primary/40" />
            </div>
            <h3 className="font-heading font-bold text-2xl mb-2">
              No Connections Yet
            </h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Start browsing venues and express interest to make connections!
            </p>
            <Button size="lg" className="rounded-full px-8" asChild>
              <a href="/creator/browse-restaurants">Browse Venues</a>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
