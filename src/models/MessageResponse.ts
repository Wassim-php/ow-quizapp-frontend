export interface MessageResponse {
    message: string;
    state: boolean;
    statusCode: number;
    payload: Object | null | undefined;
}