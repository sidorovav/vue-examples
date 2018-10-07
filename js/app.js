const pacients = ['Иванов','Петров','Сидоров'];
var app = new Vue({
    el: '#app',
    data: {
        title: 'пример использования фреймворка Vue, кликните на элемент списка',
        pacients: pacients,
        pac:pacients[0],
        selectedPacIndex:0,
        shearch:''
    },
    methods: { 
        selectPacient(p,i){
            this.selectedPacIndex = i;
            this.pac = p;
        }
    },
    computed:{ 
        filtredPacients() {
            return this.pacients.filter(pac => {
                return pac.indexOf(this.shearch) > -1 
            });
        }
    }
});
var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'Вы загрузили эту страницу: ' + new Date().toLocaleString()
    }
  });

var app3 = new Vue({
    el: '#app-3',
    data: {
      seen: true
    },
    methods: {
        inverse() {
            this.seen = !this.seen;
        } 
    }
});

var app4 = new Vue({
    el: '#app-4',
    data: {
      todos: [
        { text: 'Изучить JavaScript' },
        { text: 'Изучить Vue' },
        { text: 'Создать что-нибудь классное' }
      ]
    }
  })