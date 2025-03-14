$(document).ready(function () {
    loadTasks();

    // Add new task when button is clicked
    $("#newTask").click(function () {
        let newTask = prompt("Enter a new TO DO:");
        if (newTask) addTask(newTask);
    });

    // Function to add a task
    function addTask(text, save = true) {
        if (!text.trim()) return;

        let $task = $("<div>").addClass("task").text(text);

        // Click event to remove a task
        $task.click(function () {
            if (confirm("Do you want to remove this task?")) {
                $(this).remove();
                saveTasks();
            }
        });

        $("#ft_list").prepend($task);

        if (save) saveTasks();
    }

    // Save tasks in cookies
    function saveTasks() {
        let tasks = [];
        $(".task").each(function () {
            tasks.push($(this).text());
        });
        setCookie("tasks", JSON.stringify(tasks), 7);
    }

    // Load tasks from cookies
    function loadTasks() {
        let tasks = getCookie("tasks");
        if (tasks) {
            JSON.parse(tasks).forEach(task => addTask(task, false));
        }
    }

    // Function to set a cookie
    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            let date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    }

    // Function to get a cookie
    function getCookie(name) {
        let nameEQ = name + "=";
        let cookies = document.cookie.split(";");
        for (let i = 0; i < cookies.length; i++) {
            let c = cookies[i].trim();
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length);
        }
        return null;
    }
});
