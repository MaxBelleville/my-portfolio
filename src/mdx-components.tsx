import type { MDXComponents } from "mdx/types";
import {
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Paper,
  TableContainer,
  Link,
  Box,
  Divider,
  styled,
  tableCellClasses,
} from "@mui/material";
import Image from "next/image";
import ParallaxDiv from "./components/mdx/ParrallaxDiv";
import { motion } from "framer-motion";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontWeight: "bolder",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const components = {
  em: (props: any) => (
    <Box sx={{ fontStyle: "italic" }} display="inline" {...props} />
  ),
  del: (props: any) => (
    <Box sx={{ textDecoration: "line-through" }} display="inline" {...props} />
  ),
  strong: (props: any) => (
    <Box sx={{ fontWeight: "bold" }} display="inline" {...props} />
  ),
  sup: (props: any) => (
    <Box style={{ verticalAlign: "super" }} display="inline" {...props} />
  ),
  sub: (props: any) => (
    <Box style={{ verticalAlign: "sub" }} display="inline" {...props} />
  ),
  h1: (props: any) => (
    <div>
      <Typography variant="h1" {...props} />
      <Divider sx={{ borderColor: "#777" }} />
    </div>
  ),
  h2: (props: any) => (
    <div>
      <Typography variant="h2" {...props} />
      <Divider sx={{ borderColor: "#777" }} />
    </div>
  ),
  h3: (props: any) => <Typography variant="h3" {...props} />,
  h4: (props: any) => <Typography variant="h4" {...props} />,
  h5: (props: any) => <Typography variant="h5" {...props} />,
  h6: (props: any) => <Typography variant="h6" {...props} />,
  p: (props: any) => <Typography variant="body2" {...props} />,
  a: (props: any) => <Link {...props} />,
  ol: (props: any) => (
    <List dense sx={{ listStyle: "decimal", pl: 4 }} {...props} />
  ),
  ul: (props: any) => <List sx={{ listStyleType: "disc", pl: 4 }} {...props} />,
  li: (props: any) => <ListItem sx={{ display: "list-item" }} {...props} />,
  img: (props: any) => <Box display="inline" component="img" {...props} />,
  pre: (props: any) => (
    <Paper elevation={2} sx={{ width: "98%", m: 1, p: 1 }} component="pre">
      <code {...props.children.props} />
    </Paper>
  ),
  code: (props: any) => (
    <Paper elevation={2} sx={{ p: 0.5 }} component="code" {...props} />
  ),
  table: (props: any) => (
    <TableContainer
      component={Paper}
      elevation={3}
      sx={{ width: "fit-content", border: "1px solid #555", m: 1 }}
    >
      <Table {...props} />
    </TableContainer>
  ),
  thead: (props: any) => <TableHead {...props} />,
  tbody: (props: any) => <TableBody {...props} />,
  tr: (props: any) => <StyledTableRow {...props} />,
  th: (props: any) => <StyledTableCell variant="head" {...props} />,
  td: (props: any) => <StyledTableCell variant="body" {...props} />,
  blockquote: (props: any) => (
    <Paper
      sx={{ width: "fit-content", p: 1, m: 1, pl: 4, color: "#ccc" }}
      elevation={0}
      {...props}
    />
  ),
  hr: (props: any) => <Divider sx={{ borderColor: "#777" }} {...props} />,
  iframe: (props: any) => (
    <Paper
      elevation={1}
      sx={{ width: "50%", height: "50%", m: 1, p: 1 }}
      component="iframe"
      {...props}
    />
  ),
  motion,
  ParallaxDiv,
  Image,
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
