import data from "~/static/storedata.json"
import countries from "~/static/countries.json"

export const state = () => ({
  cartUIStatus: "idle",
  storedata: data,
  countries: countries,
  userTypes: ["Student","Writer"],
  cart: [],
  clientSecret: "",
  token: null,
  orderData: null,
})

export const getters = {
  cartCount: state => {
    if (!state.cart.length) return 0;
    return state.cart.reduce((ac, next) => ac + next.quantity, 0);
  },
  cartTotal: state => {
    if (!state.cart.length) return 0;
    return state.cart.reduce((ac, next) => ac + next.quantity * next.price, 0);
  },
  cartItems: state => {
    if (!state.cart.length) return [];
    return state.cart.map(item => {
      return {
        id: item.id,
        quantity: item.quantity
      };
    });
  },
  clientSecret: state => state.clientSecret,
  isAuthenticated: state => state.auth.loggedIn,
  loggedInUser: state => state.auth.user,
  currentToken: state => state.token,
  currentFormData: state => state.orderData
}

export const mutations = {
  setToken: (state, payload)  =>  {
    state.token = payload
  },
  setOrderData: (state, payload) => {
    state.orderData = payload
  },
  setAuth: (state, auth = null) => {
    state.auth.user = auth;
    state.auth.loggedIn = false;
  },
  updateCartUI: (state, payload) => {
    state.cartUIStatus = payload;
  },
  clearCart: state => {
    (state.cart = []), (state.cartUIStatus = "idle");
  },
  addToCart: (state, payload) => {
    let itemFound = state.cart.find(el => el.id === payload.id);
    itemFound
      ? (itemFound.quantity += payload.quantity)
      : state.cart.push(payload)
  },
  setClientSecret: (state, payload) => {
    state.clientSecret = payload;
  },
  addOneToCart: (state, payload) => {
    let itemFound = state.cart.find(el => el.id === payload.id)
    itemFound ? itemFound.quantity++ : state.cart.push(payload)
  },
  removeOneFromCart: (state, payload) => {
    let index = state.cart.findIndex(el => el.id === payload.id)
    state.cart[index].quantity
      ? state.cart[index].quantity--
      : state.cart.splice(index, 1)
  },
  removeAllFromCart: (state, payload) => {
    state.cart = state.cart.filter(el => el.id !== payload.id)
  },
}

export const actions = {
  async deleteItem({ commit, dispatch }, payload) {
    try {
      const result = await this.$axios.delete(
        `${payload.uri}?id=${payload.id}`,
      )
      if (result.data) {
        return result.data
      }
    } catch (e) {
      if (e.response.status === 422) {
        console.log("error", e.response)
      } else {
        return e
      }
      this.$toast.error(e.message, {
        theme: "outline",
        position: "bottom-left",
        duration : 5000
      })
    }
  },
  createPaymentIntent({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        // Create a PaymentIntent with the information about the order
        const result = await this.$axios.post(
          "/api/transactions?payment_intent=true",
          {
            order: payload.order
          },
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        );

        console.log('payment_intent', result)

        if (result.data.clientSecret) {
          // Store a reference to the client secret created by the PaymentIntent
          // This secret will be used to finalize the payment from the client
          commit("setClientSecret", result.data.clientSecret);
          resolve(result)
        }
      } catch (e) {
        console.log("error", e);
        reject(e)
      }
    });
  },
  async sendAdminMail({ getters }, payload) {
    setTimeout(async () => {
      try {
        /*, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }*/
        const response = await this.$axios.post('api/transactions?send_attachments=true', payload);
        console.log("success sendmail", response)
      } catch (e) {
        console.log("sendmail error", e)
      }
    },1500);
  },
  async nuxtServerInit ({ commit }, { req }) {

  },
}
