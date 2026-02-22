'use client'

import { useState } from 'react'
import { Navbar } from '@/components/layout/navbar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { mockCreators, melbourneSuburbs, contentNiches } from '@/lib/mock-data'
import { Search, MapPin, Instagram, Link as LinkIcon, Heart, Users } from 'lucide-react'
import Image from 'next/image'

export default function BrowseCreators() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedNiche, setSelectedNiche] = useState<string>('all')
  const [selectedLocation, setSelectedLocation] = useState<string>('all')

  // Filter creators
  const filteredCreators = mockCreators.filter(creator => {
    const matchesSearch = creator.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         creator.city_suburb?.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesNiche = selectedNiche === 'all' || creator.content_niches?.includes(selectedNiche)
    const matchesLocation = selectedLocation === 'all' || creator.city_suburb === selectedLocation

    return matchesSearch && matchesNiche && matchesLocation
  })

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        userType="restaurant"
        userName="The Golden Spoon"
        userImage="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400"
      />

      <div className="container mx-auto px-6 lg:px-8 py-12 max-w-7xl">
        {/* Header */}
        <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex items-center gap-2 mb-4">
            <Users className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Discover Creators</span>
          </div>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Browse <span className="text-primary">Creators</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Find talented content creators perfect for showcasing your venue
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

              {/* Niche Filter */}
              <div>
                <select
                  value={selectedNiche}
                  onChange={(e) => setSelectedNiche(e.target.value)}
                  className="w-full h-12 rounded-2xl border border-gray-200 bg-white px-4 text-base transition-all hover:border-primary/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="all">All Niches</option>
                  {contentNiches.map(niche => (
                    <option key={niche} value={niche}>{niche}</option>
                  ))}
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
            Showing <span className="text-gray-900 font-semibold">{filteredCreators.length}</span> of {mockCreators.length} creators
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          {filteredCreators.map((creator, index) => (
            <div
              key={creator.id}
              className="group bg-white border border-gray-100 rounded-3xl overflow-hidden hover:border-primary/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={creator.profile_image_url || '/placeholder-avatar.png'}
                  alt={creator.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {creator.name}
                </h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                    {creator.city_suburb}
                  </div>
                  {creator.instagram_url && (
                    <a
                      href={creator.instagram_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-gray-600 hover:text-primary transition-colors"
                    >
                      <Instagram className="h-4 w-4 mr-2" />
                      View Instagram
                    </a>
                  )}
                  {creator.media_kit_url && (
                    <a
                      href={creator.media_kit_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-gray-600 hover:text-primary transition-colors"
                    >
                      <LinkIcon className="h-4 w-4 mr-2" />
                      Media Kit
                    </a>
                  )}
                </div>

                <div className="flex flex-wrap gap-1 mb-6">
                  {creator.content_niches?.slice(0, 3).map(niche => (
                    <Badge key={niche} variant="secondary" className="text-xs rounded-full">
                      {niche}
                    </Badge>
                  ))}
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
        {filteredCreators.length === 0 && (
          <div className="text-center py-20 bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-100">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Users className="h-10 w-10 text-primary/40" />
            </div>
            <h3 className="font-heading font-bold text-2xl mb-2">No creators found</h3>
            <p className="text-gray-600 mb-8">No creators match your current filters</p>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8"
              onClick={() => {
                setSearchQuery('')
                setSelectedNiche('all')
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
