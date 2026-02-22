'use client'

import { Navbar } from '@/components/layout/navbar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { contentNiches } from '@/lib/mock-data'
import { Instagram, Link as LinkIcon, Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'

export default function CreatorProfile() {
  const [isEditing, setIsEditing] = useState(false)

  // Mock profile data
  const [profile, setProfile] = useState({
    name: 'Sarah Chen',
    citySuburb: 'Melbourne CBD',
    contactEmail: 'sarah@example.com',
    contactNumber: '0412 345 678',
    tiktokUrl: 'https://tiktok.com/@sarahfoodie',
    instagramUrl: 'https://instagram.com/sarahfoodie',
    mediaKitUrl: 'https://sarahchen.com/mediakit',
    contentNiches: ['Fine Dining', 'Asian Cuisine', 'Desserts'],
    profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar userType="creator" userName={profile.name} userImage={profile.profileImage} />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="font-heading text-3xl font-bold">My Profile</h1>
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
                <Avatar className="h-24 w-24">
                  <AvatarImage src={profile.profileImage} />
                  <AvatarFallback>{profile.name.charAt(0)}</AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  {isEditing ? (
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium mb-1 block">Name</label>
                        <Input
                          value={profile.name}
                          onChange={(e) => setProfile({...profile, name: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1 block">City/Suburb</label>
                        <Input
                          value={profile.citySuburb}
                          onChange={(e) => setProfile({...profile, citySuburb: e.target.value})}
                        />
                      </div>
                    </div>
                  ) : (
                    <>
                      <h2 className="font-heading text-2xl font-bold mb-1">{profile.name}</h2>
                      <div className="flex items-center text-muted-foreground mb-4">
                        <MapPin className="h-4 w-4 mr-2" />
                        {profile.citySuburb}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {profile.contentNiches.map((niche) => (
                          <Badge key={niche} variant="secondary">{niche}</Badge>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
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

          {/* Social Links */}
          <Card>
            <CardHeader>
              <CardTitle>Social Media & Portfolio</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1 block flex items-center">
                  <Instagram className="h-4 w-4 mr-2" />
                  Instagram URL
                </label>
                {isEditing ? (
                  <Input
                    value={profile.instagramUrl}
                    onChange={(e) => setProfile({...profile, instagramUrl: e.target.value})}
                    placeholder="https://instagram.com/username"
                  />
                ) : (
                  <a
                    href={profile.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {profile.instagramUrl}
                  </a>
                )}
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block flex items-center">
                  <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17 12.5V15.5C17 16.61 16.11 17.5 15 17.5H9C7.89 17.5 7 16.61 7 15.5V12.5V9.5C7 8.39 7.89 7.5 9 7.5H15C16.11 7.5 17 8.39 17 9.5V12.5Z"/>
                  </svg>
                  TikTok URL
                </label>
                {isEditing ? (
                  <Input
                    value={profile.tiktokUrl}
                    onChange={(e) => setProfile({...profile, tiktokUrl: e.target.value})}
                    placeholder="https://tiktok.com/@username"
                  />
                ) : (
                  <a
                    href={profile.tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {profile.tiktokUrl}
                  </a>
                )}
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block flex items-center">
                  <LinkIcon className="h-4 w-4 mr-2" />
                  Media Kit URL (optional)
                </label>
                {isEditing ? (
                  <Input
                    value={profile.mediaKitUrl}
                    onChange={(e) => setProfile({...profile, mediaKitUrl: e.target.value})}
                    placeholder="https://your-website.com/mediakit"
                  />
                ) : (
                  profile.mediaKitUrl ? (
                    <a
                      href={profile.mediaKitUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {profile.mediaKitUrl}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">No media kit added</p>
                  )
                )}
              </div>
            </CardContent>
          </Card>

          {/* Content Niches */}
          <Card>
            <CardHeader>
              <CardTitle>Content Niches</CardTitle>
            </CardHeader>
            <CardContent>
              {isEditing ? (
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Select the types of content you create:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {contentNiches.map((niche) => {
                      const isSelected = profile.contentNiches.includes(niche)
                      return (
                        <Badge
                          key={niche}
                          variant={isSelected ? 'default' : 'outline'}
                          className="cursor-pointer"
                          onClick={() => {
                            if (isSelected) {
                              setProfile({
                                ...profile,
                                contentNiches: profile.contentNiches.filter(n => n !== niche)
                              })
                            } else {
                              setProfile({
                                ...profile,
                                contentNiches: [...profile.contentNiches, niche]
                              })
                            }
                          }}
                        >
                          {niche}
                        </Badge>
                      )
                    })}
                  </div>
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {profile.contentNiches.map((niche) => (
                    <Badge key={niche}>{niche}</Badge>
                  ))}
                </div>
              )}
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
