import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('production'),
  DATABASE_URL: z.string(),
  PORT: z.number().default(3333),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('🛑\x1b[31m Invalid enviroment variables: \x1b[0m')
  console.error(_env.error.format())
  console.error('')

  throw new Error('Invalid enviroment variables.')
}

export const env = _env.data
