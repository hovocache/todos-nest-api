import { Admin } from "typeorm";

const PAGE_SIZE_VARIATIONS = {
    5: 5,
    10: 10,
    20: 20,
    50: 50,
    100: 100,
    200: 200
}

const USER_ROLES = {
  SUPERADMIN: 'superadmin',
  ADMIN: 'admin',
  USER: 'user',
}

export { PAGE_SIZE_VARIATIONS, USER_ROLES };