new Vue({
        el: '#exercise',
        data: {
            value: 0,
            goal: null
        },
        computed: {
          result: function() {
            return this.value < this.goal ? 'not there yet' : 'done';
          }
        },
        watch: {
          result: function(value) {
            var vm = this;
            setTimeout(function() {
              vm.value = 0;
            } ,5000);
          }
        }
    });
