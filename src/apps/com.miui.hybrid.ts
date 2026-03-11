import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.hybrid',
  name: '快应用服务框架',
  groups: [
    {
      key: 1,
      name: '全屏广告-应用外跳转',
      desc: '从云蚁物联广告跳转后返回',
      matchRoot: true,
      enable: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          fastQuery: true,
          action: 'back',
          activityIds: 'com.miui.hybrid.VendorLauncherActivity$Launcher1',
          matches: '[id="com.miui.hybrid:id/hybrid_view"][visibleToUser=true]',
        },
        {
          key: 1,
          fastQuery: true,
          action: 'back',
          activityIds: 'com.miui.hybrid.VendorLauncherActivity$Launcher1',
          matches:
            '[id="com.miui.hybrid:id/hybrid_view"] WebView[visibleToUser=true]',
        },
      ],
    },
  ],
});
