# pi0.io

pi0.io website (design and content) powered by [pipress](https://github.com/pi0/pipress).

```sh
 docker run -it --rm \
    -p 3000:3000 \
    -e PIPRESS_URL=https://raw.githubusercontent.com/pi0/pi0.io/refs/heads/main/index.html \
     ghcr.io/pi0/pipress
```
