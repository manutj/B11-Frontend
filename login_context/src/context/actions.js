const ROOT_URL = "https://ecomerce-master.herokuapp.com/api/v1";

export async function loginUser(dispatch, loginPayload) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginPayload),
    };

    try {
        dispatch({ type: "REQUEST_LOGIN" });
        let response = await fetch(`${ROOT_URL}/login`, requestOptions);
        let data = await response.json();

        if (data) {
            dispatch({ type: "LOGIN_SUCCESS", payload: data });
            localStorage.setItem("currentUser", JSON.stringify(data));
            return data;
        }
    } catch (error) {
        console.log(error);
    }
}

export async function logout(dispatch) {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("currentUser");
}
