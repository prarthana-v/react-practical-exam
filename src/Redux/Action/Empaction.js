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
        phone: obj.phone,
        salary: obj.salary,
        des: obj.des,
        password: obj.password,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const handlemultipleDelte = (mdel) => {
  return async (dispatch) => {
    try {
      let batch = writeBatch();
      let data = await getDocs(collection(db, "Employees"));

      data.docs.map((document) => ({}));

      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
};
