export const API = {
  JOB: {
    LIST: "/posts/list",
    DETAIL: (id) => `/posts/${id}`,
    CREATE: "/posts/create-post",
    EDIT: (id) => `/jobs/${id}`,
    DELETE: (id) => `/jobs/${id}`,
    RECEIVE: (id) => `/posts/${id}/send-offer`,
    JOB_CREATED: "/posts/list/user-posted",
    JOB_BIDED: "/posts/list/posts-user-sent-offer",
    JOB_RECEIVED: "/posts/list/posts-user-have-receive",
    RECEIVE_BID: (id) => `/posts/${id}/receive-offer`,
    DETAIL_BID_JOB: `/posts/offer-detail`,
  },
  USER: {
    DETAIL: (id) => `/users/profile/${id}`,
    SIGNIN: "/login",
    UPDATE: "/users/update",
    UPDATE_AVATAR: "/users/upload",
  },
};

export const QUERY_KEY = {
  JOB: {
    LIST: "get-list-job",
    DETAIL: "get-job-detail",
    CREATE: "create-job",
    EDIT: "edit-job",
    DELETE: "delete-job",
    RECEIVE: "receive-job",
    JOB_CREATED: "job-created",
    JOB_BIDED: "job-bided",
    JOB_RECEIVED: "job-received",
    RECEIVE_BID: "receive-bid",
    DETAIL_BID_JOB: "detail-bid-job",
  },
  USER: {
    DETAIL: "get-user-detail",
    SIGNIN: "signin-user",
    UPDATE: "update-user",
  },
};
