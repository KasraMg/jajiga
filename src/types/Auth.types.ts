export interface userInfoObj {
  createdAt: string;
  firstName: string;
  lastName: string;
  password: string;
  phone: string;
  refreshToken: string;
  role: string;
  updatedAt: string;
}
export interface userVillasObj {
  address: {
    state: string;
    city: string;
    address: string;
  };
  cover: [];
  createdAt: string;
  finished: boolean;
  step: number;
  updatedAt: string;
  user: string;
  __v: number;
  _id: string;
}

export interface userObj {
  message: string;
  statusCode: number;
  user: userInfoObj;
  villas: userVillasObj[];
}
