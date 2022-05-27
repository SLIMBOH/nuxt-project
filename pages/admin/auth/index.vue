<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form>
        <app-input type="email">E-Mail Address</app-input>
        <app-input type="password">Password</app-input>
        <app-button type="submit">{{ isLogin ? 'Login' : 'Sign Up' }}</app-button>
        <app-button
          type="button"
          btn-style="inverted"
          style="margin-left: 10px"
          @click="isLogin = !isLogin">Switch to {{ isLogin ? 'Signup' : 'Login' }}</app-button>
      </form>
    </div>
  </div>
</template>

<script>
import AppControlInput from '@/components/ui/AppControlInput'
import AppButton from '@/components/ui/AppButton'

export default {
  layout: 'admin',
  components: {
    'app-input': AppControlInput,
    'app-button': AppButton,
  },
  data() {
    return {
      isLogin: true
    }
  }
}
</script>

<style scoped>
.admin-auth-page {
  padding: 20px;
}

.auth-container {
  margin: 80px auto;
  color: white;
  font-size: 0.85rem;
  background-color: rgba(0, 0, 0, 0.7);
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 300px;
  padding: 10px;
  box-sizing: border-box;
}
</style>

