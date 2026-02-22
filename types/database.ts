export type UserRole = 'creator' | 'restaurant' | 'admin'
export type VenueCategory = 'restaurant' | 'cafe' | 'bar'

export interface CreatorProfile {
  id: string
  user_id: string
  name: string
  city_suburb: string | null
  content_niches: string[] | null
  tiktok_url: string | null
  instagram_url: string | null
  media_kit_url: string | null
  contact_email: string
  contact_number: string | null
  profile_image_url: string | null
  created_at: string
  updated_at: string
}

export interface RestaurantProfile {
  id: string
  user_id: string
  venue_name: string
  location_suburb: string | null
  instagram_handle: string | null
  contact_name: string
  contact_email: string
  contact_number: string
  venue_category: VenueCategory | null
  profile_image_url: string | null
  created_at: string
  updated_at: string
}

export interface Connection {
  id: string
  from_user_id: string
  to_user_id: string
  from_type: 'creator' | 'restaurant'
  to_type: 'creator' | 'restaurant'
  created_at: string
  is_mutual: boolean
}

export interface UserRoleData {
  id: string
  user_id: string
  role: UserRole
  created_at: string
}
