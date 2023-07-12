console.log("Called JS");

  const rumInit = () => (function(h, o, u, n, d) {
    h = h[d] = h[d] || {
        q: [],
        onReady: function(c) {
            h.q.push(c)
        }
    }
    d = o.createElement(u);
    d.async = 1;
    d.src = n
    n = o.getElementsByTagName(u)[0];
    n.parentNode.insertBefore(d, n)
}
)(window, document, 'script', 'https://www.datadoghq-browser-agent.com/us5/v4/datadog-rum.js', 'DD_RUM')
  window.DD_RUM.onReady(function() {
    window.DD_RUM.init({
      clientToken: 'pub40aa5a2157cf0f0cd887dc9a2bde3579',
      applicationId: 'ba18ce81-2925-4e5f-8b75-116a8c34cbc7',
      site: 'datadoghq.com',
      service: 'static-pages',
      env: '<ENV_NAME>',
      // Specify a version number to identify the deployed version of your application in Datadog 
      // version: '1.0.0', 
      sessionSampleRate: 100,
      sessionReplaySampleRate: 100,
      trackUserInteractions: true,
      trackResources: true,
      trackLongTasks: true,
      defaultPrivacyLevel: 'mask-user-input',
    });

    window.DD_RUM.startSessionReplayRecording();
  })

  rumInit();
