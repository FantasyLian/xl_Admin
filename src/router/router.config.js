'use strict'

import Index from '@/components/Index'
import Login from '@/components/Login'
import NotFound from '@/components/NotFound'

// 铃声管理
import RingtoneList from '@/components/ringtones/RingtoneList'
import RingType from '@/components/ringtones/RingtoneType'
import AuditingReason from '@/components/ringtones/AuditingReason'
import UserQuantity from '@/components/ringtones/UserQuantity'
import Labels from '@/components/ringtones/Labels'
import JokeList from '@/components/ringtones/JokeList'

// 用户管理
import UserList from '@/components/users/UserList'
import SystemUser from '@/components/users/SystemUser'
import UserComplain from '@/components/users/UserComplain'
import ChatHistory from '@/components/users/ChatHistory'
import BillsList from '@/components/users/BillsList'
import ProblemUser from '@/components/users/ProblemUser'
import HistoryUser from '@/components/users/HistoryUser'
import SelfbuiltUser from '@/components/users/SelfbuiltUser'

// 朋友圈管理
import Dynamic from '@/components/friends/Dynamic'
import Feedback from '@/components/friends/Feedback'

// 开发者管理
import NoticeType from '@/components/developers/Noticetype'
import SmsNotify from '@/components/developers/SMSNotify'

// 统计管理
import UserData from '@/components/statistics/UserData'
import RingtoneData from '@/components/statistics/RingtoneData'
import Finance from '@/components/statistics/Finance'
import TongsType from '@/components/statistics/RingtoneType'
import RedPacket from '@/components/statistics/RedPacket'

const routes = [
  {
    path: '/',
    component: Index,
    redirect: 'ringtones/list',
    name: 'ringtones',
    children: [
      {
        path: '/ringtones/list',
        component: RingtoneList,
        meta: {
          title: '炫铃列表'
        }
      }, {
        path: '/ringtones/type',
        component: RingType,
        meta: {
          title: '炫铃类型'
        }
      }, {
        path: '/ringtones/reason',
        component: AuditingReason,
        meta: {
          title: '审核理由'
        }
      }, {
        path: '/ringtones/quantity',
        component: UserQuantity,
        meta: {
          title: '铃声数量'
        }
      }, {
        path: '/ringtones/label',
        component: Labels,
        meta: {
          title: '标签管理'
        }
      }, {
        path: '/ringtones/joke',
        component: JokeList,
        meta: {
          title: '段子管理'
        }
      }
    ]
  },
  {
    path: '/users',
    component: Index,
    redirect: 'users/list',
    name: 'users',
    children: [
      {
        path: '/users/list',
        component: UserList,
        meta: {
          title: '用户列表'
        }
      }, {
        path: '/users/system',
        component: SystemUser,
        meta: {
          title: '系统用户'
        }
      }, {
        path: '/users/complain',
        component: UserComplain,
        meta: {
          title: '用户投诉'
        }
      }, {
        path: '/users/chat',
        component: ChatHistory,
        meta: {
          title: '聊天记录'
        }
      }, {
        path: '/users/bills',
        component: BillsList,
        meta: {
          title: '流水账单'
        }
      }, {
        path: '/users/problem',
        component: ProblemUser,
        meta: {
          title: '问题用户'
        }
      }, {
        path: '/users/history',
        component: HistoryUser,
        meta: {
          title: '历史用户'
        }
      }, {
        path: '/users/selfbuilt',
        component: SelfbuiltUser,
        meta: {
          title: '自建用户'
        }
      }
    ]
  },
  {
    path: '/friends',
    component: Index,
    redirect: 'friends/dynamic',
    name: 'friends',
    children: [
      {
        path: '/friends/dynamic',
        component: Dynamic,
        meta: {
          title: '动态管理'
        }
      }, {
        path: '/friends/feedback',
        component: Feedback,
        meta: {
          title: '用户反馈'
        }
      }
    ]
  },
  {
    path: '/developers',
    component: Index,
    redirect: 'developers/noticetype',
    name: 'develpoers',
    children: [
      {
        path: '/developers/noticetype',
        component: NoticeType,
        meta: {
          title: '通知类型'
        }
      }, {
        path: '/developers/smsnotify',
        component: SmsNotify,
        meta: {
          title: '短信通知'
        }
      }
    ]
  },
  {
    path: '/statistics',
    component: Index,
    redirect: 'statistics/userdata',
    name: 'statistics',
    children: [
      {
        path: '/statistics/userdata',
        component: UserData,
        meta: {
          title: '用户数据'
        }
      }, {
        path: '/statistics/tonesdata',
        component: RingtoneData,
        meta: {
          title: '铃声数据'
        }
      }, {
        path: '/statistics/finance',
        component: Finance,
        meta: {
          title: '财务统计'
        }
      }, {
        path: '/statistics/tonestype',
        component: TongsType,
        meta: {
          title: '铃声类型'
        }
      }, {
        path: '/statistics/redpacket',
        component: RedPacket,
        meta: {
          title: '红包派发金额'
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '*',
    component: NotFound,
    hidden: true
  }
]

export default routes