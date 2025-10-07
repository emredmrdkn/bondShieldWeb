import { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'
import { redirect } from 'next/navigation'

export async function getServerSession(req: NextRequest) {
  const token = await getToken({ req })
  return token
}

export async function requireAuth(req: NextRequest) {
  const session = await getServerSession(req)
  if (!session) {
    redirect('/auth/signin')
  }
  return session
}

export async function requireRole(role: string) {
  return async function (req: NextRequest) {
    const session = await getServerSession(req)
    if (!session || session.role !== role) {
      redirect('/auth/signin')
    }
    return session
  }
}

export async function requireTenant(req: NextRequest) {
  const session = await getServerSession(req)
  if (!session || session.role !== 'TENANT') {
    redirect('/auth/signin')
  }
  return session
}

export async function requireLandlord(req: NextRequest) {
  const session = await getServerSession(req)
  if (!session || session.role !== 'LANDLORD') {
    redirect('/auth/signin')
  }
  return session
}