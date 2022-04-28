import { Avatar } from "@mui/material";

export const UserName = ({ image, name, occupation }: any) => {
  return (
    <div className="flex items-center">
      <Avatar alt={name} src={image} sx={{ width: 30, height: 30 }} />
      <div className="flex-grow ml-2">
        {name}
        <br />
        <p className="text-xs font-normal">{occupation}</p>
      </div>
    </div>
  );
};

export const ActionButton = ({ icon, label, handleClick }: any) => {
  return (
    <div
      onClick={handleClick}
      className="rounded-md flex items-center bg-backgroundActionBtn text-xs px-2 py-1 cursor-pointer font-medium text-primary select-none"
    >
      {icon}
      {label}
    </div>
  );
};

export const ColumnHeader = ({ name }: any) => {
  return (
    <th className="text-xl font-semibold text-left p-4 border-b border-backgroundGray">
      {name}
    </th>
  );
};
