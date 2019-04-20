export class Series {
    id: number;
    name: string;
    user_id: number;
    universe_id: number;
    user: {
        id: number;
        username: string;
    };
    universe: {
        id: number;
        name: string;
    };
}
