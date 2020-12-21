<template>
  <div class="flex space-btw">
    <!-- <div class="home border-black flex center">
      <Logo class="home-logo" />
      <div>home</div>
    </div> -->
    <div class="flex space-btw login">
      <input
        type="text"
        class="identifiant"
        placeholder="identifiant"
        v-model="identifiant"
      />
      <input
        type="password"
        class="password"
        placeholder="password"
        v-model="password"
      />
      <button @click="signIn(identifiant, password)">signIn</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { signIn } from '@/service/axios'
@Component
export default class Header extends Vue {
  data() {
    return {
      identifiant: '',
      password: '',
    }
  }
  public signIn(id: string, password: string) {
    signIn(id, password)
  }
}
</script>

<style lang="scss">
.home {
  width: 150px;
  &-logo {
    height: 50px;
  }
}
</style>
