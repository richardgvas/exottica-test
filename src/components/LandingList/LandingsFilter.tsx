import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import tw from "twin.macro";

type LandingFiltertype = {
  filter: string;
  setFilter: (value: string) => void;
  className?: string;
};

const LandingsFilter = ({
  filter,
  setFilter,
  className,
}: LandingFiltertype) => {
  const { t } = useTranslation("translation", {
    keyPrefix: "landingList.landingFilter",
  });
  return (
    <FiltersWrapper>
      <TextField
        id="outlined-size-small"
        size="small"
        label={t("label")}
        color="primary"
        focused
        variant="outlined"
        value={filter}
        inputProps={{ className: "!text-blue-400 !text-xs" }}
        className={`${className} bg-slate-700 !text-white grow`}
        onChange={(event) => setFilter(event.target.value)}
      />
      <TextField
        id="outlined-size-small"
        size="small"
        color="primary"
        label="disabled"
        focused
        disabled
        variant="outlined"
        inputProps={{ className: "!text-blue-400 !text-xs" }}
        InputLabelProps={{ className: "!text-xs !text-white" }}
        className={`${className} bg-slate-700 !text-white`}
      />
      <TextField
        id="outlined-size-small"
        size="small"
        color="primary"
        label="disabled"
        focused
        disabled
        variant="outlined"
        inputProps={{ className: "!text-blue-400 !text-xs" }}
        InputLabelProps={{ className: "!text-xs !text-white" }}
        className={`${className} bg-slate-700 !text-white`}
      />
    </FiltersWrapper>
  );
};

export default LandingsFilter;

const FiltersWrapper = styled.div`
  ${tw`flex self-start pl-4 pr-4 gap-7 w-full`}
`;
