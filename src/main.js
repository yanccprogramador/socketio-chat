import M from 'materialize-css';
import Vue from 'vue';
import io from 'socket.io-client';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.mixin({
  data() {
    return {
      ID: null,
      socket: io('localhost:1337'),
      peoples: [],
    };
  },
  created() {
    this.socket.on('receive_message', (msg) => {
      M.toast({ html: `Nova mensagem ${msg.text}` });
    });

    this.socket.on('connect', () => {
      // eslint-disable-next-line no-param-reassign
      console.log(`Websocket connected to ${this.socket.nsp}`);
    });
    this.socket.on('update', (msg) => {
      console.log(msg);
      this.ID = msg.id;
      this.peoples = msg.ids;
    });
    this.socket.on('disconnect', () => {
      console.log(`Websocket disconnected from ${this.socket.nsp}`);
      this.ID = null;
    });

    this.socket.on('error', (err) => {
      console.error('Websocket error!', err);
    });
  },
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
