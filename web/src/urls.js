
import * as config from "./config";

export const LOGIN_URL = `${config.apiBaseUrl}/api/auth/login`;
export const AUTH_CHECK_URL = `${config.apiBaseUrl}/api/auth/isAuthenticated`;
export const LOGOUT_URL = `${config.apiBaseUrl}/api/auth/logout`;
export const PROFILE_URL = `${config.apiBaseUrl}/api/user/me`;
export const USER_URL = `${config.apiBaseUrl}/api/user`;

export const EMPLOYEE_URL = `${config.apiBaseUrl}/api/employees`;
export const AUTHORITY_URL = `${config.apiBaseUrl}/api/authorities`;

export const FORMB_UPLOAD_URL = `${config.apiBaseUrl}/api/authorities/uploads`;
