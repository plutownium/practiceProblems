// pretend you're making a login form.

const USERNAME_ACTUAL: string = "foobar";
const PASSWORD_ACTUAL: string = "234gfd";

function login(username: string, password: string): boolean {
    if (username === USERNAME_ACTUAL && password == PASSWORD_ACTUAL) {
        return true;
    }
    return false;
}

function signUp(username: string, password: string, email: string): string {
    if (username.length > 6 && username.length < 15) {
        if (password.length > 6) {
            if (email.includes("@") && email.includes(".com")) {
                return "success";
            }
        }
    }
    return "failure";
}

function redirectOnSignup(success: boolean): string {
    if (success) {
        return "home";
    } else {
        return "landing";
    }
}