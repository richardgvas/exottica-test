import { Group, RoomService, Hotel, Storefront } from "@mui/icons-material";
import {
  Typography,
  List,
  ListItemIcon,
  Divider,
  ListItemText,
} from "@mui/material";
import tw from "twin.macro";
import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";

const SideBar = () => {
  const { t } = useTranslation("translation", { keyPrefix: "sidebar" });
  const listItems = [
    {
      listIcon: <RoomService className="text-gray-400 !w-[15px]" />,
      listText: t("items.services"),
    },
    {
      listIcon: <Group className="text-gray-400 !w-[15px]" />,
      listText: t("items.groups"),
    },
    {
      listIcon: <Hotel className="text-gray-400 !w-[15px]" />,
      listText: t("items.hotels"),
    },
    {
      listIcon: <Storefront className="text-gray-400 !w-[15px]" />,
      listText: t("items.store"),
    },
  ];
  return (
    <SideBarContainer className="bg-slate-900 p-4">
      <div className="p-4">
        <Typography
          variant="h6"
          color="blue-gray"
          className="text-gray-400 uppercase"
        >
          {t("title")}
        </Typography>
      </div>
      <List>
        <Avatar src="https://machupicchutravelguide.com/wp-content/uploads/2020/04/Machu-Picchu.png" />
        <Divider />
        <List data-testid="sidebar-items">
          {listItems.map((listItem, index) => (
            <ListItem
              key={`items-${index}`}
              className="flex text-left items-center pb-3 cursor-pointer"
            >
              <ListItemIcon className="!min-w-fit px-3">
                {listItem.listIcon}
              </ListItemIcon>
              <ListItemText className="pt-[1px] px-3">
                {listItem.listText}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </List>
    </SideBarContainer>
  );
};

export default SideBar;

const SideBarContainer = styled.div`
  ${tw`bg-slate-900 text-gray-400 min-h-full`}
`;

const Avatar = styled.img`
  margin: 0.5rem auto;
  padding: 1rem;
  max-width: 100px;
  height: auto;
`;
const ListItem = styled.div`
  ${tw`text-gray-400`} !important;
  span {
    ${tw`text-xs`}
  }
`;
