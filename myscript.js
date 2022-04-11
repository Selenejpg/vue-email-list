var app = new Vue({
    el: '#root',
    data: {
      arrayIniziale: []
    },
    created(){

      for (let i = 0; i < 10; i++) {

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
            this.arrayIniziale.push(response.data.response); 
        });

      } 
    },
  })