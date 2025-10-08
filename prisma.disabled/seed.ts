import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Create demo landlord
  const landlord = await prisma.user.upsert({
    where: { email: 'demo@landlord.com' },
    update: {},
    create: {
      email: 'demo@landlord.com',
      name: 'Demo Landlord',
      role: 'LANDLORD',
      passwordHash: await hash('demo123!', 10),
    },
  })

  // Create demo tenant
  const tenant = await prisma.user.upsert({
    where: { email: 'demo@tenant.com' },
    update: {},
    create: {
      email: 'demo@tenant.com',
      name: 'Demo Tenant',
      role: 'TENANT',
      passwordHash: await hash('demo123!', 10),
    },
  })

  // Create demo property
  const property = await prisma.property.create({
    data: {
      address: '123 Demo Street, Sydney NSW 2000',
      description: 'Demo property for testing',
      ownerId: landlord.id,
    },
  })

  // Create demo tenancy
  const tenancy = await prisma.tenancy.create({
    data: {
      propertyId: property.id,
      tenantId: tenant.id,
      startDate: new Date(),
      bondAmount: 2000,
      status: 'ACTIVE',
    },
  })

  // Create demo inspection
  const inspection = await prisma.inspection.create({
    data: {
      tenancyId: tenancy.id,
      type: 'MOVE_IN',
      photos: ['/uploads/demo-photo-1.jpg', '/uploads/demo-photo-2.jpg'],
      notes: 'Demo inspection for testing',
      score: 85,
    },
  })

  console.log('Seed data created:', { landlord, tenant, property, tenancy, inspection })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })