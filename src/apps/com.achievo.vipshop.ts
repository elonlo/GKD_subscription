import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.achievo.vipshop',
  name: '唯品会',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          activityIds: 'com.achievo.vipshop.activity.LodingActivity',
          matches: '[vid="adv_countdown"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/25890202',
        },
      ],
    },
  ],
});
