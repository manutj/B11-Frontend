let user = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser")).role
    : "";
let token = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser")).token
    : "";

export const initialState = {
    userDetails: "" || user,
    token: "" || token,
    loading: false,
};

export const AuthReducer = (initialState, action) => {
    switch (action.type) {
        case "REQUEST_LOGIN":
            return {
                ...initialState,
                loading: true,
            };

        case "LOGIN_SUCCESS":
            return {
                ...initialState,
                user: action.payload.role,
                token: action.payload.token,
                loading: false,
            };

        case "LOGOUT":
            return {
                ...initialState,
                userDetails: "",
                user: "",
                token: "",
            };

        case "LOGIN_ERROR":
            return {
                ...initialState,
                loading: false,
                errorMessage: action.payload.message,
            };
    }
};
