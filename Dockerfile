FROM nginx
RUN mkdir /app
WORKDIR /app
ENV NODE_ENV=production
COPY dist /app
COPY nginx.conf /etc/nginx/nginx.conf
