import EditNoteIcon from "@mui/icons-material/EditNote";
import VisibilityIcon from "@mui/icons-material/Visibility";

type ActionsType = {
  callBack: (params: any) => void;
  size?: "small" | "medium" | "large" | "inherit";
  className?: string;
};

const Actions = ({ size = "small", className, callBack }: ActionsType) => {
  const onClick = (actionType: "edit" | "view") => {
    callBack({
      id: "id",
      action: actionType,
    });
  };
  return (
    <div className="flex flex-row gap-2">
      <EditNoteIcon
        className={`${className} cursor-pointer`}
        fontSize={size}
        onClick={() => onClick("edit")}
      />
      <VisibilityIcon
        className={`${className} cursor-pointer`}
        fontSize={size}
        onClick={() => onClick("view")}
      />
    </div>
  );
};

export default Actions;
