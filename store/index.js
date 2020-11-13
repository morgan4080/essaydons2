import data from "~/static/storedata.json";

export const state = () => ({
  cartUIStatus: "idle",
  storedata: data,
  cart: [],
  clientSecret: "",
  orders: []
});

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
  isAuthenticated(state) {
    return state.auth.loggedIn
  },

  loggedInUser(state) {
    return state.auth.user
  }
};

export const mutations = {
  updateCartUI: (state, payload) => {
    state.cartUIStatus = payload;
  },
  clearCart: state => {
    //this clears the cart
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
  }
};

export const actions = {
  async deleteItem({ commit, dispatch }, payload) {
    try {

      await this.$axios.get(`csrf-cookie`);

      const result = await this.$axios.delete(
        `${payload.uri}/${payload.data}`,
      );
      if (result.data) {

        return result

      }
    } catch (e) {
      if (e.response.status === 422) {

        console.log("error", e.response);

      } else {

        return e;

      }
    }
  },
  async createPaymentIntent({ getters, commit }) {
    try {
      // Create a PaymentIntent with the information about the order
      const result = await this.$axios.post(
        "https://ecommerce-netlify.netlify.app/.netlify/functions/create-payment-intent",
        {
          items: getters.cartItems
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      if (result.data.clientSecret) {
        // Store a reference to the client secret created by the PaymentIntent
        // This secret will be used to finalize the payment from the client
        commit("setClientSecret", result.data.clientSecret);
      }
    } catch (e) {
      console.log("error", e);
    }
  }
};
