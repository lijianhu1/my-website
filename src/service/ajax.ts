import tool from '@/util/tool.js';
export default {
  login(data: any, success: any) {
    tool.ajax({
      url: '/login',
      type: 'post',
      data,
      success
    });
  },
  getPublicKey(success: any) {
    tool.ajax({
      url: '/getPublicKey',
      type: 'get',
      success
    });
  },
  getUserinfo(success: any) {
    tool.ajax({
      url: '/getUserInfo',
      type: 'get',
      success
    });
  },
  editUserInfo(data: any, success: any) {
    tool.ajax({
      url: '/editUserInfo',
      type: 'post',
      data,
      success
    });
  },
  deleteUserInfo(data: any, success: any) {
    tool.ajax({
      url: '/deleteUserInfo',
      type: 'get',
      data,
      success
    });
  },
};
