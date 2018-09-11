
## OAuth 2.0 - Node.js Sample App

The [Intuit Developer team](https://developer.intuit.com) has written this OAuth 2.0 Sample App in Node.js to provide working examples of OAuth 2.0 concepts, and how to integrate with Intuit endpoints.

## ProAdvisor Modifications

This Sample App was modified to demonstrate consumption of ProAdvisor Program Status.

## Setup

Clone the repository:

```
git clone git@github.com:coreyferguson/oauth2-nodejs.git
```

Install NPM dependencies:

```
cd oauth2-nodejs
npm install
```

Launch your app:

```
node app.js
```

Navigate to https://localhost:3000 (you may want to use Incognito to avoid conflicts with existing session).

## Scopes

Scopes are configured in [`config.json`](./config.json).

The relevant scope to this demonstration is `Intuit.smallbusiness.accountantpracticemanagement.tierservice.programstatus`.

## Testing

**developer.intuit.com account**

Username | Password
-------- | --------
ff698fbe-5294-4a41-8afb-d3bc0b7201ef@mailinator.com | Tierconsumer123!


