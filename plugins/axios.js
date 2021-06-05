export default function ({ $axios, $toast,$auth, redirect }) {
  $axios.onError(error => {
    if(error.response.status === 500) {
      $toast.error('Server Error', {
        theme: "outline",
        position: "bottom-center",
        duration : 5000
      })
    }

    if(error.response.status === 405) {
      $toast.error('Something Went Wrong', {
        theme: "outline",
        position: "bottom-center",
        duration : 5000
      })
    }
  })
}
