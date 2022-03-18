import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";

import { addLeadingZeroToMonth } from "~/utils/date";
import { db, auth } from "~/utils/firebase";

export function getUserExpensesByYYMM(uid, dateYYMM) {
  const year = dateYYMM.getUTCFullYear();
  const month = dateYYMM.getUTCMonth() + 1; // 0 = Jan

  const q = query(
    collection(db, "users", uid, "expenses"),
    where("date", ">=", `${year}-${addLeadingZeroToMonth(month)}`),
    where("date", "<=", `${year}-${addLeadingZeroToMonth(month + 1)}`),
    orderBy("date", "desc")
  );

  return getDocs(q)
    .then((querySnapshot) => {
      const expenses = [];
      querySnapshot.forEach((doc) => {
        const expense = { ...doc.data(), id: doc.id };
        expenses.push(expense);
      });

      return expenses;
    })
    .then((expenses) => expenses);
}

export function createExpense(expense) {
  let { uid } = auth.currentUser;

  const collectionRef = collection(db, "users", uid, "expenses");

  return addDoc(collectionRef, expense);
}

export function updateExpense(expense) {
  let { uid } = auth.currentUser;

  const expenseRef = doc(db, "users", uid, "expenses", expense.id);

  return updateDoc(expenseRef, expense);
}

export function deleteExpense(id) {
  let { uid } = auth.currentUser;

  const expenseRef = doc(db, "users", uid, "expenses", id);

  return deleteDoc(expenseRef);
}
