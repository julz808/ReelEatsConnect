import { CreatorProfile, RestaurantProfile } from '@/types/database'

// Mock Creator Profiles
export const mockCreators: CreatorProfile[] = [
  {
    id: '1',
    user_id: 'creator-1',
    name: 'Sarah Chen',
    city_suburb: 'Melbourne CBD',
    content_niches: ['Fine Dining', 'Asian Cuisine', 'Desserts'],
    tiktok_url: 'https://tiktok.com/@sarahfoodie',
    instagram_url: 'https://instagram.com/sarahfoodie',
    media_kit_url: 'https://sarahchen.com/mediakit',
    contact_email: 'sarah@example.com',
    contact_number: '0412 345 678',
    profile_image_url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    created_at: '2025-01-15T00:00:00Z',
    updated_at: '2025-01-15T00:00:00Z',
  },
  {
    id: '2',
    user_id: 'creator-2',
    name: 'Marcus Rodriguez',
    city_suburb: 'Fitzroy',
    content_niches: ['Cafes', 'Brunch', 'Coffee'],
    tiktok_url: 'https://tiktok.com/@marcuseats',
    instagram_url: 'https://instagram.com/marcuseats',
    media_kit_url: null,
    contact_email: 'marcus@example.com',
    contact_number: '0423 456 789',
    profile_image_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    created_at: '2025-01-10T00:00:00Z',
    updated_at: '2025-01-10T00:00:00Z',
  },
  {
    id: '3',
    user_id: 'creator-3',
    name: 'Emma Wilson',
    city_suburb: 'St Kilda',
    content_niches: ['Bars', 'Cocktails', 'Fine Dining'],
    tiktok_url: 'https://tiktok.com/@emmawilson',
    instagram_url: 'https://instagram.com/emmawilson',
    media_kit_url: 'https://emmawilson.com/press',
    contact_email: 'emma@example.com',
    contact_number: '0434 567 890',
    profile_image_url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    created_at: '2025-01-20T00:00:00Z',
    updated_at: '2025-01-20T00:00:00Z',
  },
  {
    id: '4',
    user_id: 'creator-4',
    name: 'James Lee',
    city_suburb: 'Richmond',
    content_niches: ['Street Food', 'Asian Cuisine', 'Fast Food'],
    tiktok_url: 'https://tiktok.com/@jamesfoodeats',
    instagram_url: 'https://instagram.com/jamesfoodeats',
    media_kit_url: null,
    contact_email: 'james@example.com',
    contact_number: '0445 678 901',
    profile_image_url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    created_at: '2025-01-05T00:00:00Z',
    updated_at: '2025-01-05T00:00:00Z',
  },
  {
    id: '5',
    user_id: 'creator-5',
    name: 'Olivia Martinez',
    city_suburb: 'South Yarra',
    content_niches: ['Vegan', 'Healthy Eating', 'Brunch'],
    tiktok_url: 'https://tiktok.com/@oliviavegan',
    instagram_url: 'https://instagram.com/oliviavegan',
    media_kit_url: 'https://oliviamartinez.com/work',
    contact_email: 'olivia@example.com',
    contact_number: '0456 789 012',
    profile_image_url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400',
    created_at: '2025-01-12T00:00:00Z',
    updated_at: '2025-01-12T00:00:00Z',
  },
  {
    id: '6',
    user_id: 'creator-6',
    name: 'Daniel Kim',
    city_suburb: 'Brunswick',
    content_niches: ['Italian', 'Pizza', 'Cafes'],
    tiktok_url: null,
    instagram_url: 'https://instagram.com/danielfoodadventures',
    media_kit_url: null,
    contact_email: 'daniel@example.com',
    contact_number: '0467 890 123',
    profile_image_url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400',
    created_at: '2025-01-18T00:00:00Z',
    updated_at: '2025-01-18T00:00:00Z',
  },
]

