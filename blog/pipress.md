# 🗿 pipress and new website 🎉

👋 Hey, welcome to my new website! After (literally!) almost a decade, I’ve decided to start a new blog to share my random thoughts online.

This site is super simple—just minimal Markdown and raw assets, hosted on GitHub ([pi0/pi0.io](https://github.com/pi0/pi0.io)).

I wrote a tiny web server ([🗿 pipress](https://github.com/pi0/pipress) ~120 lines of ugly code) that fetches and renders content directly from GitHub’s raw assets and used [🛋️ v0](https://v0.dev/) for an starter design (Hey don't judge me it is long time i wrote any line of CSS!)

The idea is simple: turn any URL serving raw Markdown, HTML, and assets into a live website. You can already use [🗿 pipress](https://github.com/pi0/pipress) to host your own site—with any design or content!

Currently, [pi0.io](https://pi0.io) is hosted on a Raspberry Pi 5 (Docker/Bun) at my 🇳🇱 ~home and tunneled through Cloudflare—mainly to protect against DDoS attacks. But the whole setup can run on virtually any hosting, thanks to the underlying server ([💥 srvx](https://srvx.h3.dev)).

I’ll likely upgrade the pipress stack soon with the latest versions of [⚡️ h3](https://h3.dev) and [⚗️ nitro](https://nitro.build), which I’m working on. The core idea—separating renderer and content—will stay. It's fun to see how each step can make development life easier (or rather harder/more complex ?!).

Most importantly, I finally have a simple place to WRITE. 🎉

🟢 Commit, Push, Instantly Live. Easy peasy.
