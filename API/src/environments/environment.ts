import { ApiEnvironment } from './env.interface';

export const environment: ApiEnvironment = {
  production: false,
  frontEndUrl: 'http://localhost:4200', // Frontend url to be used in email to redirect user to change password
  wpJsonBaseUrl: 'https://www.miamimotorcyclerentals.com',
  stripeSecretKey:
    'sk_test_51Rfh58PQZbqKx5aTU62Gs2lLpv6qszB6AwUOKsLjSPfbb3CJZMvNQnP0uk8ukVB3lGntqJuFsnjRWV0wkS04OQsQ0076rks8O2',
};
