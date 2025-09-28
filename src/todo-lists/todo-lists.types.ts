import { Types } from "mongoose";

import { TODO_STATUS_TYPES } from "./todo-lists.constants";

    type ToDo = {
    title: string;
    description?: string;
    status: (typeof TODO_STATUS_TYPES)[keyof typeof TODO_STATUS_TYPES];
    initiator?: Types.ObjectId;
    performer?: Types.ObjectId;
    reviewers?: Types.ObjectId[];
    createdAt: Date;
    updatedAt: Date;
    }

export type { ToDo };