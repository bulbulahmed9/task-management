const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const db = localStorage;

export const SaveAPI = (payload) => {
  return delay(1000)
    .then(() => {
      // save task to local storage as like database
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
      //get task from local storage
      const taskList = db.getItem("task");
      const newTaskList = taskList ? JSON.parse(taskList) : [];

      if (status === "All" && date === null) {
        return {
          data: newTaskList,
          status: 200,
        };
      } else if (status !== "All" && date !== null) {
        let data = newTaskList.filter(
          (item) => item.status === status && item?.dueDate === date
        );
        return {
          data: data,
          status: 200,
        };
      } else if (status !== "All") {
        let data = newTaskList.filter((item) => item.status === status);
        return {
          data: data,
          status: 200,
        };
      } else if (date !== null) {
        let data = newTaskList.filter((item) => item?.dueDate === date);
        return {
          data: data,
          status: 200,
        };
      }
    })
    .catch((error) => {
      throw error;
    });
};

export const DeleteAPI = () => {
  return delay(1000)
    .then(() => {
      return [];
    })
    .catch((error) => {
      throw error;
    });
};

export const EditAPI = () => {
  return delay(1000)
    .then(() => {
      return [];
    })
    .catch((error) => {
      throw error;
    });
};
