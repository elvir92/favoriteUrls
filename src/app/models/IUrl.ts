export interface IUrl {
    id?: string;
    url: string;
    name: number;
    description?: string;
    isBroken?: boolean;
    insertDate?: Date;
    updateDate?: Date;
}