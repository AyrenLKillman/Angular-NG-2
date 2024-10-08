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
        

      
      //? Create done button
        const completeButton = document.createElement('button');
        completeButton.className = 'task-button complete-button';
        completeButton.textContent = 'Complete';
       
        let isComplete = false;

        completeButton.addEventListener('click', () => {
          if (isComplete) {
            newTaskDiv.style.backgroundColor = 'white';
            isComplete = false;
            
          } else {
            newTaskDiv.style.backgroundColor = 'yellow';
            isComplete = true;
            
          } 
        });

          
          



        //? create delete btton
        const deleteButton = document.createElement('button');
        deleteButton.className = 'task-button delete-button';
        deleteButton.textContent = 'Delete';
        
        deleteButton.addEventListener('click', () => {
          newTaskDiv.remove();
        })
        
   
        //? put button on div
        newTaskDiv.appendChild(completeButton);
        newTaskDiv.appendChild(deleteButton);
        
        //? put div on the objective div
        objectiveDiv.appendChild(newTaskDiv);
        taskInput.value = '';
      } else {
        //!because empty task mean lol
        alert('Empty tasks are not allowed.');
      }
    }


  }
















  }



