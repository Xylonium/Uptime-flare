import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // Title for your status page
  title: "Xylonstar's Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://github.com/Xylonstar', label: 'GitHub' },
    { link: 'https://blog.xons.me/', label: 'Blog' },
    { link: 'mailto:Xylonstar@outlook.com', label: 'Email Me', highlight: true },
  ],
  // [OPTIONAL] Group your monitors
  // If not specified, all monitors will be shown in a single list
  // If specified, monitors will be grouped and ordered, not-listed monitors will be invisble (but still monitored)
  group: {
    '🌐 Public': ['home','homepage','cloudflare-blog','vercel-blog','netlify-blog'],
    '🔐 Private': ['lobechat','nextchat','cloud','img','image','memos','note','github-proxy','docker-img','pintree','hot','about'],
    '🎞️ Media': ['music','sp','libre','libre-cf','libre-bak','tvbox','nav','tv'],
    '🧰 Api': ['hot-api','twikoo-api','nca-api','nca-lam-api','nca-foc-api','meting-api','unm-server-api'],
    '🪜 Proxy': ['sub','bpb','epe','edt','cfnat','yg','3K','hq'],
  },
}

const workerConfig: WorkerConfig = {
  // Write KV at most every 3 minutes unless the status changed
  kvWriteCooldownMinutes: 3,
  // Enable HTTP Basic auth for status page & API by uncommenting the line below, format `<USERNAME>:<PASSWORD>`
  // passwordProtection: 'username:password',
  // Define all your monitors here
  monitors: [
    // // Example HTTP Monitor
    // {
    //   // `id` should be unique, history will be kept if the `id` remains constant
    //   id: 'foo_monitor',
    //   // `name` is used at status page and callback message
    //   name: 'My API Monitor',
    //   // `method` should be a valid HTTP Method
    //   method: 'POST',
    //   // `target` is a valid URL
    //   target: 'https://example.com',
    //   // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
    //   tooltip: 'This is a tooltip for this monitor',
    //   // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
    //   statusPageLink: 'https://example.com',
    //   // [OPTIONAL] `hideLatencyChart` will hide status page latency chart if set to true
    //   hideLatencyChart: false,
    //   // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
    //   expectedCodes: [200],
    //   // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
    //   timeout: 10000,
    //   // [OPTIONAL] headers to be sent
    //   headers: {
    //     'User-Agent': 'Uptimeflare',
    //     Authorization: 'Bearer YOUR_TOKEN_HERE',
    //   },
    //   // [OPTIONAL] body to be sent
    //   body: 'Hello, world!',
    //   // [OPTIONAL] if specified, the response must contains the keyword to be considered as operational.
    //   responseKeyword: 'success',
    //   // [OPTIONAL] if specified, the response must NOT contains the keyword to be considered as operational.
    //   responseForbiddenKeyword: 'bad gateway',
    //   // [OPTIONAL] if specified, will call the check proxy to check the monitor, mainly for geo-specific checks
    //   // refer to docs https://github.com/lyc8503/UptimeFlare/wiki/Check-proxy-setup before setting this value
    //   // currently supports `worker://` and `http(s)://` proxies
    //   checkProxy: 'https://xxx.example.com OR worker://weur',
    //   // [OPTIONAL] if true, the check will fallback to local if the specified proxy is down
    //   checkProxyFallback: true,
    // },
    // Example TCP Monitor
    {
      id: 'home',
      name: 'Home',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://xons.me/',
      tooltip: 'My home server monitor',
      statusPageLink: 'https://xons.me/',
      timeout: 10000,
    },
    {
      id: 'homepage',
      name: 'Homepage',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://home.xons.me/',
      tooltip: 'My homepage server monitor',
      statusPageLink: 'https://home.xons.me/',
      timeout: 10000,
    },
    {
      id: 'cloudflare-blog',
      name: 'Cloudflare CDN',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://blog.xons.me/',
      tooltip: 'My blog server monitor',
      statusPageLink: 'https://blog.xons.me/',
      timeout: 10000,
    },
    {
      id: 'vercel-blog',
      name: 'Vercel CDN',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://vercel.xons.me/',
      tooltip: 'My blog server monitor',
      statusPageLink: 'https://vercel.xons.me',
      timeout: 10000,
    },
    {
      id: 'netlify-blog',
      name: 'Netlify CDN',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://netlify.xons.me/',
      tooltip: 'My blog server monitor',
      statusPageLink: 'https://netlify.xons.me',
      timeout: 10000,
    },
    {
      id: 'pintree',
      name: 'Bookmark',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://pintree.xons.me/',
      tooltip: 'My bookmark server status',
      statusPageLink: 'https://pintree.xons.me/',
      timeout: 10000,
    },
    {
      id: 'memos',
      name: 'Memos',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://memos.xons.me/',
      tooltip: 'My memos server status',
      statusPageLink: 'https://memos.xons.me/',
      timeout: 10000,
    },
    {
      id: 'hot',
      name: 'Hot',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://hot.xons.me/',
      tooltip: 'My news server status',
      statusPageLink: 'https://hot.xons.me/',
      timeout: 10000,
    },
    {
      id: 'docker-img',
      name: 'DockerHub',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://docker.xons.zabc.net/',
      tooltip: 'My dockerhub server monitor',
      statusPageLink: 'https://docker.xons.zabc.net/',
      timeout: 10000,
    },
    {
      id: 'github-proxy',
      name: 'GhProxy',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://ghp.xon.hidns.vip/',
      tooltip: 'My ghproxy server monitor',
      statusPageLink: 'https://ghp.xon.hidns.vip/',
      timeout: 10000,

    },
    {
      id: 'cloud',
      name: 'Cloud',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://pan.xons.dpdns.org/',
      tooltip: 'My cloud server monitor',
      statusPageLink: 'https://pan.xons.dpdns.org/',
      timeout: 10000,
    },
    {
      id: 'note',
      name: 'Enclosed',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://note.xons.me/',
      tooltip: 'My enclosed server monitor',
      statusPageLink: 'https://note.xons.me/',
      timeout: 10000,
    },
    // {
    //   id: 'webssh',
    //   name: 'WebSSH',
    //   // `method` should be `TCP_PING` for tcp monitors
    //   method: 'GET',
    //   // `target` should be `host:port` for tcp monitors
    //   target: 'https://ssh.xons.dpdns.org/',
    //   tooltip: 'My webssh server monitor',
    //   statusPageLink: 'https://ssh.xons.dpdns.org/',
    //   timeout: 10000,
    // },
    {
      id: 'lobechat',
      name: 'LobeChat',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://lobe.xons.me/',
      tooltip: 'My gemini server monitor',
      statusPageLink: 'https://lobe.xons.me/',
      timeout: 10000,
    },
    {
      id: 'nextchat',
      name: 'NextChat',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://gpt.xons.me/',
      tooltip: 'My gpt server monitor',
      statusPageLink: 'https://gpt.xons.me/',
      timeout: 10000,
    },
    {
      id: 'music',
      name: 'Music',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://music.xons.me/',
      tooltip: 'My music server monitor',
      statusPageLink: 'https://music.xons.me/',
      timeout: 10000,
    },
    {
      id: 'sp',
      name: 'Splayer',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://sp.xons.me/',
      tooltip: 'My music server monitor',
      statusPageLink: 'https://sp.xons.me/',
      timeout: 10000,
    },
    {
      id: 'tvbox',
      name: 'TVBox',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://tvbox.xons.me/',
      tooltip: 'My tv server monitor',
      statusPageLink: 'https://tvbox.xons.me/',
      timeout: 10000,
    },
    {
      id: 'nav',
      name: 'Nav',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://xon.ip-ddns.com/',
      tooltip: 'My tv server monitor',
      statusPageLink: 'https://xon.ip-ddns.com/',
      timeout: 10000,
    },
    {
      id: 'tv',
      name: 'TV-ls',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://xuanzi.ggff.net/',
      tooltip: 'My tv server monitor',
      statusPageLink: 'https://xuanzi.ggff.net/',
      timeout: 10000,
    },
    {
      id: 'libre',
      name: 'Libre-TV',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://libre.xon.hidns.vip/',
      tooltip: 'My libre server monitor',
      statusPageLink: 'https://libre.xon.hidns.vip/',
      timeout: 10000,
    },
    {
      id: 'libre-cf',
      name: 'Libre-CF',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://libre.xon.xx.kg/',
      tooltip: 'My libre server monitor',
      statusPageLink: 'https://libre.xon.xx.kg/',
      timeout: 10000,
    },
    {
      id: 'libre-bak',
      name: 'Libre-Bak',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://libre.xon.qzz.io/',
      tooltip: 'My libre server monitor',
      statusPageLink: 'https://libre.xon.qzz.io/',
      timeout: 10000,
    },
    {
      id: 'img',
      name: 'ImgBed',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://img.xons.me',
      tooltip: 'My img server monitor',
      statusPageLink: 'https://img.xons.me/',
      timeout: 10000,
    },
    {
      id: 'image',
      name: 'Image',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://img.xylonstar.ggff.net/',
      tooltip: 'My img server monitor',
      statusPageLink: 'https://img.xylonstar.ggff.net/',
      timeout: 10000,
    },
    // {
    //   id: 'im',
    //   name: 'Im-h',
    //   // `method` should be `TCP_PING` for tcp monitors
    //   method: 'GET',
    //   // `target` should be `host:port` for tcp monitors
    //   target: 'https://im.xylonstar.ggff.net/',
    //   tooltip: 'My im server monitor',
    //   statusPageLink: 'https://im.xylonstar.ggff.net/',
    //   timeout: 10000,
    // },
    // {
    //   id: 'br',
    //   name: 'Br',
    //   // `method` should be `TCP_PING` for tcp monitors
    //   method: 'GET',
    //   // `target` should be `host:port` for tcp monitors
    //   target: 'https://br.xons.dpdns.org/',
    //   tooltip: 'My br server monitor',
    //   statusPageLink: 'https://br.xons.dpdns.org/',
    //   timeout: 10000,
    // },
    {
      id: 'about',
      name: 'About',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://about.xons.me/',
      tooltip: 'My about server monitor',
      statusPageLink: 'https://about.xons.me/',
      timeout: 10000,
    },
    {
      id: 'bpb',
      name: 'Bpb',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://hans.xna.dpdns.org/',
      tooltip: 'My bpbpanel server monitor',
      statusPageLink: 'https://hans.xna.dpdns.org/',
      timeout: 10000,
    },
    {
      id: 'epe',
      name: 'epe',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://ct.xna.dpdns.org/',
      tooltip: 'My proxy server monitor',
      // statusPageLink: 'https://epe.xylon.us.kg/',
      timeout: 10000,
    },
    {
      id: 'edt',
      name: 'edt',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://cv.xna.dpdns.org/',
      tooltip: 'My proxy server monitor',
      // statusPageLink: 'https://edt.xylonify.us.kg//',
      timeout: 10000,
    },
    {
      id: 'sub',
      name: 'Sub',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://sub.xna.dpdns.org/',
      tooltip: 'My proxy server monitor',
      statusPageLink: 'https:/sub.xna.dpdns.org/',
      timeout: 10000,
    },
    {
      id: 'cfnat',
      name: 'Cfnat',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://cfnat.xna.dpdns.org/',
      tooltip: 'My proxy server monitor',
      // statusPageLink: 'https://epe.xylon.us.kg/',
      timeout: 10000,
    },
    {
      id: 'yg',
      name: 'Yg',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://brave.xnstar.dpdns.org/',
      tooltip: 'My proxy server monitor',
      // statusPageLink: 'https://epe.xylon.us.kg/',
      timeout: 10000,
    },
    {
      id: '3K',
      name: '3K',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://3k.xnstar.dpdns.org',
      tooltip: 'My proxy server monitor',
      // statusPageLink: 'https://epe.xylon.us.kg/',
      timeout: 10000,
    },
    {
      id: 'hq',
      name: 'Hq',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://hqz.xna.dpdns.org',
      tooltip: 'My proxy server monitor',
      // statusPageLink: 'https://epe.xylon.us.kg/',
      timeout: 10000,
    },
    {
      id: 'hot-api',
      name: 'Hot-Api',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://api.xons.me/',
      tooltip: 'My hot-api server monitor',
      // statusPageLink: 'https://epe.xylon.us.kg/',
      timeout: 10000,
    },
    {
      id: 'twikoo-api',
      name: 'Twikoo-Api',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://twikoo.xons.me/',
      tooltip: 'My twikoo-api server monitor',
      // statusPageLink: 'https://epe.xylon.us.kg/',
      timeout: 10000,
    },
    // {
    //   id: 'apprise-server-api',
    //   name: 'Apprise-Server-Api',
    //   // `method` should be `TCP_PING` for tcp monitors
    //   method: 'GET',
    //   // `target` should be `host:port` for tcp monitors
    //   target: 'https://apprisevercel-fawn.vercel.app/',
    //   tooltip: 'My apprise-server server monitor',
    //   // statusPageLink: 'https://epe.xylon.us.kg/',
    //   timeout: 10000,
    // },
    {
      id: 'nca-api',
      name: 'Nca-Api',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://cloudapi.xons.me/',
      tooltip: 'My nca-api server monitor',
      // statusPageLink: 'https://epe.xylon.us.kg/',
      timeout: 10000,
    },
    {
      id: 'nca-lam-api',
      name: 'Nca-Lam-Api',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://netease.xons.me/',
      tooltip: 'My nca-lam-api server monitor',
      // statusPageLink: 'https://epe.xylon.us.kg/',
      timeout: 10000,
    },
    {
      id: 'nca-foc-api',
      name: 'Nca-Foc-Api',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://lapi.xons.me/',
      tooltip: 'My nca-foc-api server monitor',
      // statusPageLink: 'https://epe.xylon.us.kg/',
      timeout: 10000,
    },
    {
      id: 'meting-api',
      name: 'Meting-Api',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://metingapi.zone.id/',
      tooltip: 'My meting-api server monitor',
      // statusPageLink: 'https://epe.xylon.us.kg/',
      timeout: 10000,
    },
    {
      id: 'unm-server-api',
      name: 'Unm-Server-Api',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://unm.xons.me/',
      tooltip: 'My unm-server-api server monitor',
      // statusPageLink: 'https://epe.xylon.us.kg/',
      timeout: 10000,
    },
    
  ],
  notification: {
    // [Optional] apprise API server URL
    // if not specified, no notification will be sent
    appriseApiServer: 'https://apprisevercel-fawn.vercel.app/notify',
    // [Optional] recipient URL for apprise, refer to https://github.com/caronc/apprise
    // if not specified, no notification will be sent
    recipientUrl: 'tgram://7800260212:AAF7KxobR0YHvhAcw-D3z9cdI74mpXizCfs/7111074843',
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: 'Asia/Shanghai',
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    gracePeriod: 5,
    // [Optional] disable notification for monitors with specified ids
    skipNotificationIds: ['foo_monitor', 'bar_monitor'],
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here
      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// You can define multiple maintenances here
// During maintenance, an alert will be shown at status page
// Also, related downtime notifications will be skipped (if any)
// Of course, you can leave it empty if you don't need this feature
// const maintenances: MaintenanceConfig[] = []
const maintenances: MaintenanceConfig[] = [
  {
    // [Optional] Monitor IDs to be affected by this maintenance
    monitors: ['foo_monitor', 'bar_monitor'],
    // [Optional] default to "Scheduled Maintenance" if not specified
    title: 'Test Maintenance',
    // Description of the maintenance, will be shown at status page
    body: 'This is a test maintenance, server software upgrade',
    // Start time of the maintenance, in UNIX timestamp or ISO 8601 format
    start: '2025-04-27T00:00:00+08:00',
    // [Optional] end time of the maintenance, in UNIX timestamp or ISO 8601 format
    // if not specified, the maintenance will be considered as on-going
    end: '2025-04-30T00:00:00+08:00',
    // [Optional] color of the maintenance alert at status page, default to "yellow"
    color: 'blue',
  },
]

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig, maintenances }
