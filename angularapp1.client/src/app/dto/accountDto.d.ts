export interface IAccessTokenResult {
  expiredTime: Date;
  authToken: string;
}

export interface ILoginArgs {
  userId: string;
  credential: string;
  vcode: string;
}

export interface ILoginUserInfo {
  loginUserId: string;
  loginUserName: string;
  expiredTime: Date;
}
