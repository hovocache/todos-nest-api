type Meta = {
    page: number;
    limit: number;
    total: number;
}

type AllDataRO<T> = {
    data: T[];
    meta: Meta;
}

export type { Meta, AllDataRO };