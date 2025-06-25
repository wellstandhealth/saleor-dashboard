import { SiteSettingsQuery } from "@dashboard/graphql";

export const shop: SiteSettingsQuery["shop"] = {
  __typename: "Shop",
  companyAddress: {
    __typename: "Address",
    city: "1234 Main",
    cityArea: "Alabama",
    companyName: "Wellstand e-commerce",
    country: {
      __typename: "CountryDisplay",
      code: "US",
      country: "United States of America",
    },
    countryArea: "",
    firstName: "",
    id: "1",
    lastName: "",
    phone: "",
    postalCode: "",
    streetAddress1: "",
    streetAddress2: "",
  },
  countries: [
    {
      __typename: "CountryDisplay",
      code: "US",
      country: "United States of America",
    },
  ],
  customerSetPasswordUrl: "https://example.com/reset-password",
  defaultMailSenderAddress: "noreply@example.com",
  defaultMailSenderName: "Saleor",
  description: "Lorem ipsum dolor sit amet",
  domain: {
    __typename: "Domain",
    host: "localhost:8000",
  },
  name: "Wellstand e-commerce",
  reserveStockDurationAnonymousUser: 10,
  reserveStockDurationAuthenticatedUser: 10,
  limitQuantityPerCheckout: 50,
  enableAccountConfirmationByEmail: true,
};