// Mock Restaurant Profiles
export const mockRestaurants: RestaurantProfile[] = [
  {
    id: '1',
    user_id: 'restaurant-1',
    venue_name: 'The Golden Spoon',
    location_suburb: 'Melbourne CBD',
    instagram_handle: '@goldenspoonmelb',
    contact_name: 'Michael Thompson',
    contact_email: 'michael@goldenspoon.com.au',
    contact_number: '03 9123 4567',
    venue_category: 'restaurant',
    profile_image_url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400',
    created_at: '2025-01-08T00:00:00Z',
    updated_at: '2025-01-08T00:00:00Z',
  },
  {
    id: '2',
    user_id: 'restaurant-2',
    venue_name: 'Brew & Co',
    location_suburb: 'Collingwood',
    instagram_handle: '@brewandcomelb',
    contact_name: 'Jessica Parker',
    contact_email: 'jess@brewandco.com.au',
    contact_number: '03 9234 5678',
    venue_category: 'cafe',
    profile_image_url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400',
    created_at: '2025-01-14T00:00:00Z',
    updated_at: '2025-01-14T00:00:00Z',
  },
  {
    id: '3',
    user_id: 'restaurant-3',
    venue_name: 'Sunset Cocktail Bar',
    location_suburb: 'St Kilda',
    instagram_handle: '@sunsetbarmelb',
    contact_name: 'Alex Rivera',
    contact_email: 'alex@sunsetbar.com.au',
    contact_number: '03 9345 6789',
    venue_category: 'bar',
    profile_image_url: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=400',
    created_at: '2025-01-11T00:00:00Z',
    updated_at: '2025-01-11T00:00:00Z',
  },
  {
    id: '4',
    user_id: 'restaurant-4',
    venue_name: 'Bella Italia',
    location_suburb: 'Carlton',
    instagram_handle: '@bellaitaliamelb',
    contact_name: 'Giovanni Rossi',
    contact_email: 'giovanni@bellaitalia.com.au',
    contact_number: '03 9456 7890',
    venue_category: 'restaurant',
    profile_image_url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400',
    created_at: '2025-01-16T00:00:00Z',
    updated_at: '2025-01-16T00:00:00Z',
  },
  {
    id: '5',
    user_id: 'restaurant-5',
    venue_name: 'The Green Garden',
    location_suburb: 'South Yarra',
    instagram_handle: '@greengardenmelb',
    contact_name: 'Sophie Green',
    contact_email: 'sophie@greengarden.com.au',
    contact_number: '03 9567 8901',
    venue_category: 'cafe',
    profile_image_url: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=400',
    created_at: '2025-01-09T00:00:00Z',
    updated_at: '2025-01-09T00:00:00Z',
  },
  {
    id: '6',
    user_id: 'restaurant-6',
    venue_name: 'Ramen House',
    location_suburb: 'Richmond',
    instagram_handle: '@ramenhousemelb',
    contact_name: 'Yuki Tanaka',
    contact_email: 'yuki@ramenhouse.com.au',
    contact_number: '03 9678 9012',
    venue_category: 'restaurant',
    profile_image_url: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400',
    created_at: '2025-01-13T00:00:00Z',
    updated_at: '2025-01-13T00:00:00Z',
  },
  {
    id: '7',
    user_id: 'restaurant-7',
    venue_name: 'The Local Pub',
    location_suburb: 'Fitzroy',
    instagram_handle: '@thelocalpubmelb',
    contact_name: 'Tom Anderson',
    contact_email: 'tom@thelocalpub.com.au',
    contact_number: '03 9789 0123',
    venue_category: 'bar',
    profile_image_url: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=400',
    created_at: '2025-01-17T00:00:00Z',
    updated_at: '2025-01-17T00:00:00Z',
  },
  {
    id: '8',
    user_id: 'restaurant-8',
    venue_name: 'Morning Brew Cafe',
    location_suburb: 'Brunswick',
    instagram_handle: '@morningbrewmelb',
    contact_name: 'Rachel Wong',
    contact_email: 'rachel@morningbrew.com.au',
    contact_number: '03 9890 1234',
    venue_category: 'cafe',
    profile_image_url: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400',
    created_at: '2025-01-19T00:00:00Z',
    updated_at: '2025-01-19T00:00:00Z',
  },
]

// Simple Connection/Match data structure
export interface Connection {
  id: string
  from_user_id: string
  to_user_id: string
  from_type: 'creator' | 'restaurant'
  to_type: 'creator' | 'restaurant'
  created_at: string
  is_mutual: boolean // true if both sides expressed interest
}

// Mock Connections - simplified interest system
export const mockConnections: Connection[] = [
  {
    id: '1',
    from_user_id: 'restaurant-1', // The Golden Spoon
    to_user_id: 'creator-1', // Sarah Chen
    from_type: 'restaurant',
    to_type: 'creator',
    created_at: '2025-02-01T10:30:00Z',
    is_mutual: false,
  },
  {
    id: '2',
    from_user_id: 'creator-2', // Marcus
    to_user_id: 'restaurant-2', // Brew & Co
    from_type: 'creator',
    to_type: 'restaurant',
    created_at: '2025-01-28T14:15:00Z',
    is_mutual: true, // Both expressed interest!
  },
  {
    id: '3',
    from_user_id: 'restaurant-2', // Brew & Co
    to_user_id: 'creator-2', // Marcus - mutual match
    from_type: 'restaurant',
    to_type: 'creator',
    created_at: '2025-01-29T09:00:00Z',
    is_mutual: true,
  },
  {
    id: '4',
    from_user_id: 'restaurant-3', // Sunset Bar
    to_user_id: 'creator-3', // Emma
    from_type: 'restaurant',
    to_type: 'creator',
    created_at: '2025-02-03T16:45:00Z',
    is_mutual: false,
  },
]

// Content Niches for filtering
export const contentNiches = [
  'Cafes',
  'Fine Dining',
  'Brunch',
  'Bars & Nightlife',
  'Fast Food',
  'Asian Cuisine',
  'Italian Cuisine',
  'Mexican Cuisine',
  'Desserts & Sweets',
  'Vegan',
  'Street Food',
  'Coffee',
  'Pizza',
  'Healthy Eating',
  'Cocktails',
]

// Venue categories
export const venueCategories = ['restaurant', 'cafe', 'bar'] as const

// Melbourne suburbs for filtering
export const melbourneSuburbs = [
  'Melbourne CBD',
  'Fitzroy',
  'Collingwood',
  'Carlton',
  'Brunswick',
  'Richmond',
  'South Yarra',
  'St Kilda',
  'Prahran',
  'Northcote',
]
