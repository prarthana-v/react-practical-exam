// import { addDoc, collection, getFirestore } from "firebase/firestore";
// import app from "../../firebaseConfig";
import { app } from "../../firebaseConfig";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  updateDoc,
  writeBatch,
} from "firebase/firestore";

const db = getFirestore(app);

export const Add_Emp = (Employ) => {
  // console.log(Employ);
  return async (dispatch) => {
    try {
      await addDoc(collection(db, "Employees"), {
        ...Employ,
      });
      dispatch({
        type: "add",
        payload: Employ,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const View_Emp = () => {
  return async (dispatch) => {
    try {
      let data = collection(db, "Employees");
      let EmpList = await getDocs(data);
      let employees = EmpList.docs.map((emps) => ({
        id: emps.id,
        ...emps.data(),
      }));
      // console.log(employees);
      dispatch({
        type: "view",
        payload: employees,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const Delete_Emp = (id) => {
  alert(id);
  return async (dispatch) => {
    try {
      let data = await doc(db, "Employees", id);
      await deleteDoc(data);
      console.log(data);
      dispatch({
        type: "delete",
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const Edit_Emp = (obj) => {
  // console.log(obj);
  return async (dispatch) => {
    try {
      let data = doc(db, "Employees", obj.id);
      await updateDoc(data, {
        name: obj.name,
        email: obj.email,
        salary: obj.salary,
        city: obj.city,
        des: obj.des,
        password: obj.password,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const handlemultipleDelte = (ids) => {
  // console.log(ids);
  return async (dispatch) => {
    try {
      ids.forEach((id) => {
        let data = doc(db, "Employees", id);
        deleteDoc(data);
      });
      dispatch({
        type: "Multiple-delete",
        payload: ids,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const handleStatus = (id, newstatus) => {
  // console.log(id, newstatus);
  return async (dispatch) => {
    try {
      if (newstatus === "active") {
        let data = doc(db, "Employees", id);
        await updateDoc(data, {
          status: "deactive",
        });
        dispatch(UpdateStatus(id, "deactive"));
      } else {
        let data = doc(db, "Employees", id);
        await updateDoc(data, {
          status: "active",
        });
        dispatch(UpdateStatus(id, "active"));
      }

      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
};

export const UpdateStatus = (id, status) => {
  return {
    type: "Update-status",
    payload: { id, status },
  };
};
