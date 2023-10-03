const sdk = require('api')('@thaibulksms/v1.0#1of51jl4qvzac3');

async function requestOTP(keyApp, secretApp, phoneNumber){
  return await sdk.postV2OtpRequest({key: keyApp, secret: secretApp, msisdn: phoneNumber})
}

async function verifyOTP(keyApp, secretApp, token, pinOTP){
  return await sdk.postV2OtpRequest({key: keyApp, secret: secretApp, token: token, pin: pinOTP})
}

async function test(){
  const getToken = await requestOTP("AAA","BBB", "0894496362")
  const token = getToken.token
  const verify = await verifyOTP("AAA","BBB", token, "123456")
  return verify
}

test()