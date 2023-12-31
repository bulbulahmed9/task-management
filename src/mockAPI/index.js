const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const db = localStorage;

export const SaveAPI = (payload) => {
  return delay(1000)
    .then(() => {
      const taskList = db.getItem("task");
      const newTaskList = taskList ? JSON.parse(taskList) : [];

      newTaskList.push(payload);
      db.setItem("task", JSON.stringify(newTaskList));

      return {
        message: "Task saved successfully",
        status: 200,
      };
    })
    .catch((error) => {
      throw error;
    });
};

export const GetAPI = (status, date) => {
  return delay(1000)
    .then(() => {
      const taskList = db.getItem("task");
      const newTaskList = taskList ? JSON.parse(taskList) : [];

      let responseData = [];

      if (status === "All" && date === null) {
        responseData = newTaskList;
      } else if (status !== "All" && date !== null) {
        let data = newTaskList.filter(
          (item) => item.status === status && item?.dueDate === date
        );
        responseData = data;
      } else if (status !== "All") {
        let data = newTaskList.filter((item) => item.status === status);
        responseData = data;
      } else if (date !== null) {
        let data = newTaskList.filter((item) => item?.dueDate === date);
        responseData = data;
      }

      return {
        data: responseData,
        status: 200,
      };
    })
    .catch((error) => {
      throw error;
    });
};

export const DeleteAPI = (id) => {
  return delay(1000)
    .then(() => {
      const taskList = db.getItem("task");
      const newTasks = taskList ? JSON.parse(taskList) : [];

      let newTasksFilter = newTasks.filter((item) => item?.id !== id);
      db.setItem("task", JSON.stringify(newTasksFilter));

      return {
        message: "Task Deleted Successfully",
        status: 200,
      };
    })
    .catch((error) => {
      throw error;
    });
};

export const StatusUpdateAPI = (id, status) => {
  return delay(1000)
    .then(() => {

      const taskList = db.getItem("task");
      const newTasks = taskList ? JSON.parse(taskList) : [];
      const findIndex = newTasks.findIndex(item => item.id === id);

      if(findIndex > -1) {
        newTasks[findIndex].status = status;
      }

      db.setItem("task", JSON.stringify(newTasks));

      return {
        message: "Status Updated Successfully",
        status: 200,
      };

    })
    .catch((error) => {
      throw error;
    });
};

export const updateAPI = (payload) => {
  console.log("payload",payload)
  return delay(1000)
    .then(() => {

      const {id, title, description, dueDate, status} = payload || {};

      const taskList = db.getItem("task");
      const newTasks = taskList ? JSON.parse(taskList) : [];
      const findIndex = newTasks.findIndex(item => item.id === id);

      if(findIndex > -1) {
        newTasks[findIndex].id = id;
        newTasks[findIndex].title = title;
        newTasks[findIndex].description = description;
        newTasks[findIndex].dueDate = dueDate;
        newTasks[findIndex].status = status;
      }

      db.setItem("task", JSON.stringify(newTasks));

      return {
        message: "Task Updated Successfully",
        status: 200,
      };

      
    })
    .catch((error) => {
      throw error;
    });
};
