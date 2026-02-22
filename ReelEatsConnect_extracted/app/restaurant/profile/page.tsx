'use client'

import { Navbar } from '@/components/layout/navbar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Instagram, Mail, MapPin, Phone, Building2 } from 'lucide-react'
import { useState } from 'react'

export default function RestaurantProfile() {
  const [isEditing, setIsEditing] = useState(false)

  // Mock profile data
  const [profile, setProfile] = useState({
    venueName: 'The Golden Spoon',
    locationSuburb: 'Melbourne CBD',
    contactName: 'Michael Thompson',
    contactEmail: 'michael@goldenspoon.com.au',
    contactNumber: '03 9123 4567',
    instagramHandle: '@goldenspoonmelb',
    venueCategory: 'restaurant' as 'restaurant' | 'cafe' | 'bar',
    profileImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400',
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar userType="restaurant" userName={profile.venueName} userImage={profile.profileImage} />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="font-heading text-3xl font-bold">Venue Profile</h1>
          <Button
            onClick={() => setIsEditing(!isEditing)}
            variant={isEditing ? 'outline' : 'default'}
          >
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </Button>
        </div>

        <div className="space-y-6">
          {/* Profile Header */}
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <Avatar className="h-24 w-24 rounded-lg">
                  <AvatarImage src={profile.profileImage} />
                  <AvatarFallback>{profile.venueName.charAt(0)}</AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  {isEditing ? (
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium mb-1 block">Venue Name</label>
                        <Input
                          value={profile.venueName}
                          onChange={(e) => setProfile({...profile, venueName: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1 block">Location/Suburb</label>
                        <Input
                          value={profile.locationSuburb}
                          onChange={(e) => setProfile({...profile, locationSuburb: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1 block">Venue Category</label>
                        <select
                          value={profile.venueCategory}
                          onChange={(e) => setProfile({...profile, venueCategory: e.target.value as any})}
                          className="w-full h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors"
                        >
                          <option value="restaurant">Restaurant</option>
                          <option value="cafe">Cafe</option>
                          <option value="bar">Bar</option>
                        </select>
                      </div>
                    </div>
                  ) : (
                    <>
                      <h2 className="font-heading text-2xl font-bold mb-1">{profile.venueName}</h2>
                      <div className="flex items-center text-muted-foreground mb-3">
                        <MapPin className="h-4 w-4 mr-2" />
                        {profile.locationSuburb}
                      </div>
                      <Badge variant="secondary" className="capitalize">
                        {profile.venueCategory}
                      </Badge>
                    </>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Person */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Person</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1 block flex items-center">
                  <Building2 className="h-4 w-4 mr-2" />
                  Contact Name
                </label>
                {isEditing ? (
                  <Input
                    value={profile.contactName}
                    onChange={(e) => setProfile({...profile, contactName: e.target.value})}
                  />
                ) : (
                  <p className="text-muted-foreground">{profile.contactName}</p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </label>
                {isEditing ? (
                  <Input
                    type="email"
                    value={profile.contactEmail}
                    onChange={(e) => setProfile({...profile, contactEmail: e.target.value})}
                  />
                ) : (
                  <p className="text-muted-foreground">{profile.contactEmail}</p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  Phone Number
                </label>
                {isEditing ? (
                  <Input
                    type="tel"
                    value={profile.contactNumber}
                    onChange={(e) => setProfile({...profile, contactNumber: e.target.value})}
                  />
                ) : (
                  <p className="text-muted-foreground">{profile.contactNumber}</p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Social Media */}
          <Card>
            <CardHeader>
              <CardTitle>Social Media</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <label className="text-sm font-medium mb-1 block flex items-center">
                  <Instagram className="h-4 w-4 mr-2" />
                  Instagram Handle
                </label>
                {isEditing ? (
                  <Input
                    value={profile.instagramHandle}
                    onChange={(e) => setProfile({...profile, instagramHandle: e.target.value})}
                    placeholder="@yourhandle"
                  />
                ) : (
                  <a
                    href={`https://instagram.com/${profile.instagramHandle.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {profile.instagramHandle}
                  </a>
                )}
              </div>
            </CardContent>
          </Card>

          {isEditing && (
            <div className="flex gap-3">
              <Button className="flex-1" onClick={() => setIsEditing(false)}>
                Save Changes
              </Button>
              <Button variant="outline" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
