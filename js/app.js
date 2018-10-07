const pacients = ['Иванов','Петров','Сидоров'];
new Vue({
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