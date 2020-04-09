# Introduction

This repository contains reproduction for https://github.com/prisma/prisma/issues/2107

## Steps to reproduce

1. Clone this repository
2. Run `npm install`
3. Place your MySQL credentials to `prisma/.env`
4. Run `prisma migrate save --experimental`
5. Run `prisma migrate up --experimental`
6. Run `node index.js`

You should see output `[ { total: 'NA==' } ]`
