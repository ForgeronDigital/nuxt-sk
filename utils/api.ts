import { NuxtAxiosInstance } from '@nuxtjs/axios'

// eslint-disable-next-line
let $axios: NuxtAxiosInstance

export function initializeAxios(axiosInstance: NuxtAxiosInstance) {
  $axios = axiosInstance
}

export { $axios }
