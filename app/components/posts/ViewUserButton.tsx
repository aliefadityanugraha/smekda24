/** @format */

"use client";

interface ViewUserButtonProps {
  userId: number;
}

const ViewUserButton: React.FC<ViewUserButtonProps> = ({ userId }) => {
  const handleClick = () => alert(userId);

  return (
    <>
      <button onClick={handleClick}>Klik Aku</button>
    </>
  );
};

export default ViewUserButton;

// export default function ViewUserButton: React.FC<ViewUserButtonProps> ({userId}) => {

// }
