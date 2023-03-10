import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../API/services";
import { Box, Button } from "@mui/material";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts("products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <>
      <div className='container'>
        <h1 className='title'>Products</h1>
        <TableContainer
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: 4,
            maxWidth: 800,
            minWidth: 500,
            overflow: "auto",
            height: 600,
            marginTop: 2,
          }}
          component={Paper}
        >
          <Table stickyHeader sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow></TableRow>
              <TableRow>
                {products.length &&
                  Object.keys(products[0])
                    ?.reverse()
                    .map((el) => {
                      return (
                        <TableCell sx={{ fontWeight: "bold" }}>{el}</TableCell>
                      );
                    })}
                <TableCell scope='row'>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow
                  key={product.title}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell scope='row'>{product.id}</TableCell>
                  <TableCell scope='row'>{product.price}</TableCell>
                  <TableCell scope='row'>{product.description}</TableCell>
                  <TableCell scope='row'>{product.title}</TableCell>
                  <TableCell scope='row'>{product.image}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
