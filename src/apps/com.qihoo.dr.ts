import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qihoo.dr',
  name: '360行车助手',
  groups: [
    {
      key: 1,
      name: '更新提示-版本升级弹窗',
      enable: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.qihoo.dr.ActivityMain',
          matches:
            '[vid="btnClose"][clickable=true][visibleToUser=true] <<n [vid="hasnew_layout"]',
          snapshotUrls: 'https://i.gkd.li/i/25894012',
        },
      ],
    },
  ],
});
