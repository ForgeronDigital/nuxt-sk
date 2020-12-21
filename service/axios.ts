import { $axios } from '~/utils/api'
import Credentials from '@/models/credentials'

export function signIn(id: string, password: string): void {
  if (id.length > 0 && password.length > 0) {
    $axios
      .post('/auth/local', {
        identifier: id,
        password: password,
      })
      .then((res): void => {
        if (res.data) {
          const credentials = res.data as Credentials
          sessionStorage.setItem('identifier', credentials.user.username)
          if (
            (sessionStorage.getItem('jwt') &&
              sessionStorage.getItem('jwt') != credentials.jwt) ||
            !sessionStorage.getItem('jwt')
          ) {
            sessionStorage.setItem('jwt', credentials.jwt)
          }
        }
      })
  }
}

export function getContent(path: string): any {
  $axios.setToken(`${sessionStorage.getItem('jwt')}`, 'Bearer')
  $axios.get(path).then((res: any) => {
    console.log(res)
  })
}
