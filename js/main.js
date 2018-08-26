let App = new Vue({
    el: '#App',
    data: {
        title: 'Pomodoro Timer',
        tasks: [
            { id: 1, desc: 'First Task'},
            { id: 2, desc: 'Second Task' },
            { id: 3, desc: 'Third Task' }
        ]
    },
    methods: {
        addNewTask: function(){
            this.tasks.push({id: 1, desc: 'New Task'})
        },

        deleteTask: function(){
            
        }
    }
})
