window.addEventListener('load', () => {
	const form = document.querySelector("#tasks_form");
	const input = document.querySelector("#add_task");
	const list_el = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;
		/* CREATING TASK ITEM */
		const task_el = document.createElement('div');
		task_el.classList.add('task');

		/* TASK CONTENT CREATION */

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		/* APPEND TO THE PAGE */

		task_el.appendChild(task_content_el);

		/* TASK STATUS */

        const task_comp=document.createElement('input');
        task_comp.classList.add('t1');
        task_comp.type='text';
        task_comp.value="YET TO DO!";
        task_comp.setAttribute('readonly', 'readonly');        

		/* USER ENTERED TASK CONTENT */

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');

		/* APPENDING THE TASK CONTENT */

		task_content_el.appendChild(task_input_el);

		/* APPENDING TASK STATUS */

        task_content_el.appendChild(task_comp);

		/* USER OPTIONS */

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');

		/* EDIT OPTION */
		
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';

		/** DELETE OPTION */

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

		/** MARK AS DONE */

        const task_markasdone_el = document.createElement('button');
		task_markasdone_el.classList.add('markasdone');
		task_markasdone_el.innerText = 'Mark as Done';

		/** UNMARK */

        const task_undomark_el = document.createElement('button');
		task_undomark_el.classList.add('undomark');
		task_undomark_el.innerText = 'Undo Mark';

		/** APPENDING OPTIONS TO THE PAGE */

		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);
        task_actions_el.appendChild(task_markasdone_el);
        task_actions_el.appendChild(task_undomark_el);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		input.value = '';

		/** ADDING ACTIONS FOR OPTIONS */

		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});

		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});

        task_markasdone_el.addEventListener('click',(e)=> {
				task_comp.value="Done 🗸"; 
        });

        task_undomark_el.addEventListener('click',(e)=> {
            task_comp.value="Yet to Do!"; 
    });
	});
});