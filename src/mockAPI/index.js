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
