FROM fusuf/whatsasena:latest

RUN git clone https://github.com/SLdevilX/Lsi /root/Lsi
WORKDIR /root/Lsi/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
