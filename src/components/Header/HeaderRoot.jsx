import { HeaderDesktop, HeaderMobile } from ".";

import { getHeaderMobile, getHeaderDesktop, getContinentsAndCountriesServer, getLanguagesServer } from "@/services/api";

export const HeaderRoot = async ({ isMobile, country, language }) => {
  const dataDesktop = await getHeaderDesktop(country, language);

  const dataMovil = await getHeaderMobile(country, language);
  const continentsResponse = await getContinentsAndCountriesServer(country, language);
  const languagesResponse = await getLanguagesServer(language);

  if (continentsResponse !== undefined) {
    if (isMobile) {
      return (
        <HeaderMobile
          data={dataMovil}
          activeCountry={continentsResponse[0]?.activecountry[0]}
          continents={continentsResponse[0]?.continents}
          languages={languagesResponse[0]?.languages}
          activeLanguage={languagesResponse[0]?.activeLanguage}
        />
      );
    }

    return (
      <HeaderDesktop
        data={dataDesktop}
        activeCountry={continentsResponse[0]?.activecountry[0]}
        continents={continentsResponse[0]?.continents}
        languages={languagesResponse[0]?.languages}
        activeLanguage={languagesResponse[0]?.activeLanguage}
      />
    );
  }
};
