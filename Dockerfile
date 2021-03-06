FROM nginx:latest
COPY dist /usr/share/nginx/html
HEALTHCHECK --interval=5s \
            --timeout=5s \
            CMD curl -f http://127.0.0.1:80 || exit 1
EXPOSE 80