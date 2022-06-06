import styled from "styled-components";
import { colorPalette } from "../../config/colorPalette";

export const TableWrapper = styled.div`
  overflow: scroll;
  height: calc(95vh - 90px);
  scroll-behavior: smooth;
  border-radius: 5px;
  background-color: ${colorPalette.primary[800]};
`;

export const Table = styled.table`
  width: 100%;
  margin-right: 10px;
  font-size: 14px;
`;

export const TableHeader = styled.tr`
  color: ${colorPalette.primary[500]};
  font-size: 12px;
  height: 30px;
`;

export const TableTitle = styled.td`
  border-bottom: 2px solid ${colorPalette.primary[600]};
  height: 20px;
`;

export const TableRowData = styled.td`
  border-bottom: 2px solid ${colorPalette.primary[600]};
  height: 30px;
  color: ${colorPalette.primary[200]};
`;

export const TableRow = styled.tr`
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background-color: ${colorPalette.primary[750]};
  }
`;

export const Paper = styled.div`
  padding: 20px;
  background-color: #fff;
`;

export const EditRowInput = styled.input`
  padding: 5px;
  border: none;
  border-bottom: 1px solid ${colorPalette.primary[600]};
  background-color: #353535;
  border-radius: 3px;
  outline: none;
  font-size: 14px;
  width: 60%;
  height: 20px;
  margin: 0;
`;
