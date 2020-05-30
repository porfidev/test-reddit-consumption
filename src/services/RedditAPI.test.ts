import RedditAPI from "./RedditAPI";
// const getInstanceMock = jest.fn();
// jest.mock('./RedditAPI', () => ({
//     default: class {
//         public static getInstance() {
//             getInstanceMock()
//         }
//     }
// }));

it("should be a singleton instance", () => {
  const redditApi = RedditAPI.getInstance();
  const redditApiTest = RedditAPI.getInstance();
  expect(redditApi).toEqual(redditApiTest);
});

it('should return object with data', async () => {
    const redditAPI = RedditAPI.getInstance();
    const data = await redditAPI.fetchPosts();
    expect(typeof data).toBe('object');
});

it('should return data with limit param', async () => {
    const redditAPI = RedditAPI.getInstance();
    const data = await redditAPI.fetchPosts(2);
    expect(typeof data).toBe('object');
});

it('should not throw error with invalid "after" param', async () => {
    const redditAPI = RedditAPI.getInstance();
    const data = await redditAPI.fetchPosts(2, 'invalid');
    expect(typeof data).toBe('object');
});


// TODO: Improve MOCKS

// describe("mock tests", () => {
//     it("should call http request", () => {
//         const redditAPI = RedditAPI.getInstance();
//         console.log(RedditAPI);
//         redditAPI.fetchPosts();
//         const mockRedditApiInstance = RedditAPI.mock.instances[0];
//         const mockHttpRequest = mockRedditApiInstance.httpRequest;
//         expect(mockHttpRequest).toHaveBeenCalled();
//     });
// })

// describe("Test Mock functions", () => {
//   const mockHttpRequest = jest.fn();
//   jest.mock("./RedditAPI", () => {
//     return jest.fn().mockImplementation(() => {
//       return { httpRequest: mockHttpRequest, getInstance: jest.fn() };
//     });
//   });
//
//     it("should call http request", () => {
//         const redditAPI = RedditAPI.getInstance();
//         redditAPI.fetchPosts();
//         expect(mockHttpRequest).toHaveBeenCalled();
//     });
// });
