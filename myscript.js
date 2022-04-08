var app = new Vue({
    el: '#app',
    data: {
      email: null,
      listaMail: [],
      i: null,
    },
    created(){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
            this.email = response.data.response;
            console.log("email")  
        });
    },
  })