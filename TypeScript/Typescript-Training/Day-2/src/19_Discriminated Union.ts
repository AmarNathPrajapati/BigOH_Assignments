interface SuccessResponse {
    status: "success";
    data: string;
  }
  
  interface ErrorResponse {
    status: "error";
    message: string;
  }
  
  type ApiResponse = SuccessResponse | ErrorResponse;
  
  function handleResponse(response: ApiResponse) {
    if (response.status === "success") {
      console.log("Data received:", response.data);
    } else {
      console.log("Error:", response.message);
    }
  }
  
  const res1: ApiResponse = { status: "success", data: "User data loaded" };
  const res2: ApiResponse = { status: "error", message: "Failed to load data" };
  
  handleResponse(res1); // Data received: User data loaded
  handleResponse(res2); // Error: Failed to load data
  

type Params = {
  status:'ACTIVE' | 'DELETED'
}

function generator<T extends Params['status']>(status:T):(T extends 'ACTIVE'? 'Aditya':'arun'){
  return 'a'
}

  
const d = generator('ACTIVE')