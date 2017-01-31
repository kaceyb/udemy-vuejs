new Vue({
  el: '#exercise',
  data: {
  toggleClass: {
    highlight: true,
    shrink: false
  },
  ex2: 'ex2',
  alsoEx2: 'alsoEx2',
  chooseClass: '',
  cls1: 'cls1',
  cls2: 'cls2',
  enterClass: '',
  // rnd: 'rnd',
  bool: ''
  },
  methods: {
    startEffect: function() {
      var vm = this;
      setInterval(function() {
        vm.toggleClass.highlight = !vm.toggleClass.highlight;
        vm.toggleClass.shrink = !vm.toggleClass.shrink;
      }, 1000);
    }
  }
});
