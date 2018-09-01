let taskApp = new Vue({
  el: "#taskApp",
  data: {
    tasks: []
  },
  methods: {
    deleteTask: function(task) {
      this.tasks.splice(this.tasks.indexOf(task), 1);
    },
    addTask: function(e) {
      e.preventDefault();
      if (this.tasks.name) {
        this.tasks.push({
          name: this.tasks.name,
          done: false
        });
        this.tasks.name = "";
      }
    }
  }
});
