import { Navbar } from '@/components/layout/navbar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { mockConnections, mockCreators } from '@/lib/mock-data'
import { Heart, Mail, MapPin, Instagram, Phone, Link as LinkIcon } from 'lucide-react'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'

export default function RestaurantConnections() {
  // For now, simulating current user as restaurant-1 (The Golden Spoon)
  const currentUserId = 'restaurant-1'

  // Get all connections involving this restaurant
  const userConnections = mockConnections.filter(
    conn => conn.from_user_id === currentUserId || conn.to_user_id === currentUserId
  )

  // Get mutual matches (both expressed interest)
  const mutualMatches = userConnections.filter(conn => conn.is_mutual)

  // Get pending connections (one-sided interest)
  const pendingConnections = userConnections.filter(conn => !conn.is_mutual)

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar
        userType="restaurant"
        userName="The Golden Spoon"
        userImage="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400"
      />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-2">
            Connections
          </h1>
          <p className="text-gray-600">
            Your creator connections and matches
          </p>
        </div>

        {/* Mutual Matches Section */}
        {mutualMatches.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-5 w-5 text-primary fill-primary" />
              <h2 className="font-heading text-2xl font-semibold">
                Mutual Matches ({mutualMatches.length})
              </h2>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Both you and these creators expressed interest in collaborating!
            </p>

            <div className="space-y-4">
              {mutualMatches.map((connection) => {
                const creatorId = connection.from_user_id === currentUserId
                  ? connection.to_user_id
                  : connection.from_user_id
                const creator = mockCreators.find(c => c.user_id === creatorId)
                if (!creator) return null

                return (
                  <Card key={connection.id} className="border-primary/50">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <Image
                          src={creator.profile_image_url || '/placeholder-avatar.png'}
                          alt={creator.name}
                          width={80}
                          height={80}
                          className="rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <div>
                              <CardTitle className="text-xl mb-1 flex items-center gap-2">
                                {creator.name}
                                <Heart className="h-4 w-4 text-primary fill-primary" />
                              </CardTitle>
                              <div className="flex items-center text-sm text-muted-foreground mb-2">
                                <MapPin className="h-4 w-4 mr-1" />
                                {creator.city_suburb}
                              </div>
                            </div>
                            <Badge className="bg-green-500">
                              It's a Match!
                            </Badge>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {creator.content_niches?.map(niche => (
                              <Badge key={niche} variant="outline">
                                {niche}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <p className="text-sm text-green-800 font-medium mb-2">
                          You both expressed interest! Time to reach out and start planning your collaboration.
                        </p>
                        <p className="text-xs text-green-700">
                          Matched on {formatDate(connection.created_at)}
                        </p>
                      </div>

                      <div className="border-t pt-4">
                        <h4 className="font-semibold text-sm mb-3">Creator Information</h4>
                        <div className="grid md:grid-cols-2 gap-3 text-sm">
                          <div>
                            <span className="text-muted-foreground">Email:</span>
                            <a
                              href={`mailto:${creator.contact_email}`}
                              className="text-primary hover:underline block"
                            >
                              {creator.contact_email}
                            </a>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Phone:</span>
                            <a
                              href={`tel:${creator.contact_number}`}
                              className="text-primary hover:underline block"
                            >
                              {creator.contact_number || 'Not provided'}
                            </a>
                          </div>
                          {creator.instagram_url && (
                            <div>
                              <span className="text-muted-foreground">Instagram:</span>
                              <a
                                href={creator.instagram_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline block flex items-center gap-1"
                              >
                                <Instagram className="h-3 w-3" />
                                View Profile
                              </a>
                            </div>
                          )}
                          {creator.tiktok_url && (
                            <div>
                              <span className="text-muted-foreground">TikTok:</span>
                              <a
                                href={creator.tiktok_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline block flex items-center gap-1"
                              >
                                <LinkIcon className="h-3 w-3" />
                                View Profile
                              </a>
                            </div>
                          )}
                          {creator.media_kit_url && (
                            <div className="md:col-span-2">
                              <span className="text-muted-foreground">Media Kit:</span>
                              <a
                                href={creator.media_kit_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline block flex items-center gap-1"
                              >
                                <LinkIcon className="h-3 w-3" />
                                View Media Kit
                              </a>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex gap-3 pt-2">
                        <Button className="flex-1" asChild>
                          <a href={`mailto:${creator.contact_email}`}>
                            <Mail className="h-4 w-4 mr-2" />
                            Send Email
                          </a>
                        </Button>
                        {creator.contact_number && (
                          <Button variant="outline" asChild>
                            <a href={`tel:${creator.contact_number}`}>
                              <Phone className="h-4 w-4 mr-2" />
                              Call
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        )}

        {/* Pending Connections Section */}
        {pendingConnections.length > 0 && (
          <div className="mb-8">
            <h2 className="font-heading text-2xl font-semibold mb-4">
              Pending Connections ({pendingConnections.length})
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              Creators you've expressed interest in
            </p>

            <div className="space-y-4">
              {pendingConnections.map((connection) => {
                const creatorId = connection.from_user_id === currentUserId
                  ? connection.to_user_id
                  : connection.from_user_id
                const creator = mockCreators.find(c => c.user_id === creatorId)
                if (!creator) return null

                return (
                  <Card key={connection.id}>
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <Image
                          src={creator.profile_image_url || '/placeholder-avatar.png'}
                          alt={creator.name}
                          width={80}
                          height={80}
                          className="rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <div>
                              <CardTitle className="text-xl mb-1">
                                {creator.name}
                              </CardTitle>
                              <div className="flex items-center text-sm text-muted-foreground mb-2">
                                <MapPin className="h-4 w-4 mr-1" />
                                {creator.city_suburb}
                              </div>
                            </div>
                            <Badge variant="secondary">
                              Interest Sent
                            </Badge>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {creator.content_niches?.map(niche => (
                              <Badge key={niche} variant="outline">
                                {niche}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        You expressed interest on {formatDate(connection.created_at)}.
                        They'll be notified and can express interest back to create a match!
                      </p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        )}

        {/* Empty State */}
        {userConnections.length === 0 && (
          <Card>
            <CardContent className="py-12 text-center">
              <Heart className="h-16 w-16 mx-auto mb-4 text-muted-foreground opacity-50" />
              <h3 className="font-heading text-xl font-semibold mb-2">
                No Connections Yet
              </h3>
              <p className="text-muted-foreground mb-6">
                Start browsing creators and express interest to make connections!
              </p>
              <Button asChild>
                <a href="/restaurant/browse-creators">Browse Creators</a>
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
