import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Typography } from "@mui/material";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

interface PropCategory {
  handleSelectCategory: any;
}

export default function CategorySelect({ handleSelectCategory }: PropCategory) {
  const [category, setCategory] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    handleSelectCategory(event.target.value as string);
    setCategory(event.target.value as string);
  };

  const history = useHistory();
  return (
    <>
      <Box>
        <Typography variant="h3" style={{ padding: 30 }}>
          Produtos
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: 5,
        }}
      >
        <Typography variant="h6" style={{ paddingRight: 20 }}>
          Selecione a categoria:
        </Typography>
        <FormControl style={{ width: 150 }}>
          <InputLabel>Categoria</InputLabel>
          <Select value={category} label="Categoria" onChange={handleChange}>
            <MenuItem value="Todas">Todas</MenuItem>
            <MenuItem value="Processador">Processador</MenuItem>
            <MenuItem value="Placa Mãe">Placa Mãe</MenuItem>
            <MenuItem value="Monitor">Monitor</MenuItem>
            <MenuItem value="Placa de Video">Placa de Video</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="primary"
          type="button"
          onClick={() => {
            history.push("/add");
          }}
          style={{ marginLeft: 30 }}
        >
          Adicionar Produto
        </Button>
      </Box>
    </>
  );
}
