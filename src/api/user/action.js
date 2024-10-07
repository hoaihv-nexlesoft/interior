import AppAPIInstance from "../baseApi";
import { API } from "../constants";

export const getUser = async (id) => {
  return await AppAPIInstance.get(API.USER.DETAIL(id));
};

export const signInUser = async (payload) => {
  const { data } = payload;
  return await AppAPIInstance.post(API.USER.SIGNIN, data);
};

export const updateProfiles = async (payload) => {
  const { data } = payload;
  return await AppAPIInstance.patch(API.USER.UPDATE, data);
};

export const uploadAvatar = async (payload) => {
  const { file } = payload;
  const form = new FormData();
  form.append("avatar", file.originFileObj);
  return await AppAPIInstance.post(API.USER.UPDATE_AVATAR, form, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
};
