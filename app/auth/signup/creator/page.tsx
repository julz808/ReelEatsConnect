'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowLeft, Mail, Lock, User } from 'lucide-react'

export default function CreatorSignup() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const supabase = createClient()

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    // Frontend-only mode - skip actual signup
    if (!supabase) {
      console.log('Supabase credentials not set - running in frontend-only mode')
      await new Promise(resolve => setTimeout(resolve, 500))
      router.push('/creator/profile?onboarding=true')
      return
    }

    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    })

    if (authError) {
      setError(authError.message)
      setLoading(false)
      return
    }

    if (authData.user) {
      const { error: roleError } = await supabase
        .from('user_roles')
        .insert([
          { user_id: authData.user.id, role: 'creator' }
        ])

      if (roleError) {
        setError(roleError.message)
        setLoading(false)
        return
      }

      const { error: profileError } = await supabase
        .from('creator_profiles')
        .insert([
          {
            user_id: authData.user.id,
            name: name,
            contact_email: email,
          }
        ])

      if (profileError) {
        setError(profileError.message)
        setLoading(false)
        return
      }

      router.push('/creator/profile?onboarding=true')
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left side - Form */}
      <div className="w-full lg:w-1/2 flex flex-col">
        {/* Back button */}
        <div className="p-8">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
        </div>

        {/* Form container */}
        <div className="flex-1 flex items-center justify-center px-8 pb-16">
          <div className="w-full max-w-md">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-8">
                <Image
                  src="/icon.png"
                  alt="ReelEats"
                  width={40}
                  height={40}
                  className="rounded-xl"
                />
                <span className="font-heading font-bold text-2xl">
                  ReelEats <span className="text-primary">Connect</span>
                </span>
              </div>
              <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
                Join as a <span className="text-primary">Creator</span>
              </h1>
              <p className="text-lg text-gray-600">
                Start connecting with amazing venues looking for your content style
              </p>
            </div>

            <form onSubmit={handleSignup} className="space-y-6">
              {error && (
                <div className="p-4 rounded-2xl bg-red-50 border border-red-100">
                  <p className="text-sm text-red-600">{error}</p>
                </div>
              )}

              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="Sarah Chen"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="pl-12 h-14 rounded-2xl border-gray-200 text-base"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-12 h-14 rounded-2xl border-gray-200 text-base"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={6}
                    className="pl-12 h-14 rounded-2xl border-gray-200 text-base"
                  />
                </div>
                <p className="text-xs text-gray-500">Must be at least 6 characters</p>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-14 rounded-full text-base font-semibold"
              >
                {loading ? 'Creating account...' : 'Create Account'}
              </Button>

              <div className="text-center pt-4">
                <p className="text-sm text-gray-600">
                  Already have an account?{' '}
                  <Link href="/auth/login/creator" className="text-primary font-semibold hover:underline">
                    Sign in
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Right side - Visual */}
      <div className="hidden lg:block lg:w-1/2 relative bg-gradient-to-br from-primary/5 to-primary/20">
        <div className="absolute inset-0 flex items-center justify-center p-16">
          <div className="max-w-lg text-center">
            <div className="mb-8 inline-flex items-center justify-center w-32 h-32 rounded-full bg-white/80 backdrop-blur-sm shadow-2xl">
              <User className="w-16 h-16 text-primary" />
            </div>
            <h2 className="font-heading font-bold text-4xl mb-6 text-gray-900">
              Build Your Creator Portfolio
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Connect with Melbourne's top venues, showcase your content style, and grow your creator brand.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
