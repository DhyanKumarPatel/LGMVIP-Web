document.querySelector('#push').onclick=
function() {

    if(document.querySelector('#newtask input').
    value.length == 0){
        alert("Please Enter a Task");
    }
    else{
        document.querySelector('#tasks').innerHTML
        += ` <div class="task">
        <span id="taskname">
        ${document.querySelector('#newtask input').
        value}
        </span>
        <button class="delete">Delete</button>
        </div>
        `;

        var current_tasks = document.
        querySelectorAll('.delete');

        for (let i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function (){
                this.parentNode.remove();
            }
            
        }

        var current_tasks = document.
        querySelectorAll('#taskname');

        for (let i = 0; i < current_tasks.length; i++) {
            tasks[i].onclick = function (){
                this.classlist.toggle('Completed');
            }
            
        }

        document.querySelector('#newtask input')
    }
}