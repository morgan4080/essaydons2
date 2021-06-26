import Vue from "vue"

import moment from 'moment'

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value), 'MM/DD/YYYY hh:mm:ss').format('DD/MM/YYYY hh:mm')
  }
});

Vue.filter("dollar", function(value) {
  // Using a template literal here, that's why there are two dollar signs.
  // The first is an actual dollar.
  return `${parseFloat(value).toFixed(2)}$`
});

Vue.filter("shilling", function(value) {
  // Using a template literal here, that's why there are two dollar signs.
  // The first is an actual dollar.
  return `${parseFloat(value).toFixed(2)} Ksh`
});

export const mixinX = {}

