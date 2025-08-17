import { adminClient } from 'better-auth/client/plugins'
import { createAuthClient } from 'better-auth/vue'

const authClient = createAuthClient({
  plugins: [
    adminClient(),
  ],
})

export default authClient
