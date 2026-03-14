import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taou.maimai',
  name: '脉脉',
  groups: [
    {
      key: 1,
      name: '功能类-拓展职场人脉',
      desc: '自动点击左上角返回',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
        {
          activityIds: 'com.taou.maimai.activity.WebViewActivity',
          matches: [
            '[vid="menu_bar_left_btn_layout"][clickable=true][visibleToUser=true]',
            '[text="查找通讯录的好友"][visibleToUser=true]',
            '[text="一键查看"][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/25995163',
        },
      ],
    },
  ],
});
