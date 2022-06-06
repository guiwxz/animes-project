import React from "react";
import { FaPlus } from "react-icons/fa";
import { colorPalette } from "../../config/colorPalette";
import Button from "../Button";
import { Grid } from "../Grid";

interface PageHeaderProps {
  onClick: () => void;
  title: string;
  testPath: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ onClick, title, testPath }) => {
  return (
    <Grid container>
      <Grid
        item
        xs={6}
        style={{
          fontSize: "26px",
          color: colorPalette.primary[900],
          fontWeight: "bold",
        }}
      >
        {title}
      </Grid>
      <Grid
        item
        xs={6}
        style={{
          fontSize: "18px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button onClick={onClick} testPath={`${testPath}--pageheader--add-button`}>
          <FaPlus size="16px" /> Add anime
        </Button>
      </Grid>
    </Grid>
  );
};

export default PageHeader;
