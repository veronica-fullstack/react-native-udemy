import axios from 'axios';

const API_URL = 'https://x8ki-letl-twmt.n7.xano.io/api:awsgO99o'
const headers = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
};

export async function storeExpense(expenseData) {
 
  const response = await axios.post(
    API_URL + '/expenses',
    expenseData,
    headers
  );

  const id = response.data.id;
  return id;
  // .then(function (response) {
  //   console.log("post_result:" , response.data);
  //   console.log("post_result_id:" , response.data.id);
  //   return response.data.id;
  // })
  // .catch(function (error) {
  //   console.log(error);
  //   return null;
  // });

}
  
  export async function fetchExpenses() {
    const response = await axios.get(API_URL + '/expenses');
 
    const expenses = [];
  
    for (const key in response.data) {
      const expenseObj = {
        id: response.data[key].id,
        amount: response.data[key].amount,
        date: new Date(response.data[key].date),
        description: response.data[key].description
      };
      expenses.push(expenseObj);
    } 
    return expenses;
  }

  export async function updateExpense(id, expenseData) {
    try {
      console.log(API_URL + `/expenses/${id}`);
      console.log(expenseData);
      const response = await axios.put(API_URL + `/expenses/${id}`, expenseData);
      console.log(response);
      return response.data;
    } catch (error) {
      console.log("error: ", error);
    }
   
  }
  
  export function deleteExpense(id) {
    return axios.delete(API_URL + `/expenses/${id}`,headers);
  }