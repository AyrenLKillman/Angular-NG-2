import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'Task-Manager-NG2';



  AddTask() {


    console.log("button pressed");
    const taskInput = document.querySelector('.taskInput') as HTMLInputElement;
    const objectiveDiv = document.querySelector('.Objective');
    

      
    

    if (taskInput && objectiveDiv) {
      const taskText = taskInput.value.trim(); //? remove whitespace
      
      if (taskText.length > 0) {
        const newTaskDiv = document.createElement('div');
        newTaskDiv.className = 'task-item';
        newTaskDiv.textContent = taskText;
  
;
        


        //? create delete Button
        const deleteButton = document.createElement('button');
        deleteButton.className = 'task-button delete-button';
        deleteButton.textContent = 'Delete';
        
        deleteButton.addEventListener('click', () => {
          newTaskDiv.remove();
          this.removeTaskFromLocalStorage(taskText);
        });

        //? create Done Button
        //! stuff marked done will not be carried in localStorage

        const doneButton = document.createElement('button');
        doneButton.className = 'task-button done-button';
        doneButton.textContent = 'Done';
        let ifDone = false;
        doneButton.addEventListener('click', () => {
   

          if (ifDone === false) {
            newTaskDiv.style.backgroundColor = 'yellow';
            ifDone = true
          } else if (ifDone === true) {
            newTaskDiv.style.backgroundColor = 'white';
            ifDone = false
          }
        });

   
        //? put button on div
        newTaskDiv.appendChild(deleteButton);
        newTaskDiv.appendChild(doneButton);
        
        //? put div on the objective div
        objectiveDiv.appendChild(newTaskDiv);
        taskInput.value = '';


        this.saveTaskToLocalStorage(taskText);
      }
        
      } else {
        //!because empty task mean lol
        alert('Empty tasks are not allowed.');
      }
    }
    ngOnInit(): void {
      const tasks = this.getTasksFromLocalStorage();
      tasks.forEach((task) => {
        const newTaskDiv = document.createElement('div');
        newTaskDiv.className = 'task-item';
        newTaskDiv.textContent = task;
  
        //? create delete btton
        const deleteButton = document.createElement('button');
        deleteButton.className = 'task-button delete-button';
        deleteButton.textContent = 'Delete';
  
        deleteButton.addEventListener('click', () => {
          newTaskDiv.remove();
          this.removeTaskFromLocalStorage(task);
        });

                //? create Done Button
        //! stuff marked done will not be carried in localStorage

        const doneButton = document.createElement('button');
        doneButton.className = 'task-button done-button';
        doneButton.textContent = 'Done';
        let ifDoneR = false;
        doneButton.addEventListener('click', () => {
          

          if (ifDoneR === false) {
            newTaskDiv.style.backgroundColor = 'yellow';
            ifDoneR = true
          } else if (ifDoneR === true) {
            newTaskDiv.style.backgroundColor = 'white';
            ifDoneR = false
          }
        });
  
        //? put button on div
        newTaskDiv.appendChild(deleteButton);
        newTaskDiv.appendChild(doneButton);
  
        //? put div on the objective div
        const objectiveDiv = document.querySelector('.Objective');
        objectiveDiv!.appendChild(newTaskDiv);
      });
    }
  

    saveTaskToLocalStorage(taskText: string) {
      const tasks = this.getTasksFromLocalStorage();
      tasks.push(taskText);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    
    removeTaskFromLocalStorage(taskText: string) {
      const tasks = this.getTasksFromLocalStorage();
      const index = tasks.indexOf(taskText);
      if (index !== -1) {
        tasks.splice(index, 1);
      }
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    
    getTasksFromLocalStorage(): string[] {
      const tasks = localStorage.getItem('tasks');
      return tasks ? JSON.parse(tasks) : [];
    }

}

