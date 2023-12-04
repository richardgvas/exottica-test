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
  const { t } = useTranslation("translation", { keyPrefix: "sidebar.items" });
  const listItems = [
    {
      listIcon: <RoomService className="text-gray-400 !w-[15px]" />,
      listText: t("services"),
    },
    {
      listIcon: <Group className="text-gray-400 !w-[15px]" />,
      listText: t("groups"),
    },
    {
      listIcon: <Hotel className="text-gray-400 !w-[15px]" />,
      listText: t("hotels"),
    },
    {
      listIcon: <Storefront className="text-gray-400 !w-[15px]" />,
      listText: t("store"),
    },
  ];
  return (
    <SideBarContainer className="bg-slate-900 p-4">
      <div className="p-4">
        <Typography variant="h6" color="blue-gray" className="text-gray-400">
          Exoticca
        </Typography>
      </div>
      <List>
        <Avatar src="https://cdn-icons-png.flaticon.com/512/224/224597.png" />
        <Divider />
        <List data-testid="sidebar-items">
          {listItems.map((listItem, index) => (
            <ListItem
              key={`items-${index}`}
              className="flex text-left items-center pb-3 cursor-pointer"
            >
              <ListItemIcon className="!min-w-fit pr-3">
                {listItem.listIcon}
              </ListItemIcon>
              <ListItemText className="pt-[1px]">
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
