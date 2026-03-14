import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dsm.secondlock',
  name: '德施曼智能',
  groups: [
    {
      key: 1,
      name: '全屏广告-首页弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.dsm.secondlock.main.MainActivity',
          matches: '[vid="ivCancel"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/25995956',
        },
      ],
    },
  ],
});
