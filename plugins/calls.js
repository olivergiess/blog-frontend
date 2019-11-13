import { setupAPI } from '@/api/calls'

export default ({ app }) => {
  setupAPI(app.$axios)
}
