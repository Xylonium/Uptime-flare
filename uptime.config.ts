const pageConfig = {
  // Title for your status page
  title: "Xylonstar's Status Page",  // lyc8503's Status Page
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://github.com/xylonify', label: 'GitHub' },
    { link: 'https://blog.xylonstar.us.kg', label: 'Blog' },
    { link: 'mailto:xylonstar@outlook.com', label: 'Email Me', highlight: true },
  ],
}

const workerConfig = {
  // Write KV at most every 3 minutes unless the status changed
  kvWriteCooldownMinutes: 3,
  // Enable HTTP Basic auth for status page & API by uncommenting the line below, format `<USERNAME>:<PASSWORD>`
  // passwordProtection: 'username:password',
  // Define all your monitors here
  monitors: [
    // Example HTTP Monitor
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
    //   // [OPTIONAL] if specified, the check will run in your specified region,
    //   // refer to docs https://github.com/lyc8503/UptimeFlare/wiki/Geo-specific-checks-setup before setting this value
    //   checkLocationWorkerRoute: 'https://xxx.example.com',
    // },
    // Example TCP Monitor
    {
      id: 'home',
      name: 'Home',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://xylonstar.us.kg/',
      tooltip: 'My home server monitor',
      statusPageLink: 'https://xylonstar.us.kg/',
      timeout: 10000,
    },
    {
      id: 'cloudflare-blog',
      name: 'Cloudflare CDN',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://blog.xylonstar.us.kg/',
      tooltip: 'My blog server monitor',
      statusPageLink: 'https://blog.xylonstar.us.kg/',
      timeout: 10000,
    },
    {
      id: 'vercel-blog',
      name: 'Vercel CDN',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://vercel.xylonstar.us.kg/',
      tooltip: 'My blog server monitor',
      statusPageLink: 'https://vercel.xylonstar.us.kg',
      timeout: 10000,
    },
    {
      id: 'netlify-blog',
      name: 'Netlify CDN',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://netlify.xylonstar.us.kg/',
      tooltip: 'My blog server monitor',
      statusPageLink: 'https://netlify.xylonstar.us.kg',
      timeout: 10000,
    },
    {
      id: 'nezha',
      name: 'NeZha',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://nezha.xons.us.kg',
      tooltip: 'My nezha server status',
      statusPageLink: 'https://nezha.xons.us.kg',
      timeout: 10000,
    },
    {
      id: 'docker-img',
      name: 'DockerHub',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://docker.xons.us.kg/',
      tooltip: 'My dockerhub server monitor',
      statusPageLink: 'https://docker.xons.us.kg/',
      timeout: 10000,
    },
    {
      id: 'github-proxy',
      name: 'GhProxy',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://ghp.xons.us.kg/',
      tooltip: 'My ghproxy server monitor',
      statusPageLink: 'https://ghp.xons.us.kg/',
      timeout: 10000,

    },
    {
      id: 'cloud',
      name: 'Cloud',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://pan.xons.us.kg/',
      tooltip: 'My cloud server monitor',
      statusPageLink: 'https://pan.xons.us.kg/',
      timeout: 10000,
    },
    {
      id: 'sun-panel',
      name: 'Sun-Panel',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://sun-panel.xons.us.kg/',
      tooltip: 'My sun server monitor',
      statusPageLink: 'https://sun-panel.xons.us.kg/',
      timeout: 10000,
    },
    {
      id: 'webssh',
      name: 'WebSSH',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://ssh.xons.us.kg/',
      tooltip: 'My webssh server monitor',
      statusPageLink: 'https://ssh.xons.us.kg/',
      timeout: 10000,
    },
    {
      id: 'gemini',
      name: 'Gemini',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://nc.xons.us.kg/',
      tooltip: 'My gemini server monitor',
      statusPageLink: 'https://nc.xons.us.kg/',
      timeout: 10000,
    },
    {
      id: 'nextchat',
      name: 'NextChat',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://gpt.xylonstar.us.kg/',
      tooltip: 'My gpt server monitor',
      statusPageLink: 'https://gpt.xylonstar.us.kg/',
      timeout: 10000,
    },
    {
      id: 'music',
      name: 'Music',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://music.xylonstar.us.kg/',
      tooltip: 'My music server monitor',
      statusPageLink: 'https://music.xylonstar.us.kg/',
      timeout: 10000,
    },
    {
      id: 'tv',
      name: 'TVBox',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://tv.xylonstar.us.kg/',
      tooltip: 'My tv server monitor',
      statusPageLink: 'https://tv.xylonstar.us.kg/',
      timeout: 10000,
    },
    {
      id: 'img',
      name: 'ImgBed',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://img.xylonstar.us.kg',
      tooltip: 'My img server monitor',
      statusPageLink: 'https://img.xylonstar.us.kg/',
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
    {
      id: 'im',
      name: 'Im-h',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://im.xylonstar.ggff.net/',
      tooltip: 'My im server monitor',
      statusPageLink: 'https://im.xylonstar.ggff.net/',
      timeout: 10000,
    },
    {
      id: 'br',
      name: 'Br',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://br.xons.us.kg/',
      tooltip: 'My br server monitor',
      statusPageLink: 'https://br.xons.us.kg/',
      timeout: 10000,
    },
    {
      id: 'bar',
      name: 'Bar',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://br.xuanzi.ggff.net/',
      tooltip: 'My bar server monitor',
      statusPageLink: 'https://br.xuanzi.ggff.net/',
      timeout: 10000,
    },
    {
      id: 'dev',
      name: 'dev',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://img.xuanzi.ggff.net',
      tooltip: 'My dev server monitor',
      statusPageLink: 'https://img.xuanzi.ggff.net/',
      timeout: 10000,
    },
    {
      id: 'epe',
      name: 'epe',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://ct.xna.us.kg/',
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
      target: 'https://cv.xna.us.kg/',
      tooltip: 'My proxy server monitor',
      // statusPageLink: 'https://edt.xylonify.us.kg//',
      timeout: 10000,
    },
    {
      id: 'sub',
      name: 'sub',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://sub.xna.us.kg/',
      tooltip: 'My proxy server monitor',
      // statusPageLink: 'https://epe.xylon.us.kg/',
      timeout: 10000,
    },
    {
      id: 'cfnat',
      name: 'Cfnat',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://cfnat.xna.us.kg/',
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
      target: 'https://brave.xnstar.us.kg/',
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
      target: 'https://3k.xnstar.us.kg',
      tooltip: 'My proxy server monitor',
      // statusPageLink: 'https://epe.xylon.us.kg/',
      timeout: 10000,
    },
    {
      id: 'hq',
      name: 'hq',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://hqz.xna.us.kg',
      tooltip: 'My proxy server monitor',
      // statusPageLink: 'https://epe.xylon.us.kg/',
      timeout: 10000,
    },



  ],
  notification: {
    // [Optional] apprise API server URL
    // if not specified, no notification will be sent
    appriseApiServer: "https://apprisevercel-fawn.vercel.app/notify",
    // [Optional] recipient URL for apprise, refer to https://github.com/caronc/apprise
    // if not specified, no notification will be sent
    recipientUrl: "tgram://7800260212:AAF7KxobR0YHvhAcw-D3z9cdI74mpXizCfs/7111074843",
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: "Asia/Shanghai",
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    gracePeriod: 5,
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

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
