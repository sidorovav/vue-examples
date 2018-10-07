const pacients = ['Иванов','Петров','Сидоров'];
new Vue({
    el: '#app',
    data: {
        title: 'пример использования фреймворка Vue, кликните на элемент списка',
        pacients: pacients,
        pac:pacients[0],
        selectedPacIndex:0,
        shearch:'',
        log:''
    },
    methods: { 
        selectPacient(p,i){
            //var vm = this;
            //this.selectPacient = i;
            //vm.pac = p;
            //this.log = i;
            console.log(p);
            this.selectedPacIndex = i
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