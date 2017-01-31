new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
          btn: function() {
            alert('');
          },
          getValue: function() {
            this.value = event.target.value;
          }
        }
    });
