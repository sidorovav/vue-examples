const pacients = ['Иванов','Петров','Сидоров'];
new Vue({
    el: '#app',
    data: {
        title: 'пример использования фреймворка Vue, кликните на элемент списка',
        pacients: pacients,
        pac:pacients[0],
        selectedPacIndex:0
    },
    methods: { 
        selectPacient: function (id){
             console.log(pacients[id]);
             this.pac = pacients[id];
             this.selectedPacIndex=id;
        }
    }
});