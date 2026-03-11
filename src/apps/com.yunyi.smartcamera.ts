import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.yunyi.smartcamera',
  name: '云蚁物联',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      desc: '点击关闭',
      enable: true,
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.ants360.yicamera.activity.MainActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^="立即" || text$="详情" || text^="了解" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          exampleUrls: 'https://e.gkd.li/ad388d03-bb0a-44a4-92ee-af37b83776da',
          snapshotUrls: 'https://i.gkd.li/i/24979355',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.xiaoyi.yiplayer.ui.PlayerActivity',
          matches: '@[vid="ivClose"] - [text="专属福利"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/248a2243-5323-4a21-bed2-25f6afc8a88b',
          snapshotUrls: 'https://i.gkd.li/i/24979364',
        },
        {
          key: 2,
          fastQuery: true,
          action: 'clickCenter',
          activityIds:
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTFullScreenVideoActivity',
          matches:
            '@ImageView[visibleToUser=true][width<=100 && height<=100][left>=1000][top>=2450]',
          snapshotUrls: 'https://i.gkd.li/i/25889335',
        },
        {
          key: 3,
          fastQuery: true,
          matches: [
            '[text*="广告"][visibleToUser=true]',
            '[text="关闭"][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/24989298',
        },
        {
          key: 4,
          fastQuery: true,
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^="立即" || text$="详情" || text^="了解" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          snapshotUrls: 'https://i.gkd.li/i/24989256',
        },
        {
          key: 5,
          fastQuery: true,
          matches: '[vid="iv_ad_logo"] - [vid="iv_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/25016571',
        },
        {
          key: 6,
          fastQuery: true,
          action: 'back',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: '[text="反馈"][visibleToUser=true]',
        },
        {
          key: 7,
          fastQuery: true,
          activityIds: [
            'com.ants360.yicamera.activity.MainActivity',
            'com.xiaoyi.yiplayer.ui.PlayerActivity',
          ],
          matches:
            '@[clickable=true][visibleToUser=true][width<=60 && height<=60] <<n [vid="adContainer"]',
        },
        {
          key: 8,
          fastQuery: true,
          activityIds: [
            'com.ants360.yicamera.activity.MainActivity',
            'com.ants360.yicamera.activity.SplashActivityChina',
          ],
          matches: '[vid="btnAntsDialogLeft"][text="仔细思考"][clickable=true]',
        },
        {
          key: 9,
          fastQuery: true,
          activityIds: 'com.ants360.yicamera.activity.MainActivity',
          matches:
            '@ImageView[clickable=true][visibleToUser=true][width<=60 && height<=60][left>=1000] <<n [vid="native_ad_container" || vid="ad_container"]',
        },
        {
          key: 10,
          fastQuery: true,
          activityIds: [
            'com.ants360.yicamera.activity.MainActivity',
            'com.xiaoyi.yiplayer.ui.PlayerActivity',
          ],
          matches: '@[clickable=true] > [text="不感兴趣"][visibleToUser=true]',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告',
      desc: '点击关闭',
      enable: true,
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.ants360.yicamera.activity.MainActivity',
          matches:
            'ImageView[childCount=0] < @* - * > [text^="立即" || text*="了解更多" || text*="快手"][visibleToUser=true] <<n [vid="native_ad_container"]',
          exampleUrls: 'https://e.gkd.li/0f5246d3-42c4-486d-9694-f90dd19a22d2',
          snapshotUrls: [
            'https://i.gkd.li/i/24979363',
            'https://i.gkd.li/i/24989254',
            'https://i.gkd.li/i/24989255',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: [
            'com.ants360.yicamera.activity.MainActivity',
            'com.xiaoyi.yiplayer.ui.PlayerActivity',
          ],
          matches: '[vid="tvShow"][text="收起"][clickable=true]',
        },
      ],
    },
    {
      key: 3,
      name: '权限提示-通知权限',
      enable: true,
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.ants360.yicamera.activity.MainActivity',
          matches:
            '[text="开启通知"][childCount=0] +n [text="暂不开启"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/25017451',
        },
      ],
    },
    {
      key: 4,
      name: '开屏广告-启动页广告',
      desc: '点击跳过或关闭按钮',
      enable: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: [
            'com.ants360.yicamera.activity.SplashActivityChina',
            'com.ants360.yicamera.fragment.AdDialogFragment',
          ],
          matches: '[vid="ptgSkipLayout"][clickable=true]',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: [
            'com.ants360.yicamera.activity.SplashActivityChina',
            'com.ants360.yicamera.fragment.AdDialogFragment',
          ],
          matches: '[vid="tv_nm_splash_count_down"][clickable=true]',
        },
        {
          key: 11,
          fastQuery: true,
          action: 'clickCenter',
          activityIds: [
            'com.ants360.yicamera.activity.SplashActivityChina',
            'com.ants360.yicamera.fragment.AdDialogFragment',
          ],
          matches:
            '[desc="skip_button"][clickable=true][visibleToUser=true] <<n [id="com.kwad.dy.sdk:id/ksad_splash_root_container"]',
        },
        {
          key: 12,
          fastQuery: true,
          action: 'clickCenter',
          activityIds: 'com.ants360.yicamera.activity.SplashActivityChina',
          matches:
            '[vid="ptgImgClose"][desc="Close"][clickable=true][visibleToUser=true] <<n [vid="webContainer"]',
        },
        {
          key: 13,
          fastQuery: true,
          action: 'clickCenter',
          activityIds: 'com.ants360.yicamera.activity.SplashActivityChina',
          matches:
            '[vid="ptgImgBack"][desc="Back"][clickable=true][visibleToUser=true] <<n [vid="webContainer"]',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: [
            'com.ants360.yicamera.activity.MainActivity',
            'com.ants360.yicamera.activity.SplashActivityChina',
            'com.ants360.yicamera.fragment.AdDialogFragment',
          ],
          matches: '[text^="跳过"][clickable=true][left>=900][top<300]',
        },
        {
          key: 3,
          fastQuery: true,
          activityIds: [
            'com.ants360.yicamera.activity.SplashActivityChina',
            'com.ants360.yicamera.fragment.AdDialogFragment',
          ],
          position: {
            left: 'width * 0.09',
            top: 'height * 0.90',
          },
          matches: [
            '[text*="第三方应用" || text*="详情页"][visibleToUser=true]',
            '[text*="关闭声音"][visibleToUser=true]',
          ],
        },
        {
          key: 4,
          fastQuery: true,
          action: 'clickCenter',
          activityIds: [
            'com.ants360.yicamera.activity.MainActivity',
            'com.ants360.yicamera.activity.SplashActivityChina',
            'com.ants360.yicamera.fragment.AdDialogFragment',
          ],
          matches: '[text="立即进入"][visibleToUser=true]',
        },
        {
          key: 5,
          fastQuery: true,
          activityIds: [
            'com.ants360.yicamera.activity.SplashActivityChina',
            'com.ants360.yicamera.fragment.AdDialogFragment',
          ],
          position: {
            left: 'width * 0.96',
            top: 'height * 0.065',
          },
          matches: [
            '[text="立即进入"][visibleToUser=true]',
            '[text*="落地页" || text*="三方APP"][visibleToUser=true]',
          ],
        },
        {
          key: 6,
          fastQuery: true,
          action: 'clickCenter',
          activityIds: [
            'com.ants360.yicamera.activity.SplashActivityChina',
            'com.ants360.yicamera.fragment.AdDialogFragment',
          ],
          matches: '[text="广告"][visibleToUser=true]',
        },
        {
          key: 7,
          fastQuery: true,
          activityIds: [
            'com.ants360.yicamera.activity.SplashActivityChina',
            'com.ants360.yicamera.fragment.AdDialogFragment',
          ],
          position: {
            left: 'width * 0.09',
            top: 'height * 0.94',
          },
          matches: [
            '[text*="上滑或点击查看"][visibleToUser=true]',
            '[text*="第三方应用" || text*="详情页"][visibleToUser=true]',
          ],
        },
      ],
    },
  ],
});
