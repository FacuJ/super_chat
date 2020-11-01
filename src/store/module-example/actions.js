/**
 * Methods that can be Asynchronous
 * **/
import {firebaseAuth, firebaseDb} from 'boot/firebase'

export function registerUser ({}, payload) {
  firebaseAuth.createUserWithEmailAndPassword (payload.email, payload.password).
    then (response => {
      console.log (response)
      const userId = firebaseAuth.currentUser.uid
      firebaseDb.ref ('users/' + userId).set ({
        name: payload.name,
        email: payload.email,
        online: true
      })
    }).catch (error => {
    console.log (error.message)
  })
}

export function loginUser ({}, payload) {
  firebaseAuth.signInWithEmailAndPassword (payload.email, payload.password).
    then (response => {
      console.log (response)
    }).catch (error => {
    console.log (error.message)
  })
}
