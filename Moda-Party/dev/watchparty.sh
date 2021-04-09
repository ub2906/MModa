# Allow ssh, http, https
ufw allow http
ufw allow https
ufw allow ssh
ufw allow 3000
# Enable ufw
ufw enable

# Install nginx/bind9
apt install -y nginx
apt install -y bind9

echo 'events {}
http {
  upstream roundrobin {
    server 127.0.0.1:3000;
    server 127.0.0.1:3001;
    # server 127.0.0.1:3002;
    # server 127.0.0.1:3003;
  }

  upstream 0 {
    server 127.0.0.1:3000;
  }

  upstream 1 {
    server 127.0.0.1:3001;
  }

  upstream 2 {
    server 127.0.0.1:3002;
  }

  upstream 3 {
    server 127.0.0.1:3003;
  }

  map $arg_shard $pool {
     default "roundrobin";
     0 "0";
     1 "1";
     # 2 "2";
     # 3 "3";
  }

  server {
    listen 80;
    location / {
      proxy_pass http://$pool;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header Host $host;

      # enable WebSockets
      proxy_http_version 1.1;
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header Connection "upgrade";
    }
  }
}' > /etc/nginx/nginx.conf
/etc/init.d/nginx reload

