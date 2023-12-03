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

const SideBar = () => {
  const listItems = [
    {
      listIcon: <RoomService className="text-gray-400 !w-[15px]" />,
      listText: "Services",
    },
    {
      listIcon: <Group className="text-gray-400 !w-[15px]" />,
      listText: "Groups",
    },
    {
      listIcon: <Hotel className="text-gray-400 !w-[15px]" />,
      listText: "Hotels",
    },
    {
      listIcon: <Storefront className="text-gray-400 !w-[15px]" />,
      listText: "Store",
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
        <Avatar src="https://i.ibb.co/rx5DFbs/avatar.png" />
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
  width: 250px;
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
