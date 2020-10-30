<template>
  <q-page class="flex column">
    <q-banner class="bg-grey-4 text-center">
      El usuario está desconectado
    </q-banner>
    <div class="q-pa-md column col justify-end">
      <q-chat-message
        v-for="message in messages"
        :key="message.text"
        :name="message.from"
        :text="[message.text]"
        :sent="message.from === 'yo'"
      />
    </div>
    <q-footer elevated>
      <q-toolbar>
        <q-form @submit="sendMessage"
                class="full-width">
          <q-input
            bg-color="white"
            standout="true"
            v-model="newMessage"
            rounded
            placeholder="Mensaje"
            dense>
            <template v-slot:after>
              <q-btn
                round
                dense
                color="white"
                flat
                icon="send">
              </q-btn>
            </template>
          </q-input>
        </q-form>
      </q-toolbar>
    </q-footer>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      newMessage: '',
      messages: [
        {
          text: 'Mensaje numero 1',
          from: 'yo'
        },
        {
          text: 'Respuesta al primer mensaje',
          from: 'Otra persona'
        },
        {
          text: 'Otro msje',
          from: 'yo'
        }
      ]
    }
  },
  methods: {
    sendMessage () {
      this.messages.push ({
        text: this.newMessage,
        from: 'yo'
      })
    }
  }
}
</script>
