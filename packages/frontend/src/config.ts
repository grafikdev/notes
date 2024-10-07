const config = {
    STRIPE_KEY: "pk_test_51Q5MlaCty6U1S5FAnIpVoXFqh2DUKLX6FiulSV31EtWQvQWfOht6Z7JOJr7HkMDWHATjOHK5FrnZsnuopw8bK34k00foc4L1wh",
    // Frontend config
      MAX_ATTACHMENT_SIZE: 5000000,
    // Backend config
    s3: {
      REGION: import.meta.env.VITE_REGION,
      BUCKET: import.meta.env.VITE_BUCKET,
    },
    apiGateway: {
      REGION: import.meta.env.VITE_REGION,
      URL: import.meta.env.VITE_API_URL,
    },
    cognito: {
      REGION: import.meta.env.VITE_REGION,
      USER_POOL_ID: import.meta.env.VITE_USER_POOL_ID,
      APP_CLIENT_ID: import.meta.env.VITE_USER_POOL_CLIENT_ID,
      IDENTITY_POOL_ID: import.meta.env.VITE_IDENTITY_POOL_ID,
    },
  };
  
  export default config;