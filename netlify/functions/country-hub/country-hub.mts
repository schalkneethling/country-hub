import { Config, Context } from "@netlify/functions";

import data from "../../../data/data.json" with { type: "json" };

export const config: Config = {
  path: "/country-hub/:code?",
};

export default (_request: Request, context: Context) => {
  try {
    if (context.params.code) {
      const country = data.find(
        (country) => country.countryCode === context.params.code,
      );
      if (country) {
        return new Response(JSON.stringify(country), {
          status: 200,
        });
      } else {
        return new Response(JSON.stringify({ error: "Country not found" }), {
          status: 404,
        });
      }
    }

    return new Response(JSON.stringify(data), {
      status: 200,
    });
  } catch (error) {
    return new Response(error.toString(), {
      status: 500,
    });
  }
};
