class TaskClass{
    constructor(){
        this.taskList=[];
    };

    //metodos
    list(){
        return this.taskList;
    };

    add(title){
        const newTask={
            title:title,
            completed:false
        };
        this.taskList.push(newTask);
    };
};

module.exports = {TaskClass}