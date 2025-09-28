import { USER_ROLES } from "src/shared/shared.constants";

type User = {
  email: string;
  password: string;
  username?: string;
  role: (typeof USER_ROLES)[keyof typeof USER_ROLES];
  lastLoginedAt: Date;
  createdAt: Date;
  updatedAt: Date;
};
export type { User };