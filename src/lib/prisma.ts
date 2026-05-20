import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL is not defined');
}

const getConnectionString = (url: string) => {
  const parsedUrl = new URL(url);
  const sslMode = parsedUrl.searchParams.get('sslmode');

  if (!sslMode) {
    parsedUrl.searchParams.set('sslmode', 'require');
    parsedUrl.searchParams.set('uselibpqcompat', 'true');
  } else if (['prefer', 'require', 'verify-ca'].includes(sslMode)) {
    parsedUrl.searchParams.set('uselibpqcompat', 'true');
  }

  return parsedUrl.toString();
};

const adapter = new PrismaPg({
  connectionString: getConnectionString(connectionString),
  ssl: {
    rejectUnauthorized: false,
  },
});

const prisma = new PrismaClient({ adapter });

export { prisma };
