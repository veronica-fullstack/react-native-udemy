import useAxios from "./useAxios";

 export async function storeExpense(expenseData) {
 
  const response = await useAxios.post(
   '/expenses',
    expenseData
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
    const response = await useAxios.get('/expenses');
  
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

  export function updateExpense(id, expenseData) {
     try { 
      const response = useAxios.patch(
        '/expenses/'+ id, 
        expenseData
      );
    //  console.log("response:", response);
      return response;
     } catch (error) {
       throw error;
       console.log("error: ", error);
     }
   
  }
  
  export function deleteExpense(id) {
    return useAxios.delete(`/expenses/${id}`);
  }