'use client'

import { useState } from 'react'
import { Navbar } from '@/components/layout/navbar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { mockRestaurants, melbourneSuburbs } from '@/lib/mock-data'
import { Search, MapPin, Instagram, Heart, Building2 } from 'lucide-react'
import Image from 'next/image'

export default function BrowseRestaurants() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedLocation, setSelectedLocation] = useState<string>('all')

  // Filter restaurants
  const filteredRestaurants = mockRestaurants.filter(restaurant => {
    const matchesSearch = restaurant.venue_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         restaurant.location_suburb?.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || restaurant.venue_category === selectedCategory
    const matchesLocation = selectedLocation === 'all' || restaurant.location_suburb === selectedLocation

    return matchesSearch && matchesCategory && matchesLocation
  })

  return (
    <div className="min-h-screen bg-white">
      <Navbar userType="creator" userName="Sarah Chen" userImage="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400" />

      <div className="container mx-auto px-6 lg:px-8 py-12 max-w-7xl">
        {/* Header */}
        <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex items-center gap-2 mb-4">
            <Building2 className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Discover Venues</span>
          </div>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Browse <span className="text-primary">Venues</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Discover amazing restaurants, cafes, and bars looking to collaborate with creators
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-3xl p-8">
            <div className="grid md:grid-cols-4 gap-6">
              {/* Search */}
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Search by name or location..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 h-12 rounded-2xl border-gray-200 text-base"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full h-12 rounded-2xl border border-gray-200 bg-white px-4 text-base transition-all hover:border-primary/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="all">All Categories</option>
                  <option value="restaurant">Restaurants</option>
                  <option value="cafe">Cafes</option>
                  <option value="bar">Bars</option>
                </select>
              </div>

              {/* Location Filter */}
              <div>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full h-12 rounded-2xl border border-gray-200 bg-white px-4 text-base transition-all hover:border-primary/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="all">All Locations</option>
                  {melbourneSuburbs.map(suburb => (
                    <option key={suburb} value={suburb}>{suburb}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8 flex items-center justify-between animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          <p className="text-sm text-gray-600 font-medium">
            Showing <span className="text-gray-900 font-semibold">{filteredRestaurants.length}</span> of {mockRestaurants.length} venues
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          {filteredRestaurants.map((restaurant, index) => (
            <div
              key={restaurant.id}
              className="group bg-white border border-gray-100 rounded-3xl overflow-hidden hover:border-primary/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={restaurant.profile_image_url || '/placeholder-avatar.png'}
                  alt={restaurant.venue_name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-4 right-4 capitalize bg-white/90 backdrop-blur-sm text-gray-900 hover:bg-white rounded-full px-4 py-1">
                  {restaurant.venue_category}
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {restaurant.venue_name}
                </h3>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                    {restaurant.location_suburb}
                  </div>
                  {restaurant.instagram_handle && (
                    <div className="flex items-center text-sm text-gray-600">
                      <Instagram className="h-4 w-4 mr-2 text-gray-400" />
                      {restaurant.instagram_handle}
                    </div>
                  )}
                </div>

                <Button className="w-full rounded-full h-11 transition-all hover:scale-105 duration-300">
                  <Heart className="h-4 w-4 mr-2" />
                  Express Interest
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredRestaurants.length === 0 && (
          <div className="text-center py-20 bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-100">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Building2 className="h-10 w-10 text-primary/40" />
            </div>
            <h3 className="font-heading font-bold text-2xl mb-2">No venues found</h3>
            <p className="text-gray-600 mb-8">No venues match your current filters</p>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8"
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory('all')
                setSelectedLocation('all')
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
