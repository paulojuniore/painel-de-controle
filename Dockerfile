FROM node:lts-alpine

WORKDIR /home/paulojunior/projeto-lsd/painel-de-controle

COPY package.json yarn.* ./

USER paulojunior

RUN yarn

EXPOSE 3333

ENTRYPOINT [ "./init.sh" ]