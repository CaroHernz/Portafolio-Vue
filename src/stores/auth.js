import { defineStore } from 'pinia'
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const userData = ref(null)
  const loading = ref(true)

  const auth = getAuth()

  onAuthStateChanged(auth, (currentUser) => {
    user.value = currentUser
    if(currentUser) {
        userData.value = {
            displayName: currentUser.displayName,
            email: currentUser.email,
            uid:currentUser.uid
        }
    } else {
        userData.value = null
    }
    loading.value = false
  })

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)

      user.value = userCredential.user
      userData.value = {
        displayName: userCredential.user.displayName,
        email: userCredential.user.email,
        uid: userCredential.user.uid
      }
      return { success: true }
    } catch (error) {
        let errorMessage = 'Error al iniciar sesión'

        switch (error.code) {
            case 'auth/invalid-email': 
            errorMessage = 'Email inválido' 
            break
            case 'auth/user-not-found': 
            errorMessage = 'Usuario no encontrado' 
            break
            case 'auth/wrong-password':
                errorMessage = 'Contraseña incorrecta'
                break
            case 'auth/too-many-requests':
                errorMessage = 'Demasiados intentos. Intenta más tarde'
                break
            default:
                errorMessage = error.message
        }

      return { success: false, error: error.message }
    }
  }

  const register = async (email, password, displayName) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(userCredential.user, {
        displayName: displayName
      })

      user.value = userCredential.user
      userData.value = {
        displayName: displayName,
        email: email,
        uid: updatedUser.uid
      }
      return { success: true }
    } catch (error) {
        let errorMessage = 'Error al registrarse'
      
      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMessage = 'El email ya está en uso'
          break
        case 'auth/invalid-email':
          errorMessage = 'Email inválido'
          break
        case 'auth/weak-password':
          errorMessage = 'La contraseña es muy débil'
          break
        default:
          errorMessage = error.message
      }
      return { success: false, error: error.message }
    }
  }

  const logout = async () => {
    try {
      await signOut(auth)
      user.value = null
      userData.value = null
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }
  const updateUserProfile = async (displayName) => {
    try {
        const currentUser = auth.currentUser
      await updateProfile(currentUser, {
        displayName: displayName
      })
      
      userData.value = {
        ...userData.value,
        displayName: displayName
      }
      
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  return {
    user,
    userData,
    loading,
    login,
    register,
    logout, 
    updateUserProfile
  }
})