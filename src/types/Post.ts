export type Post = {
    kind: string;
    data: {
        author: string;
        author_fullname: string;
        title: string;
        thumbnail: string;
        created_utc: string;
        num_comments: number;
        name: string,
        after: string,
        before: string,
    }
};
