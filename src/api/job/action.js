import AppAPIInstance from "../baseApi";
import { API } from "../constants";

export const getListJobs = async (payload) => {
  const { params } = payload;
  return await AppAPIInstance.get(API.JOB.LIST, {
    params,
  });
};

export const createJobs = async (data) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const newData = { ...data, userId: user.id };
  return await AppAPIInstance.post(API.JOB.CREATE, newData);
};

export const getJobDetail = async (id) => {
  return await AppAPIInstance.get(API.JOB.DETAIL(id));
};

export const deleteJobs = async (id) => {
  return await AppAPIInstance.delete(API.JOB.DELETE(id));
};

export const editJobs = async (payload) => {
  const { id, data } = payload;
  return await AppAPIInstance.put(API.JOB.EDIT(id), data);
};

export const receiveJobs = async (payload) => {
  const { id, data } = payload;
  const user = JSON.parse(localStorage.getItem("user"));
  const currentUser = firebaseApp.auth().currentUser;
  if (!user) {
    toast.error("Bạn phải đăng nhập mới có thể gửi Bid");
  }
  const newData = { ...data, uid: currentUser.uid };
  return await AppAPIInstance.post(API.JOB.RECEIVE(id), newData);
};

export const getJobCreated = async (payload) => {
  const { params } = payload;
  return await AppAPIInstance.get(API.JOB.JOB_CREATED, { params });
};

export const getJobBided = async (payload) => {
  const { params } = payload;
  return await AppAPIInstance.get(API.JOB.JOB_BIDED, { params });
};

export const getJobReceive = async (payload) => {
  const { params } = payload;
  return await AppAPIInstance.get(API.JOB.JOB_RECEIVED, { params });
};

export const receiveBid = async (payload) => {
  const { id, data } = payload;
  return await AppAPIInstance.post(API.JOB.RECEIVE_BID(id), data);
};

export const detailBidJob = async (payload) => {
  const { params } = payload;
  return await AppAPIInstance.get(API.JOB.DETAIL_BID_JOB, { params });
};
